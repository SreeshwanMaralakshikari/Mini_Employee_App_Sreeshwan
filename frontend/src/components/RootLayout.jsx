import Header from './Header';
import { Outlet } from 'react-router';

function RootLayout() {
  return (
    <div>
      <Header/>
      <div className="min-h-screen bg-white">
        <Outlet/>
      </div>
    </div>
  );
}

export default RootLayout;
