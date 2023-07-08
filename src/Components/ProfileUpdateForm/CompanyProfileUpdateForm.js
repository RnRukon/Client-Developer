import React from 'react';
import { Button, Card, Input, Textarea } from '@material-tailwind/react';
import { useSelector } from 'react-redux';
import { useUpdateProfileMutation } from '../../Redux/Features/User/UserApi';
import imageUploader from '../../Utils/imageUploader';

const CompanyProfileUpdateForm = ({ data, handleSubmit, onSubmit, register, errors }) => {
    const { user } = useSelector(state => state.auth);


    const [updateProfile] = useUpdateProfileMutation();
    const photoChangeHandler = async (data) => {

        const photoURL = await imageUploader(data);

        await updateProfile({ photo: photoURL });

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          
            <div className='grid grid-cols-12 gap-5'>
                <Card className='col-span-12 md:col-span-4 p-10'>
                    <div>
                        <img
                            className="h-60 w-60 rounded-full mx-auto"
                            src={data?.result?.user?.photo || '/img/user.avif'}
                            alt="Profile"
                        />
                        <input type="file" name="" id=""

                            onChange={(e) => photoChangeHandler(e?.target.files[0])}
                        />

                        <div className=' text-black text-center' >
                            <h1 className='text-2xl font-bold pb-3'>
                                {data?.result?.user?.companyName}
                            </h1>
                        </div>
                        <div className=' text-center font-bold' >
                            <Input
                                {...register("companyType", { required: true })}
                                size="md" label="Company Type*" />
                            {errors.companyType && <p className='text-red-500 text-xs'>This field is required</p>}
                        </div>



                    </div>
                </Card>

                <Card className='col-span-12 md:col-span-8 flex flex-col justify-between'>
                    <div className="w-full">
                        <div className="bg-white p-3  rounded-sm">

                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-2 text-sm">
                                    {
                                        user.role === 'admin' &&
                                        <div className="grid md:grid-cols-1">
                                            <div className="md:px-4 py-2 font-semibold text-xs ">First Name</div>
                                            <div className="md:md:px-4 py-2">
                                                <Input
                                                    {...register("fname", { required: true })}
                                                    size="md" label="First Name*" />
                                                {errors.fname && <p className='text-red-500 text-xs'>This field is required</p>}
                                            </div>
                                        </div>
                                    }
                                    {
                                        user.role === 'admin' &&
                                        <div className="grid md:grid-cols-1">
                                            <div className="md:px-4 py-2 font-semibold text-xs">Last Name</div>
                                            <div className="md:px-4 py-2">
                                                <Input
                                                    {...register("lname", { required: true })}
                                                    size="md" label="Last Name*" />
                                                {errors.lname && <p className='text-red-500 text-xs'>This field is required</p>}
                                            </div>
                                        </div>}
                                    <div className="grid md:grid-cols-1">
                                        <div className="px-4 py-2 font-semibold">Company Name</div>
                                        <div className="px-4 py-2">
                                            <Input
                                                {...register("companyName", { required: true })}
                                                size="md" label="Company Name*" />
                                            {errors.fname && <p className='text-red-500 text-xs'>This field is required</p>}
                                        </div>
                                    </div>



                                    <div className="grid md:grid-cols-1">
                                        <div className="px-4 py-2 font-semibold">Contact No.</div>
                                        <div className="px-4 py-2">
                                            <Input
                                                {...register("contactNo", { required: true })}
                                                size="md" label="Contact No.*" />
                                            {errors.contactNo && <p className='text-red-500 text-xs'>This field is required</p>}
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-1">
                                        <div className="px-4 py-2 font-semibold">Company Address</div>
                                        <div className="px-4 py-2">
                                            <Input
                                                {...register("companyAddress", { required: true })}
                                                size="md" label="Company Address*" />
                                            {errors.companyAddress && <p className='text-red-500 text-xs'>This field is required</p>}
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-1">
                                        <div className="px-4 py-2 font-semibold">Email</div>
                                        <div className="px-4 py-2">
                                            <Input
                                                {...register("email", { required: true })}
                                                type='email'
                                                size="md" label="Email*" />
                                            {errors.email && <p className='text-red-500 text-xs'>This field is required</p>}
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-1">
                                        <div className="px-4 py-2 font-semibold">Linkedin profile link</div>
                                        <div className="px-4 py-2">
                                            <Input
                                                {...register("linkedin")}
                                                type='text' size="md" label="Linkedin profile link" />
                                        </div>
                                    </div>



                                    <div className="grid md:grid-cols-1">
                                        <div className="px-4 py-2 font-semibold">Company Web side link</div>
                                        <div className="px-4 py-2">
                                            <Input
                                                {...register("companyWebSide")}
                                                type='text' size="md" label="Company Web Side" />
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-1">
                                        <div className="px-4 py-2 font-semibold">Github Profile link</div>
                                        <div className="px-4 py-2">
                                            <Input
                                                {...register("github")}
                                                type='text' size="md" label="Github Profile link" />
                                        </div>
                                    </div>

                                </div>

                                <div className=' text-justify pt-3' >
                                    <Textarea
                                        {...register("companyDescription")}
                                        size="md" label="Description"
                                        resize={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education and Experience */}


                    <div className="bg-white p-3  ">
                        <div className=' text-center py-4'>
                            <Button variant='gradient' type='submit' className='w-56' size="sm">submit</Button>
                        </div>
                        {/* <!-- End of Experience and education grid --> */}
                    </div>
                </Card>


            </div>


        </form>
    );
};

export default CompanyProfileUpdateForm;