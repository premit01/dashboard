import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    return (
        <div className="md:w-3/4 mx-auto border rounded p-10 mt-10">
            <h2 className="text-center text-capitalize text-3xl  mb-10">Sign Up Please</h2>
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
                <div className="divider">Or</div>
            </div>

            <form action="">
                <div className="md:grid grid-cols-2 gap-7 mb-5">

                    {/* first name field  */}
                    <input
                        className="py-2 border px-3 w-full outline-[#adc6ee] hover:border-[#adc6ee]"
                        type="text"
                        placeholder="First Name"
                    />

                    {/* last name field  */}
                    <input
                        className="py-2 border px-3 w-full outline-[#adc6ee] hover:border-[#adc6ee]"
                        type="text"
                        placeholder="Last  Name"
                    />
                </div>

                {/* email field  */}
                <div className="mb-5">
                    <input
                        className="py-2  border px-3 w-full outline-[#adc6ee] hover:border-[#adc6ee]"
                        type="email"
                        placeholder="example@gmail.com"
                    />
                </div>

                {/* password field  */}
                <div className="mb-5">
                    <input
                        className="py-2 border px-3 w-full outline-[#adc6ee] hover:border-[#adc6ee]"
                        type="password"
                        placeholder="Password ( 8 or more characters)"
                    />
                </div>

                {/* country field  */}
                <div className="mb-5 ">
                    <select className="select select-ghost w-full border border-[#adc6ee]">
                        <option disabled selected>Pick the best JS framework</option>
                        <option>Svelte</option>
                        <option>Vue</option>
                        <option>React</option>
                    </select>
                </div>
                <input className="btn btn-primary btn-block rounded-full" type="submit" value="Create My Account" name="" id="" />
            </form>
        </div>
    );
};

export default Register;