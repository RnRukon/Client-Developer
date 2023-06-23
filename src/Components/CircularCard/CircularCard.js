import React from 'react';
import { Card, CardBody, MenuItem, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import IconMenu from '../../Components/IconMenu/IconMenu';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';


const CircularCard = ({ data, handleDelete }) => {


    return (
        <Card className='relative'>
            <div className='absolute right-0'>

                <IconMenu icon={<BiDotsVerticalRounded size={20} />}>
                    <MenuItem onClick={() => handleDelete(data?._id)} className="flex items-center gap-4 py-2 pr-8 pl-2">
                        <MdDeleteForever size={25} />
                        <Typography variant="small" color="gray" className="font-normal">
                            Delete
                        </Typography>
                    </MenuItem>

                    <Link to={`/dashboard/circularUpdate/${data?._id}`}>

                        <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">

                            <AiOutlineEdit size={25} />
                            <Typography variant="small" color="gray" className="font-normal">
                                Edit
                            </Typography>
                        </MenuItem>

                    </Link>

                </IconMenu>
            </div>
            <Link to={`/dashboard/circularDetails/${data?._id}`} >
                <CardBody>
                    <h1 className='text-base font-bold'>{data.jobTitle} ({data?.jobType})</h1>
                    <p className='text-sm'>{data?.company?.companyAddress},({data?.jobLocation})</p>
                </CardBody>
            </Link>
        </Card>
    );
};

export default CircularCard;