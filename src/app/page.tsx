import LoginForm from '@/components/Auth/LoginForm';
import Footer from '@/components/Common/Footer';
import RegisterForm from '@/components/Auth/RegisterForm';

export default function Home() {
  return (
    <main>
      <RegisterForm />
      <LoginForm />
      <Footer />
    </main>
  );
}
