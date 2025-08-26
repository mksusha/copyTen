"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function HowItWorks() {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    const steps = [
        "Анализирует цены облигаций с помощью канального индикатора.",
        "Покупает, когда цена низкая (выставляет лимитную заявку).",
        "Продаёт с заданной индикатором прибылью.",
        "Ограничивает риск на одну облигацию — не больше 2–3% капитала."
    ];

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);


    useEffect(() => {
        if (!leftRef.current || !rightRef.current) return;

        const resizeRight = () => {
            const leftHeight = leftRef.current?.offsetHeight || 0;
            const leftWidth = leftRef.current?.offsetWidth || 0;
            rightRef.current!.style.height = `${leftHeight}px`;
            rightRef.current!.style.width = `${leftWidth}px`;
        };

        resizeRight();
        window.addEventListener("resize", resizeRight);
        return () => window.removeEventListener("resize", resizeRight);
    }, []);

    return (
        <section id="how-it-works" className="py-12 bg-gray-50 md:py-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-30 -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-30 translate-x-16 translate-y-16"></div>

            <div className="max-w-[1350px] px-8 sm:px-6 md:px-10 mx-auto relative z-10">
                <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16">


                    <div ref={leftRef} className="lg:sticky self-start space-y-6 md:space-y-8 h-fit">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                            Не прогноз. <span className="text-emerald-500">Чёткий алгоритм для прибыли</span>.
                        </h3>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg">
                            Робот работает по простому правилу. Каждый шаг подробно описан ниже.
                        </p>

                        <div className="space-y-6 mt-6">
                            {steps.map((step, idx) => (
                                <div key={idx} className="flex items-start gap-4">

                                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-green-600 text-white font-bold text-lg md:text-xl shadow-md">
                                        {idx + 1}
                                    </div>

                                    <p className="text-gray-800 text-base md:text-xl leading-relaxed">{step}</p>
                                </div>
                            ))}
                        </div>


                        {/*<div className="p-4 sm:p-6 bg-gray-50 rounded-2xl md:rounded-3xl border border-gray-200 shadow-md md:shadow-lg mt-6">*/}
                        {/*    <p className="text-emerald-500 text-lg md:text-xl font-semibold text-center">*/}
                        {/*        Это автоматизированная торговля без эмоций. Робот работает 24/7.*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                    </div>


                    <div ref={rightRef} className="flex justify-center items-start mt-8 lg:mt-0">
                        <div className="w-full sm:h-96 h-64 bg-black rounded-3xl">
                            <Image
                                src="/sc9.jpg"
                                alt="Скрин интерфейса робота"
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-lg w-full h-full object-contain"
                            />
                            <div
                                className="p-4 sm:p-6 bg-gray-50 rounded-2xl md:rounded-3xl border border-gray-200 shadow-md md:shadow-lg mt-6">
                                <p className="text-emerald-500 text-lg md:text-xl font-semibold text-center">
                                    Это автоматизированная торговля без эмоций. Робот работает 24/7.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

//
//
// "use client";
//
// import Image from "next/image";
// import { motion } from "framer-motion";
//
// export default function HowItWorks() {
//     const steps = [
//         "Анализирует цены облигаций с помощью канального индикатора.",
//         "Покупает, когда цена низкая (выставляет лимитную заявку).",
//         "Продаёт с заданной индикатором прибылью.",
//         "Ограничивает риск на одну облигацию — не больше 2–3% капитала."
//     ];
//
//     return (
//         <section className="py-12 bg-gray-50 md:py-24 relative overflow-hidden">
//             <div className="absolute top-0 left-0 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-30 -translate-x-16 -translate-y-16"></div>
//             <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-30 translate-x-16 translate-y-16"></div>
//
//             {/* общий контейнер */}
//             <div className="max-w-[1350px] px-6 md:px-10 mx-auto relative z-10">
//
//                 {/* Верхний блок на всю ширину */}
//
//                     <motion.h2
//                         initial={{opacity: 0, y: 20}}
//                         whileInView={{opacity: 1, y: 0}}
//                         transition={{duration: 0.6}}
//                         viewport={{once: true}}
//                         className="text-3xl md:text-4xl text-center font-extrabold mb-12 leading-tight text-gray-900"
//                     >
//                         Не прогноз. <span className="text-emerald-500">Чёткий алгоритм для прибыли</span>.
//                         <p className="text-gray-400 text-lg md:text-xl leading-relaxed mt-4 max-w-4xl mx-auto">
//                             Робот работает по простому правилу. Каждый шаг подробно описан ниже.
//                         </p>
//                     </motion.h2>
//
//
//
//                 {/* Сетка шагов во всю ширину */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-full">
//                     {steps.map((step, idx) => (
//                         <div key={idx} className="flex items-start gap-4">
//                             <div
//                                 className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-green-600 text-white font-bold text-lg shadow-md">
//                                 {idx + 1}
//                             </div>
//                             <p className="text-gray-800 text-base md:text-lg leading-relaxed">{step}</p>
//                         </div>
//                     ))}
//                 </div>
//
//                  Подвал текста
//                 <div className="p-4 sm:p-6 bg-gray-50 rounded-2xl md:rounded-3xl border border-gray-200 shadow-md md:shadow-lg mt-8 w-full">
//                     <p className="text-emerald-500 text-lg md:text-xl font-semibold text-center">
//                         Это автоматизированная торговля без эмоций. Робот работает 24/7.
//                     </p>
//                 </div>
//
//                 {/* Фото на всю ширину */}
//                 <div className="mt-12 w-full h-72">
//                     <Image
//                         src="/sc3.jpg"
//                         alt="Скрин интерфейса робота"
//                         width={1350}
//                         height={300}
//                 className="rounded-2xl shadow-lg w-full h-auto object-contain"
//                 />
//
//             </div>
//
//             </div>
//
//         </section>
//     );
// }
