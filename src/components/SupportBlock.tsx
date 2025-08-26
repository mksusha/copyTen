"use client";

import { motion } from "framer-motion";
import { MessageCircle, Video, HeadphonesIcon } from "lucide-react";

export default function SupportBlock() {
    return (
        <section id='support' className="bg-gray-50 py-16 px-4 sm:px-6">
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

                {}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {}
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
                            <h4 className="font-semibold text-lg mb-1">Поддержка и обучение</h4>
                            <p className="text-gray-600 text-sm">
                                Обучение использованию системы доступно в закрытом чате с инструкциями.
                            </p>
                        </div>
                    </motion.div>

                    {}
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
                            <p className="text-gray-600 text-sm">
                                Живое общение и разбор торговых ситуаций 1-2 раза в неделю.
                            </p>
                        </div>
                    </motion.div>

                    {}
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
                            <p className="text-gray-600 text-sm">
                                Персональная поддержка от экспертов команды в рабочие часы.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {}
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
                            {}
                            {[
                                {
                                    step: 1,
                                    title: "Регистрация и подключение API (30 минут)",
                                    desc: "Создаёте API ключи у брокера по нашей инструкции. Вводите их в систему. Готово!"
                                },
                                {
                                    step: 2,
                                    title: "Настройка параметров (1 час)",
                                    desc: "Выбираете размер позиций, уровень риска, количество облигаций. Всё интуитивно."
                                },
                                {
                                    step: 3,
                                    title: "Тестирование и запуск (30 минут)",
                                    desc: "Проверяете работу на небольшой сумме. Убеждаетесь, что всё работает правильно."
                                }
                            ].map((item) => (
                                <div key={item.step} className="flex items-start gap-4">
                                    <div className="flex items-center justify-center w-10 h-8 rounded-full bg-emerald-500 text-white font-bold">
                                        {item.step}
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">{item.title}</p>
                                        <p className="text-gray-700">{item.desc}</p>
                                    </div>
                                </div>
                            ))}

                            {}
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

                    {}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="rounded-2xl p-4 shadow-md bg-white flex flex-col"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                            Интерфейс поддержки
                        </h3>

                        <div className="rounded-3xl overflow-hidden shadow-md">
                            <img
                                src="/sc5.jpg"
                                alt="Интерфейс поддержки"
                                className="w-full sm:h-[32rem] h-auto rounded-3xl"
                            />
                        </div>

                        {}
                        <p className="text-center text-gray-500 text-sm mt-4">
                            В нашем чате вам помогут с вашим вопросом как поддержка, так и другие пользователи сообщества.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
