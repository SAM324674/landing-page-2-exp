"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckIcon, Crown, Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "clsx";

const plans = [
  {
    title: "Wubble Free",
    description: "For designing or engineering AI audio for anything.",
    buttonText: "Get Wubble Free",
    badge: "For one person "
  },
  {
    title: "Wubble Pro",
    description: [
      "For professionals growing their brand or studio with premium audio features."
    ],
    buttonText: "Start free Pro trial",
    badge: "For one person "
  },
  {
    title: "Wubble Teams",
    description: "For teams to create and direct audio together with premium tools and workflows.",
    buttonText: "Start free teams trial",
    badge: "For your team "
  },
  {
    title: "Wubble Enterprise",
    description: "For organizations needing advanced security, API access, and dedicated support.",
    buttonText: "Contact sales",
    badge: "For your team"
  },

];


const PlanCard = ({
  plan,


}: {
  plan: typeof plans[0];


}) => {


  return (
    <div
      className={cn(
        `flex flex-col relative rounded-2xl border-2   lg:rounded-3xl transition-all bg-black/50  ${plan.title === "Wubble Free" ? "border-gray-700" : "border-blue-500/50 ring-blue-500/20 ring-2"}  overflow-hidden px-3 py-2 space-y-2`,


      )}
    >
      {plan.title === "Mastermind" && (
        <div className="absolute top-1/2 inset-x-0 mx-auto h-12 -rotate-45 w-full bg-blue-600 rounded-2xl lg:rounded-3xl blur-[8rem] -z-10"></div>
      )}

      <div className="p-2 flex flex-col items-start w-full relative space-y-5">
        {/* <h2 className="font-normal text-sm text-foreground pt-2">{plan.title}</h2>
        <h3 className="mt-3 text-xl md:text-3xl font-bold">
          ${price * users}
          <span className="text-sm font-normal text-muted-foreground">
            /{billing}
          </span>
        </h3> */}
        <div className="flex justify-between w-full">

          <div className="px-3 text-xs p-1 rounded-full bg-gray-700">{plan.badge}</div>
          {plan.title == "Wubble Free" ?
            <></> :
            <Crown fill="white" size={18} />}
        </div>
        <div className="h-[10rem] flex flex-col gap-9 mt-4">
          <h1>{plan.title}</h1>
          <p className="text-xs md:text-base text-muted-foreground mt-2">
            {plan.description}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start w-full px-2 py-2 h-[5rem] ">
        <Button size="lg" className="w-full">
          {plan.buttonText}
        </Button>
        {/* <div className="h-8 overflow-hidden w-full mx-auto">
            <AnimatePresence mode="wait">
              <motion.span
                key={billing}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="text-sm text-center text-muted-foreground mt-3 mx-auto block"
              >
                {billing === "monthly"
                  ? "Billed monthly"
                  : "Billed in one annual payment"}
              </motion.span>
            </AnimatePresence>
          </div> */}
      </div>
      {/* 
      <div className="flex flex-col items-start w-full p-2 gap-y-2">
        <span className="text-xs text-left mb-2">Includes:</span>
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
          <CheckIcon className="w-3 h-3 flex-shrink-0 text-blue-500 mt-1" />
          <span className="text-left text-sm">{feature}</span>
        </div>        
        ))}

        {plan.description}
      </div> */}
    </div>
  );
};

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [users, setUsers] = useState(1);

  return (
    <section className="py-16 bg-black ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* <div className="flex bg-neutral-800 rounded-full">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                billing === "annual" ? "bg-black text-white" : "text-gray-200 "
              }`}
              onClick={() => setBilling("annual")}
            >
              Annually (Save 20%)
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                billing === "monthly" ? "bg-black text-white" : "text-gray-700"
              }`}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
          </div> */}

          {/* <div className="flex items-center gap-3 border border-gray-700 rounded-full px-4 py-2 text-sm font-normal">
            <span>Users:</span>
            <button
              className="px-2 text-lg"
              onClick={() => setUsers(Math.max(1, users - 1))}
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-6 text-center">{users}</span>
            <button className="px-2 text-lg" onClick={() => setUsers(users + 1)}>
              <Plus className="w-4 h-4" />
            </button>
          </div> */}
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-4">
          {plans.map((plan) => (
            <PlanCard key={plan.title} plan={plan}  />
          ))}
        </div>
      </div>
    </section>
  );
}
