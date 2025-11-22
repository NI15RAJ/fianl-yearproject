import React from "react";
import AnimatedPage from "../components/ui/AnimatedPage";
import AnimatedCard from "../components/ui/AnimatedCard";
import PageHeader from "../components/ui/PageHeader";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <AnimatedPage>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="flex-1">
          <PageHeader
            title={
              <>
                Welcome to{" "}
                <span className="text-green-600 dark:text-green-400">
                  KrishiKart
                </span>
              </>
            }
            subtitle="Digital marketplace connecting farmers and buyers with transparent pricing and real-time mandi data."
          />

          <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-700 dark:text-slate-300 sm:text-sm">
            <span className="rounded-full bg-white px-3 py-1 shadow-sm dark:bg-slate-900/70">
              ✅ Trusted & Secure
            </span>
            <span className="rounded-full bg-white px-3 py-1 shadow-sm dark:bg-slate-900/70">
              📊 Live Market Insights
            </span>
            <span className="rounded-full bg-white px-3 py-1 shadow-sm dark:bg-slate-900/70">
              🔗 Direct Farmer–Buyer Connect
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link to="/signup/farmer">
              <Button size="lg">Join as Farmer</Button>
            </Link>
            <Link to="/signup/buyer">
              <Button variant="outline" size="lg">
                Join as Buyer
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <AnimatedCard delay={0.05}>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
              For Farmers
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              List your crops, set quantity & base price, and get matched with
              serious buyers.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.12}>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
              For Buyers
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Search across locations, compare offers & source directly from
              verified farmers.
            </p>
          </AnimatedCard>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Hero;
