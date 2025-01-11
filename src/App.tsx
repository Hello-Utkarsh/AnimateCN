import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import { useEffect, useState } from 'react';
import TextTransformation from './components/landing-demo-section/TextTransformation';
import ButtonAnimation from './components/landing-demo-section/ButtonAnimation';
import Button from './components/Button';
import CardAnimations from './components/landing-demo-section/CardAnimations';

function App() {
  const words = ['Effortlessly', 'Anything     ', 'Seamlessly   ']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const { scrollY } = useScroll()
  const textScrollHeight = useTransform(scrollY, [1000, 1429, 1430], [1, 80, 0])


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev == 2 ? 0 : prev + 1))
    }, 3500)
    return () => { clearInterval(interval) }
  }, [scrollY])

  return (
    <div className="px-6 py-2 bg-black">
      <div className="px-20 h-screen flex flex-col justify-center relative">
        <span className="relative">
          <motion.svg variants={{
            hidden: { y: -180 },
            visible: { y: 0 }
          }} initial={'hidden'} animate={'visible'} transition={{
            duration: 3, stiffness: 600, damping: 18, type: 'spring'
          }} className="h-10 absolute left-[22.5%] top-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" fill="#fffbeb"><circle cx="240" cy="240" r="240"></circle></motion.svg>'
          <h1 className="text-amber-50 text-[12rem] h-fit leading-[10rem] font-bold font-serif text-start">Anımate</h1>
        </span>
        <span className='w-full flex justify-end'>
          <span className='w-fit overflow-x-hidden h-fit font-bold font-serif text-start text-[11rem] text-amber-50 '>
            {Array.from({ length: words[currentWordIndex].length }).map((_, index) => {
              return (
                <AnimatePresence mode='wait'>
                  <motion.span key={`${currentWordIndex}-${index}`}
                    initial={{ rotateX: 90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    exit={{ rotateX: -90, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.02 }} className="inline-block origin-center w-fit">
                    {words[currentWordIndex][index] || " "}
                  </motion.span>
                </AnimatePresence>
              )
            })}
          </span>
        </span>
      </div>
      <div className='flex text-white items-center w-fit gap-3'>
        <Button>AnimateCN: Effortlessly integrate beautiful<br />animations into your web projects</Button>
      </div>
      <div className='h-[1px] w-full bg-slate-800 my-24' />
      <div className='text-amber-50'>
        <div className='flex text-white items-center w-fit gap-3'>
          <Button>Discover a variety of animations<br />you can easily implement with AnimateCN</Button>
        </div>
        <div className='py-16 h-[121rem] relative'>
          <motion.div className='relative w-[85vw] mx-auto' style={textScrollHeight ? { position: 'sticky', top: 80 } : { position: 'static' }}>
            <TextTransformation textScrollHeight={textScrollHeight} />
            <ButtonAnimation scrollY={scrollY} />
            <CardAnimations scrollY={scrollY} />
          </motion.div>
        </div>
      </div>
    </div >
  )
}

export default App
