import { Wallet, ArrowRightLeft, CheckCircle } from 'lucide-react'

const steps = [
  {
    name: 'Connect your wallet',
    description: 'Link your preferred crypto wallet to get started.',
    icon: Wallet,
  },
  {
    name: 'Select the tokens you want to swap',
    description: 'Choose from a wide range of supported tokens.',
    icon: ArrowRightLeft,
  },
  {
    name: 'Confirm the transaction at the best rates',
    description: 'Review and approve the swap with the most competitive rates.',
    icon: CheckCircle,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-4">
          {steps.map((step, index) => (
            <div key={step.name} className="flex flex-col items-center text-center max-w-xs">
              <div className="flex justify-center items-center w-16 h-16 bg-light-purple rounded-full mb-4">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.name}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block text-light-purple text-4xl font-bold mt-4">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

