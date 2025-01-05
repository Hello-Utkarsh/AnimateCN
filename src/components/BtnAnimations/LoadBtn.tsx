import { motion } from 'motion/react'

export default function LoadBtn(props: any) {
    const { bgClr, width, height, children, progress, prmryClr, scndryClr } = props
    const buttonTxt = () => {
        if (progress == 100) {
            return "Completed"
        }
        if (progress > 0) {
            return progress > 100 ? 100 : progress + '%'
        }
        else return children || "Button"
    }

    return (
        <div className="relative flex rounded-md border-2 border-gray-700"
            style={{ width: Number(width) || 80, height: Number(height) || 40 }}>
            <motion.button
                style={progress > 65 ? { color: scndryClr || 'black' } : { color: prmryClr || 'white' }}
                className='relative h-full w-full z-10 bg-transparent font-medium'
            >{buttonTxt()}</motion.button>
            <motion.div className='absolute h-full z-0 rounded-sm'
                style={{ backgroundColor: bgClr || '#4ade80', }}
                animate={progress ? { width: `${progress > 100 ? 100 : progress}%` } : { width: 0 }} />
        </div>
    )
}
