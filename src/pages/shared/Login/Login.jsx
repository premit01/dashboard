import { PiWarningCircleBold } from "react-icons/pi";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

import { useState } from "react";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginWthEmailAndPassword } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const onSubmit = data => {
        loginWthEmailAndPassword(data?.email, data?.password)
            .then(result => {
                if (result?.user) {
                    navigate('/dashboard')
                }
            })
            .catch(err => setError(err.code))
    }



    return (
        <div className="md:w-1/2 mx-auto py-10 px-14 rounded my-20 border shadow">
            <h2 className="text-center text-capitalize text-3xl  mb-10">Login Please</h2>

            <form onSubmit={handleSubmit(onSubmit)} action="">
                <div className="relative border mb-5 outline-0 focus:outline-0">

                    <span
                        className="pointer-events-none absolute top-[10px]  inset-y-0 start-3 grid w-10 place-content-start text-gray-500"
                    >
                        <FaUserAlt />
                    </span>

                    <input
                        type="email"
                        className="w-full rounded-md py-2.5  pl-10 shadow-sm sm:text-sm outline-[#adc6ee] hover:border-[#adc6ee]"
                        placeholder="example@gmail.com"
                        {...register("email", { required: true })}

                    />
                    {errors.email && <p className="flex  items-center text-sm text-red-400">
                        <span className="mr-1"><PiWarningCircleBold /></span>
                        <span>Email is required </span>
                    </p>}

                </div>


                <div className="relative border ">

                    <span
                        className="pointer-events-none absolute top-[10px]  inset-y-0 start-3 grid w-10 place-content-start text-gray-500"
                    >
                        < RiLockPasswordFill />
                    </span>

                    <input
                        type="password"
                        className="w-full rounded-md py-2.5  px-10  shadow-sm sm:text-sm outline-[#adc6ee] hover:border-[#adc6ee]"
                        placeholder="Password"
                        {...register("password", { required: true, minLength: 8 })}
                    />
                    {errors.password && <p className="flex  items-center text-sm text-red-400">
                        <span className="mr-1"><PiWarningCircleBold /></span>
                        <span>Password is required and minimum 8 characters</span>
                    </p>}

                </div >
                <input className="btn btn-primary btn-block my-5 rounded-full" type="submit" value='Login' name="" id="" />
                {
                    error && <p className="text-sm text-center text-red-400">{error}</p>
                }

            </form >

            <div className="divider">Or</div>

            <SocialLogin />

            <p className="text-center mt-5">Don not have an account <Link to='/register' className="text-primary">Register</Link></p>
        </div >
    );
};

export default Login;