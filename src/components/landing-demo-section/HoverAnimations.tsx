import { motion, useTransform } from 'motion/react'
import DemoPreview from '../DemoPreview'

export default function HoverAnimations(props: any) {
    const { scrollY } = props
    const hoverScrollHeight = useTransform(scrollY, [1460, 1689, 1690], [0, 80, 0])

    return (
        <div>
            <span className='flex justify-between w-full'>
                <motion.span className='flex gap-4 w-[30%] items-center relative' style={{ marginTop: useTransform(hoverScrollHeight, [0, 1], [0, 30]), marginBottom: useTransform(hoverScrollHeight, [0, 1], [0, 30]), height: useTransform(hoverScrollHeight, [0, 1, 1, 80], [40, 40, 85, 85]) }}>
                    <motion.div style={{ opacity: hoverScrollHeight ? hoverScrollHeight : 0, height: useTransform(hoverScrollHeight, [0, 1], [80, 80]) }} className='w-1 rounded-md bg-red-400' />
                    <motion.div style={{ height: hoverScrollHeight }} className='w-1 rounded-md bg-red-600 absolute top-[1px]' />
                    <span>
                        <motion.h2 style={{ top: useTransform(hoverScrollHeight, [79, 80], [0, 20]), lineHeight: useTransform(hoverScrollHeight, [79, 80], [1.5, 0]), color: useTransform(hoverScrollHeight, [0, 1], ["#9ca3af", "white"]) }} className='text-2xl leading-10 font-medium'>Hover Animations</motion.h2>
                        <motion.p style={{ display: useTransform(hoverScrollHeight, [0, 1], ['none', 'block']) }} className='mt-1'>Add interactivity with smooth animations triggered on hover</motion.p>
                    </span>
                </motion.span>
                <DemoPreview style={{ display: useTransform(hoverScrollHeight, [0, 1, 80], ['none', 'block', 'none']) }} className='w-[60%] h-[50vh] absolute left-[40%] top-4 flex flex-col border border-gray-700 rounded-md divide-y-2 divide-gray-700 items-start justify-start'>
                    code
                </DemoPreview>
            </span>
        </div>
    )
}
