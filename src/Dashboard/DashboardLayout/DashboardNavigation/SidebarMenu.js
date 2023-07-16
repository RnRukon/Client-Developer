import React from 'react';
import {
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,

} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    UserCircleIcon,
    InboxIcon,
    PowerIcon,
    HomeModernIcon
} from "@heroicons/react/24/solid";
import {
    ChevronRightIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import { useGetChatsQuery } from '../../../Redux/Features/Inbox/InboxApi';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../Redux/Features/User/AuthSlice';

const SidebarMenu = () => {
    const [open, setOpen] = React.useState(0);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const dispatch = useDispatch();


    const { data } = useGetChatsQuery();

    const { user } = useSelector(state => state.auth);

    const chat = data?.result?.filter(data =>
        data?.sender.email === user.email ||
        data?.receiver.email === user.email);



    return (
        <List>

            <Link to='/'>

                <ListItem>
                    <ListItemPrefix>
                        <HomeModernIcon strokeWidth={3} className="h-5 w-5" />
                    </ListItemPrefix>
                    Home
                </ListItem>
            </Link>

            <Accordion
                open={open === 1}
                icon={
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                    />
                }
            >
                {user?.role !== "user" && <ListItem className="p-0" selected={open === 1}>
                    <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                        <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                            Dashboard
                        </Typography>
                    </AccordionHeader>
                </ListItem>}
                <AccordionBody className="py-1">
                    <List className="p-0">
                        {user.role !== "user" && <Link to='/dashboard/postJobCircular'>

                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Post job Circular
                            </ListItem>
                        </Link>}

                        {user.role !== "user" && <Link to='/dashboard/ourCompanyJobCircular'>

                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Job Circular
                            </ListItem>
                        </Link>}

                        {user.role === "admin" && <Link to='/dashboard/manageCircular'>

                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Manage Circular
                            </ListItem>
                        </Link>}
                        {user.role === "admin" && <Link to='/dashboard/feedback'>

                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Manage Feedbacks
                            </ListItem>
                        </Link>}


                    </List>
                </AccordionBody>
            </Accordion>

            <hr className="my-2 border-blue-gray-50" />
            <Link to={`/dashboard/inbox/${chat?.[0]?._id}`}>
                <ListItem>
                    <ListItemPrefix>
                        <InboxIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Inbox

                </ListItem>
            </Link>
            <Link to='/profile'>
                <ListItem>
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                </ListItem>
            </Link>
            <Link to='/dashboard/feedback'>
                <ListItem>
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Feedback
                </ListItem>
            </Link>

            <ListItem
                onClick={() => dispatch(logout())}
            >

                <ListItemPrefix>
                    <PowerIcon className="h-5 w-5" />
                </ListItemPrefix>
                Log Out
            </ListItem>
        </List>
    );
};

export default SidebarMenu;