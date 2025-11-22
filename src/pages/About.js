import React from "react";
import AnimatedPage from "../components/ui/AnimatedPage";
import PageHeader from "../components/ui/PageHeader";
import AnimatedCard from "../components/ui/AnimatedCard";

const About = () => {
  return (
    <AnimatedPage>
      <PageHeader
        title="About KrishiKart"
        subtitle="Building a transparent, data-driven agricultural marketplace."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <AnimatedCard>
          <h3 className="font-semibold text-slate-900 dark:text-slate-50">
            Our Mission
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Empower farmers with better price discovery, market access, and
            digital tools while giving buyers a transparent sourcing platform.
          </p>
        </AnimatedCard>

        <AnimatedCard delay={0.05}>
          <h3 className="font-semibold text-slate-900 dark:text-slate-50">
            Who Uses KrishiKart?
          </h3>
          <ul className="mt-2 list-disc pl-4 text-sm text-slate-600 dark:text-slate-300">
            <li>Small and large farmers</li>
            <li>Traders and aggregators</li>
            <li>Retailers, restaurants, processors</li>
          </ul>
        </AnimatedCard>

        <AnimatedCard delay={0.1}>
          <h3 className="font-semibold text-slate-900 dark:text-slate-50">
            Vision
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Create a single, trusted platform where agricultural trade is
            efficient, fairly priced and data-backed.
          </p>
        </AnimatedCard>
      </div>
    </AnimatedPage>
  );
};

export default About;
