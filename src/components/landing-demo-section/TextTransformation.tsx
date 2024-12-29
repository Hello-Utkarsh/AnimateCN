import { AnimatePresence, motion, useTransform } from 'motion/react'
import { useEffect, useState } from 'react'
import DemoPreview from '../DemoPreview'

export default function TextTransformation(props: any) {
    const { textScrollHeight } = props
    const words = ['This is a', 'Demo Text']
    const [currentWordIndex, setCurrentWordIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev == 1 ? 0 : prev + 1))
        }, words[currentWordIndex].split(" ").length * 700)
        return () => { clearInterval(interval) }
    }, [scrollY])

    return (
        <div>
            <span className='flex justify-between w-full'>
                <motion.span className='flex gap-4 w-[30%] items-center relative' style={{ marginTop: useTransform(textScrollHeight, [0, 1], [0, 30]), marginBottom: useTransform(textScrollHeight, [0, 1], [0, 30]), height: useTransform(textScrollHeight, [0, 1, 1, 80], [40, 40, 85, 85]) }}>
                    <motion.div style={{ opacity: useTransform(textScrollHeight, [0, 1, 79, 80], [0, 1, 1, 0]), height: useTransform(textScrollHeight, [79, 80], [80, 0]) }} className='w-1 block rounded-md bg-red-400' />
                    <motion.div style={{ height: useTransform(textScrollHeight, [1, 80], [0, 80]) }} className='w-1 rounded-md bg-red-600 absolute top-[0px]' />
                    <span>
                        <motion.h2 style={{ top: useTransform(textScrollHeight, [79, 80], [0, 20]), lineHeight: useTransform(textScrollHeight, [79, 80], [1.5, 0]), color: useTransform(textScrollHeight, [0, 1], ["#9ca3af", "white"]) }} className='text-2xl leading-10 font-medium'>Text Transformations</motion.h2>
                        <motion.p style={{ display: useTransform(textScrollHeight, [0, 1, 79, 80], ['none', 'block', 'block', 'none']) }} className='block mt-1'>Animate your headings, paragraphs, and words<br />with sleek, captivating text effects.</motion.p>
                    </span>
                </motion.span>
                <DemoPreview style={{ display: useTransform(textScrollHeight, [0, 1, 80], ['none', 'block', 'none']) }} code={'code'} className="w-[60%] h-[50vh] absolute left-[40%] top-4 border border-gray-700 rounded-md divide-y-2 divide-gray-700 items-start justify-start">
                    {Array.from({ length: words[currentWordIndex].length }).map((_, index) => {
                        return (
                            <AnimatePresence mode='wait'>
                                <motion.span key={`${currentWordIndex}-${index}`}
                                    initial={{ rotateX: 90, opacity: 0 }}
                                    whileInView={{ rotateX: 0, opacity: 1 }}
                                    exit={{ rotateX: -90, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut", delay: index * 0.008 }} className="inline-block origin-center w-fit min-w-1 text-2xl">
                                    {words[currentWordIndex][index] || " "}
                                </motion.span>
                            </AnimatePresence>
                        )
                    })}
                </DemoPreview>
            </span>
        </div>
    )
}