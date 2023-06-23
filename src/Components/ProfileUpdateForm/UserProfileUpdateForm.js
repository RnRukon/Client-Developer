import React from 'react';
import { Button, Card, Input, Option, Select, Textarea, Typography } from '@material-tailwind/react';

const UserProfileUpdateForm = ({ data, handleSubmit, onSubmit, register, setValue, errors, user }) => {
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-12 gap-5'>
                <Card className='col-span-12 md:col-span-4 md:p-10'>
                    <div>

                        <img
                            className="h-60 w-60 rounded-full mx-auto"
                            src='/img/team-4.png'
                            alt="Profile"
                        />
                        <img src="" alt="" />

                        <div className=' text-black text-center' >
                            <Typography variant='h5'>
                                {data?.result?.user?.fname} {data?.result?.user?.lname}
                            </Typography>
                        </div>
                        <div className=' text-center font-bold' >
                            <Input
                                {...register("positionType", { required: true })}
                                size="md" label="Position Type*" />
                            {errors.positionType && <p className='text-red-500 text-xs'>This field is required</p>}
                        </div>


                        <div className=' text-justify pt-3' >
                            <Textarea
                                {...register("bio")}
                                size="md" label="Bio" />
                        </div>
                    </div>
                </Card>

                <Card className='col-span-12 md:col-span-8'>
                    <div className="w-full">
                        <div className="bg-white md:p-3  rounded-sm">

                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-2 text-sm">
                                    <div className="grid md:grid-cols-2">
                                        <div className="md:px-4 py-2 font-semibold text-xs ">First Name</div>
                                        <div className="md:md:px-4 py-2">
                                            <Input
                                                {...register("fname", { required: true })}
                                                size="md" label="First Name*" />
                                            {errors.fname && <p className='text-red-500 text-xs'>This field is required</p>}
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2">
                                        <div className="md:px-4 py-2 font-semibold text-xs">Last Name</div>
                                        <div className="md:px-4 py-2">
                                            <Input
                                                {...register("lname", { required: true })}
                                                size="md" label="Last Name*" />
                                            {errors.lname && <p className='text-red-500 text-xs'>This field is required</p>}
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2">
                                        <div className="md:px-4 py-2 font-semibold text-xs">Gender</div>
                                        <div className="md:px-4 py-2">
                                            {user._id && <Select

                                                defaultValue={user?.gender}
                                                onChange={(value) => setValue("gender", value)}
                                                required
                                                label="Gender*"
                                                animate={{
                                                    mount: { y: 0 },
                                                    unmount: { y: 25 },
                                                }}

                                            >
                                                <Option value='Mail'>Mail</Option>
                                                <Option value='Female'>Female </Option>
                                                <Option value='Intersex'>Intersex</Option>
                                            </Select>}
                                            {errors.gender && <p className='text-red-500 text-xs'>This field is required</p>}
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2">
                                        <div className="md:px-4 py-2 font-semibold text-xs">Contact No.</div>
                                        <div className="md:px-4 py-2">
                                            <Input
                                                {...register("contactNo", { required: true })}
                                                size="md" label="Contact No.*" />
                                            {errors.contactNo && <p className='text-red-500 text-xs'>This field is required</p>}
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2">
                                        <div className="md:px-4 py-2 font-semibold text-xs">Current Address</div>
                                        <div className="md:px-4 py-2">
                                            <Input
                                                {...register("currentAddress", { required: true })}
                                                size="md" label="Current Address*" />
                                            {errors.currentAddress && <p className='text-red-500 text-xs'>This field is required</p>}
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2">
                                        <div className="md:px-4 py-2 font-semibold text-xs">Permanent  Address</div>
                                        <div className="md:px-4 py-2">
                                            <Input
                                                {...register("permanentAddress", { required: true })}
                                                size="md" label="Permanent Address*" />
                                            {errors.permanentAddress && <p className='text-red-500 text-xs'>This field is required</p>}
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2">
                                        <div className="md:px-4 py-2 font-semibold text-xs">Email</div>
                                        <div className="md:px-4 py-2">
                                            <Input
                                                {...register("email", { required: true })}
                                                type='email'
                                                size="md" label="Email*" />
                                            {errors.email && <p className='text-red-500 text-xs'>This field is required</p>}
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2">
                                        <div className="md:px-4 py-2 font-semibold text-xs">Date Of Birth</div>
                                        <div className="md:px-4 py-2">
                                            <Input
                                                {...register("dateOfBirth", { required: true })}
                                                type='date' size="md" label="Date Of Birth*" />
                                            {errors.dateOfBirth && <p className='text-red-500 text-xs'>This field is required</p>}
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2">
                                        <div className="md:px-4 py-2 font-semibold text-xs">Developer Laval</div>
                                        <div className="md:px-4 py-2">
                                            {user._id && <Select

                                                defaultValue={user?.developerLaval}
                                                onChange={(value) => setValue("developerLaval", value)}
                                                required
                                                label="Developer Laval*"
                                                animate={{
                                                    mount: { y: 0 },
                                                    unmount: { y: 25 },
                                                }}

                                            >
                                                <Option value='Junior'>Junior</Option>
                                                <Option value='Mid'>Mid </Option>
                                                <Option value='Senior'>Senior</Option>
                                            </Select>}
                                            {errors.gender && <p className='text-red-500 text-xs'>This field is required</p>}
                                        </div>
                                    </div>


                                    <div className="grid md:grid-cols-2">
                                        <div className="md:px-4 py-2 font-semibold text-xs">Linkedin profile link</div>
                                        <div className="md:px-4 py-2">
                                            <Input
                                                {...register("linkedin")}
                                                type='text' size="md" label="Linkedin profile link" />
                                        </div>
                                    </div>



                                    <div className="grid md:grid-cols-2">
                                        <div className="md:px-4 py-2 font-semibold text-xs">Portfolio link</div>
                                        <div className="md:px-4 py-2">
                                            <Input
                                                {...register("portfolio")}
                                                type='text' size="md" label="Portfolio link" />
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2">
                                        <div className="md:px-4 py-2 font-semibold text-xs">Github Profile link</div>
                                        <div className="md:px-4 py-2">
                                            <Input
                                                {...register("github")}
                                                type='text' size="md" label="Github Profile link" />
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2">
                                        <div className="md:px-4 py-2 font-semibold text-xs">Resume drive link</div>
                                        <div className="md:px-4 py-2">
                                            <Input
                                                {...register("resume", { required: true })}
                                                type='text' size="md" label="Resume drive link*" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education and Experience */}


                    <div className="bg-white p-3 ">

                        <div className="grid md:grid-cols-2">
                            <div>
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                    <span className="text-green-500">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">Experience</span>
                                </div>
                                <ul className="list-inside space-y-2">
                                    <li>
                                        <div className="text-teal-600 p-2">
                                            <Input
                                                {...register("experienceCompany")}
                                                size="md" label="Company" />

                                        </div>
                                        <div className="text-teal-600 p-2">
                                            <Input
                                                {...register("experiencePosition")}
                                                size="md" label="Experience Position" />
                                        </div>

                                    </li>

                                </ul>
                            </div>
                            <div>
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                    <span clas="text-green-500">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path fill="#fff"
                                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">Education</span>
                                </div>
                                <ul className="list-inside space-y-2">
                                    <li>
                                        <div className="text-teal-600 p-2">
                                            <Input
                                                {...register("institute", { required: true })}
                                                size="md" label="Educational institutions*" />
                                            {errors.institution && <p className='text-red-500 text-xs'>This field is required</p>}
                                        </div>
                                        <div className="text-teal-600 p-2">
                                            <Input
                                                {...register("qualification", { required: true })}
                                                size="md" label="Education Qualification*" />
                                            {errors.qualification && <p className='text-red-500 text-xs'>This field is required</p>}
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
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

export default UserProfileUpdateForm;