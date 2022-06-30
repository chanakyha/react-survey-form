import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiRename } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Signup = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignup = () => {
    !details.name && toast.error("Name is required");
    !details.email && toast.error("Email is required");
    !details.password && toast.error("Password is required");

    if (details.email && details.password) {
      toast.success("Login Successful");
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="bg-white rounded-lg p-5 px-7 shadow-lg">
        <div className="font-bold ">
          <div className="text-2xl bg-green-200 m-5 shadow-lg p-5 flex justify-center rounded-lg">
            Logo
          </div>

          <div className="flex flex-col space-y-5 p-5 ">
            <Input
              value={details.name}
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              icon={<BiRename />}
              label="Name"
            />
            <Input
              value={details.email}
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              icon={<MdAlternateEmail />}
              label="Email Adress"
            />
            <Input
              value={details.password}
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              icon={<RiLockPasswordLine />}
              type="password"
              label="Password"
            />
          </div>
          <div className="w-full flex justify-center items-center gap-2">
            <Button onClick={onSignup} color="Login">
              Login
            </Button>
            or
            <button className="text-4xl hover:bg-green-100 hover:rounded-lg p-1">
              <FcGoogle />
            </button>
          </div>
        </div>
        <Link to="/">
          <div className="flex flex-col">
            <button className="hover:bg-red-100 hover:rounded-lg p-2 ease-in-out mt-4 text-red-500 text-sm">
              Sign In
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
