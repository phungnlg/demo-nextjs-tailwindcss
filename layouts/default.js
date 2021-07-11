import Header from '@/layouts/components/Header'
import Footer from '@/layouts/components/Footer'

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
