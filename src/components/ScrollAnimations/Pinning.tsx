import { useScroll, useTransform, motion } from 'motion/react'
import React, { useRef } from 'react'

export default function Pinning(props: any) {
    const { children } = props
    const containerRef = useRef<HTMLElement | null>(null);
    const { scrollY } = useScroll({ container: containerRef })
    console.log(scrollY)


    return (
        // @ts-ignore
        <div className='overflow-y-auto h-full w-full' ref={containerRef}>
            <div className='w-full h-fit flex justify-between relative' >
                <div className='w-5/12'>
                    <h1>Lorem, ipsum.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet minus voluptate impedit numquam debitis facere harum iure, voluptates eaque? Laboriosam nihil culpa in delectus a sunt ratione quia voluptatibus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet minus voluptate impedit numquam debitis facere harum iure, voluptates eaque? Laboriosam nihil culpa in delectus a sunt ratione quia voluptatibus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet minus voluptate impedit numquam debitis facere harum iure, voluptates eaque? Laboriosam nihil culpa in delectus a sunt ratione quia voluptatibus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet minus voluptate impedit numquam debitis facere harum iure, voluptates eaque? Laboriosam nihil culpa in delectus a sunt ratione quia voluptatibus.</p>
                </div>
                <motion.img
                    style={{ top: useTransform(scrollY, [0, 240], [0, 230]) }}
                    src="https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-[45%] h-fit left-[53%] mt-2 absolute' alt="" />

            </div>
            <div className='w-full h-fit flex justify-between relative mt-4' >
                <motion.img
                    style={{ top: useTransform(scrollY, [530, 800], [0, 230]) }}
                    src="https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-[45%] h-fit absolute mt-6' alt="" />
                <div className='w-5/12 ml-[50%]'>
                    <h1>Lorem, ipsum.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet minus voluptate impedit numquam debitis facere harum iure, voluptates eaque? Laboriosam nihil culpa in delectus a sunt ratione quia voluptatibus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet minus voluptate impedit numquam debitis facere harum iure, voluptates eaque? Laboriosam nihil culpa in delectus a sunt ratione quia voluptatibus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet minus voluptate impedit numquam debitis facere harum iure, voluptates eaque? Laboriosam nihil culpa in delectus a sunt ratione quia voluptatibus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet minus voluptate impedit numquam debitis facere harum iure, voluptates eaque? Laboriosam nihil culpa in delectus a sunt ratione quia voluptatibus.</p>
                </div>
            </div>
                <h1 className='h-full w-full'>H</h1>
        </div >

    )
}