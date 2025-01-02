import DemoPreview from '../../components/DemoPreview'
import Ripple from '../../components/BtnAnimations/Ripple'

export default function BtnDocs() {
    return (
        <div className='flex flex-col gap-4'>
            <span className="flex flex-col gap-3">
                <h1 className="text-3xl font-semibold">Button Animations</h1>
                <p className="text-pretty text-lg">Buttons are central to user interaction, and adding animations can make them visually appealing and more engaging. Whether you're creating hover effects, click interactions, or scroll-based triggers, our pre-defined button animations simplify the process. With just a few lines of code, you can create captivating effects that enhance the overall user experience.</p>
            </span>
            <span className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold">Ripple Effect</h2>
                <DemoPreview className='w-[100%] h-[50vh] border border-gray-700 rounded-md divide-y-2 divide-gray-700 items-start justify-start'>
                    <Ripple width='100'>Hover Me!</Ripple>
                </DemoPreview>
                <p className="text-pretty text-lg">You can personalize the ripple's color using the <span className='bg-gray-700 rounded-md px-1'>rippleClr</span> prop and adjust the button's background color with the <span className='bg-gray-700 rounded-md px-1'>bgClr</span> prop to ensure it matches your theme.</p>
                {/* code */}
                <p className="text-pretty text-lg">For the text, the <span className='bg-gray-700 rounded-md px-1'>txt</span> prop lets you specify the main button label, while the rippletxt prop allows you to add color of text after ripple effect.</p>
                {/* code */}
                <p className="text-pretty text-lg">Additionally, you can control the button's size by passing custom values to the <span className='bg-gray-700 rounded-md px-1'>width</span> and <span className='bg-gray-700 rounded-md px-1'>height</span> prop.</p>
            </span>
        </div>
    )
}
