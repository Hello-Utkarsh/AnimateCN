import { motion } from 'motion/react'
import { useState } from 'react'

export default function Reveal(props: any) {
    const [hovered, setHover] = useState(false)
    const { img, title, desc, bgClr, txtClr } = props

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='flex flex-col mx-auto justify-end items-center h-fit w-[20rem] relative overflow-hidden'>
                <motion.img
                    onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
                    animate={{ width: hovered ? '8rem' : '10rem', marginBottom: hovered ? -35 : 0 }}
                    className='rounded-lg z-10'
                    src={img} alt="" />
                <motion.div
                    animate={{ height: hovered ? '13rem' : 0, padding: hovered ? '40px 8px 16px 8px' : 0 }}
                    onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
                    style={{ backgroundColor: bgClr || 'white', color: txtClr || 'black' }}
                    className='w-[15rem] text-center text-pretty gap-2 flex flex-col rounded-lg'>
                    <h1>{title}</h1>
                    <p className='text-sm'>{desc}</p>
                </motion.div>
            </div>
        </div>
    )
}
