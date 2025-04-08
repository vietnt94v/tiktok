import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import { Input, Button } from "@components/common";

const fakeLogin = async (form: { username: string; password: string }) => {
  return new Promise<{ success: boolean; message?: string }>(
    (resolve, reject) => {
      setTimeout(() => {
        if (!navigator.onLine) {
          reject("Network error. Please check your connection.");
          return;
        }

        if (form.username === "admin" && form.password === "123456") {
          resolve({ success: true, message: "Login successful" });
        } else {
          resolve({
            success: false,
            message: "Username or Password is invalid!",
          });
        }
      }, 1000);
    },
  );
};

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [disabledBtnLogin, setDisabledBtnLogin] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setDisabledBtnLogin(!value.trim() || !form.password.trim());
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fakeLogin(form);

      if (res.success) {
        navigate("/");
      } else {
        setError(res.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const { username, password } = form;
    setDisabledBtnLogin(!username.trim() || !password.trim());
  }, [form]);

  return (
    <>
      <div className="px-5 pt-30">
        <h1 className="mb-5 text-center text-3xl">{t('login.title')}</h1>
        <form onSubmit={handleLogin} className="space-y-3">
          <Input
            type="text"
            name="username"
            placeholder="Email or Tiktok ID"
            value={form.username}
            onChange={handleInputChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleInputChange}
          />
          {error && (
            <div className="py-2 text-center text-sm text-red-500">{error}</div>
          )}
          <Button className="w-full" disabled={disabledBtnLogin}>
            {loading ? "Loading..." : "Login"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
