import React, { useEffect } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import { useForm } from "react-hook-form";
import { Button, CardHeader } from '@material-tailwind/react';
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import { useGetMeQuery, useUpdateProfileMutation } from '../../Redux/Features/User/UserApi';
import { useSelector } from 'react-redux';
import Footer from '../../Components/Footer/footer';
import UserProfileUpdateForm from '../../Components/ProfileUpdateForm/UserProfileUpdateForm';
import CompanyProfileUpdateForm from '../../Components/ProfileUpdateForm/CompanyProfileUpdateForm';


const UpdateProfile = () => {

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();

    const [updateProfile,{isSuccess}] = useUpdateProfileMutation();

    console.log(isSuccess);
    const { data } = useGetMeQuery();
    const { user } = useSelector(state => state.auth);


    useEffect(() => {
        reset(data?.result?.user)
    }, [reset, data?.result?.user])

    const onSubmit = data => {


        const companyData = {
            companyAddress: data.companyAddress,
            companyName: data.companyName,
            companyType: data.companyType,
            companyWebSide: data.companyWebSide,
            contactNo: data.contactNo,
            email: data.email,
            github: data.github,
            linkedin: data.linkedin,
            companyDescription: data.companyDescription,

        }
        const userData = {
            fname: data.fname,
            lname: data.lname,
            dateOfBirth: data.dateOfBirth,
            developerLaval: data.developerLaval,
            companyName: data.companyName,
            currentAddress: data.currentAddress,
            permanentAddress: data.permanentAddress,
            bio: data.bio,
            portfolio: data.portfolio,
            contactNo: data.contactNo,
            experienceCompany: data.experienceCompany,
            experiencePosition: data.experiencePosition,
            institute: data.institute,
            qualification: data.qualification,
            resume: data.resume,
            github: data.github,
            linkedin: data.linkedin,
            description: data.description,

        }

        if (user.role === 'company') {
            updateProfile(companyData);
        }
        if (user.role === 'user') {
            updateProfile(userData);
        }
    };



    return (
        <div>
            <Navigation />

            <div className=' py-24 container mx-auto'>
                <CardHeader className="">

                    <div className="flex items-center justify-between p-5 ">                                    <div className='flex items-center  space-x-2 font-semibold text-gray-900 leading-8'>
                        <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
                        <span className="tracking-wide">Update Profile</span>
                    </div>
                        <Link to='/profile'>
                            <Button variant='gradient' size='sm'>
                                Profile
                            </Button>
                        </Link>
                    </div>


                </CardHeader>
                <br />

                {user?.role === 'user' && <UserProfileUpdateForm
                    data={data}
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                    register={register}
                    setValue={setValue}
                    errors={errors}
                    user={user}
                />}
                {user?.role === 'company' && <CompanyProfileUpdateForm
                    data={data}
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                    register={register}
                    setValue={setValue}
                    errors={errors}
                    user={user}
                />}
            </div>
            <Footer />
        </div>
    );
};

export default UpdateProfile;