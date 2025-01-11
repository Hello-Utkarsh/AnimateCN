import { motion, useTransform } from 'motion/react'
import DemoPreview from '../DemoPreview'
import Reveal from '../CardAnimations/Reveal'

export default function CardAnimations(props: any) {
    const { scrollY } = props
    const cardScrollHeight = useTransform(scrollY, [1860, 2289, 2290], [0, 80, 0])

    return (
        <div>
            <span className='flex justify-between w-full'>
                <motion.span className='flex gap-4 w-[30%] items-center relative' style={{ marginTop: useTransform(cardScrollHeight, [0, 1], [0, 30]), marginBottom: useTransform(cardScrollHeight, [0, 1], [0, 30]), height: useTransform(cardScrollHeight, [0, 1, 1, 80], [40, 40, 85, 85]) }}>
                    <motion.div style={{ opacity: cardScrollHeight ? cardScrollHeight : 0, height: useTransform(cardScrollHeight, [0, 1], [80, 80]) }} className='w-1 rounded-md bg-red-400' />
                    <motion.div style={{ height: cardScrollHeight }} className='w-1 rounded-md bg-red-600 absolute top-[1px]' />
                    <span>
                        <motion.h2 style={{ top: useTransform(cardScrollHeight, [79, 80], [0, 20]), lineHeight: useTransform(cardScrollHeight, [79, 80], [1.5, 0]), color: useTransform(cardScrollHeight, [0, 1], ["#9ca3af", "#ffffff"]) }} className='text-2xl leading-10 font-medium'>Hover Animations</motion.h2>
                        <motion.p style={{ display: useTransform(cardScrollHeight, [0, 1], ['none', 'block']) }} className='mt-1'>Add interactivity with smooth animations triggered on hover</motion.p>
                    </span>
                </motion.span>
                <DemoPreview style={{ display: useTransform(cardScrollHeight, [0, 1, 80], ['none', 'block', 'none']) }} className='w-[60%] h-[50vh] absolute left-[40%] top-4 flex flex-col border border-gray-700 rounded-md divide-y-2 divide-gray-700 items-start justify-start'>
                    <Reveal
                        img="https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        title="McLaren 675lt"
                        desc="a lightweight, track-focused supercar delivering 675PS and exceptional aerodynamics. Its aggressive styling and exhilarating performance redefine speed and precision for enthusiasts."
                    />
                </DemoPreview>
            </span>
        </div>
    )
}
