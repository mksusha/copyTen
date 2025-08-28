"use client";

import {
    ShieldCheckIcon,
    CheckCircleIcon,
    ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import {
    AdjustmentsHorizontalIcon,
    ArrowsRightLeftIcon,
    ChartBarSquareIcon,
} from "@heroicons/react/16/solid";

ChartJS.register(ArcElement, Tooltip);

export default function RiskMinimization() {
    const diversificationData = {
        labels: [
            "ОФЗ (Гос. облигации)",
            "НК Роснефть",
            "Магнит",
            "РУСАЛ",
            "НОВАТЭК",
            "ЯНДЕКС",
            "ГМК Нор.Никель",
            "Сбербанк",
            "Газпром",
            "Татнефть",
        ],
        datasets: [
            {
                data: [70, 3, 3, 3, 3, 3, 3, 3, 3, 3],
                backgroundColor: [
                    "#10B981",
                    ...Array(9).fill("#3B82F6"),
                ],
                borderWidth: 2,
                borderColor: "#fff",
            },
        ],
    };

    const diversificationOptions = {
        responsive: true,
        cutout: "75%",
        plugins: {
            tooltip: { enabled: false },
            legend: { display: false },
        },
    };

    const companies = [
        "НК Роснефть",
        "Магнит",
        "РУСАЛ",
        "НОВАТЭК",
        "ЯНДЕКС",
        "ГМК Нор.Никель",
        "Сбербанк России",
        "Газпром",
        "Татнефть",
    ];

    return (
        <section id='risk-minimization' className="bg-gray-50 py-10 sm:py-16 px-4 md:px-8">
            <div className="max-w-[1350px] px-4 md:px-10 mx-auto">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Единственный риск — дефолт. Но мы его минимизируем.*
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        Дефолт возможен, но с нашим подходом маловероятен. Мы используем
                        проверенную стратегию управления рисками.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch">

                    {}
                    <div className="flex flex-col h-full">
                        <h3 className="text-2xl font-semibold text-gray-900 ml-2 mb-8">
                            Как мы защищаем капитал:
                        </h3>
                        <div className="flex flex-col space-y-4 flex-grow">

                            <div className="bg-white rounded-2xl shadow p-5 flex items-start space-x-4">
                                <AdjustmentsHorizontalIcon className="h-10 w-10 text-emerald-500 flex-shrink-0"/>
                                <div>
                                    <h4 className="font-semibold text-lg text-gray-800">
                                        Жёсткий отбор облигаций
                                    </h4>
                                    <p className="text-gray-600 text-base">
                                        Только надёжные эмитенты с высоким рейтингом и стабильной
                                        финансовой отчётностью. Исключаем проблемные компании на этапе
                                        фильтрации.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl shadow p-5 flex items-start space-x-4">
                                <ArrowsRightLeftIcon className="h-10 w-10 text-emerald-500 flex-shrink-0"/>
                                <div>
                                    <h4 className="font-semibold text-lg text-gray-800">
                                        Диверсификация: ≤3% на бумагу
                                    </h4>
                                    <p className="text-gray-600 text-base">
                                        Капитал распределён между 20–40 облигациями. Даже если одна
                                        обанкротится, остальные 97% капитала продолжают работать.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl shadow p-5 flex items-start space-x-4">
                                <ChartBarSquareIcon className="h-10 w-10 text-emerald-500 flex-shrink-0"/>
                                <div>
                                    <h4 className="font-semibold text-lg text-gray-800">
                                        Ежедневный мониторинг
                                    </h4>
                                    <p className="text-gray-600 text-base">
                                        Постоянно отслеживаем финансовое состояние эмитентов. При
                                        признаках проблем исключаем облигацию из торговли.
                                    </p>
                                </div>
                            </div>

                            <div
                                className="bg-emerald-50 rounded-2xl border border-emerald-200 p-5 flex items-start space-x-4">
                                <ShieldCheckIcon className="h-10 w-10 text-emerald-500 flex-shrink-0"/>
                                <div>
                                    <h4 className="font-semibold text-lg text-emerald-700">
                                        Итоговый результат
                                    </h4>
                                    <p className="text-emerald-600 text-base">
                                        Потеря одной облигации компенсируется прибылью от остальных.
                                        Математически система остаётся прибыльной даже при случайных
                                        дефолтах.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {}
                    <div className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between h-full">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">
                            Диверсификация портфеля
                        </h3>

                        <div className="flex flex-col items-center">
                            <div className="relative w-44 h-44 sm:w-52 sm:h-52 mb-6">
                                <Doughnut
                                    data={diversificationData}
                                    options={diversificationOptions}
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-2xl sm:text-3xl font-bold text-emerald-600">
                                        70%
                                    </span>
                                    <span className="text-gray-500 text-xs sm:text-sm">
                                        ОФЗ
                                    </span>
                                </div>
                            </div>

                            {}
                            <div className="w-full text-sm">
                                <div className="flex items-center space-x-2 mb-4">
                                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                                    <span className="text-gray-800">ОФЗ — государственные облигации <strong>70%</strong></span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                                    {companies.map((company, i) => (
                                        <div key={i} className="flex justify-between">
                                            <div className="flex items-center space-x-2">
                                                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                                                <span className="text-gray-700">{company}</span>
                                            </div>
                                            <span className="text-gray-800">3%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {}
                        <div className="space-y-3 w-full text-sm mt-6">
                            <div className="bg-gray-50 rounded-xl px-4 py-2 flex justify-between">
                                <span className="text-gray-700">Максимум на одну бумагу:</span>
                                <span className="font-semibold text-emerald-600">3%</span>
                            </div>
                            <div className="bg-gray-50 rounded-xl px-4 py-2 flex justify-between">
                                <span className="text-gray-700">Количество позиций:</span>
                                <span className="font-semibold text-emerald-600">20–40</span>
                            </div>

                        </div>

                        {}
                        <div className="mt-6 bg-yellow-50 border border-yellow-200 text-yellow-700 rounded-xl p-3 text-xs text-left flex items-start space-x-2 w-full">
                            <ExclamationTriangleIcon className="h-5 w-5 flex-shrink-0 mt-0.5" />
                            <p>
                                <span className="font-semibold">Пример:</span> Если одна
                                облигация обанкротится (3% потери), остальные 97% продолжат
                                приносить доход и компенсируют убыток за несколько месяцев.
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
