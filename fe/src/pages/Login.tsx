import React, { useState } from "react";
import { Input, Button } from "@components/common";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("login");
  };

  return (
    <>
      <div className="px-5 pt-10">
        <h1 className="mb-5 text-center text-3xl">Login</h1>
        <form onSubmit={handleLogin} className="space-y-3">
          <Input
            type="text"
            placeholder="Email or Tiktok ID"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex">
            <Button fullWidth>Login</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
