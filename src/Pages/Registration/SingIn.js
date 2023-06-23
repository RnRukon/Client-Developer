import React from "react";
import { useForm } from "react-hook-form";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { getMe, login } from "../../Redux/Features/User/AuthSlice";
import { useLocation, useNavigate } from "react-router-dom";

export function SignIn({ setSingIn, singIn }) {
  const { register, handleSubmit, formState: { errors } } = useForm();


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();





  const onSubmit = async data => {
    dispatch(login(data))
    dispatch(getMe())
      .then(res => {

        if (res?.payload?.data?.status === 'success') {
          navigate(location?.state?.from || '/profile')
        }
      })


  };


  return (
    <>
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
                Sign In
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">

              <Input
                {...register("email", { required: true })}
                variant="standard"
                type="email"
                label="Email*"
                size="lg" />
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
                  {...register("remember", { required: true })}
                  label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button type="submit" variant="gradient" fullWidth>
                Sign In
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Don't have an account?
                <button
                  onClick={() => setSingIn(!singIn)}
                  type="button"
                  className='cursor-pointer text-light-blue-500 ml-3'
                >
                  Sign up
                </button>
              </Typography>
            </CardFooter>
          </form>
        </Card>
      </div >

    </>
  );
}

export default SignIn;
