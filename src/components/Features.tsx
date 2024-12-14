import { BarChart3, Lock, Zap } from "lucide-react";

const features = [
  {
    name: "Best Rates Guaranteed",
    description: "Our aggregator ensures you always get the most competitive rates for your swaps.",
    icon: BarChart3,
  },
  {
    name: "Secure and Decentralized",
    description: "Your funds remain in your control with our decentralized swapping mechanism.",
    icon: Lock,
  },
  {
    name: "Lightning-Fast Transactions",
    description: "Experience near-instantaneous token swaps with our optimized protocols.",
    icon: Zap,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Features</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center items-center w-12 h-12 bg-light-blue rounded-full mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
