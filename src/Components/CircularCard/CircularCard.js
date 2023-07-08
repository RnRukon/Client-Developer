import React from 'react';
import { Card, CardBody,  MenuItem, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import IconMenu from '../../Components/IconMenu/IconMenu';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { MdDeleteForever, MdPendingActions } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import { FcApproval } from 'react-icons/fc';
import { useSelector } from 'react-redux';


const CircularCard = ({ data, handleDelete, handleApprove }) => {

    const { user } = useSelector(state => state.auth);

    const path=window.location.pathname;
   console.log(path);
    return (
        <Card className='relative'>

           {path==='/'?'':<div className='absolute right-0'>

                <IconMenu icon={<BiDotsVerticalRounded size={20} />}>
                    <MenuItem onClick={() => handleDelete(data?._id)} className="flex items-center gap-4 py-2 pr-8 pl-2">
                        <MdDeleteForever color='red' size={25} />
                        <Typography variant="small" color="gray" className="font-normal">
                            Delete
                        </Typography>

                    </MenuItem>


                    {user?.role === "admin" && <MenuItem onClick={() => handleApprove(data?._id)} className="flex items-center gap-4 py-2 pr-8 pl-2">
                        <FcApproval size={25} />
                        <Typography variant="small" color="gray" className="font-normal">
                            approve
                        </Typography>
                    </MenuItem>}

                    <Link to={`/dashboard/circularUpdate/${data?._id}`}>

                        <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">

                            <AiOutlineEdit color='blue' size={25} />
                            <Typography variant="small" color="gray" className="font-normal">
                                Edit
                            </Typography>
                        </MenuItem>

                    </Link>



                </IconMenu>
            </div>
}

            <Link to={`/dashboard/circularDetails/${data?._id}`} >
                <CardBody>
                    <h1 className='text-base font-bold'>{data.jobTitle} ({data?.jobType})</h1>
                    <p className='text-sm'>{data?.company?.companyAddress},({data?.jobLocation})</p>

                </CardBody>
            </Link>
            <div className='absolute right-1 bottom-1 flex gap-1 items-center'>
                {data?.status === 'pending' && <MdPendingActions className='text-yellow-900' />}
                {data?.status === 'approved' && <FcApproval />}
                <p className={` uppercase text-xs flex ${data?.status === 'pending' && "text-yellow-900"}
                 ${data?.status === 'approved' && "text-green-400"}`}> {data?.status}</p>
            </div>
        </Card>
    );
};

export default CircularCard;