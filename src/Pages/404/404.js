import React from 'react';

const NoteFound = () => {
    return (
        <div className='flex justify-center py-4 h-screen items-center'>
            <div className=' '>
                <img src="/img/580185.png" alt="" />

                <div className=' text-center  mt-3'>
                    <button 
                    onClick={()=>window.history.back()}
                    className='bg-green-500 px-3 text-white'>Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default NoteFound;