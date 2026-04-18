import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HandWrittenTitleProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function HandWrittenTitle({
    children,
    className = "",
    delay = 0,
}: HandWrittenTitleProps) {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, duration: 2.0, ease: [0.43, 0.13, 0.23, 0.96] },
                opacity: { delay, duration: 0.5 },
            },
        },
    };

    return (
        <div className={`relative ${className}`}>
            <div className="absolute inset-0 z-0 pointer-events-none scale-[1.35]">
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1200 600"
                    preserveAspectRatio="none"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    className="w-full h-full"
                >
                    <motion.path
                        d="M 950 90 
                           C 1250 300, 1050 480, 600 520
                           C 250 520, 150 480, 150 300
                           C 150 120, 350 80, 600 80
                           C 850 80, 950 180, 950 180"
                        fill="none"
                        strokeWidth="18"
                        stroke="#FF6600" // using vivid orange directly instead of relying solely on class
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={draw}
                        className="opacity-90" 
                    />
                </motion.svg>
            </div>
            <div className="relative text-center z-10 flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: delay + 0.2, duration: 0.6 }}
                    className="flex items-start gap-1"
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
}
