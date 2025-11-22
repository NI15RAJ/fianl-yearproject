import React, { useState } from "react";
import AnimatedPage from "../components/ui/AnimatedPage";
import AnimatedCard from "../components/ui/AnimatedCard";
import Button from "../components/ui/Button";
import { Input, Label } from "../components/ui/Input";
import { useAuth } from "../AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(form.email, form.password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AnimatedPage>
      <div className="flex justify-center">
        <AnimatedCard className="w-full max-w-md">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">
            Login to KrishiKart
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Enter your credentials to continue.
          </p>

          {error && (
            <p className="mt-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-900/40 dark:text-red-300">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <Label>Email</Label>
              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label>Password</Label>
              <Input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full mt-2">
              Login
            </Button>
          </form>

          <p className="mt-4 text-center text-sm text-slate-600 dark:text-slate-400">
            New here?{" "}
            <Link to="/signup" className="text-green-700 dark:text-green-400 font-semibold">
              Create an account
            </Link>
          </p>
        </AnimatedCard>
      </div>
    </AnimatedPage>
  );
};

export default Login;
