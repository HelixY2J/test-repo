import { useState } from "react"

type Plan = {
  name: string
  price: number
  features: string[]
}

const plans: Plan[] = [
  { name: "Starter", price: 0, features: ["1 Project", "Basic Support"] },
  { name: "Pro", price: 29, features: ["10 Projects", "Priority Support"] },
  { name: "Enterprise", price: 99, features: ["Unlimited Projects", "24/7 Support"] }
]

export default function PricingPage() {
  const [selected, setSelected] = useState<string | null>(null)

  const handleSelect = (plan: string) => {
    if (selected === plan) {
      setSelected(null)
    }
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Pricing</h1>
      <div className="grid grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`border p-6 rounded ${selected === plan.name && "bg-gray-200"}`}
          >
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p className="text-2xl">${plan.price.toFixed(2)}</p>
            <ul className="mt-4">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded"
              onClick={() => handleSelect(plan.title)}
            >
              Choose
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
