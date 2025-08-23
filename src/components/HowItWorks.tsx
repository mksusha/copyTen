"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Activity, DollarSign, Shield, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    { icon: <Activity size={32} className="text-green-600" />, text: "Анализирует цены облигаций с помощью индикатора." },
    { icon: <DollarSign size={32} className="text-green-600" />, text: "Покупает, когда цена низкая (лимитная заявка)." },
    { icon: <DollarSign size={32} className="text-green-600" />, text: "Продаёт с фиксированной прибылью." },
    { icon: <Shield size={32} className="text-green-600" />, text: "Ограничивает риск на одну облигацию — не больше 2–3% капитала." },
];

export default function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
    const placeholderRef = useRef<HTMLDivElement>(null);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);

        if (!containerRef.current || !leftRef.current || !rightRef.current) return;

        if (!isMobile) {
            // ПК анимация с sticky + ScrollTrigger
            const container = containerRef.current;
            const left = leftRef.current;
            const right = rightRef.current;
            const leftHeight = left.offsetHeight;
            const rightHeight = right.offsetHeight;
            const movementDistance = rightHeight - leftHeight;
            const stickyOffset = parseInt(getComputedStyle(left).top) || 0;

            if (movementDistance > 0) {
                ScrollTrigger.create({
                    trigger: container,
                    start: "top-=110 top",
                    end: () => `+=${movementDistance}`,
                    scrub: true,
                    onUpdate: (self) => {
                        gsap.set(left, { y: self.progress * (movementDistance - stickyOffset) });
                    },
                });
            }

            stepsRef.current.forEach((el) => {
                if (!el) return;
                const card = el.querySelector("div:first-child");
                const arrow = el.querySelector(".arrow");

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        end: "top 65%",
                        scrub: true,
                    },
                });

                tl.fromTo(card, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 });
                if (arrow) {
                    tl.fromTo(arrow, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.3");
                }
            });

            if (placeholderRef.current) {
                gsap.fromTo(
                    placeholderRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: placeholderRef.current, start: "top 90%", end: "top 60%", scrub: true } }
                );
            }
        } else {
            // Мобильная анимация: fade-in для всех элементов
            stepsRef.current.forEach((el, idx) => {
                if (!el) return;
                const card = el.querySelector("div:first-child");
                const arrow = el.querySelector(".arrow");
                gsap.fromTo(card, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: idx * 0.2 });
                if (arrow) gsap.fromTo(arrow, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.4, delay: idx * 0.2 + 0.1 });
            });
            if (placeholderRef.current) {
                gsap.fromTo(placeholderRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: steps.length * 0.2 });
            }
        }

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
            window.removeEventListener("resize", checkMobile);
        };
    }, [isMobile]);

    return (
        <section className="py-12 bg-gray-50  md:py-24  relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-30 -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-30 translate-x-16 translate-y-16"></div>

            <div className="max-w-[1350px] px-8 sm:px-6 md:px-10 mx-auto relative z-10">
                <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16">

                    <div ref={leftRef} className="lg:sticky self-start space-y-6 md:space-y-8 h-fit">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                            Не прогноз. <span className="text-emerald-500">Чёткий алгоритм для прибыли</span>.
                        </h3>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg">
                            Робот работает по простому правилу. Каждый шаг подробно описан справа.
                        </p>
                        <div className="p-4 sm:p-6 bg-gray-50 rounded-2xl md:rounded-3xl border border-gray-200 shadow-md md:shadow-lg">
                            <p className="text-emerald-500 text-lg md:text-xl font-semibold">
                                Это автоматизированная торговля без эмоций. Робот работает 24/7.
                            </p>
                        </div>
                    </div>


                    <div
                        ref={rightRef}
                        className="flex flex-col items-center w-full mt-8 lg:mt-0 space-y-4 md:space-y-4"
                    >
                        {steps.map((step, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col w-full items-center"
                                ref={(el) => { stepsRef.current[idx] = el; }}
                            >
                                <div className="flex items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md border border-gray-100 w-full max-w-full">
                                    <div className="flex-shrink-0 p-2 sm:p-2 bg-green-100 rounded-full">
                                        {idx === 0 && <Activity size={24} className="sm:size-6 text-emerald-500" />}
                                        {idx === 1 && <DollarSign size={24} className="sm:size-6 text-emerald-500" />}
                                        {idx === 2 && <TrendingUp size={24} className="sm:size-6 text-emerald-500" />}
                                        {idx === 3 && <Shield size={24} className="sm:size-6 text-emerald-500" />}
                                    </div>
                                    <p className="text-gray-800 text-base font-medium sm:text-base md:text-lg leading-relaxed">{step.text}</p>
                                </div>
                                {idx < steps.length - 1 && (
                                    <div className="mt-4 sm:mt-4 opacity-0 arrow">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}

                        <div
                            ref={placeholderRef}
                            className="w-full max-w-full mt-4 sm:mt-6 md:mt-10 h-32 sm:h-40 md:h-44 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl md:rounded-3xl flex items-center justify-center border-2 border-dashed border-gray-300 p-3 sm:p-4 md:p-8"
                        >
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2 md:mb-4">📊</div>
                                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mb-1">Интерфейс настроек</h4>
                                <p className="text-gray-500 text-base sm:text-sm md:text-base">Наглядная панель управления роботом</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}