import { Fragment, useEffect, useState } from "react";
import {
    Button,
    Dialog,
    DialogBody,
    IconButton,
} from "@material-tailwind/react";
import UserProfileUpdateForm from "../ProfileUpdateForm/UserProfileUpdateForm";
import { useForm } from "react-hook-form";
import { useGetMeQuery, useUpdateProfileMutation } from "../../Redux/Features/User/UserApi";
import { useSelector } from "react-redux";
import { useApplyMutation } from "../../Redux/Features/Circular/CircularApi";
import { useParams } from "react-router-dom";

export default function DialogXXL() {
    const [open, setOpen] = useState(false);
    const { id } = useParams();
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();

    const [updateProfile] = useUpdateProfileMutation();
    const { data } = useGetMeQuery();
    const { user } = useSelector(state => state.auth);


    useEffect(() => {
        reset(data?.result?.user)
    }, [reset, data?.result?.user])


    const [apply] = useApplyMutation();

    const onSubmit = async data => {

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

        if (user.role === 'user') {
            await updateProfile(userData)
                .then(res => {
                    if (res?.data?.status === 'success') {
                        apply({ id })
                            .then(res => {
                                if (res?.data?.status === 'success') {
                                    setOpen(false)

                                }
                            })
                    };
                })
        }
    };


    const handleOpen = () => setOpen(true);

    return (
        <Fragment>
            <div >
                <div className="">

                    <Button size="sm" onClick={() => handleOpen()} variant='gradient'>
                        Apply
                    </Button>
                </div>
                <Dialog
                    open={open}
                    size={"xxl"}
                    handler={handleOpen}
                    className=" h-screen  overflow-y-auto "

                >
                    <div className="  flex !justify-between p-2">
                        <p>Apply from for job</p>
                        <div>
                            <IconButton
                                onClick={() => setOpen(false)}
                                variant="outlined" className="text-red-500 font-bold">
                                x
                            </IconButton>
                        </div>
                    </div>
                    <DialogBody divider className="p-1" >


                        {user?.role === 'user' && <UserProfileUpdateForm
                            data={data}
                            handleSubmit={handleSubmit}
                            onSubmit={onSubmit}
                            register={register}
                            setValue={setValue}
                            errors={errors}
                            user={user}
                        />}


                    </DialogBody>

                </Dialog>
            </div>
        </Fragment>
    );
}