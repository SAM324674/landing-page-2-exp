"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckIcon, Crown, Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "clsx";
import { PricingTable } from "./pricing-table";

const features = [
    { name: "Basic Analytics", included: "starter" },
    { name: "Up to 5 team members", included: "starter" },
    { name: "Basic support", included: "starter" },
    { name: "Advanced Analytics", included: "pro" },
    { name: "Up to 20 team members", included: "pro" },
    { name: "Priority support", included: "pro" },
    { name: "Custom integrations", included: "all" },
    { name: "Unlimited team members", included: "all" },
    { name: "24/7 phone support", included: "all" },
];
const plans = [
  {
    name: "Wubble Free",
    description: "For designing or engineering AI audio for anything.",
    buttonText: "Get Wubble Free",
    level:"free",
    badge: "For one person "
  },
  {
    name: "Wubble Pro",
    description: [
      "For professionals growing their brand or studio with premium audio features."
    ],
    buttonText: "Start free Pro trial",
    level:"pro",
    badge: "For one person "
  },
  {
    name: "Wubble Teams",
    description: "For teams to create and direct audio together with premium tools and workflows.",
    buttonText: "Start free teams trial",
    level:"teams",
    badge: "For your team "
  },
  {
    name: "Wubble Enterprise",
    description: "For organizations needing advanced security, API access, and dedicated support.",
    buttonText: "Contact sales",
    level:"enterprise",
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
        `flex flex-col relative rounded-2xl   lg:rounded-3xl transition-all bg-black/50   overflow-hidden px-3 py-2 space-y-2`,


      )}
    >
      {plan.name === "Mastermind" && (
        <div className="absolute top-1/2 inset-x-0 mx-auto h-12 -rotate-45 w-full bg-blue-600 rounded-2xl lg:rounded-3xl blur-[8rem] -z-10"></div>
      )}

      <div className="p-2 flex flex-col items-start w-full relative space-y-5">
        {/* <h2 className="font-normal text-sm text-foreground pt-2">{plan.name}</h2>
        <h3 className="mt-3 text-xl md:text-3xl font-bold">
          ${price * users}
          <span className="text-sm font-normal text-muted-foreground">
            /{billing}
          </span>
        </h3> */}
        <div className="flex justify-between w-full">

          <div className="px-3 text-xs p-1 rounded-full bg-gray-700">{plan.badge}</div>
          {plan.name == "Wubble Free" ?
            <></> :
            <Crown fill="white" size={18} />}
        </div>
        <div className="h-[10rem] flex flex-col gap-9 mt-4">
          <h1>{plan.name}</h1>
          <p className="text-xs md:text-base text-muted-foreground mt-2">
            {plan.description}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start w-full px-2 py-2 h-[5rem] ">
        <Button size="lg" className="w-full rounded-full">
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
      
    </div>
  );
};

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [users, setUsers] = useState(1);

  return (
    <section className="py-10 bg-black  w-full ">
      <div className="w-full  mx-auto px-6">
        {/* Controls */}
        

        {/* Grid */}
        {/* <div className="grid gap-6 md:grid-cols-4">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan}  />
          ))}
        </div> */}
        <PricingTable  features={features} plans={plans}/>
      </div>
    </section>
  );
}
export {PlanCard}