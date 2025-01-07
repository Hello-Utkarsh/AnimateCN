import React from 'react'
import DemoPreview from '../../components/DemoPreview'
import Scale from '../../components/ScrollAnimations/Scale'
import Pinning from '../../components/ScrollAnimations/Pinning'

export default function ScrlDocs() {
    return (
        <div className='flex flex-col gap-4'>
            <span className="flex flex-col gap-3">
                <h1 className="text-3xl font-semibold">Scroll Animations</h1>
                <p className="text-pretty text-lg">Scrolling is more than just navigation—it's an opportunity to captivate your audience and guide them through your content in an engaging way. Scroll animations transform the simple act of scrolling into a dynamic visual journey. From subtle fade-ins to dramatic parallax effects, these animations make your website feel alive and interactive. With our pre-defined scroll animations, you can effortlessly create visually stunning effects that respond to user actions, all with minimal code. Elevate your design and keep users engaged as they scroll through a seamless and immersive experience!</p>
            </span>
            <span className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold">Scale Effect</h2>
                <DemoPreview className='w-[100%] h-[50vh] border border-gray-700 rounded-md divide-y-2 divide-gray-700 items-center justify-center'>
                    <Scale />
                </DemoPreview>
                <p className="text-pretty text-lg">You can personalize the ripple's color using the <span className='bg-gray-700 rounded-md px-1'>rippleClr</span> prop and adjust the button's background color with the <span className='bg-gray-700 rounded-md px-1'>bgClr</span> prop to ensure it matches your theme.</p>
                {/* code */}
                <p className="text-pretty text-lg">For the text, the <span className='bg-gray-700 rounded-md px-1'>txt</span> prop lets you specify the main button label, while the <span className='bg-gray-700 rounded-md px-1'>rippletxt</span> prop allows you to add color of text after ripple effect.</p>
                {/* code */}
                <p className="text-pretty text-lg">Additionally, you can control the button's size by passing custom values to the <span className='bg-gray-700 rounded-md px-1'>width</span> and <span className='bg-gray-700 rounded-md px-1'>height</span> prop.</p>
            </span>
            <span className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold">Pinning Effect</h2>
                <DemoPreview className='w-[100%] h-[50vh] border border-gray-700 rounded-md divide-y-2 divide-gray-700 items-center justify-center'>
                    <Pinning />
                </DemoPreview>
                <p className="text-pretty text-lg">You can personalize the ripple's color using the <span className='bg-gray-700 rounded-md px-1'>rippleClr</span> prop and adjust the button's background color with the <span className='bg-gray-700 rounded-md px-1'>bgClr</span> prop to ensure it matches your theme.</p>
                {/* code */}
                <p className="text-pretty text-lg">For the text, the <span className='bg-gray-700 rounded-md px-1'>txt</span> prop lets you specify the main button label, while the <span className='bg-gray-700 rounded-md px-1'>rippletxt</span> prop allows you to add color of text after ripple effect.</p>
                {/* code */}
                <p className="text-pretty text-lg">Additionally, you can control the button's size by passing custom values to the <span className='bg-gray-700 rounded-md px-1'>width</span> and <span className='bg-gray-700 rounded-md px-1'>height</span> prop.</p>
            </span>
        </div>
    )
}
