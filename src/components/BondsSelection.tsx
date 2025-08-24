"use client";

import { FunnelIcon, ChartBarIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export default function BondsSelection() {
    const steps = [
        {
            label: "5000+ облигаций",
            color: "bg-gray-200 text-gray-700",
            icon: <FunnelIcon className="h-6 w-6 text-gray-500" />,
            size: "w-full",
        },
        {
            label: "2600 бумаг",
            color: "bg-blue-100 text-blue-600",
            icon: <ChartBarIcon className="h-6 w-6 text-blue-500" />,
            size: "w-3/4",
        },
        {
            label: "20–40 бумаг",
            color: "bg-emerald-100 text-emerald-600",
            icon: <CheckCircleIcon className="h-6 w-6 text-emerald-500" />,
            size: "w-1/2",
        },
    ];

    return (
        <section className="bg-gray-50 py-12 px-4 md:px-8">
            <div className="max-w-[1350px] mx-auto text-center mb-10 px-4 sm:px-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    Из 5000+ бумаг — только 20–40 самых надёжных.
                </h2>
                <p className="text-base sm:text-lg md:text-lg text-gray-600">
                    Наш сервис фильтрует облигации по строгим критериям. Остаются только проверенные бумаги.
                </p>
            </div>

            <div className="flex flex-col md:flex-row md:gap-8 max-w-[1350px] mx-auto px-4 sm:px-6">

                {}
                <div className="bg-white rounded-2xl shadow p-6 md:flex-1 mb-8 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-8">Процесс отбора облигаций</h3>
                    <div className="flex flex-col items-center space-y-4">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative ${step.color} ${step.size} rounded-lg py-4 px-6 text-center`}
                                style={{
                                    clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
                                }}
                            >
                                <div className="flex items-center justify-center space-x-2">
                                    {step.icon}
                                    <span className="font-semibold text-base sm:text-lg">{step.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-500 mt-6 text-sm sm:text-base">
                        «Ежедневное обновление. Только самые чистые бумаги»
                    </p>
                </div>

                {}
                <div className="flex-1 space-y-4">
                    <div className="bg-white rounded-2xl shadow p-4 flex items-start space-x-3">
                        <CheckCircleIcon className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-base sm:text-lg text-gray-800">Высокий рейтинг и ликвидность</h4>
                            <p className="text-gray-600 text-sm sm:text-base">Только надёжные эмитенты с активной торговлей</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-4 flex items-start space-x-3">
                        <CheckCircleIcon className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-base sm:text-lg text-gray-800">Нет признаков проблем</h4>
                            <p className="text-gray-600 text-sm sm:text-base">Исключаем бумаги с техническими и финансовыми проблемами</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-4 flex items-start space-x-3">
                        <CheckCircleIcon className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-base sm:text-lg text-gray-800">Ежедневное обновление</h4>
                            <p className="text-gray-600 text-sm sm:text-base">Постоянный мониторинг и актуализация списка</p>
                        </div>
                    </div>

                    <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-4">
                        <h4 className="font-semibold text-base sm:text-lg text-emerald-700">Результат фильтрации</h4>
                        <p className="text-emerald-600 text-sm sm:text-base">
                            Из тысяч доступных облигаций отбираются только те, которые соответствуют всем критериям надёжности и ликвидности. Это гарантирует безопасность торговли.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
