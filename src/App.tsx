import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import { useEffect, useState } from 'react';

function App() {
  const words = ['Effortlessly', 'Anything     ', 'Seamlessly   ']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const { scrollY } = useScroll()
  // const demoScrollHeight = useTransform(scrollY, [])
  const textScrollHeight = useTransform(scrollY, [1000, 1230, 1231], [1, 80, 0])
  const buttonScrollHeight = useTransform(scrollY, [1230, 1460, 1461], [0, 80, 0])
  const hoverScrollHeight = useTransform(scrollY, [1460, 1690, 1691], [0, 80, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev == 2 ? 0 : prev + 1))
    }, 3500)
    return () => { clearInterval(interval) }
  }, [scrollY])

  return (
    <div className="px-6 py-2 bg-black">
      <div className="px-20 h-screen flex flex-col justify-center">
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
        <span className='text-7xl font-light'>[</span>
        <span className='text-xl text-pretty text-start w-fit mt-5'>AnimateCN: Effortlessly integrate beautiful<br />animations into your web projects</span>
        <span className='text-7xl font-light'>]</span>
      </div>
      <div className='h-[1px] w-full bg-slate-800 my-24' />
      <div className='text-amber-50'>
        <div className='flex text-white items-center w-fit gap-3'>
          <span className='text-7xl font-light'>[</span>
          <span className='text-lg text-pretty text-start w-fit mt-5'>Discover a variety of animations<br />you can easily implement with AnimateCN</span>
          <span className='text-7xl font-light'>]</span>
        </div>
        <div className='px-16 py-16 h-[100rem] relative'>
          <motion.div className='flex justify-between' style={textScrollHeight ? { position: 'sticky', top: 80 } : { position: 'static' }}>
            <div>
              <motion.span className='flex gap-4 items-center relative' style={{ marginTop: useTransform(textScrollHeight, [0, 1], [0, 30]), marginBottom: useTransform(textScrollHeight, [0, 1], [0, 30]), height: useTransform(textScrollHeight, [0, 1, 1, 80], [40, 40, 85, 85]) }}>
                <motion.div style={{ opacity: useTransform(textScrollHeight, [0, 1, 79, 80], [0, 1, 1, 0]), height: useTransform(textScrollHeight, [79, 80], [80, 0]) }} className='w-1 block rounded-md bg-red-400' />
                <motion.div style={{ height: useTransform(textScrollHeight, [1, 80], [0, 80]) }} className='w-1 rounded-md bg-red-600 absolute top-[0px]' />
                <span>
                  <motion.h2 style={{ top: useTransform(textScrollHeight, [79, 80], [0, 20]), lineHeight: useTransform(textScrollHeight, [79, 80], [1.5, 0]) }} className='text-2xl leading-10 font-medium'>Text Transformations</motion.h2>
                  <motion.p style={{ display: useTransform(textScrollHeight, [0, 1, 79, 80], ['none', 'block', 'block', 'none']) }} className='block mt-1'>Animate your headings, paragraphs, and words<br />with sleek, captivating text effects.</motion.p>
                </span>
              </motion.span>

              <motion.span className='flex gap-4 items-center relative' style={{ marginTop: useTransform(buttonScrollHeight, [0, 1], [0, 30]), marginBottom: useTransform(buttonScrollHeight, [0, 1], [0, 30]), height: useTransform(buttonScrollHeight, [0, 1, 1, 80], [40, 40, 85, 85]) }}>
                <motion.div style={{ opacity: buttonScrollHeight ? buttonScrollHeight : 0, height: useTransform(buttonScrollHeight, [0, 1], [80, 80]) }} className='w-1 rounded-md bg-red-400' />
                <motion.div style={{ height: buttonScrollHeight }} className='w-1 rounded-md bg-red-600 absolute top-[1px]' />
                <span>
                  <motion.h2 style={{ top: useTransform(buttonScrollHeight, [79, 80], [0, 20]), lineHeight: useTransform(buttonScrollHeight, [79, 80], [1.5, 0]) }} className='text-2xl leading-10 font-medium'>Button Animations</motion.h2>
                  <motion.p style={{ display: useTransform(buttonScrollHeight, [0, 1], ['none', 'block']) }} className='mt-1'>Make your buttons stand out with hover, ripple,<br />and bounce animations</motion.p>
                </span>
              </motion.span>

              <motion.span className='flex gap-4 items-center relative' style={{ marginTop: useTransform(hoverScrollHeight, [0, 1], [0, 30]), marginBottom: useTransform(hoverScrollHeight, [0, 1], [0, 30]), height: useTransform(hoverScrollHeight, [0, 1, 1, 80], [40, 40, 85, 85]) }}>
                <motion.div style={{ opacity: hoverScrollHeight ? hoverScrollHeight : 0, height: useTransform(hoverScrollHeight, [0, 1], [80, 80]) }} className='w-1 rounded-md bg-red-400' />
                <motion.div style={{ height: hoverScrollHeight }} className='w-1 rounded-md bg-red-600 absolute top-[1px]' />
                <span>
                  <motion.h2 style={{ top: useTransform(hoverScrollHeight, [79, 80], [0, 20]), lineHeight: useTransform(hoverScrollHeight, [79, 80], [1.5, 0]) }} className='text-2xl leading-10 font-medium'>Hover Animations</motion.h2>
                  <motion.p style={{ display: useTransform(hoverScrollHeight, [0, 1], ['none', 'block']) }} className='mt-1'>Add interactivity with smooth animations triggered on hover</motion.p>
                </span>
              </motion.span>
            </div>
          </motion.div>
          <div></div>
        </div>
      </div>
    </div >
  )
}

export default App
