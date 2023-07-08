import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import { Button, CardHeader } from '@material-tailwind/react';
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from 'react-router-dom';
import { useGetMeQuery } from '../../Redux/Features/User/UserApi';
import DeveloperCard from '../../Components/DeveloperCard/DeveloperCard';
import Footer from '../../Components/Footer/footer';
import DeveloperAbout from '../../Components/DeveloperAbout/DeveloperAbout';
import CompanyCard from '../../Components/CompanyCard/CompanyCard';
import CompanyAbout from '../../Components/CompanyAbout/CompanyAbout';


const Profile = () => {
    const { data } = useGetMeQuery();
    const user = data?.result?.user;

const navigate=useNavigate();

    const handleCreateChatting=()=>{
        navigate('/dashboard/inbox/123')
    }
    return (
        <div className='pt-20'>
            <Navigation />

            <div className=' py-24 container mx-auto'>
                <CardHeader >

                    <div className="flex items-center justify-between p-5">
                        <div className='flex items-center  space-x-2 font-semibold text-gray-900 leading-8'>
                            <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
                            <span className="tracking-wide">About</span>
                        </div>
                        <Link to='/updateProfile'>
                            <Button variant='gradient' size='sm'>
                                Edit
                            </Button>
                        </Link>
                    </div>

                </CardHeader>
                <br />
                <div className='grid grid-cols-12 gap-5'>

                    <div className='col-span-12 md:col-span-4 '>
                        {user?.role === "user" && <DeveloperCard user={user} />}
                        {user?.role === "company" && <CompanyCard company={user} />}
                        {user?.role === "admin" && <CompanyCard company={user} />}
                    </div>

                    {user?.role === "user" && <DeveloperAbout handleCreateChatting={handleCreateChatting} user={user} />}
                    {user?.role === "company" && <CompanyAbout handleCreateChatting={handleCreateChatting} company={user} />}
                    {user?.role === "admin" && <CompanyAbout handleCreateChatting={handleCreateChatting} company={user} />}


                </div>


            </div>

            <Footer />
        </div >
    );
};

export default Profile;