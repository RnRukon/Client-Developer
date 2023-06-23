import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useGetMessageQuery, useSendMessageMutation } from '../../Redux/Features/Inbox/messageApi';
import { Button, Input } from '@material-tailwind/react';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';


const Messages = () => {
    const { id } = useParams();
    const { data } = useGetMessageQuery({ id }, { pollingInterval: 50000 });
    const { user } = useSelector(state => state.auth)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [sendMessage, { isSuccess }] = useSendMessageMutation();
    const messageRef = useRef();

    const onSubmit = data => {
        sendMessage({ id, message: data?.message })
    }


    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.scrollIntoView(
                {
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'nearest'
                })
        }
    }, [isSuccess, data])


    useEffect(() => {
        if (isSuccess) {
            reset();
        }
    }, [reset, isSuccess]);

   

    return (
        <div className='border  p-5 h-screen py-16 overflow-y-auto overflow-x-hidden'>
            <div >

                {
                    data?.result?.map(data =>
                        <div key={data?._id} className={` ${data?.user?.email === user?.email ? ' flex justify-end' : "text-left"}  `}>
                            <div className={`${data?.user?.email === user?.email ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-4  px-2 rounded-md rounded-l-none rounded-t-lg" : ' bg-gradient-to-r from-cyan-500 to-blue-500 text-white  rounded-md rounded-l-none rounded-t-lg'} md:w-2/6 py-4  px-2 my-3 overflow-ellipsis`} >
                                <span className='text-base'>
                                    {data?.message}
                                </span>
                            </div>
                        </div>

                    )
                }

            </div>



            <div className=''>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input label='Message'
                        variant="standard"
                        type='text'
                        {...register("message", { required: true })}
                    />

                    <div className='flex justify-end mt-3'>
                        <Button type='submit'>
                            Send
                        </Button>
                    </div>
                </form>
            </div>
            <div ref={messageRef} />


        </div>
    );
};

export default Messages;