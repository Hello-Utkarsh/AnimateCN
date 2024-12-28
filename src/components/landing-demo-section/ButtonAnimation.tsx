import { motion, useTransform } from 'motion/react'
import { useState } from 'react'

export default function ButtonAnimation(props: any) {
    const { scrollY } = props
    const buttonScrollHeight = useTransform(scrollY, [1230, 1459, 1460], [0, 80, 0])
    const [mode, SelectMode] = useState('preview')

    return (
        <div>
            <span className='flex justify-between w-full'>
                <motion.span className='flex gap-4 w-[30%] items-center relative' style={{ marginTop: useTransform(buttonScrollHeight, [0, 1], [0, 30]), marginBottom: useTransform(buttonScrollHeight, [0, 1], [0, 30]), height: useTransform(buttonScrollHeight, [0, 1, 1, 80], [40, 40, 85, 85]) }}>
                    <motion.div style={{ opacity: buttonScrollHeight ? buttonScrollHeight : 0, height: useTransform(buttonScrollHeight, [0, 1], [80, 80]) }} className='w-1 rounded-md bg-red-400' />
                    <motion.div style={{ height: buttonScrollHeight }} className='w-1 rounded-md bg-red-600 absolute top-[1px]' />
                    <span>
                        <motion.h2 style={{ top: useTransform(buttonScrollHeight, [79, 80], [0, 20]), lineHeight: useTransform(buttonScrollHeight, [79, 80], [1.5, 0]), color: useTransform(buttonScrollHeight, [0, 1], ["#9ca3af", "white"]) }} className='text-2xl leading-10 font-medium'>Button Animations</motion.h2>
                        <motion.p style={{ display: useTransform(buttonScrollHeight, [0, 1], ['none', 'block']) }} className='mt-1'>Make your buttons stand out with hover, ripple,<br />and bounce animations</motion.p>
                    </span>
                </motion.span>
                <motion.span style={{ display: useTransform(buttonScrollHeight, [0, 1, 80], ['none', 'block', 'none']) }} className='w-[60%] h-[50vh] absolute left-[40%] top-4 flex flex-col border border-gray-700 rounded-md divide-y-2 divide-gray-700 items-start justify-start'>
                    <span className='w-full flex gap-4 text-xl px-4 h-[15%]'>
                        <button onClick={() => { SelectMode('preview') }}>Preview</button>
                        <button onClick={() => { SelectMode('code') }}>Code</button>
                    </span>
                    <motion.span variants={{
                        hidden: { opacity: 0, height: 0, display: 'none' },
                        visible: { opacity: 1, height: '85%', display: 'block' }
                    }} animate={mode == 'preview' ? 'visible' : 'hidden'} transition={{ duration: 0.3 }} className='flex justify-center items-center text-start px-4 py-2'>
                        demo
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
