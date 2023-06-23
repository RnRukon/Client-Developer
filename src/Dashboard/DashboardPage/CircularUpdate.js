import React, { useEffect } from 'react';
import { Button, Card, Input, Option, Select, Textarea } from '@material-tailwind/react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { useGetSingleJobCircularQuery, useUpdateJobCircularMutation } from '../../Redux/Features/Circular/CircularApi';


const CircularUpdate = () => {

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
    const { id } = useParams();
    const { data } = useGetSingleJobCircularQuery({ id }, { refetchOnWindowFocus: true });
    const circular = data?.result;
    const [updateJobCircular, { isSuccess }] = useUpdateJobCircularMutation();


    useEffect(() => {
        reset(circular)
    }, [reset, circular]);


    const onSubmit = data => {
        updateJobCircular({ data, id })
    };


    useEffect(() => {
        if (isSuccess) {
            alert("Update is successfully")
        }
    }, [isSuccess])

    return (
        <div className='pt-28'>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Card className="grid md:grid-cols-4  text-sm container mx-auto">

                        <div className="col-span-4 md:col-span-2 px-4 py-2">
                            <Input
                                {...register("jobTitle", { required: true })}
                                size="md" label="Job Title*" />
                            {errors.jobTitle && <p className='text-red-500 text-xs'>This field is required</p>}
                        </div>
                        <div className="col-span-4 md:col-span-2 px-4 py-2">
                            <Input
                                {...register("salaryRange", { required: true })}
                                size="md" label="Salary Range*" />
                            {errors.salaryRange && <p className='text-red-500 text-xs'>This field is required</p>}
                        </div>

                        <div className="col-span-4 md:col-span-2 px-4 py-2 ">
                            <Select
                                as={Select} label='Job Type' name="" id="" className='w-full'
                                onChange={(e) => setValue('jobType', e)}
                            >
                                <Option as='option' value="Full-Time">Full-Time</Option>
                                <Option as='option' value="Contract">Contract</Option>
                            </Select>
                            {errors.jobType && <p className='text-red-500 text-xs'>This field is required</p>}
                        </div>
                        <div className="col-span-4 md:col-span-2 px-4 py-2 ">
                            <Select
                                as={Select} label='Job Location' name="" id="" className='w-full'
                                onChange={(e) => setValue('jobLocation', e)}
                            >
                                <Option as='option' value="On-site">On-site</Option>
                                <Option as='option' value="Remote">Remote</Option>
                                <Option as='option' value="Hybrid">Hybrid</Option>
                            </Select>
                            {errors.jobLocation && <p className='text-red-500 text-xs'>This field is required</p>}
                        </div>
                        <div className="col-span-4 md:col-span-2 px-4 py-2">

                            <Textarea
                                {...register("responsibilities", { required: true })}
                                size="md" resize label="Responsibilities*" />
                            {errors.responsibilities && <p className='text-red-500 text-xs'>This field is required</p>}
                        </div>
                        <div className="col-span-4 md:col-span-2 px-4 py-2">
                            <Textarea
                                {...register("skills", { required: true })}
                                size="md" resize label="Skills*" />
                            {errors.skills && <p className='text-red-500 text-xs'>This field is required</p>}
                        </div>
                        <div className="col-span-4 md:col-span-4 px-4 py-2">
                            <Textarea
                                {...register("description", { required: true })}
                                size="md" resize label="Description" />
                            {errors.description && <p className='text-red-500 text-xs'>This field is required</p>}
                        </div>


                        <div className="px-4 py-2 col-span-4 flex  justify-end">
                            <Button type="submit" >Submit</Button>
                        </div>
                    </Card>

                </form>
            </div>
        </div>
    );
};

export default CircularUpdate;