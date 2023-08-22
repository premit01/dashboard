import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {
    return (
        <div>
            <button className="btn btn-block rounded-full">
                <span className="text-xl">
                    <FaApple />
                </span>
                <span className="text-sm">Continue Wth Apple</span>
            </button>
            <button className="btn btn-block rounded-full mt-5 relative  bg-[#4285f4] text-white hover:bg-[#246de2]">
                <span className="text-xl p-2.5 border rounded-full bg-base-300 absolute left-1 ">
                    <FcGoogle />
                </span>
                <span className="text-sm text-start">Continue Wth Google</span>
            </button>

        </div>
    );
};

export default SocialLogin;