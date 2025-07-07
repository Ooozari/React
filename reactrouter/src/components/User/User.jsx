import { useParams } from "react-router-dom"
function User() {
    const {userid} = useParams()    // Custom Hook 
    return (
        <div className="text-white text-center">user: {userid}</div>
    )
}

export default User
