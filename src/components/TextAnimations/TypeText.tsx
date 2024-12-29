import { animate } from "motion";
import { motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

export default function TypeText(props: any) {
    const textIndex = useMotionValue(0);
    const { words } = props

    const delay = 0.1
    const baseText = useTransform(textIndex, (latest) => words[latest] || "");
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        baseText.get().slice(0, latest)
    );
    const updatedThisRound = useMotionValue(true);

    useEffect(() => {
        // @ts-ignore
        animate(count, 100, {
            // type: "tween",
            delay: delay,
            duration: 4,
            // increase the duration and motionvalue according to the length of the text
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
            onUpdate(latest: any) {
                if (updatedThisRound.get() === true && latest > 0) {
                    updatedThisRound.set(false);
                } else if (updatedThisRound.get() === false && latest === 0) {
                    if (textIndex.get() === words.length - 1) {
                        textIndex.set(0);
                    } else {
                        textIndex.set(textIndex.get() + 1);
                    }
                    updatedThisRound.set(true);
                }
            }
        });
    }, []);

    return (
        <motion.span className="inline text-xl">{displayText}</motion.span>
    )
}
