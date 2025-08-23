"use client";

import { CurrencyDollarIcon, ChartBarIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

const features = [
    {
        name: "Стабильный купонный доход как основа.",
        description: "Каждая облигация приносит фиксированный процент, обеспечивая базовую доходность.",
        icon: CurrencyDollarIcon,
    },
    {
        name: "Дополнительная прибыль от колебаний цен.",
        description: "Рынок облигаций колеблется, и эти движения — источник дополнительного дохода.",
        icon: ChartBarIcon,
    },
    {
        name: "Работает в любой стране, включая Россию.",
        description: "Алгоритм не привязан к конкретной юрисдикции — он универсален и гибок.",
        icon: GlobeAltIcon,
    },
];

export default function WhyItWorksPlaceholder() {
    return (
        <section className="bg-gray-50  py-16 ">
            <div className="mx-auto max-w-[1350px] px-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 lg:gap-y-0">


                    <div className="flex flex-col justify-center space-y-4">

                        <p className="text-2xl sm:text-3xl lg:text-4xl text-center md:text-left font-bold tracking-tight text-gray-900">
                            Это не хайп. Это базовый принцип рынка
                        </p>
                        <p className="mt-2 text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
                            Облигации — надёжный инструмент, но их цены колеблются из-за рыночных факторов.
                            Эти колебания — возможность для дополнительной прибыли. Робот ловит их автоматически.
                        </p>


                        <div className="space-y-4">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="text-gray-700 text-base sm:text-lg font-semibold">{feature.name}</p>
                                        <p className="text-gray-600 text-base sm:text-base mt-1">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm max-w-md">
                            <p className="text-emerald-500 text-lg sm:text-xl font-semibold">
                                Прозрачная автоматическая торговля
                            </p>
                        </div>
                    </div>


                    <div className="flex items-center justify-center">
                        <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl border-2 border-dashed border-gray-300 h-[220px] sm:h-[300px] lg:h-full flex items-center justify-center p-6 sm:p-8">
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl mb-2">📊</div>
                                <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-1">Визуализация данных</h4>
                                <p className="text-gray-500 text-sm sm:text-base">
                                    Графики и панели для анализа работы робота
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
