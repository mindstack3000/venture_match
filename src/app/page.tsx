import EntrepreneurForm from '@/components/Form/EntrepreneurForm';
import LoginForm from '@/components/Auth/LoginForm';
import Footer from '@/components/Common/Footer';
import InvestmentsCard from '@/components/Common/InvestmentsCard';

export default function Home() {
  return (
    <main>
      <EntrepreneurForm />
      <Footer />
      <InvestmentsCard equity='30'/>
    </main>
  );
}
