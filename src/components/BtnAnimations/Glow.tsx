import { useState } from 'react'
import { motion } from 'motion/react'

export default function Glow(props: any) {
    const [hovered, setHover] = useState(false)
    const { bgClr, width, height, children, bdrClr, glowClr, txt, glowTxt } = props

    return (
        <div className='flex justify-center items-center w-fit relative'>
            <motion.button
                animate={hovered ? {
                    borderWidth: 2,
                    borderStyle: "solid",
                    borderColor: glowClr || "#1e9bff",
                    boxShadow: `0 0 20px ${glowClr || '#1e9bff'}, 0 0 80px ${glowClr || '#1e9bff'}`,
                    color: glowTxt || "white"
                } : { borderColor: bdrClr || "#374151", borderWidth: 2 }}
                transition={{ duration: 0.2 }}
                style={{
                    backgroundColor: bgClr || "black",
                    width: Number(width),
                    height: Number(height) || 40,
                    color: txt || "white"
                }}
                className='rounded-md border-gray-700'
                onMouseEnter={() => { setHover(true) }} onMouseOut={() => setHover(false)}>{children || "Button"}</motion.button>
            <motion.div variants={{
                basic: { width: 6, background: 'black', left: '20%', skewX: 25 },
                hovered: { width: 12, background: 'black', left: '70%', skewX: -25 }
            }}
                animate={hovered ? 'hovered' : 'basic'} className='absolute top-0 h-[2px]' />
            <motion.div variants={{
                basic: { width: 6, background: 'black', right: '20%', skewX: -25 },
                hovered: { width: 12, background: 'black', right: '70%', skewX: 25 }
            }}
                animate={hovered ? 'hovered' : 'basic'} className='absolute bottom-0 h-[2px]' />
        </div>
    )
}
