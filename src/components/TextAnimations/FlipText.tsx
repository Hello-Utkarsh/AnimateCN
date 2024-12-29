import { motion, AnimatePresence } from 'motion/react'
import { useEffect, useState } from 'react'

export default function FlipText(props: any) {
    const { words } = props
    const [currentWordIndex, setCurrentWordIndex] = useState(0)

    useEffect(() => {
        if (words.length > 1) {
            const interval = setInterval(() => {
                setCurrentWordIndex((prev) => (prev == words.length-1 ? 0 : prev + 1))
            }, words[currentWordIndex].split(" ").length * 700)
            // adjust the timer according to the length of the text
            return () => { clearInterval(interval) }
        }
    })
    
    return (
        <div>
            {Array.from({ length: words[currentWordIndex].length }).map((_, index) => {
                return (
                    <AnimatePresence mode='wait'>
                        <motion.span key={`${currentWordIndex}-${index}`}
                            initial={{ rotateX: 90, opacity: 0 }}
                            whileInView={{ rotateX: 0, opacity: 1 }}
                            exit={{ rotateX: -90, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut", delay: index * 0.008 }} className="inline-block origin-center w-fit min-w-1 text-xl">
                            {words[currentWordIndex][index] || " "}
                        </motion.span>
                    </AnimatePresence>
                )
            })}
        </div>
    )
}
