import { NavLink } from 'react-router-dom'
function Footer() {
    return (
        <>
            <div className='w-full'>
                <div className='border-2 border-white py-7 w-full'>
                    <ul className='flex flex-row justify-center items-center gap-5 no-underline'>
                        <li className=' no-underline shadow-white shadow-2xs'>
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    `no-underline font-bold ${isActive ? "text-green-600" : "text-white"}`
                                }
                            >
                                Home
                            </NavLink>

                        </li>

                        <li className='hover:underline shadow-white shadow-2xs'>
                            <NavLink
                                to='/contact'
                                className={({ isActive }) =>
                                    `font-bold  ${isActive ? "text-green-600" : "text-white"} `
                                }
                            >
                                Contact
                            </NavLink>
                        </li>

                        <li className='hover:underline shadow-white shadow-2xs'>
                            <NavLink
                                to='/github'
                                className={({ isActive }) =>
                                    `font-bold ${isActive ? "text-green-600" : "text-white"} `
                                }
                            >
                                GitHub
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer
