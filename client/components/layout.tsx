import Footer from './footer';
import Meta from './meta';
import Header from './header';

interface Props {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen">
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
