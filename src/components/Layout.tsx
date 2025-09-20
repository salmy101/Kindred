// Layout.js
import { Outlet } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className='main-container'>
       <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;