"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        { question: "Робот заберёт мои деньги?", answer: "Нет. Деньги на вашем счёте. Доступ только к торгам." },
        { question: "Я не знаю, что такое облигации.", answer: "Не проблема. Есть курс и поддержка." },
        { question: "А если робот не заработает?", answer: "Купонный доход идёт всегда. Нет прибыли — нет комиссии." },
        { question: "Это дорого?", answer: "1000 ₽ + 10% с прибыли. Средняя комиссия — 4–7%." },
        { question: "Могу ли я всё потерять?", answer: "Нет. Потеря одной облигации компенсируется другими." }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 sm:py-24 bg-gray-50">
            <div className="mx-auto max-w-[1350px] px-8 sm:px-6">
                <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-snug">
                            Честно отвечаем на{" "}
                            <span className="text-emerald-500">главные вопросы</span>.
                        </h2>
                        <p className="text-gray-500 text-base sm:text-lg max-w-none sm:max-w-lg">
                            Всё, что вы хотели узнать перед стартом, — без скрытых условий и сложных терминов.
                        </p>
                    </motion.div>


                    <div className="w-full lg:w-1/2">
                        <div className="space-y-4">
                            {faqs.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex justify-between items-center px-4 sm:px-6 py-4 sm:py-5 text-left text-gray-800 font-medium text-base sm:text-lg hover:bg-gray-50 transition"
                                    >
                                        {item.question}
                                        <motion.div
                                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                                        </motion.div>
                                    </button>
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{
                                                    opacity: 1,
                                                    height: "auto",
                                                    transition: {
                                                        opacity: { duration: 0.3 },
                                                        height: { duration: 0.4 }
                                                    }
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    height: 0,
                                                    transition: {
                                                        opacity: { duration: 0.2 },
                                                        height: { duration: 0.3 }
                                                    }
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-gray-600 text-base leading-relaxed">
                                                    {item.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
