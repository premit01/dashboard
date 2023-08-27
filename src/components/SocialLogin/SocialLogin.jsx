import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../hooks/useAuth'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SocialLogin = () => {
    const { logInWithGoogle } = useAuth()
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        logInWithGoogle()
            .then(result => {
                if (result.user) {
                    navigate('/dashboard')
                }
            })
            .catch(error => setError(error?.message))
    }

    return (
        <div>
            <button className="btn btn-block rounded-full">
                <span className="text-xl">
                    <FaApple />
                </span>
                <span className="text-sm">Continue Wth Apple</span>
            </button>
            <button onClick={handleGoogleLogin} className="btn btn-block rounded-full mt-5 relative  bg-[#4285f4] text-white hover:bg-[#246de2]">
                <span className="text-xl p-2.5 border rounded-full bg-base-300 absolute left-1 ">
                    <FcGoogle />
                </span>
                <span className="text-sm text-start">Continue Wth Google</span>
            </button>
            {
                error && <p className="text-small text-center text-red-400">{error}</p>
            }

        </div>
    );
};

export default SocialLogin;