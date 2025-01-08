import React from 'react'
import DemoPreview from '../../components/DemoPreview'
import Reveal from '../../components/CardAnimations/Reveal'

export default function CardDocs() {
    return (
        <div className='flex flex-col gap-4'>
            <span className="flex flex-col gap-3">
                <h1 className="text-3xl font-semibold">Card Animations</h1>
                <p className="text-pretty text-lg">With our pre-designed card animation templates, you can effortlessly enhance your UI, making every interaction feel polished and responsive. Whether you're showcasing products, team members, or portfolio pieces, these animations add a layer of professionalism and sophistication to your design.</p>
            </span>
            <span className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold">Reveal Effect</h2>
                <DemoPreview className='w-[100%] h-[50vh] border border-gray-700 rounded-md divide-y-2 divide-gray-700 items-center justify-center'>
                    <Reveal />
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
                    {/* <Pinning /> */}
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
