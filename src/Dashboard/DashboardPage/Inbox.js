import React from 'react';
import { useGetChatsQuery } from '../../Redux/Features/Inbox/InboxApi';
import {
    List,
    ListItem,
} from "@material-tailwind/react";
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Inbox = () => {
    // null, { pollingInterval: 10000 }
    const { data } = useGetChatsQuery();
    const { user } = useSelector(state => state.auth);


    const chat = data?.result?.filter(data =>
        data?.sender.email === user.email ||
        data?.receiver.email === user.email);


    // console.log(chat);


    /* const exist2 = chatData?.result?.find(data =>
        data?.sender?.email === users?.email &&
        data?.receiver?.email === user?.email); */

    return (
        <div className=''>
            <div className='grid grid-cols-12 gap-5 '>
                <div className='col-span-4  h-screen pt-16  p-5 overflow-y-auto '>
                    <List>
                        {
                            chat?.map((data) =>
                                <Link className=' w-full' key={data?._id} to={`/dashboard/inbox/${data?._id}`}>
                                    <ListItem className=''>
                                        <div className='flex items-center gap-2'>

                                            <div>
                                                <img className='h-10 w-10'
                                                    src={"/img/user.avif"}

                                                    alt="" />
                                            </div>

                                            
                                            <div>

                                                {
                                                    data?.sender?.email === user?.email &&
                                                    <p>{data?.receiver?.fname ||
                                                        data?.receiver?.companyName}
                                                        {' '}
                                                        {data?.receiver?.lname}</p>
                                                }
                                                {
                                                    data?.receiver?.email === user?.email &&
                                                    <p>{data?.sender?.fname ||
                                                        data?.sender?.companyName}
                                                        {' '}
                                                        {
                                                            data?.sender?.lname
                                                        }
                                                    </p>
                                                }


                                                <p className='text-xs'> {
                                                    data?.receiver?.email === user?.email ? data?.sender?.email
                                                        :
                                                        data?.sender?.email === user?.email ? data?.receiver.email : ''
                                                }</p>
                                            </div>
                                        </div>
                                    </ListItem>
                                </Link>
                            )
                        }
                    </List>

                </div>
                <div className='col-span-8  '>
                    <Outlet />

                </div>
            </div>
        </div>
    );
};

export default Inbox;