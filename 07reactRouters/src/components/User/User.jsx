import React from 'react'
import { useParams } from 'react-router-dom'


function User() {

    const {userid} = useParams();
    return (
        <div className='bg-gray-600 text-white text-center p-4 text-lg'>User : {userid}</div>
    )
}

export default User
