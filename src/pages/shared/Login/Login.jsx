import { PiWarningCircleBold } from "react-icons/pi";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerWithEmailAndPassword, logOut } = useAuth()
    const navigate = useNavigate()

    return (
        <div className="md:w-1/2 mx-auto py-10 px-14 rounded my-20 border shadow">
            <h2 className="text-center text-capitalize text-3xl  mb-10">Login Please</h2>

            <form action="">
                <div className="relative border mb-5 outline-0 focus:outline-0">

                    <span
                        className="pointer-events-none absolute top-[10px] left-[10px] inset-y-0 start-0 grid w-10 place-content-start text-gray-500"
                    >
                        <FaUserAlt />
                    </span>

                    <input
                        type="email"
                        placeholder="example@gmail.com"
                        {...register("email", { required: true })}
                        className="w-full rounded-md py-2.5  pl-10 shadow-sm sm:text-sm outline-[#adc6ee] hover:border-[#adc6ee]"

                    />

                </div>


                <div className="relative border ">

                    <span
                        className="pointer-events-none absolute top-[10px] left-[10px] inset-y-0 start-0 grid w-10 place-content-start text-gray-500"
                    >
                        < RiLockPasswordFill />
                    </span>

                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: true })}
                        className="w-full rounded-md py-2.5  px-10  shadow-sm sm:text-sm outline-[#adc6ee] hover:border-[#adc6ee]"
                    />

                </div >
                <input className="btn btn-primary btn-block my-5 rounded-full" type="submit" value='Login' name="" id="" />

            </form >

            <div className="divider">Or</div>

            <SocialLogin />

            <p className="text-center mt-5">Don not have an account <Link to='/register' className="text-primary">Register</Link></p>
        </div >
    );
};

export default Login;