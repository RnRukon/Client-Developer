import React from 'react';
import {
  Card,
  Typography
} from "@material-tailwind/react";

import SidebarMenu from './DashboardNavigation/SidebarMenu';

const DashboardSidebar = () => {


  return (
    <div className='hidden md:block duration-500'>
      <Card className=" sticky top-4  h-screen overflow-y-auto w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 flex items-center gap-4 p-4">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <SidebarMenu />


      </Card>
    </div>
  );
};

export default DashboardSidebar;