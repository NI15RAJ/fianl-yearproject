import React, { useState } from "react";
import AnimatedPage from "../components/ui/AnimatedPage";
import AnimatedCard from "../components/ui/AnimatedCard";
import Button from "../components/ui/Button";
import { Input, Label } from "../components/ui/Input";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const BuyerSignup = () => {
  const { signupWithRole } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    gst: "",
    address: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signupWithRole(form.email, form.password, "buyer", {
        name: form.name.trim(),
        mobile: form.mobile,
        gst: form.gst,
        address: form.address,
      });

      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AnimatedPage>
      <div className="flex justify-center">
        <AnimatedCard className="w-full max-w-2xl">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">
            Buyer Registration
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            For traders, wholesalers and bulk buyers.
          </p>

          {error && (
            <p className="mt-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-900/40 dark:text-red-300">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <Label>Full Name</Label>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
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
                <Label>Mobile Number</Label>
                <Input
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <Label>GST Number (optional)</Label>
              <Input
                name="gst"
                value={form.gst}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label>Business Address</Label>
              <Input
                name="address"
                value={form.address}
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
              Create Buyer Account
            </Button>
          </form>
        </AnimatedCard>
      </div>
    </AnimatedPage>
  );
};

export default BuyerSignup;
