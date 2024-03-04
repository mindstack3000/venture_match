import { error } from 'console';

export async function LoginWithCredentials(email: string, password: string) {
  console.log(email, password);

  const res = await fetch(
    'https://venture-match-backend.vercel.app/user/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }
  );

  const result = await res.json();

  if (res.status == 201) {
    const user = {
      id: result.user_id,
      token: result.token,
      image: result.profile_img,
      name: result.name,
      email: result.email,
      role: result.type,
    };

    return {
      error: null,
      user,
    };
  } else {
    console.log(result.message);
    return {
      error: result.message,
      user: null,
    };
  }
}

export async function register({
  name,
  email,
  password,
  dob,
  phone_no,
  profile_img,
  gender,
  highest_edu,
}: {
  name: string;
  email: string;
  password: string;
  dob: string;
  phone_no: string;
  profile_img: string;
  gender: string;
  highest_edu: string;
}) {
  console.log('registering');
  // console.log(name)
  const res = await fetch(
    'https://venture-match-backend.vercel.app/user/register',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        dob,
        phone_no,
        profile_img,
        gender,
        highest_edu,
      }),
    }
  );

  const result = await res.json();
  console.log(result);

  if (res.status == 201) {
    return result;
  } else {
    return {
      error: result.message,
    };
  }
}

export async function setEntrepreneurData(data: EntrepreneurFormType) {
  const res = await fetch(
    'https://venture-match-backend.vercel.app/entrepreneur',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  const result = await res.json();
  if (res.status == 201) {
    return result;
  } else {
    return {
      error: result.message,
    };
  }
}

export async function setInvestor() {}
