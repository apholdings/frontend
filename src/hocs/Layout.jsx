import Footer from '@/features/footer';
import Navbar from '@/features/navbar';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
