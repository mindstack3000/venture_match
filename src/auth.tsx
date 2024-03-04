import NextAuth, { AuthOptions, Profile } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { encode, decode } from 'next-auth/jwt';

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Enter your email',
        },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? '',
      allowDangerousEmailAccountLinking: true,
    }),
  ],

  secret: process.env.SECRET,

  session: {
    strategy: 'jwt',
  },

  jwt: { encode, decode },
  callbacks: {
    async session({ session, token, user }) {
      // agian check the user is valid or not and change value of users like type and id

      if (user.id) session.user.id = user.id as string;
      const res = await fetch(
        'https://venture-match-backend.vercel.app/user/getData/' + user.id,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const result = await res.json();
      session.user.type = result.type;
      session.user.id = result.id;
      session.user.name = result.name;
      session.user.image = result.image;
      session.user.email = result.email;
      return session;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    signIn: async ({ profile, credentials, user }) => {
      //check here is user valid or not

      if (profile?.email) {
        return true;
      } else if (credentials?.password && credentials?.email) {
        const email = credentials?.email;
        const password = credentials?.email;

        const res = await fetch(
          'https://venture-match-backend.vercel.app/user/login',

          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },

            body: JSON.stringify({
              email,
              password,
            }),
          }
        );

        const result = await res.json();

        if (res.status == 200) {
          user.id = result.id;
          return true;
        } else return false;
      } else {
        return false;
      }
    },
  },

  // debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
