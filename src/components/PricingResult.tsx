"use client";

import { motion } from "framer-motion";
import { Server, Percent } from "lucide-react";

export default function PricingBlock() {
    return (
        <section className="bg-gray-50 py-12 px-4 sm:px-6">
            <div className="max-w-[1250px] mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-4"
                >
                    Вы платите только за результат.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-500 text-center text-base sm:text-lg mb-10 sm:mb-12 max-w-3xl mx-auto px-2"
                >
                    Прозрачная схема оплаты: фиксированная плата за сервер и комиссия только с прибыли робота.
                </motion.p>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

                    <div className="flex flex-col gap-6">

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            className="bg-white rounded-2xl p-5 sm:p-6 shadow-md flex flex-col gap-3 flex-1"
                        >
                            <div className="flex items-center gap-3">
                                <Server className="text-emerald-500 w-6 h-6" />
                                <h3 className="text-gray-900 font-semibold text-lg sm:text-xl">Аренда сервера</h3>
                            </div>
                            <p className="text-gray-500 text-sm sm:text-base">Фиксированная плата:</p>
                            <p className="text-emerald-500 font-bold text-xl sm:text-2xl">1 000 ₽</p>
                            <p className="text-gray-400 text-sm">
                                Ежемесячная оплата за работу сервера и доступ к системе. Не зависит от результатов торговли.
                            </p>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-2xl p-5 sm:p-6 shadow-md flex flex-col gap-3 flex-1"
                        >
                            <div className="flex items-center gap-3">
                                <Percent className="text-emerald-500 w-6 h-6" />
                                <h3 className="text-gray-900 font-semibold text-lg sm:text-xl">Комиссия с прибыли</h3>
                            </div>
                            <p className="text-gray-500 text-sm sm:text-base">Только с прибыли робота:</p>
                            <p className="text-emerald-500 font-bold text-xl sm:text-2xl">10%</p>
                            <p className="text-gray-400 text-sm">
                                Берём процент только с дополнительной прибыли от торговли робота. Купонный доход остаётся полностью вашим.
                            </p>
                        </motion.div>
                    </div>


                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-2xl p-5 sm:p-6 shadow-md flex flex-col gap-4"
                    >
                        <h3 className="text-gray-900 font-semibold text-lg sm:text-xl">Пример расчёта</h3>

                        <div className="flex flex-col divide-y divide-gray-100">
                            {[
                                ["Капитал:", "1 000 000 ₽"],
                                ["Прибыль от робота:", "100 000 ₽", "green"],
                                ["Купонный доход:", "80 000 ₽", "green"],
                                ["Аренда сервера:", "-12 000 ₽", "red"],
                                ["Комиссия (10%):", "-10 000 ₽", "red"],
                            ].map(([label, value, color], i) => (
                                <div key={i} className="flex justify-between py-2 text-sm sm:text-base">
                                    <span className="text-gray-600">{label}</span>
                                    <span
                                        className={`px-2 py-1 rounded-lg font-medium ${
                                            color === "green"
                                                ? "bg-green-50 text-green-600"
                                                : color === "red"
                                                    ? "bg-red-50 text-red-500"
                                                    : "text-gray-900"
                                        }`}
                                    >
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-emerald-500/30 rounded-2xl p-3 sm:p-4 mt-4 flex justify-between items-center border border-green-100 text-sm sm:text-base">
                            <span className="font-semibold text-gray-700">Ваша прибыль:</span>
                            <span className="font-bold text-emerald-500 text-lg sm:text-xl">158 000 ₽</span>
                        </div>


                        <div className="flex mt-4 w-full gap-2 flex-col sm:flex-row">
                            <div className="flex-1 bg-emerald-500/30 rounded-2xl text-emerald-500 text-center p-3 sm:p-4">
                                <p className="font-bold text-lg">15.8%</p>
                                <p className="text-gray-600 text-xs">Эффективная ставка</p>
                            </div>
                            <div className="flex-1 bg-blue-500/30 rounded-2xl text-blue-500 text-center p-3 sm:p-4 mt-2 sm:mt-0">
                                <p className="font-bold text-lg">4–7%</p>
                                <p className="text-gray-600 text-xs">Средняя комиссия</p>
                            </div>
                        </div>

                        <div className="bg-emerald-500/30 rounded-xl p-3 text-emerald-500 text-xs mt-4 border border-green-100">
                            Важно: комиссия берётся только с прибыли робота. Если робот не заработал — платите только аренду сервера.
                        </div>
                    </motion.div>
                </div>


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-2xl shadow-md mt-10 sm:mt-12 p-4 sm:p-6"
                >
                    <h4 className="text-gray-900 font-semibold text-center mb-4 sm:mb-6 text-base sm:text-lg">
                        Сравнение с другими решениями
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                        {[
                            ["Управляющие", "15–25%", "годовая комиссия"],
                            ["ПИФы", "2–5%", "+ скрытые комиссии"],
                            ["Наша система", "4–7%", "только с прибыли", true],
                        ].map(([title, percent, note, highlight], i) => (
                            <div
                                key={i}
                                className={`rounded-xl p-4 text-center ${
                                    highlight ? "bg-emerald-100 text-emerald-500" : "bg-gray-50 text-gray-600"
                                }`}
                            >
                                <p className="font-semibold text-lg">{title}</p>
                                <p className="text-sm mt-1">{percent}</p>
                                <p className={`text-xs ${highlight ? "" : "text-gray-400"}`}>{note}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
