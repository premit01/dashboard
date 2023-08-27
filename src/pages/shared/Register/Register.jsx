import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { PiWarningCircleBold } from "react-icons/pi";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";


const Register = () => {
    const [countries, setCountries] = useState([])
    const [termCheck, setTermCheck] = useState(false)
    const { register,
        handleSubmit,
        formState: { errors } }
        = useForm();

    const { registerWithEmailAndPassword, logOut, profileUpdate } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const onSubmit = data => {
        const fullName = data?.first_name + " " + data?.last_name

        registerWithEmailAndPassword(data?.email, data?.password)
            .then(result => {
                // update profile 
                profileUpdate(fullName)
                    .then(result => {
                        navigate('/dashboard')

                    })
                    .catch(err => setError(err?.code))

            })
            .catch(err => setError(err?.code))
    };




    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])



    return (
        <div className="md:w-1/2 mx-auto border rounded p-10 my-10">
            <h2 className="text-center text-capitalize text-3xl  mb-10">Sign Up Please</h2>

            <SocialLogin />

            <div className="divider">Or</div>
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <div className="md:grid grid-cols-2 gap-7 mb-5">

                    {/* first name field  */}
                    <div>
                        <input
                            className="py-2 rounded-lg border px-3 w-full outline-[#adc6ee] hover:border-[#adc6ee]"
                            type="text"
                            placeholder="First Name"
                            {...register("first_name", { required: true })}
                        />
                        {errors.first_name && <p className="flex  items-center text-sm text-red-400">
                            <span className="mr-1"><PiWarningCircleBold /></span>
                            <span>First Name is required</span>
                        </p>}
                    </div>

                    {/* last name field  */}
                    <div>
                        <input
                            className="py-2 rounded-lg border px-3 w-full outline-[#adc6ee] hover:border-[#adc6ee]"
                            type="text"
                            placeholder="Last  Name"
                            {...register("last_name", { required: true })}
                        />
                        {errors.last_name && <p className="flex  items-center text-sm text-red-400">
                            <span className="mr-1"><PiWarningCircleBold /></span>
                            <span>Last Name is required</span>
                        </p>}
                    </div>
                </div>

                {/* email field  */}
                <div className="mb-5">
                    <input
                        className="py-2  rounded-lg border px-3 w-full outline-[#adc6ee] hover:border-[#adc6ee]"
                        type="email"
                        placeholder="example@gmail.com"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <p className="flex  items-center text-sm text-red-400">
                        <span className="mr-1"><PiWarningCircleBold /></span>
                        <span>Email is required</span>
                    </p>}
                </div>

                {/* password field  */}
                <div className="mb-5">
                    <input
                        className="py-2 rounded-lg border px-3 w-full outline-[#adc6ee] hover:border-[#adc6ee]"
                        type="password"
                        placeholder="Password ( 8 or more characters)"
                        {...register("password", { required: true, minLength: 8 })}
                    />
                    {errors.password && <p className="flex  items-center text-sm text-red-400">
                        <span className="mr-1"><PiWarningCircleBold /></span>
                        <span>Password is required and minimum 8 characters</span>
                    </p>}
                </div>

                {/* country field  */}
                <div className="mb-5 ">
                    <select
                        defaultValue="Bangladesh"
                        className="select outline-0 focus:outline-0 w-full border border-[#adc6ee]"
                        {...register("country", { required: true })}
                    >
                        {
                            countries.map((country, i) => <option
                                key={i}
                                value={country.name.common}
                                selected={country.name.common == "Bangladesh"}
                            >
                                {country.name.common}
                            </option>)
                        }
                    </select>
                    {errors.country && <p className="flex  items-center text-sm text-red-400">
                        <span className="mr-1"><PiWarningCircleBold /></span>
                        <span>Country is required</span>
                    </p>}
                </div>
                <div className="form-control mb-5">
                    <label className="cursor-pointer inline-flex">
                        <input onChange={() => setTermCheck(!termCheck)} type="checkbox" checked={termCheck} className="checkbox checkbox-primary" />
                        <span className="label-text ml-3">Yes, I understand and agree to the Upwork Terms of Service , including the User Agreement and Privacy Policy .</span>

                    </label>
                </div>
                <input disabled={!termCheck} className="btn btn-primary btn-block rounded-full" type="submit" value="Create My Account" name="" id="" />
            </form>
            <p className="text-center mt-5">Already have an account? <Link to='/login' className="text-primary">Log In</Link></p>
        </div>
    );
};

export default Register;