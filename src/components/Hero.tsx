'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function StatsHero() {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <section className="bg-gray-50 mt-20 py-12 md:py-20 px-4 sm:px-6 lg:px-10">
            <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">


                <motion.div
                    initial={{opacity: 0, y: 40}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="rounded-3xl p-6 md:p-10 shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col justify-center space-y-4 sm:space-y-4"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Автоматическая торговая система <br className="hidden md:block"/> для облигаций
                    </h1>

                    <p className="text-gray-700 text-base sm:text-lg md:text-2xl leading-relaxed">
                        Получайте <span className="font-semibold text-emerald-500">22–35% годовых*</span>: стабильный
                        доход от облигаций + прибыль от робота.
                    </p>

                    <p className="text-gray-400 text-base md:text-xl leading-relaxed">
                        Деньги всегда на вашем брокерском счёте.
                    </p>

                    <a
                        href="https://t.me/copyten_in_bot?start=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r text-lg from-emerald-500 to-green-400 hover:from-emerald-600 hover:to-green-500 text-white font-semibold py-4 px-6 rounded-3xl shadow-md transition-all duration-300 w-full md:w-max inline-block text-center"
                    >
                        Подключить счёт и получить доступ
                    </a>


                    <p className="text-gray-400 text-base text-center md:text-left">(настройка за 2 часа, потом — 15
                        минут
                        в неделю)</p>
                </motion.div>


                <motion.div
                    initial={{opacity: 0, y: 40}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.2}}
                    className="bg-white rounded-3xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 w-full"
                >
                    <div className="relative w-full rounded-4xl overflow-hidden mt-10 aspect-video bg-gray-200">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://rutube.ru/play/embed/dadef7ed04089bb7523dd478f17007fb/?p=L18SGYQ_enK3yD6kyKQKFw"
                            title="Видео"
                            frameBorder="0"
                            allow="clipboard-write; autoplay"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <p className="text-gray-500 text-xl mt-10 text-center">
                        Обучение в чатах — доступ после добавления счёта
                    </p>
                </motion.div>


            </div>
        </section>
    )
}
