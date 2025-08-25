'use client'
import { motion } from "framer-motion";

function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col justify-between h-full rounded-2xl shadow-md border border-gray-200 p-6 bg-white">
            {children}
        </div>
    );
}

function CardContent({ children }: { children: React.ReactNode }) {
    return <div className="flex flex-col h-full justify-between space-y-5">{children}</div>;
}

// Simple inline SVGs to avoid extra deps
const IconUser = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={props.className}>
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-3.33 0-6 2.02-6 4.5V21h12v-2.5c0-2.48-2.67-4.5-6-4.5Z"/>
    </svg>
);
const IconCalendar = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={props.className}>
        <path d="M7 2a1 1 0 0 0-1 1v1H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-1V3a1 1 0 1 0-2 0v1H8V3a1 1 0 0 0-1-1ZM4 10h16v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8Z"/>
    </svg>
);
const IconTrend = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={props.className}>
        <path d="M3 17a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H3Zm2.7-5.3a1 1 0 0 0 1.4 0L9 7.8l2.3 2.3a1 1 0 0 0 1.4 0L16 6.8l3.3 3.3a1 1 0 1 0 1.4-1.4l-4-4a1 1 0 0 0-1.4 0L12 6.6 9.7 4.3a1 1 0 0 0-1.4 0l-3 3a1 1 0 0 0 0 1.4Z"/>
    </svg>
);
const IconQuote = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={props.className}>
        <path d="M7 7h4v10H5V9a2 2 0 0 1 2-2Zm10 0h4v10h-6V9a2 2 0 0 1 2-2Z"/>
    </svg>
);

