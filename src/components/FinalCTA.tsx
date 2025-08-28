"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="bg-gradient-to-b from-emerald-50 to-white py-16 sm:py-20 px-4 sm:px-6">
            <div className="max-w-[1200px] mx-auto text-center">

                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight"
                >
                    Начните зарабатывать на{" "}
                    <span className="text-emerald-500">облигациях уже сегодня*</span>
                </motion.h2>


                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-700 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed"
                >
                    Ваши деньги остаются у брокера. Робот помогает зарабатывать больше без лишних рисков.*
                </motion.p>


                <motion.div
                    initial={{scale: 0.9, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.3}}
                >
                    <a
                        href="https://t.me/copyten_in_bot?start=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-base sm:text-lg py-3 sm:py-4 px-6 sm:px-8 rounded-4xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Подключить счёт
                        <motion.div
                            initial={{x: 0}}
                            whileHover={{x: 2}}
                            transition={{type: "spring", stiffness: 300}}
                        >
                            {/* SVG Телеграма */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 240 240"
                                className="w-5 h-5"
                                fill="currentColor"
                            >
                                <path
                                    d="M120,0C53.7,0,0,53.7,0,120s53.7,120,120,120s120-53.7,120-120S186.3,0,120,0z M178.3,84.2l-20.4,96.2 c-1.5,6.9-5.5,8.7-11.1,5.4l-30.7-22.7l-14.8,14.3c-1.6,1.6-3,3-6.1,3l2.2-31.6l57.5-52.1c2.5-2.2-0.5-3.5-3.9-1.3 l-71.1,44.9l-30.6-9.6c-6.7-2.1-6.8-6.7,1.4-9.9l119.8-46.1C176.1,72.3,181,76.5,178.3,84.2z"/>
                            </svg>
                        </motion.div>
                    </a>

                </motion.div>


                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.8, delay: 0.5}}
                    className="text-gray-500 text-xs sm:text-sm mt-6"
                >
                    Бонус: Бесплатное обучение стратегии вместе с роботом
                </motion.p>
            </div>

        </section>
    );
}
