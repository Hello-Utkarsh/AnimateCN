import { motion } from 'motion/react'
import { useState } from 'react'
export default function ShadowReveal(props: any) {
    const [hovered, setHover] = useState(false)
    const { img, title, desc, bgClr, txtClr } = props

    return (
        <div className='w-full h-full flex justify-center items-center relative' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <motion.img
                animate={{ perspective: '1000px', rotateY: hovered ? 18 : 0, rotateX: hovered ? 10 : 0 }}
                transition={{ delay: 0.1 }}
                className='w-full h-full z-10 rounded-lg'
                src={img} alt="" />
            <motion.div
                className='absolute text-center flex flex-col justify-around items-center py-4 px-3 rounded-lg h-full w-full'
                style={{ backgroundColor: bgClr || '#ffffff', color: txtClr || 'black' }}
                animate={{ perspective: '1000px', right: hovered ? 50 : 0, top: hovered ? 10 : 0, rotateY: 18, rotateX: 10, zIndex: hovered ? 20 : 0, opacity: hovered ? 0.85 : 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}>
                <h1 className='text-xl font-medium'>{title}</h1>
                <p className='text-base text-pretty'>{desc}</p>
            </motion.div>
        </div>
    )
}
