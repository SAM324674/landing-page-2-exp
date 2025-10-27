"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CheckIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import NumberFlow from "@number-flow/react"
import { PlanCard } from "./pricing-section"

export type PlanLevel = "free" | "pro" | "teams" | "enterprise"| string

export interface PricingFeature {
  name: string
  included: PlanLevel | null
}

export interface PricingPlan {
  name: string
  level: PlanLevel
  description:string
  badge:string
  buttonText:string
  
  // popular?: boolean
}

export interface PricingTableProps
  extends React.HTMLAttributes<HTMLDivElement> {
  features: PricingFeature[]
  plans: PricingPlan[]
  onPlanSelect?: (plan: PlanLevel) => void
  defaultPlan?: PlanLevel
  defaultInterval?: "monthly" | "yearly"
  containerClassName?: string
  buttonClassName?: string
}

export function PricingTable({
  features,
  plans,
  onPlanSelect,
  defaultPlan = "pro",
  defaultInterval = "monthly",
  className,
  containerClassName,
  buttonClassName,
  ...props
}: PricingTableProps) {
  const [isYearly, setIsYearly] = React.useState(defaultInterval === "yearly")
  const [selectedPlan, setSelectedPlan] = React.useState<PlanLevel>(defaultPlan)

  const handlePlanSelect = (plan: PlanLevel) => {
    setSelectedPlan(plan)
    onPlanSelect?.(plan)
  }

  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "py-10 sm:py-24 md:py-32 ",
        "fade-bottom overflow-hidden pb-0",
        ""
      )}
    >
      <div
        className={cn("w-full mx-auto px-4", containerClassName)}
        {...props}
      >
        

        <div className="flex flex-col sm:flex-row gap-4 mb-8 ">
          {plans.map((plan) => (
            <button
              key={plan.name}
              type="button"
              onClick={() => handlePlanSelect(plan.level)}
              className={cn(
                "flex-1 p-4 rounded-xl text-left transition-all  ",
                "border border-zinc-200 dark:border-[#7076E3]/40",
                selectedPlan === plan.level &&
                  "ring-2 ring-[#7076E3] dark:ring-[#7076E3]",
                  plan.level!="free"?"bg-primary/20":"bg-gray-200"
              )}
            >
              <PlanCard plan={plan}/>
            </button>
          ))}
        </div>

        <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[640px] divide-y divide-zinc-200 dark:divide-zinc-800">
              <div className="flex items-center p-4 bg-zinc-50 dark:bg-zinc-900">
                <div className="flex-1 text-sm font-[600]">Features</div>
                <div className="flex items-center gap-8 text-sm">
                  {plans.map((plan) => (
                    <div
                      key={plan.level}
                      className="w-16 text-center font-[600]"
                    >
                      {plan.name}
                    </div>
                  ))}
                </div>
              </div>
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className={cn(
                    "flex items-center p-4 transition-colors",
                    feature.included === selectedPlan &&
                      "bg-blue-50/50 dark:bg-blue-900/20",
                  )}
                >
                  <div className="flex-1 text-sm">{feature.name}</div>
                  <div className="flex items-center gap-8 text-sm">
                    {plans.map((plan) => (
                      <div
                        key={plan.level}
                        className={cn(
                          "w-16 flex justify-center",
                          plan.level === selectedPlan && "font-medium",
                        )}
                      >
                        {shouldShowCheck(feature.included, plan.level) ? (
                          <CheckIcon className="w-5 h-5 text-[#7076E3]" />
                        ) : (
                          <span className="text-zinc-300 dark:text-zinc-700">
                            -
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button
            className={cn(
              " sm:w-auto bg-primary text-[16px] font-[600] leading-[150%] tracking-[0%] w-[230px] h-[56px]  hover:bg-[#7076E30]/80 px-8 py-2 rounded-[10px] text-white ",
              buttonClassName,
            )}
          >
            Get started with {plans.find((p) => p.level === selectedPlan)?.name}
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function shouldShowCheck(
  included: PricingFeature["included"],
  level: string,
): boolean {
  if (included === "all") return true
  if (included === "pro" && (level === "pro" || level === "all")) return true
  if (
    included === "starter" &&
    (level === "starter" || level === "pro" || level === "all")
  )
    return true
  return false
}
