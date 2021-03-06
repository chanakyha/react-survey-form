import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  const history = useNavigate();
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const onLogin = () => {
    !details.email && toast.error("Email is required");
    !details.password && toast.error("Password is required");

    if (details.email && details.password) {
      toast.success("Login Successful");

      history("/survey");
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
          <div className="w-full flex justify-center">
            <Button onClick={onLogin} color="Login">
              Login
            </Button>
          </div>
        </div>
        <div className="flex flex-col">
          <button className="hover:bg-red-100 hover:rounded-lg p-2 ease-in-out mt-7 text-red-500 text-sm">
            Forget Password
          </button>
          <button className="text-red-500 hover:bg-red-100 p-2 hover:rounded-lg text-sm">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
