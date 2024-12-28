import { AnimatePresence, motion, useTransform } from 'motion/react'
import { useEffect, useState } from 'react'

export default function TextTransformation(props: any) {
    const { textScrollHeight } = props
    const words = ['This is a', 'Demo Text']
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [mode, SelectMode] = useState('preview')

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev == 1 ? 0 : prev + 1))
        }, words[currentWordIndex].split(" ").length*700)
        // adjust the timer according to the length of the text
        return () => { clearInterval(interval) }
    }, [scrollY])

    return (
        <div>
            <span className='flex justify-between w-full'>
                <motion.span className='flex gap-4 w-[30%] items-center relative' style={{ marginTop: useTransform(textScrollHeight, [0, 1], [0, 30]), marginBottom: useTransform(textScrollHeight, [0, 1], [0, 30]), height: useTransform(textScrollHeight, [0, 1, 1, 80], [40, 40, 85, 85]) }}>
                    <motion.div style={{ opacity: useTransform(textScrollHeight, [0, 1, 79, 80], [0, 1, 1, 0]), height: useTransform(textScrollHeight, [79, 80], [80, 0]) }} className='w-1 block rounded-md bg-red-400' />
                    <motion.div style={{ height: useTransform(textScrollHeight, [1, 80], [0, 80]) }} className='w-1 rounded-md bg-red-600 absolute top-[0px]' />
                    <span>
                        <motion.h2 style={{ top: useTransform(textScrollHeight, [79, 80], [0, 20]), lineHeight: useTransform(textScrollHeight, [79, 80], [1.5, 0]), color: useTransform(textScrollHeight, [0, 1], ["#6b7280", "white"])}} className='text-2xl leading-10 font-medium'>Text Transformations</motion.h2>
                        <motion.p style={{ display: useTransform(textScrollHeight, [0, 1, 79, 80], ['none', 'block', 'block', 'none']) }} className='block mt-1'>Animate your headings, paragraphs, and words<br />with sleek, captivating text effects.</motion.p>
                    </span>
                </motion.span>
                <motion.span style={{ display: useTransform(textScrollHeight, [0, 1, 80], ['none', 'block', 'none']) }} className='w-[60%] h-[50vh] absolute left-[40%] top-4 flex flex-col border border-gray-700 rounded-md divide-y-2 divide-gray-700 items-start justify-start'>
                    <span className='w-full flex gap-4 text-xl px-4 h-[15%]'>
                        <button onClick={() => { SelectMode('preview') }}>Preview</button>
                        <button onClick={() => { SelectMode('code') }}>Code</button>
                    </span>
                    <motion.span variants={{
                        hidden: { opacity: 0, height: 0, display: 'none' },
                        visible: { opacity: 1, height: '85%', display: 'block' }
                    }} animate={mode == 'preview' ? 'visible' : 'hidden'} transition={{ duration: 0.3 }} className='flex justify-center items-center text-start px-4 py-2'>
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
                    </motion.span>
                    <motion.span variants={{
                        hidden: { opacity: 0, height: 0, display: 'none' },
                        visible: { opacity: 1, height: '85%', display: 'block' }
                    }} animate={mode == 'code' ? 'visible' : 'hidden'} initial='hidden' transition={{ duration: 0.5 }} className='flex justify-center items-center text-center'>
                        code
                    </motion.span>
                </motion.span>
            </span>
        </div>
    )
}