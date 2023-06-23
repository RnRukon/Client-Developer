import { Card, IconButton, Typography } from '@material-tailwind/react';

import React from 'react';

const AppBar = ({ open, setOpen, title }) => {
    return (
        <Card className=' w-full py-4 h-16 px-2 '>
            <div className=' flex gap-3 items-center'>
                <IconButton variant='outlined' onClick={() => setOpen(true)} className='block md:hidden '>

                    {!open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />


                    </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>}

                </IconButton>

                <Typography >{title}</Typography>
            </div>
        </Card>
    );
};

export default AppBar;