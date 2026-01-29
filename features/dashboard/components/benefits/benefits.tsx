'use client'

import { Package, RefreshCw, CreditCard, Headphones } from 'lucide-react'

const benefits = [
    {
        icon: Package,
        title: 'Free Shipping',
        description: 'Free Shipping for orders over 700 Taka',
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        icon: RefreshCw,
        title: 'Exchange',
        description: 'Within 3 days for an exchange',
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        icon: CreditCard,
        title: 'Flexible Payment',
        description: 'Pay with Multiple Debit & Credit Cards',
        gradient: 'from-orange-500 to-red-500',
    },
    {
        icon: Headphones,
        title: 'Online Support',
        description: 'Every day (9 AM-10 PM), 7 days a week',
        gradient: 'from-green-500 to-emerald-500',
    },
]

export default function Benefits() {
    return (
        <section className="w-full py-16 px-4 md:py-24 bg-linear-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
            <div className="container  mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl  font-bold text-slate-900 dark:text-white mb-4 text-balance">
                        Why Choose Us
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 text-balance">
                        Experience shopping like never before with our premium features
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Gradient background on hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon with gradient background */}
                                    <div
                                        className={`w-14 h-14 rounded-lg bg-gradient-to-br ${benefit.gradient} p-3 mb-4 flex items-center justify-center`}
                                    >
                                        <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                        {benefit.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>

                                {/* Accent line */}
                                <div
                                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${benefit.gradient} w-0 group-hover:w-full transition-all duration-300`}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
