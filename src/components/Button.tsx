import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Button(props: any) {
    const [timer, setTimer] = useState(false)
    const { children } = props
    const navigate = useNavigate()

    useEffect(() => {
        const changeBtn = setTimeout(() => {
            setTimer((prev) => !prev)
        }, 5000);
        return () => { clearTimeout(changeBtn) }
    }, [timer])
    return (
        <motion.div
            animate={timer ? { width: '18rem', borderRadius: 12, height: '5rem', borderWidth: '2px', marginLeft: 60 } : { width: '28rem', borderWidth: '3px' }}
            // exit={{width: '28rem', borderWidth: '3px'}}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setTimer(true)}
            className='w-[28rem] h-[5rem] border-white flex flex-col justify-center items-center relative'>
            <motion.button
            onClick={() => navigate('docs')}
                animate={timer ? { opacity: 1, display: 'block' } : { opacity: 0, display: 'none' }}
                className="text-xl z-10 rounded-lg font-medium w-full h-full hover:bg-white hover:text-black">Visit Our Docs</motion.button>
            <motion.span
                animate={timer ? { opacity: 0, width: '28rem', display: 'none' } : { opacity: 1, width: '26rem', height: '110%', transition: {delay: 0.4} }}
                onMouseEnter={() => setTimer(true)}
                className="text-xl text-pretty text-start absolute flex justify-center items-center bg-black">{children}</motion.span>
        </motion.div>
    )
}
