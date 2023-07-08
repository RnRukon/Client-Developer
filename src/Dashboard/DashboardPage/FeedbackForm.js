import React, { useEffect } from 'react';
import StarsRating from 'stars-rating'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { usePostFeedbacksMutation } from '../../Redux/Features/Feedback/FeedbackApi';

const FeedbackForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [rating, setRating] = React.useState(0);
    const { user } = useSelector(state => state?.auth)
    const [postFeedback, { isLoading, isSuccess, isError, error }] = usePostFeedbacksMutation();



    function handleRatingChange(value) {
        setRating(value);
    }


    useEffect(() => {
        reset({ fname: user.fname, lname: user.lname, email: user.email, photo: user.photo })
    }, [reset, user.fname, user.lname, user.email, user.photo])


    function onSubmit(feedback) {
        const data = { ...feedback, rating };
        postFeedback({ data })
    }

    useEffect(() => {
        if (isLoading) {
            <h1>Loading...</h1>
        }
        if (isSuccess) {
            alert('Thank you for Feedback')
            reset()
        }
        if (isError) {
            alert(error)
        }
    }, [isSuccess, isError, error, isLoading,reset])



    return (
        <div className=' pt-20'>

            <div>


                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className='grid grid-cols-2 gap-2'>
                                <div>
                                    <label htmlFor="fname" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            disabled
                                            id="fname"
                                            {...register("fname", { required: true })}
                                            type="text"
                                            autoComplete="fname"
                                            placeholder='First Name'
                                            className={`appearance-none block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'
                                                } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                        />
                                        {errors.fname && (
                                            <p className="mt-2 text-sm text-red-500">First Name is required</p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="fname" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            disabled
                                            id="fname"
                                            {...register("fname", { required: true })}
                                            type="text"
                                            autoComplete="fname"
                                            placeholder='First Name'
                                            className={`appearance-none block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'
                                                } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                        />
                                        {errors.fname && (
                                            <p className="mt-2 text-sm text-red-500">First Name is required</p>
                                        )}
                                    </div>
                                </div>

                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"

                                        disabled
                                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                        type="email"
                                        defaultValue={user?.email}
                                        placeholder='User Email'
                                        autoComplete="email"
                                        className={`appearance-none block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                            } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                    />
                                    {errors.email && (
                                        <p className="mt-2 text-sm text-red-500">Valid email is required</p>
                                    )}
                                </div>
                            </div>



                            <div>
                                <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
                                Feedback
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="feedback"
                                        placeholder='feedback'
                                        {...register("feedback", { required: true })}
                                        rows="3"

                                        className={`appearance-none block w-full px-3 py-2 border ${errors.feedback ? 'border-red-500' : 'border-gray-300'
                                            } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                    />
                                    {errors.feedback && (
                                        <p className="mt-2 text-sm text-red-500">Valid feedback is required</p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                                    Rating
                                </label>
                                <div className="mt-1">
                                    <StarsRating
                                        className='py-5'
                                        count={5}
                                        value={rating}
                                        onChange={handleRatingChange}
                                        size={30}
                                        color2={'#ffd700'} />
                                </div>
                            </div>

                            <div className=' flex justify-end'>
                                <button type='submit'
                                    className='py-1 px-10  text-xs  text-slate-50 bg-gradient-to-tr  from-amber-300  to-amber-400 hover:bg-gradient-to-tl active:bg-gradient-to-r rounded-lg font-extrabold
                            '
                                >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div></div>
    );
};

export default FeedbackForm;