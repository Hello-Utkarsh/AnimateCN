import { motion } from 'motion/react'
import { useState } from 'react'

export default function DemoPreview(props: any) {
    const { children, code, className, style } = props
    const [mode, SelectMode] = useState('preview')

    return (
        <motion.div className={className} style={{ ...style }}>
            <span className='w-full flex gap-4 text-xl px-4 h-[15%]'>
                <button onClick={() => { SelectMode('preview') }}>Preview</button>
                <button onClick={() => { SelectMode('code') }}>Code</button>
            </span>
            <motion.span variants={{
                hidden: { opacity: 0, height: 0, display: 'none' },
                visible: { opacity: 1, height: '85%', display: 'flex' }
            }} animate={mode == 'preview' ? 'visible' : 'hidden'} transition={{ duration: 0.3 }} className='justify-center items-center text-start px-4 py-2'>
                {children}
            </motion.span>
            <motion.span variants={{
                hidden: { opacity: 0, height: 0, display: 'none', position: 'static' },
                visible: { opacity: 1, height: '85%', display: 'block' }
            }} animate={mode == 'code' ? 'visible' : 'hidden'} initial='hidden' transition={{ duration: 0.5, delay: 0.15 }} className='flex justify-center items-center text-center'>
                {code}
            </motion.span>
        </motion.div >
    )
}
