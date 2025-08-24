"use client";

import { motion } from "framer-motion";
import { Shield, Lock, XCircle, Building2, Eye } from "lucide-react";
import { useEffect, useState } from "react";

export default function SecurityBlock() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const cards = [
        {
            icon: <Lock className="w-8 h-8 sm:w-10 sm:h-10" />,
            title: "Доступ только к торгам",
            text: "API позволяет роботу только покупать и продавать. Вывод средств невозможен."
        },
        {
            icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />,
            title: "Безопасный доступ",
            text: "Ваш счёт защищён благодаря безопасному доступу, ограниченному только торговлей."
        },
        {
            icon: <XCircle className="w-8 h-8 sm:w-10 sm:h-10" />,
            title: "Нет доступа к деньгам",
            text: "Мы не можем забрать или перевести ваши средства."
        }
    ];


    return (
        <section className="bg-gray-50 py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-[1350px] mx-auto"
            >
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4 sm:mb-6"
                >
                    Ваши деньги — <span className="text-emerald-500">только у вас</span>.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-500 text-center text-base sm:text-lg mb-10 sm:mb-14 max-w-2xl mx-auto leading-relaxed"
                >
                    Мы не имеем доступа к вашим средствам. Робот подключается через API брокера и имеет права только на торговлю.
                </motion.p>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-14">
                    {cards.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg text-center ${
                                !isMobile ? "hover:shadow-2xl transition-all duration-500" : ""
                            }`}
                            onHoverStart={() => !isMobile && setHoveredIndex(index)}
                            onHoverEnd={() => !isMobile && setHoveredIndex(null)}
                        >
                            <div
                                className={`flex justify-center mb-3 sm:mb-4 text-emerald-500 ${
                                    !isMobile && hoveredIndex === index ? "scale-110" : ""
                                }`}
                            >
                                {item.icon}
                            </div>
                            <h3 className="text-gray-900 font-semibold text-lg sm:text-xl mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-base sm:text-base">{item.text}</p>

                            {!isMobile && hoveredIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.1, scale: 1.1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-emerald-100 pointer-events-none"
                                />
                            )}
                        </motion.div>
                    ))}
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden"
                    >
                        <h4 className="text-gray-900 font-bold text-base sm:text-lg mb-3 sm:mb-4">Полный контроль в ваших руках</h4>
                        <ul className="space-y-3 sm:space-y-4 text-base sm:text-base">
                            <li className="flex items-center gap-2 sm:gap-3 text-gray-700">
                                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 animate-pulse" />
                                Вы — владелец счёта.
                            </li>
                            <li className="flex items-center gap-2 sm:gap-3 text-gray-700">
                                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 animate-pulse" />
                                Робот — только помощник.
                            </li>
                            <li className="flex items-center gap-2 sm:gap-3 text-gray-700">
                                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 animate-pulse" />
                                В любой момент можно отключить.
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden"
                    >
                        <h4 className="text-gray-900 font-bold text-base sm:text-lg mb-3 sm:mb-4">API ключи брокера</h4>
                        <p className="text-gray-500 text-base sm:text-sm mb-4">Только права на торговлю</p>
                        <ul className="text-base sm:text-sm space-y-2">
                            {[
                                { label: "✔ Покупка/продажа", status: "Разрешено", color: "text-emerald-500" },
                                { label: "✔ Просмотр позиций", status: "Разрешено", color: "text-emerald-500" },
                                { label: "✘ Вывод средств", status: "Запрещено", color: "text-red-500" },
                                { label: "✘ Перевод денег", status: "Запрещено", color: "text-red-500" }
                            ].map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    className="flex justify-between"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + idx * 0.1 }}
                                >
                                    <span className="text-gray-700">{item.label}</span>
                                    <span className={`${item.color} font-medium`}>{item.status}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
