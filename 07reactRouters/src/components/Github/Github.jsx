import React from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

    const data = useLoaderData()
    return (
        <div className='p-4 text-3xl text-center bg-slate-600 text-white'>Github followers : {data.followers} 
        <img src={data.avatar_url} alt="Git Profile Picture" />
        </div>
    )
}

export default Github

export const userGithubInfo = async ()=> {
   const reponse = await fetch(`https://api.github.com/users/ooozari`)
    return reponse.json()
}