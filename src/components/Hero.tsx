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
                    className="bg-white rounded-3xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 w-full flex flex-col h-full justify-between"
                >
                    <div
                        className="relative w-full flex-1 bg-gray-200 rounded-4xl overflow-hidden flex items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[450px]">
                        {!showVideo ? (
                            <button
                                onClick={() => setShowVideo(true)}
                                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40"
                                aria-label="Play video"
                            >
                                <video
                                    className="absolute inset-0 w-full h-full object-cover"
                                    src="https://copyten.ru/docs/video/invets_robot_presentation_CopyTen_1080p_h264.mp4"
                                    muted
                                    playsInline
                                    preload="metadata"
                                />
                                <span
                                    className="bg-emerald-500 hover:bg-emerald-600 text-white p-5 sm:p-6 md:p-6 rounded-full shadow-lg flex items-center justify-center relative z-10">
                <Play size={36} className="sm:!w-12 sm:!h-12"/>
            </span>
                            </button>
                        ) : (
                            <video
                                className="w-full h-full rounded-4xl object-cover"
                                controls
                                autoPlay
                            >
                                <source
                                    src="https://copyten.ru/docs/video/invets_robot_presentation_CopyTen_1080p_h264.mp4"
                                    type="video/mp4"
                                />
                                Ваш браузер не поддерживает воспроизведение видео.
                            </video>

                        )}
                    </div>


                    <p className="text-gray-500 text-sm mt-4 text-center">
                        Обучение в чатах — доступ после добавления счёта
                    </p>
                </motion.div>


            </div>
        </section>
    )
}
