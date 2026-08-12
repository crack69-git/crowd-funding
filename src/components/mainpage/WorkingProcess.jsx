import React from "react";
import { Card } from "@heroui/react";
import { FaHandHoldingDollar, FaMagnifyingGlass } from "react-icons/fa6";
import { LuChartNoAxesCombined } from "react-icons/lu";

const steps = [
  {
    id: 1,
    title: "1. Choose a Project",
    description:
      "Browse hundreds of vetted campaigns across various categories that align with your passions.",
    icon: FaMagnifyingGlass,
    iconBg: "bg-emerald-100/70",
    iconColor: "text-emerald-700",
  },
  {
    id: 2,
    title: "2. Contribute Credits",
    description:
      "Securely fund projects using our transparent credit system. Every contribution counts.",
    icon: FaHandHoldingDollar,
    iconBg: "bg-blue-600",
    iconColor: "text-white",
  },
  {
    id: 3,
    title: "3. See the Impact",
    description:
      "Receive regular updates and track the real-world progress of the projects you've supported.",
    icon: LuChartNoAxesCombined,
    iconBg: "bg-amber-700",
    iconColor: "text-white",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          How Crowdfundly Works
        </h2>
        <p className="mt-3 text-base text-slate-600 max-w-xl mx-auto">
          Three simple steps to start making a tangible impact.
        </p>

        {/* Steps Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card
                key={step.id}
                shadow="none"
                className="border-none bg-transparent text-center items-center"
              >
                <div className="p-0 flex flex-col items-center">
                  {/* Icon Circle */}
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center ${step.iconBg} mb-6 transition-transform hover:scale-105`}
                  >
                    <Icon className={`w-9 h-9 ${step.iconColor}`} />
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
