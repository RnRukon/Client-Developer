import React from 'react';
import DeveloperAbout from '../../Components/DeveloperAbout/DeveloperAbout';
import DeveloperCard from '../../Components/DeveloperCard/DeveloperCard';
import Footer from '../../Components/Footer/footer';
import Navigation from '../../Components/Navigation/Navigation';
import { Button, CardHeader } from '@material-tailwind/react';
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useNavigate, useParams } from 'react-router-dom';
import { useGetSingleUserQuery } from '../../Redux/Features/User/UserApi';
import { useCreateChatMutation, useGetChatsQuery } from '../../Redux/Features/Inbox/InboxApi';
import { AiOutlineRollback } from 'react-icons/ai';
import CompanyCard from '../../Components/CompanyCard/CompanyCard';
import CompanyAbout from '../../Components/CompanyAbout/CompanyAbout';
import { useSelector } from 'react-redux';


const Details = () => {
    const { id } = useParams();

    const { data: userData } = useGetSingleUserQuery({ id })
    const users = userData?.result;


    const { user } = useSelector(state => state.auth);


    const [createChatting] = useCreateChatMutation();

    const navigate = useNavigate();
    const { data: chatData } = useGetChatsQuery();

    const exist1 = chatData?.result?.find(data =>
        data?.sender?.email === user?.email &&
        data?.receiver?.email === users?.email);

    const exist2 = chatData?.result?.find(data =>
        data?.sender?.email === users?.email &&
        data?.receiver?.email === user?.email);


    const handleCreateChatting = async () => {
        if (await exist1 || await exist2) {
            navigate(`/dashboard/inbox/${exist1?._id || exist2?._id}`)
        } else {
            await createChatting({
                sender_id: user?._id,
                receiver_id: id
            }).then(res => {
                if (res?.data?.result?._id) {
                    navigate(`/dashboard/inbox/${res?.data?.result?._id}`)
                }
            }).catch((err) => {
                console.log(err);
            })
        }


    }


    return (
        <div>
            <Navigation />

            <div className=' py-24 container mx-auto'>
                <CardHeader >

                    <div className="flex items-center justify-between p-5">                                    <div className='flex items-center  space-x-2 font-semibold text-gray-900 leading-8'>
                        <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
                        <span className="tracking-wide">Details</span>
                    </div>

                        <Button
                            onClick={() => window.history.back()}
                            variant='outlined'
                            size='sm'>
                            < AiOutlineRollback />
                        </Button>

                    </div>

                </CardHeader>
                <br />
                <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-12 md:col-span-4  relative'>

                        {users?.role === "user" && <DeveloperCard user={users} />}
                        {users?.role === "company" && <CompanyCard company={users} />}
                    </div>
                    {users?.role === "user" && <DeveloperAbout
                        handleCreateChatting={handleCreateChatting}
                        user={users} />}
                    {users?.role === "company" &&
                        <CompanyAbout
                            handleCreateChatting={handleCreateChatting}
                            company={users} />}







                </div>

            </div>

            <Footer />
        </div >
    );
};

export default Details;