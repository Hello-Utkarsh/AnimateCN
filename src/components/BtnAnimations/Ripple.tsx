import { motion } from 'motion/react'
import { useState } from 'react'

export default function Ripple(props: any) {
    const [hovered, setHover] = useState(false)
    const { rippleClr, bgClr, rippletxt, txt, children, width, height } = props

    return (
        <div
            className='relative rounded-md flex items-center border-0 justify-center overflow-hidden mx-auto'
            style={{ backgroundColor: bgClr || 'white', width: Number(width) || 80, height: Number(height) || 40 }} onMouseEnter={() => { setHover(true) }}
            onMouseOut={() => setHover(false)}>
            <motion.button
                animate={hovered ? { color: rippletxt || '#ffffff' } : { color: txt || '#000000' }}
                onMouseEnter={() => { setHover(true) }}
                onMouseOut={() => setHover(false)}
                className='relative h-full w-full z-10 bg-transparent text-white font-medium border-0'>{children || "Button"}</motion.button>
            <motion.div
                onMouseEnter={() => { setHover(true) }}
                onMouseOut={() => setHover(false)}
                animate={hovered ? { height: Number(height) + 20 || 60, width: (Number(width) + 20) || 100, top: -8 } : { height: 0, width: 0, top: 20 }}
                className='absolute z-0 left-auto top-0 h-0 w-0 rounded-full' style={{ backgroundColor: rippleClr || "#1f2937" }} />
        </div>
    )
}