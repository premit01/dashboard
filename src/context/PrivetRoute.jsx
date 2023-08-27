import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth'
import { ImSpinner10 } from "react-icons/im";


const PrivetRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <div>
            <span><ImSpinner10 className='animate-spin text-3xl text-primary absolute top-1/2 left-1/2'></ImSpinner10></span>
        </div>
    }

    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} to='/login' replace></Navigate>
};

export default PrivetRoute;