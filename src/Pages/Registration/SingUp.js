import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    Button,
    Typography,
    Checkbox,
    Radio,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registration } from "../../Redux/Features/User/AuthSlice";



export function SignUp({ setSingIn, singIn }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [role, setRole] = useState('user');



    const dispatch = useDispatch();
    const onSubmit = data => {
        const userData = {
            fname: data.fname,
            lname: data.lname,
            email: data.email,
            password: data.password,
            role: role
        }
        const companyData = {
            companyName: data.companyName,
            email: data.email,
            password: data.password,
            role: role
        }
        if (role === "user") {
            dispatch(registration(userData))
                .then(res => {
                    if (res?.payload?.status === 200) {
                        setSingIn(!singIn)
                    }
                })
        }
        if (role === "company") {
            dispatch(registration(companyData))
                .then(res => {
                    if (res?.payload?.status === 200) {
                        setSingIn(!singIn)
                    }
                })
        }
    };


    return (
        <div >
            <img
                src="/img/background-2.jpg"
                className="absolute inset-0 z-0 h-full w-full object-cover"
                alt="" />
            <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
            <div className="container mx-auto p-4">
                <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CardHeader
                            variant="gradient"
                            color="blue"
                            className="mb-4 grid h-28 place-items-center"
                        >
                            <Typography variant="h3" color="white">
                                Sign Up
                            </Typography>
                        </CardHeader>
                        <CardBody className="flex flex-col gap-4">
                            <div className="flex gap-10">
                                <Radio
                                    id="candidate"
                                    name="type"
                                    label="Candidate"
                                    ripple={true}
                                    defaultChecked
                                    value="user"
                                    onChange={(e) => setRole(e.target.value)}
                                />
                                <Radio
                                    id="company"
                                    name="type"
                                    label="Company"
                                    value="company"
                                    ripple={true}
                                    onChange={(e) => setRole(e.target.value)}
                                />
                            </div>


                            {role === "user" && <div>
                                <Input
                                    {...register("fname", { required: true })}
                                    variant="standard" type="text" label="First Name*" size="lg" />
                                {errors.fName && <p className='text-red-500 text-xs'>First name field is required</p>}
                            </div>}

                            {role === "user" && <div>
                                <Input
                                    {...register("lname", { required: true })}
                                    variant="standard" label="Last Name*" size="lg" />
                                {errors.lName && <p className='text-red-500 text-xs'>Last name field is required</p>}

                            </div>}


                            {role === "company" && <div>
                                <Input
                                    {...register("companyName", { required: true })}
                                    variant="standard" label="Company Name*" size="lg" />
                                {errors.companyName && <p className='text-red-500 text-xs'>Company name field is required</p>}

                            </div>}


                            <Input
                                {...register("email", { required: true })}
                                variant="standard" type="email" label="Email*" size="lg" />
                            {errors.email && <p className='text-red-500 text-xs'>Email field is required</p>}
                            <Input
                                {...register("password", { required: true })}
                                variant="standard"
                                type="password"
                                label="Password*"
                                size="lg"
                            />
                            {errors.password && <p className='text-red-500 text-xs'>Password is required</p>}
                            <div className="-ml-2.5">
                                <Checkbox
                                    {...register("agree", { required: true })}
                                    label="I agree the Terms and Conditions" />
                                {errors.password && <p className='text-red-500 text-xs'>Check box is required</p>}
                            </div>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button type="submit" variant="gradient" fullWidth>
                                Sign Up
                            </Button>
                            <Typography variant="small" className="mt-6 flex justify-center">
                                Already have an account?

                                <button
                                    onClick={() => setSingIn(!singIn)}
                                    type="button"
                                    className='cursor-pointer text-light-blue-500 ml-3'
                                >
                                    Sign in
                                </button>

                            </Typography>
                        </CardFooter>
                    </form>
                </Card>
            </div>

        </div>
    );
}

export default SignUp;