export default function CasesSection() {
    return (
        <section className="w-full py-16 px-4 bg-gray-50">
            <div className="max-w-[1350px] px-10 mx-auto text-center">
                <motion.h2
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true}}
                    className="text-3xl md:text-4xl font-bold mb-12"
                >
                    Реальные люди. <span className="text-emerald-500">Реальные результаты</span>.
                    <p className="text-base font-normal mt-4 md:text-lg text-gray-600 max-w-2xl mx-auto">
                        Дефолт возможен, но с нашим подходом маловероятен. Мы используем
                        проверенную стратегию управления рисками.
                    </p>
                </motion.h2>


                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    {/* Кейс 1 */}
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.2}}
                        viewport={{once: true}}
                        className="flex"
                    >
                        <Card>
                            <CardContent>
                                {/* Header */}
                                <div className="flex items-center gap-3 text-left">
                                    <div
                                        className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                                        <IconUser className="w-5 h-5"/>
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold">Александр, предприниматель</p>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                            <span className="inline-flex items-center gap-1"><IconCalendar
                                                className="w-4 h-4"/>Март — июнь 2024</span>
                                            <span className="inline-flex items-center gap-1 text-emerald-600"><IconTrend
                                                className="w-4 h-4"/>+15.9% за 4 месяца</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bars */}
                                <div className="mt-4 space-y-2">
                                    {[
                                        {label: "Март", value: "2.1%", width: "21%"},
                                        {label: "Апрель", value: "4.8%", width: "48%"},
                                        {label: "Май", value: "7.2%", width: "72%"},
                                        {label: "Июнь", value: "15.9%", width: "100%"},
                                    ].map((row, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-sm">
                                                <span>{row.label}</span>
                                                <span className="text-emerald-600 font-medium">{row.value}</span>
                                            </div>
                                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{width: 0}}
                                                    whileInView={{width: row.width}}
                                                    viewport={{once: true}}
                                                    transition={{duration: 0.8, ease: "easeOut"}}
                                                    className="h-2 bg-emerald-500 rounded-full"
                                                    style={{width: row.width}}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Quote */}
                                <div
                                    className="flex items-start gap-2 text-gray-700 italic mt-4 border-l-4 border-emerald-500 pl-3 bg-emerald-50/40 rounded-md">
                                    <IconQuote className="w-5 h-5 text-emerald-600 shrink-0"/>
                                    <p>
                                        «Думал, это сложно. Оказалось — настроил за вечер, потом просто раз в неделю
                                        смотрю результаты. Увидел прибыль — всем рекомендую.»
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="mt-6 grid grid-cols-2 gap-4 text-left">
                                    <div className="bg-gray-50 p-3 rounded-xl">
                                        <p className="text-gray-600 text-sm">Стартовый капитал</p>
                                        <p className="font-semibold">800 000 ₽</p>
                                    </div>
                                    <div className="bg-emerald-50 p-3 rounded-xl">
                                        <p className="text-gray-600 text-sm">Прибыль</p>
                                        <p className="font-semibold text-emerald-600">+127 200 ₽</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Кейс 2 */}
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.3}}
                        viewport={{once: true}}
                        className="flex"
                    >
                        <Card>
                            <CardContent>
                                {/* Header */}
                                <div className="flex items-center gap-3 text-left">
                                    <div
                                        className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                                        <IconUser className="w-5 h-5"/>
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold">Елена, финансовый консультант</p>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                            <span className="inline-flex items-center gap-1"><IconCalendar
                                                className="w-4 h-4"/>Январь — июль 2024</span>
                                            <span className="inline-flex items-center gap-1 text-emerald-600"><IconTrend
                                                className="w-4 h-4"/>29% годовых</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bars */}
                                <div className="mt-4 space-y-2">
                                    {[
                                        {month: "Янв", value: "1.8%", width: "18%"},
                                        {month: "Фев", value: "4.2%", width: "42%"},
                                        {month: "Мар", value: "8.5%", width: "85%"},
                                        {month: "Апр", value: "13.1%", width: "90%"},
                                        {month: "Май", value: "18.7%", width: "100%"},
                                        {month: "Июн", value: "24.3%", width: "90%"},
                                        {month: "Июл", value: "29%", width: "100%"},
                                    ].map((row, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-sm">
                                                <span>{row.month}</span>
                                                <span className="text-emerald-600 font-medium">{row.value}</span>
                                            </div>
                                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{width: 0}}
                                                    whileInView={{width: row.width}}
                                                    viewport={{once: true}}
                                                    transition={{duration: 0.8, ease: "easeOut"}}
                                                    className="h-2 bg-emerald-500 rounded-full"
                                                    style={{width: row.width}}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Quote */}
                                <div
                                    className="flex items-start gap-2 text-gray-700 italic mt-4 border-l-4 border-blue-500 pl-3 bg-blue-50/50 rounded-md">
                                    <IconQuote className="w-5 h-5 text-blue-600 shrink-0"/>
                                    <p>
                                        «Работаю по 10 минут в неделю. Результат превзошёл ожидания — стабильная прибыль
                                        без стресса и постоянного мониторинга.»
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="mt-6 grid grid-cols-2 gap-4 text-left">
                                    <div className="bg-gray-50 p-3 rounded-xl">
                                        <p className="text-gray-600 text-sm">Стартовый капитал</p>
                                        <p className="font-semibold">1 200 000 ₽</p>
                                    </div>
                                    <div className="bg-emerald-50 p-3 rounded-xl">
                                        <p className="text-gray-600 text-sm">Прибыль за 7 мес.</p>
                                        <p className="font-semibold text-emerald-600">+348 000 ₽</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Общая статистика клиентов */}
                <motion.div
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.4}}
                    viewport={{once: true}}
                    className="mt-16 bg-white rounded-2xl shadow-md border border-gray-200 p-8"
                >
                    <h3 className="text-2xl font-bold mb-8">Общая статистика клиентов</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <p className="text-emerald-600 font-bold text-2xl">85%</p>
                            <p className="text-gray-600 text-sm">клиентов довольны</p>
                        </div>
                        <div>
                            <p className="text-blue-600 font-bold text-2xl">24%</p>
                            <p className="text-gray-600 text-sm">средняя доходность</p>
                        </div>
                        <div>
                            <p className="text-emerald-600 font-bold text-2xl">2.1%</p>
                            <p className="text-gray-600 text-sm">максимальная просадка</p>
                        </div>
                        <div>
                            <p className="text-yellow-500 font-bold text-2xl">92%</p>
                            <p className="text-gray-600 text-sm">прибыльных месяцев</p>
                        </div>
                    </div>

                    <div className="mt-8 bg-gray-50 p-4 rounded-xl text-sm text-gray-700 text-left">
                        <p className="font-semibold inline">Важное уточнение: </p>
                        Результаты в прошлом не гарантируют прибыль в будущем. Торговля облигациями связана с рисками.
                    </div>

                    <div
                        className="mt-4 bg-emerald-50 text-emerald-700 text-sm font-medium px-4 py-2 rounded-lg inline-flex items-center gap-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path
                                d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm3.7-9.7a1 1 0 0 0-1.4-1.4L9 10.2 7.7 9a1 1 0 1 0-1.4 1.4l2 2a1 1 0 0 0 1.4 0l4-4Z"/>
                        </svg>
                        Результаты основаны на реальных торговых данных
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
