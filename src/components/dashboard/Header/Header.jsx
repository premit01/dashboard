import useAuth from '../../../hooks/useAuth'
import { RxHamburgerMenu } from "react-icons/rx";
import { TbLogout } from "react-icons/tb";
import profile_image from '../../../assets/images/Logo/profile_image.jpg'

const Header = () => {
    const { user, logOut } = useAuth()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('logout')
            })
    }


    return (
        <div className="border-b py-1 lg:px-5 px-3">
            <div className='flex justify-between items-center'>
                <div className='flex items-center relative'>
                    <p className='bg-primary absolute -top-5 -left-5 text-white py-2 px-5'>Notification</p>

                </div>
                <div>
                    {
                        <div className='lg:flex items-center gap-x-2  hidden'>
                            <div>
                                <img className='h-7 w-7 rounded-full' src={user?.photoURL || profile_image} alt="" />
                            </div>
                            <div>
                                <p className='text-lg text-sm'>{user?.displayName}</p>
                                {/* <p>{user?.email}</p> */}
                            </div>
                            <span title='logout' onClick={handleLogOut} className='text-xl cursor-pointer hidden lg:block'>
                                < TbLogout />
                            </span>
                        </div>
                    }
                    <div className='flex items-center gap-x-4'>
                        <img className='h-7 w-7 rounded-full lg:hidden' src={user?.photoURL} alt="" />
                        <span title='logout' onClick={handleLogOut} className='text-xl cursor-pointer  lg:hidden'>
                            < TbLogout />
                        </span>
                        <label htmlFor="my-drawer-2" className='lg:hidden '>
                            <RxHamburgerMenu />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;