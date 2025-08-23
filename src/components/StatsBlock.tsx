"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import CountUp from "react-countup";

const data = [
    { name: "Только облигации", value: 1.7 },
    { name: "Облигации + робот", value: 4.7 },
];

export default function StatsBlock() {
    return (
        <section className="bg-gray-50 py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
            <div className="max-w-[1350px] mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4 sm:mb-6 tracking-tight"
                >
                    Уже за полтора месяца — <span className="text-emerald-500">заметный рост</span>.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-500 text-center text-base sm:text-lg mb-10 sm:mb-14 max-w-2xl mx-auto leading-relaxed"
                >
                    С 9 июля 2025 года портфель показывает сильную динамику. Пример для инвестиций:
                </motion.p>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <div className="space-y-5 sm:space-y-6">
                            <div className="flex justify-between text-base sm:text-lg">
                                <span className="text-gray-500">Капитал</span>
                                <span className="font-semibold text-gray-900 text-lg sm:text-xl">
                                    <CountUp end={1000000} separator=" " /> ₽
                                </span>
                            </div>
                            <div className="flex justify-between text-base sm:text-lg">
                                <span className="text-gray-500">Купонный доход</span>
                                <span className="font-semibold text-gray-900 text-lg sm:text-xl">~17 000 ₽</span>
                            </div>
                            <div className="flex justify-between text-base sm:text-lg">
                                <span className="text-gray-500">Прибыль от робота</span>
                                <span className="font-semibold text-emerald-500 text-lg sm:text-xl">20 000–30 000 ₽</span>
                            </div>
                        </div>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-12 sm:mt-20 bg-gradient-to-r from-emerald-500 to-green-400 text-white font-bold text-lg sm:text-xl p-4 sm:p-5 rounded-xl sm:rounded-2xl text-center shadow-md"
                        >
                            Итого за 1.5 месяца: <br />
                            <span className="text-xl sm:text-2xl">
                                37 000–47 000 ₽
                            </span>
                        </motion.div>

                        <p className="text-gray-400 text-xs sm:text-sm mt-4 leading-snug">
                            * Это начальный показатель, который может вырасти с течением времени.
                        </p>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                        <h3 className="text-gray-800 font-semibold mb-6 text-base sm:text-lg">
                            Сравнение доходности
                        </h3>

                        <ResponsiveContainer width="100%" height={180}>
                            <BarChart data={data}>
                                <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                                <YAxis domain={[0, 5]} tickFormatter={(val) => `${val}%`} />
                                <Tooltip formatter={(value) => `${value}%`} />
                                <Bar dataKey="value" fill="url(#gradient)" radius={[10, 10, 0, 0]} />
                                <defs>
                                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#10b981" stopOpacity={1} />
                                        <stop offset="100%" stopColor="#6ee7b7" stopOpacity={0.7} />
                                    </linearGradient>
                                </defs>
                            </BarChart>
                        </ResponsiveContainer>

                        <div className="text-gray-500 text-xs sm:text-sm text-center mt-6">
                            Период: 9 июля 2025 — 21 августа 2025
                        </div>
                        <div className="text-emerald-500 text-center font-bold mt-3 text-lg sm:text-xl">
                            +2.7x эффективность
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
