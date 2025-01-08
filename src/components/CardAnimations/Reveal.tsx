import { motion } from 'motion/react'
import { useState } from 'react'

export default function Reveal() {
    const [hovered, setHover] = useState(false)

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='flex flex-col mx-auto justify-end items-center h-fit w-[20rem] relative overflow-hidden'>
                <motion.img
                    onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
                    animate={{ width: hovered ? '8rem' : '10rem', marginBottom: hovered ? -35 : 0 }}
                    className='rounded-lg z-10'
                    src="https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <motion.div
                    animate={{ height: hovered ? '13rem' : 0, padding: hovered ? '40px 8px 16px 8px' : 0 }}
                    onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
                    className='w-[15rem] text-center text-pretty gap-3 flex flex-col bg-white text-black rounded-lg'>
                    <h1 className=''>McLaren 675lt</h1>
                    <p className='text-sm'>a lightweight, track-focused supercar delivering 675PS and exceptional aerodynamics. Its aggressive styling and exhilarating performance redefine speed and precision for enthusiasts.</p>
                </motion.div>
            </div>
        </div>
    )
}
