"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import CountUp from "react-countup";

const data = [
    { name: "Только облигации", доходность: 1.3 },
    { name: "Стратегия для облигаций (1,2 млн ₽)", доходность: 2.7 },
    { name: "Квартира", доходность: 0.45 }
];

export default function StatsBlock() {
    return (
        <section id='stats' className="bg-gray-50 py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
            <div className="max-w-[1350px] mx-auto">

                <motion.h2
                    initial={{opacity: 0, y: -30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.7}}
                    className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4 sm:mb-6 tracking-tight"
                >
                    Рост уже через <span className="text-emerald-500">месяц!*</span>
                </motion.h2>

                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.8, delay: 0.2}}
                    className="text-gray-500 text-center text-base sm:text-lg mb-10 sm:mb-8 max-w-5xl mx-auto "
                >
                    С 9 июля по 9 августа 2025 года портфель показал уверенный результат с капиталом <strong>1 000 000
                    ₽</strong>:





                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">


                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <h3 className="text-gray-800 font-semibold mb-4 text-base sm:text-lg">
                            Доходность на примере 1 000 000 ₽*
                        </h3>
                        <div className="space-y-5 sm:space-y-6">
                            <div className="flex justify-between text-base sm:text-lg">
                                <span className="text-gray-500">Капитал</span>
                                <span className="font-semibold text-gray-900 text-lg sm:text-xl">
                                    <CountUp end={1000000} separator=" "/> ₽
                                </span>
                            </div>
                            <div className="flex justify-between text-base sm:text-lg">
                                <span className="text-gray-500">Купонный доход</span>
                                <span className="font-semibold text-gray-900 text-lg sm:text-xl">~11 333 ₽</span>
                            </div>
                            <div className="flex justify-between text-base sm:text-lg gap-2">
    <span className="text-gray-500 flex-1 min-w-[120px] break-words">
        Прибыль от стратегии
    </span>
                                <span className="font-semibold text-emerald-500 text-lg sm:text-xl whitespace-nowrap">
        13 333–20 000 ₽
    </span>
                            </div>

                        </div>

                        <motion.div
                            initial={{scale: 0.9, opacity: 0}}
                            animate={{scale: 1, opacity: 1}}
                            transition={{duration: 0.5, delay: 0.3}}
                            className="mt-10 bg-gradient-to-r from-emerald-500 to-green-400 text-white font-bold text-lg sm:text-xl p-4 sm:p-5 rounded-xl sm:rounded-2xl text-center shadow-md"
                        >
                            Итого: 24 666–31 333 ₽*
                        </motion.div>

                        <p className="text-gray-400 text-xs sm:text-sm mt-4 leading-snug">
                            * Данные на основе реальных результатов и экстраполяции.
                        </p>
                    </motion.div>


                    <motion.div
                        initial={{opacity: 0, x: 0}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <h3 className="text-gray-800 font-semibold mb-4 text-base sm:text-lg">
                            Сравнение с квартирой*
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            <strong>Дорогая квартира (7–8 млн ₽)</strong> приносит 30–35 тыс. ₽ в месяц, но требует
                            ремонта раз в 10 лет.
                            <br/><br/>
                            Со стратегией — те же деньги, с такими же рисками и без хлопот, при капитале <strong>в 5 раз
                            меньше* (1,2 млн ₽ против 7–8 млн ₽)</strong>.
                        </p>
                    </motion.div>


                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                        <h3 className="text-gray-800 font-semibold mb-6 text-base sm:text-lg">
                            Доходность в сравнении*
                        </h3>

                        <ResponsiveContainer width="100%" height={220}>
                            <BarChart data={data}>
                                <XAxis dataKey="name" tick={{fontSize: 10}}/>
                                <YAxis domain={[0, 5]} tickFormatter={(val) => `${val}%`}/>
                                <Tooltip formatter={(value) => `${value}%`}
                                         labelFormatter={(name) => `Сценарий: ${name}`}/>
                                <Bar dataKey="доходность" fill="url(#gradient)" radius={[10, 10, 0, 0]}/>
                                <defs>
                                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#10b981" stopOpacity={1}/>
                                        <stop offset="100%" stopColor="#6ee7b7" stopOpacity={0.7}/>
                                    </linearGradient>
                                </defs>
                            </BarChart>
                        </ResponsiveContainer>

                        <div className="text-gray-500 text-xs sm:text-sm text-center mt-6">
                            Период: 9 июля – 9 августа 2025
                        </div>
                        <div className="text-emerald-500 text-center font-bold mt-3 text-lg sm:text-xl">
                            +6.2x против квартиры
                        </div>
                    </motion.div>
                </div>
                <div className="text-center mt-8 mx-auto px-4">
                    <p className="text-gray-500 text-center text-base sm:text-lg mb-4 max-w-6xl mx-auto">
                        С капиталом <strong>1,2 млн ₽</strong> вы получаете стабильный доход <strong>30–35 тысяч
                        ₽</strong> в месяц — сопоставимо с арендой дорогой квартиры, но <strong>без затрат на
                        ремонт</strong>.
                        Стратегия для облигаций с роботом уже доказывает эффективность, с возможностью дальнейшего
                        увеличения прибыли.
                    </p>
                    <span className="text-gray-400 text-base font-semibold">
    Данные экстраполированы с учётом реальных результатов.
  </span>
                </div>

            </div>
        </section>
    );
}
