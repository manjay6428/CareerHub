import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_BASE_URL } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  const { loading, user } = useSelector((state) => state.auth);
  console.log(loading, user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const res = await axios.get(`${USER_BASE_URL}/logout`);
      toast.success(res.data.message);

      dispatch(setUser(null));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-6">
        {/* Logo */}
        <Link to={"/"}>
          <div>
            <h1 className="text-3xl font-extrabold tracking-wide">
              Job<span className="text-[#f83002]">Portal</span>
            </h1>
          </div>
        </Link>

        {/* Nav Items */}
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-6 text-gray-700">
            {["Home", "Jobs", "Browse"].map((item) => (
              <li
                key={item}
                className="hover:text-[#f83002] transition-colors duration-300 cursor-pointer"
              >
                <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* User Actions */}
          {!user ? (
            <div className="flex items-center gap-4">
              <Link to={"/login"}>
                <Button
                  variant={"outline"}
                  className="border-gray-300 hover:border-gray-400 text-gray-700 cursor-pointer"
                >
                  Login
                </Button>
              </Link>
              <Link to={"/signup"}>
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6] text-white cursor-pointer">
                  Sign Up
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer ring-2 ring-gray-300 hover:ring-gray-400 transition duration-300">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-72 p-4 shadow-lg rounded-xl border bg-white">
                <div>
                  {/* Profile Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-lg">{user.fullName}</h4>
                      <p className="text-sm text-gray-500">
                        Mern Stack Developer
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2 text-gray-600">
                    <div className="flex items-center gap-2 hover:text-[#6A38C2] cursor-pointer">
                      <User2 size={20} />
                      <Button variant={"link"}>
                        <Link to={"/profile"}>View Profile</Link>
                      </Button>
                    </div>

                    <div
                      className="flex items-center gap-2 hover:text-red-500 cursor-pointer"
                      onClick={handleLogout}
                    >
                      <LogOut size={20} />
                      <Button variant={"link"}>Logout</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
