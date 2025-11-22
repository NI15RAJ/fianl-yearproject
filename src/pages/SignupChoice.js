import React from "react";
import AnimatedPage from "../components/ui/AnimatedPage";
import AnimatedCard from "../components/ui/AnimatedCard";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

const SignupChoice = () => {
  return (
    <AnimatedPage>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
        Create your KrishiKart account
      </h1>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
        Choose how you want to use the platform.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <AnimatedCard>
          <h2 className="text-lg font-semibold text-green-600">Farmer</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            List your produce, manage inventory & track orders.
          </p>
          <Link to="/signup/farmer">
            <Button size="lg" className="mt-4 w-full">
              Sign Up as Farmer
            </Button>
          </Link>
        </AnimatedCard>

        <AnimatedCard delay={0.1}>
          <h2 className="text-lg font-semibold text-orange-500">Buyer</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Search verified farmers and buy in bulk.
          </p>
          <Link to="/signup/buyer">
            <Button variant="secondary" size="lg" className="mt-4 w-full">
              Sign Up as Buyer
            </Button>
          </Link>
        </AnimatedCard>
      </div>
    </AnimatedPage>
  );
};

export default SignupChoice;
