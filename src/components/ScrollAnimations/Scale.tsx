import { motion, useMotionValue, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef } from 'react'

export default function Pinning() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollY } = useScroll({ container: containerRef });
  const dim = useTransform(scrollY, [152, 480], [500, 900]);

  return (
    //@ts-ignore
    <div ref={containerRef} className='h-full w-full overflow-y-auto'>
      <h1 className='w-full h-[50vh] flex justify-center items-center'>Scroll Up!</h1>
      <motion.img
        style={{ width: dim }}
        src="https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className=' mx-auto' alt="" />
    </div>
  )
}
