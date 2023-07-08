import React from 'react';
import { Link } from 'react-router-dom';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Typography,
} from "@material-tailwind/react";
import {
    Cog6ToothIcon,
    PowerIcon,
    DeviceTabletIcon,
    UserCircleIcon,
    LifebuoyIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Features/User/AuthSlice';

export default function UserMenu() {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth)



    return (
        <Menu className=''>
            <MenuHandler>
                <Avatar
                    variant="circular"
                    alt="candice wu"
                    className="cursor-pointer"
                    src={user?.photo || '/img/user.avif'}
                />
            </MenuHandler>
            <MenuList className='  border-none'>

                <Link as={MenuItem} to='/profile'>
                    <MenuItem className="flex items-center gap-2">
                        <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
                        <Typography variant="small" className="font-normal">
                            My Profile
                        </Typography>
                    </MenuItem>
                </Link>

                <Link as={MenuItem} to='/updateProfile'>
                    <MenuItem className="flex items-center gap-2">
                        <Cog6ToothIcon strokeWidth={2} className="h-4 w-4" />
                        <Typography variant="small" className="font-normal">
                            Edit Profile
                        </Typography>
                    </MenuItem>
                </Link>
                <Link as={MenuItem} to='/dashboard'>

                    <MenuItem className="flex items-center gap-2">
                        <DeviceTabletIcon strokeWidth={2} className="h-4 w-4" />
                        <Typography variant="small" className="font-normal">
                            Dashboard
                        </Typography>
                    </MenuItem>
                </Link>
                <Link as={MenuItem} to='/contactPage'>

                    <MenuItem className="flex items-center gap-2">
                        <LifebuoyIcon strokeWidth={2} className="h-4 w-4" />
                        <Typography variant="small" className="font-normal">
                            Help
                        </Typography>
                    </MenuItem>
                </Link>



                <hr className="my-2 border-blue-gray-50" />
                {
                    user?.email ?

                        <MenuItem
                            onClick={() => dispatch(logout())}
                            className="flex items-center gap-2 ">
                            <PowerIcon strokeWidth={2} className="h-4 w-4" />
                            <Typography variant="small" className="font-normal">
                                Sign Out
                            </Typography>
                        </MenuItem>
                        :
                        <Link as="MenuItem" to='/login'>
                            <MenuItem className="flex items-center gap-2 ">
                                <PowerIcon strokeWidth={2} className="h-4 w-4" />
                                <Typography variant="small" className="font-normal">
                                    Login
                                </Typography>
                            </MenuItem>
                        </Link>}
            </MenuList>
        </Menu>
    );
}