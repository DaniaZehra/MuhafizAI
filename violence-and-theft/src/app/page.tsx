import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import DemoSection from '../components/DemoCard';
import FeaturesSection from '../components/FeaturesSection';
import BenefitsSection from '../components/BenefitsSection';
import Footer from '../components/Footer';
import BackgroundParticles from '../components/BackgroundParticles';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>SecureVision AI - Realtime Violence & Theft Detection</title>
        <meta name="description" content="Revolutionary AI-powered security solution that monitors CCTV footage in real-time" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 via-blue-900/30 to-purple-800/40 text-gray-100 overflow-x-hidden">
        <BackgroundParticles />
        <Header />
        <Hero />
        <ProblemSection />
        <DemoSection />
        <FeaturesSection />
        <BenefitsSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;