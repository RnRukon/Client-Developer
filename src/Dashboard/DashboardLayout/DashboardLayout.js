import React, { useState } from 'react';
import DashboardSidebar from './DashboardSidebar';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';
import { DashboardDrawer } from './DashboardDrawer';


const DashboardLayout = () => {
    const [open, setOpen] = useState(false)
    return (
        <React.Fragment>
            <div className='flex flex-grow'>
                <DashboardSidebar />
                <div className='px-3 text-xl text-gray-900 font-semibold h-screen w-full overflow-y-auto'>
                    <DashboardDrawer setOpen={setOpen} open={open} />
                    <div className=' fixed w-full z-40'>
                        <AppBar setOpen={setOpen} open={open} title='Dashboard' />
                    </div>

                    <div >
                        <Outlet />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default DashboardLayout;