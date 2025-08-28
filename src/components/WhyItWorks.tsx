// "use client";
//
// import {
//     CurrencyDollarIcon,
//     ArrowsUpDownIcon,
//     ScaleIcon,
//     CheckBadgeIcon,
// } from "@heroicons/react/24/outline";
//
// const features = [
//     {
//         name: "Стабильный купонный доход как основа.",
//         description: "Каждая облигация приносит фиксированный процент, обеспечивая базовую доходность.",
//         icon: CurrencyDollarIcon,
//     },
//     {
//         name: "Колебания цен — это возможность.",
//         description: "Даже самые надёжные облигации имеют предсказуемые движения цен, которые робот использует для прибыли.",
//         icon: ArrowsUpDownIcon,
//     },
//     {
//         name: "Фундаментальный подход.",
//         description:
//             "Цены облигаций всегда движутся вверх и вниз — как волны: быстрый рост сменяется небольшой коррекцией. Эти колебания создают возможности для прибыли, а наш робот их улавливает. Стратегия опирается на стабильность купонного дохода и алгоритмическую торговлю, минимизирующую человеческие ошибки.",
//         icon: ScaleIcon,
//     },
//     {
//         name: "Доказанная эффективность.",
//         description:
//             "Стратегия успешно работает в России и на международных рынках, подтверждена бэктестом за 2018–2024 годы.",
//         icon: CheckBadgeIcon,
//     },
// ];
//
// export default function WhyItWorksPlaceholder() {
//     return (
//         <section className="bg-gray-50 py-16">
//             <div className="mx-auto max-w-[1350px] px-8 sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 lg:gap-y-0">
//
//                     <div className="flex flex-col justify-center space-y-4">
//                         <p className="text-2xl sm:text-3xl lg:text-4xl text-center md:text-left font-bold tracking-tight text-gray-900">
//                             Это не хайп. Это базовый принцип рынка
//                         </p>
//                         <p className="mt-2 text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
//                             Облигации — надёжный инструмент, но их цены колеблются из-за рыночных факторов.
//                             Эти колебания — возможность для дополнительной прибыли. Робот ловит их автоматически.
//                         </p>
//
//                         <div className="space-y-4">
//                             {features.map((feature, idx) => (
//                                 <div key={idx} className="flex items-start gap-3">
//                                     <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-500 flex-shrink-0 mt-1" />
//                                     <div>
//                                         <p className="text-gray-700 text-base sm:text-lg font-semibold">{feature.name}</p>
//                                         <p className="text-gray-600 text-base sm:text-base mt-1">{feature.description}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//
//                         <div className="p-4 bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm max-w-md">
//                             <p className="text-emerald-500 text-lg sm:text-xl font-semibold">
//                                 Прозрачная автоматическая торговля
//                             </p>
//                         </div>
//                     </div>
//
//                     <div className="flex items-center justify-center">
//                         <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl border-2 border-dashed border-gray-300 h-[220px] sm:h-[300px] lg:h-full flex items-center justify-center p-6 sm:p-8">
//                             <div className="text-center">
//                                 <div className="text-2xl sm:text-3xl mb-2">📊</div>
//                                 <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-1">Визуализация данных</h4>
//                                 <p className="text-gray-500 text-sm sm:text-base">
//                                     Графики и панели для анализа работы робота
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//
//                 </div>
//             </div>
//         </section>
//     );
// }
"use client";
import Image from "next/image";
import { useState } from "react";
import {
    CurrencyDollarIcon,
    ArrowsUpDownIcon,
    ScaleIcon,
    CheckBadgeIcon
} from "@heroicons/react/24/outline";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const features = [
    { name: "Стабильный купонный доход как основа.", description: "Каждая облигация приносит фиксированный процент, обеспечивая базовую доходность.", icon: CurrencyDollarIcon },
    { name: "Колебания цен — это возможность.", description: "Даже самые надёжные облигации имеют предсказуемые движения цен, которые робот использует для прибыли.", icon: ArrowsUpDownIcon },
    { name: "Фундаментальный подход.", description: "Цены облигаций всегда движутся вверх и вниз — как волны: быстрый рост сменяется небольшой коррекцией. Эти колебания создают возможности для прибыли, а наш робот их улавливает. Стратегия опирается на стабильность купонного дохода и алгоритмическую торговлю, минимизирующую человеческие ошибки.", icon: ScaleIcon },
    { name: "Доказанная эффективность.*", description: "Стратегия успешно работает в России и на международных рынках, подтверждена бэктестом за 2018–2024 годы.", icon: CheckBadgeIcon },
];

export default function WhyItWorksPlaceholder() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id='why-it-works' className="bg-gray-50 py-10 sm:py-16">
            <div className="mx-auto max-w-[1350px] px-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 lg:gap-y-0">

                    {/* Левая часть */}
                    <div className="flex flex-col justify-center space-y-6">
                        <p className="text-2xl sm:text-3xl lg:text-4xl text-center md:text-left font-bold tracking-tight text-gray-900">
                            Это не хайп. Это базовый принцип рынка
                        </p>

                        <div className="space-y-4">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="text-gray-700 text-base sm:text-xl font-semibold">{feature.name}</p>
                                        <p className="text-gray-600 text-base sm:text-lg mt-1">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Правая часть */}
                    <div className="flex flex-col items-center justify-center space-y-6 w-full">
                        <p className="text-left text-base sm:text-xl text-gray-600 leading-relaxed w-full">
                            Облигации — надёжный инструмент, но их цены колеблются из-за рыночных факторов. Эти
                            колебания — возможность для дополнительной прибыли. Робот ловит их автоматически.
                        </p>

                        <div className="w-full relative cursor-pointer" onClick={() => setIsModalOpen(true)}>
                            <Image
                                src="/sc4.png"
                                alt="Скрин интерфейса робота"
                                width={1350}
                                height={700}
                                className="rounded-2xl h-80 bg-black sm:rounded-3xl w-full object-cover shadow-lg"
                            />
                            {/* Иконка увеличения всегда видна */}
                            <MagnifyingGlassIcon
                                className="absolute top-4 right-4 h-10 w-10 text-white bg-emerald-500/50 p-1 rounded-full"/>
                        </div>


                        <div
                            className="p-4 bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm w-full">
                            <p className="text-emerald-500 text-lg sm:text-xl font-semibold text-center">
                                Прозрачная автоматическая торговля
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Модальное окно */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
                        <XMarkIcon
                            className="absolute top-4 right-4 h-10 w-10 text-white cursor-pointer"
                            onClick={() => setIsModalOpen(false)}
                        />
                        <Image
                            src="/sc6.png" // здесь ваш увеличенный скрин
                            alt="Полный скрин интерфейса робота"
                            width={1920}
                            height={1080}
                            className="rounded-3xl object-contain w-full max-h-[90vh]"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
