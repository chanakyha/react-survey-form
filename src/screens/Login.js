import { Button, Input } from "@material-tailwind/react";
import React from "react";
const Login = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="bg-white rounded-lg p-5 px-7 shadow-lg">
        <div className="font-bold ">
          <div className="text-2xl bg-green-200 m-5 shadow-lg p-5 flex justify-center rounded-lg">
            Logo
          </div>
          <div className="flex flex-col space-y-5 p-5 ">
            <Input icon={() => {}} label="Email Adress" />
            <Input icon={() => {}} type="password" label="Password" />
          </div>
          <div className="w-full flex justify-center">
            <Button color="Login">Login</Button>
          </div>
        </div>
        <button className="mt-7 text-red-500 text-sm">Forget Password</button>
      </div>
    </div>
  );
};

export default Login;
