import React, { useState } from "react";
import AnimatedPage from "../components/ui/AnimatedPage";
import AnimatedCard from "../components/ui/AnimatedCard";
import Button from "../components/ui/Button";
import { Input, Label } from "../components/ui/Input";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const FarmerSignup = () => {
  const { signupWithRole } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    village: "",
    district: "",
    state: "",
    commodity: "",
    minQty: "",
    price: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signupWithRole(form.email, form.password, "farmer", {
        name: form.name.trim(),
        mobile: form.mobile,
        village: form.village,
        district: form.district,
        state: form.state,
        commodity: form.commodity,
        minQty: form.minQty,
        price: form.price,
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
            Farmer Registration
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Create your seller profile and start listing your produce.
          </p>

          {error && (
            <p className="mt-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-900/40 dark:text-red-300">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label>Full Name</Label>
                <Input
                  name="name"
                  value={form.name}
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

            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <Label>Village</Label>
                <Input
                  name="village"
                  value={form.village}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label>District</Label>
                <Input
                  name="district"
                  value={form.district}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label>State</Label>
                <Input
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <Label>Commodity</Label>
                <Input
                  name="commodity"
                  value={form.commodity}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label>Min Qty (kg)</Label>
                <Input
                  name="minQty"
                  type="number"
                  value={form.minQty}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label>Base Price (₹/kg)</Label>
                <Input
                  name="price"
                  type="number"
                  value={form.price}
                  onChange={handleChange}
                />
              </div>
            </div>

            <Button type="submit" className="w-full mt-2">
              Create Farmer Account
            </Button>
          </form>
        </AnimatedCard>
      </div>
    </AnimatedPage>
  );
};

export default FarmerSignup;
