'use client';

import { useRouter } from 'next/navigation';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Venue from '@/components/venue';
const PackagesPage = () => {
  const router = useRouter();

  

  return (
    <>
      <Navbar />
      <Venue />
      <Footer />
    </>
  );
};

export default PackagesPage;