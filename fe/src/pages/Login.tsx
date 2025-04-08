import React, { ChangeEvent, useState } from "react";
import { Input, Button } from "@components/common";

const Login = () => {
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });
  const [disabledBtnLogin, setDisabledBtnLogin] = useState<boolean>(true);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setDisabledBtnLogin(!value.trim() || !form.password.trim());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login with data: ", form);
  };

  return (
    <>
      <div className="px-5 pt-30">
        <h1 className="mb-5 text-center text-3xl">Login</h1>
        <form onSubmit={handleLogin} className="space-y-3">
          <Input
            type="text"
            name="userName"
            placeholder="Email or Tiktok ID"
            value={form.userName}
            onChange={handleInputChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleInputChange}
          />
          <div className="flex">
            <Button className="w-full" disabled={disabledBtnLogin}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
