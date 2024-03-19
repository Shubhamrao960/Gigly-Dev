import { Outlet } from 'react-router-dom';
import MainNav from '../components/common/mainNav';


const MainLayout = () => {

  return (
    <>
      <main className='main'>
      <Outlet />
      </main>
    </>
  );
};

export default MainLayout;