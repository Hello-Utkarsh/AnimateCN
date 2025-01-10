import DemoPreview from '../../components/DemoPreview'
import Reveal from '../../components/CardAnimations/Reveal'
import Tilt from '../../components/CardAnimations/Tilt'
import ShadowReveal from '../../components/CardAnimations/ShadowReveal'

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
                    <Reveal
                        img="https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        title="McLaren 675lt"
                        desc="a lightweight, track-focused supercar delivering 675PS and exceptional aerodynamics. Its aggressive styling and exhilarating performance redefine speed and precision for enthusiasts."
                    />
                </DemoPreview>
                <p className="text-pretty text-lg">Adjust the card's background with the <span className='bg-gray-700 rounded-md px-1'>bgClr</span> prop and the text color with the <span className='bg-gray-700 rounded-md px-1'>txtClr</span> prop</p>
                {/* code */}
                <p className="text-pretty text-lg">For the content, provide an image with the<span className='bg-gray-700 rounded-md px-1'>img</span>prop, a bold title using the <span className='bg-gray-700 rounded-md px-1'>title</span> prop, and a detailed description with the <span className='bg-gray-700 rounded-md px-1'>desc</span> prop</p>
                {/* code */}
            </span>
            <span className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold">Tilt Effect</h2>
                <DemoPreview className='w-[100%] h-[50vh] border border-gray-700 rounded-md divide-y-2 divide-gray-700 items-center justify-center'>
                    <Tilt
                        title="McLaren 675lt"
                        desc="A lightweight, track-focused supercar delivering 675PS and exceptional aerodynamics. Its aggressive styling and exhilarating performance redefine speed and precision for enthusiasts."
                    />
                </DemoPreview>
                <p className="text-pretty text-lg">You can personalize the ripple's color using the <span className='bg-gray-700 rounded-md px-1'>rippleClr</span> prop and adjust the button's background color with the <span className='bg-gray-700 rounded-md px-1'>bgClr</span> prop to ensure it matches your theme.</p>
                {/* code */}
                <p className="text-pretty text-lg">For the text, the <span className='bg-gray-700 rounded-md px-1'>txt</span> prop lets you specify the main button label, while the <span className='bg-gray-700 rounded-md px-1'>rippletxt</span> prop allows you to add color of text after ripple effect.</p>
                {/* code */}
                <p className="text-pretty text-lg">Additionally, you can control the button's size by passing custom values to the <span className='bg-gray-700 rounded-md px-1'>width</span> and <span className='bg-gray-700 rounded-md px-1'>height</span> prop.</p>
            </span>
            <span className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold">Tilt Effect</h2>
                <DemoPreview className='w-[100%] h-[50vh] border border-gray-700 rounded-md divide-y-2 divide-gray-700 items-center justify-center'>
                    <div className='w-[30%] h-full py-4 flex justify-center items-center mx-auto'>
                        <ShadowReveal
                            img="https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            title="McLaren 675lt"
                            desc="A lightweight, track-focused supercar delivering 675PS and exceptional aerodynamics. Its aggressive styling and exhilarating performance redefine speed and precision for enthusiasts."
                        />
                    </div>
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
