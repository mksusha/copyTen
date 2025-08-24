"use client";

import { motion } from "framer-motion";
import { MessageCircle, Video, HeadphonesIcon, BookOpen } from "lucide-react";

export default function SupportBlock() {
    return (
        <section className="bg-gray-50 py-16 px-4 sm:px-6">
            <div className="max-w-[1250px] mx-auto">

                <div className="text-center mb-12">


                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="sm:text-5xl text-3xl max-w-3xl text-black m-auto font-bold mb-2"
                    >
                        Настройка — 2 часа. Потом — 15 минут в неделю.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-gray-600 text-lg max-w-3xl mx-auto"
                    >
                        Не нужно быть экспертом. Мы предоставляем полную поддержку на всех этапах.
                    </motion.p>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {/** Все SVG акцентного цвета */}
                    {/** Чат-бот */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="bg-white rounded-2xl p-6 flex gap-4 items-start shadow"
                    >
                        <div className="bg-emerald-100 p-3 rounded-full">
                            <MessageCircle className="text-emerald-600 w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg mb-1">Чат-бот с инструкциями</h4>
                            <p className="text-gray-600 text-sm">Автоматический помощник ответит на основные вопросы 24/7</p>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="bg-white rounded-2xl p-6 flex gap-4 items-start shadow"
                    >
                        <div className="bg-emerald-100 p-3 rounded-full">
                            <Video className="text-emerald-600 w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg mb-1">Прямые эфиры</h4>
                            <p className="text-gray-600 text-sm">Живое общение и разбор торговых ситуаций 1-2 раза в неделю</p>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="bg-white rounded-2xl p-6 flex gap-4 items-start shadow"
                    >
                        <div className="bg-emerald-100 p-3 rounded-full">
                            <HeadphonesIcon className="text-emerald-600 w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg mb-1">Личная помощь</h4>
                            <p className="text-gray-600 text-sm">Персональная поддержка от экспертов команды в рабочие часы</p>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="bg-white rounded-2xl p-6 flex gap-4 items-start shadow"
                    >
                        <div className="bg-emerald-100 p-3 rounded-full">
                            <BookOpen className="text-emerald-600 w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg mb-1">Курс по облигациям</h4>
                            <p className="text-gray-600 text-sm">Полное обучение от основ до продвинутых стратегий с бессрочным доступом</p>
                        </div>
                    </motion.div>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="shadow-md rounded-2xl p-8 bg-white"
                    >
                        <h4 className="font-extrabold text-2xl text-emerald-900 mb-8">
                            Как проходит настройка:
                        </h4>

                        <div className="space-y-8 text-emerald-900">

                            <div className="flex items-start gap-4">
                                <div className="flex items-center justify-center w-10 h-8 rounded-full bg-emerald-500 text-white font-bold">
                                    1
                                </div>
                                <div>
                                    <p className="font-bold text-lg">
                                        Регистрация и подключение API (30 минут)
                                    </p>
                                    <p className="text-gray-700">
                                        Создаёте API ключи у брокера по нашей инструкции. Вводите их в систему. Готово!
                                    </p>
                                </div>
                            </div>


                            <div className="flex items-start gap-4">
                                <div className="flex items-center justify-center w-10 h-8 rounded-full bg-emerald-500 text-white font-bold">
                                    2
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Настройка параметров (1 час)</p>
                                    <p className="text-gray-700">
                                        Выбираете размер позиций, уровень риска, количество облигаций. Всё интуитивно.
                                    </p>
                                </div>
                            </div>


                            <div className="flex items-start gap-4">
                                <div className="flex items-center justify-center w-10 h-8 rounded-full bg-emerald-500 text-white font-bold">
                                    3
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Тестирование и запуск (30 минут)</p>
                                    <p className="text-gray-700">
                                        Проверяете работу на небольшой сумме. Убеждаетесь, что всё работает правильно.
                                    </p>
                                </div>
                            </div>


                            <div className="flex items-start gap-4 p-5 rounded-xl bg-emerald-50 border border-emerald-100">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-emerald-600">После настройки</p>
                                    <p className="text-gray-700">
                                        Система работает автоматически. Вы заходите раз в неделю на 15 минут,
                                        чтобы проверить результаты и при необходимости скорректировать настройки.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>



                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="rounded-2xl p-4 shadow-md bg-white flex flex-col"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                            Интерфейс поддержки
                        </h3>


                        <div className="rounded-xl overflow-hidden shadow-md">
                            <img
                                src="/images/support-interface.png"
                                alt="Интерфейс поддержки"
                                className="w-30 h-80 object-contain"
                            />
                        </div>


                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="bg-emerald-50 rounded-xl p-4 text-center border border-emerald-100">
                                <p className="text-2xl font-bold text-emerald-600">{"< 2 часов"}</p>
                                <p className="text-sm text-gray-600">Время ответа</p>
                            </div>
                            <div className="bg-emerald-50 rounded-xl p-4 text-center border border-emerald-100">
                                <p className="text-2xl font-bold text-emerald-600">95%</p>
                                <p className="text-sm text-gray-600">Решение проблем</p>
                            </div>
                        </div>

                        <p className="text-center text-gray-500 text-sm mt-4">
                            Реальный интерфейс поддержки — быстро и по делу
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
