import 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Slidebar from '../../Component/Sidebar/Slidebar';

function Layout() {
  const [IsOpen, setOpen] = useState(false);
  const [showSlidebar, setShowSlidebar] = useState(false); // Controls visibility of Slidebar
  const location = useLocation();

  // Determine if the current page is the Home page
  const isHomePage = location.pathname === '/';

  // Show Slidebar by default on the Home page
  useEffect(() => {
    if (isHomePage) {
      setShowSlidebar(true);
    } else {
      setShowSlidebar(false);
    }
  }, [isHomePage]);

  // Toggle the Slidebar visibility
  const toggleSlidebar = () => {
    setShowSlidebar((prev) => !prev);
  };

  return (
    <div className=" bg-white ">
      <div className="sticky top-0 z-50">
        <Navbar toggleSlidebar={toggleSlidebar} />
      </div>
      <div className="flex gap-4">
        {/* Render Slidebar based on showSlidebar */}
        {showSlidebar && (
          <div className={`${IsOpen ? 'w-[20%]' : 'w-[15%]'} sticky top-16 h-[calc(100vh-4rem)] z-40  `}>
            <Slidebar IsOpens={IsOpen} />
          </div>
        )}
        {/* Adjust width based on Slidebar visibility */}
        <div className={showSlidebar ? `${IsOpen ? 'w-[80%]' : 'w-[85%]'}` : 'w-[100%]'}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
