import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useContext } from "react";
import { FiPower, FiUserPlus } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { AuthProviderContext } from "../providers/AuthProvider";
import { HiLifebuoy } from "react-icons/hi2";
import toast from "react-hot-toast";
import { IoIosArrowDown } from "react-icons/io";


const UserInfo = () =>  {

  const {user, signOutUser} = useContext(AuthProviderContext)

  const handleSignOut = () => {
    signOutUser()
    .then((result) => {
      toast.success("Successfully Sign out")
    }).catch(error => {
      toast.error("Failed to Sign ou, try again")
    })
  } 
  return (
    <div className="text-right">
      <Menu>
        <MenuButton className="inline-flex items-center ">
          <div className="rounded-full flex items-center gap-2">
            <img
              alt="Tailwind CSS Navbar component"
              src={user.photoURL}
              className="w-10 h-10 rounded-full ring-2 ring-offset-2 ring-[#a38ffd]"
            />
            <IoIosArrowDown size={20} />
          </div>
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="mt-5 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <div className="py-4 bg-white shadow border border-gray-200 rounded-md w-full">
              
              {/* More details  */}
            <div className="min-w-60 space-y-1">
                <div className="flex flex-col px-6 py-2 font-medium text-base text-gray-700 gap-2 capitalize transition-colors duration-300 transform  hover:bg-gray-100">
                  <span className="text-lg font-medium text-black/80">{user?.displayName}</span>
                  <span className="lowercase">{user?.email}</span>
                </div>
                <Link to={'/my-profile'} className="flex items-center px-6 py-2 font-medium text-base text-gray-700 gap-2 capitalize transition-colors duration-300 transform  hover:bg-gray-100">
                    <LuUser2 size={20}/>
                    <span className="mx-1">
                       <span>My Profile</span>
                    </span>
                </Link>
                <Link to={'/my-profile/update-profile'} className="flex items-center px-6 py-2 font-medium text-base text-gray-700 gap-2 capitalize transition-colors duration-300 transform  hover:bg-gray-100">
                    <IoSettingsOutline size={20}/>
                    <span className="mx-1">
                    Update Profile
                    </span>
                </Link>
                <Link to={'/'} className="flex items-center px-6 py-2 font-medium text-base text-gray-700 gap-2 capitalize transition-colors duration-300 transform  hover:bg-gray-100">
                    <FiUserPlus size={20}/>
                    <span className="mx-1">
                        Invited People
                    </span>
                </Link>
                <Link to={'/'} className="flex items-center px-6 py-2 font-medium text-base text-gray-700 gap-2 capitalize transition-colors duration-300 transform  hover:bg-gray-100">
                    <HiLifebuoy />
                    <span className="mx-1">
                        Help
                    </span>
                </Link>
                {/* <Dropdown.Item className="gap-2"><HiLifebuoy />Help</Dropdown.Item> */}
                <div className="divider my-0"></div>
                <button onClick={handleSignOut} className="text-red-500 flex items-center px-6 py-2 text-base gap-2 capitalize transition-colors duration-300 transform  hover:bg-gray-100 w-full" >
                  <FiPower />
                    <span className="mx-1">
                        Sign Out
                    </span>
                </button>
            </div>
            </div>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}

export default UserInfo;