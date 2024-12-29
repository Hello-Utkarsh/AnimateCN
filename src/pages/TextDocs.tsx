import DemoPreview from "../components/DemoPreview";
import FlipText from "../components/TextAnimations/FlipText";
import TypeText from "../components/TextAnimations/TypeText";

export default function TextDocs() {
    return (
        <div className='w-[65%] flex flex-col gap-8'>
            <span className="flex flex-col gap-4">
                <h1 className="text-3xl font-semibold">Text Animations</h1>
                <p className="text-pretty text-lg">Bring your text to life with dynamic typing animations! Typing effects add a touch of storytelling, creating engaging experiences that capture attention. Whether you're showcasing a headline, narrating a journey, or simulating code typing, our animations make every character count. Explore, customize, and captivate with our seamless typing effects.</p>
            </span>
            <span className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">Flip Text</h2>
                <DemoPreview className='w-[100%] h-[50vh] border border-gray-700 rounded-md divide-y-2 divide-gray-700 items-start justify-start'>
                    <FlipText words={['This is a', 'demo text']} />
                </DemoPreview>
                <p className="text-pretty text-lg">By passing an array of sentences to the words prop, you can create a continuous flipping effect, perfect for showcasing dynamic headlines or key messages.</p>
                {/* code */}
                <p className="text-pretty text-lg">Alternatively, you can pass a single sentence to add a subtle flip animation without cycling. Like this:</p>
                {/* code */}
            </span>
            <span className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">Typing Animation</h2>
                <DemoPreview className='w-[100%] h-[50vh] border border-gray-700 rounded-md divide-y-2 divide-gray-700 items-start justify-start'>
                    <TypeText words={[
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laboriosam.",
                        "Aut deserunt similique consectetur corporis amet autem magni sint quasi fugit voluptate, asperiores, dolores architecto perferendis necessitatibus!"
                    ]} />
                </DemoPreview>
                <p className="text-pretty text-lg">By passing an array of sentences to the words prop, you can create a continuous flipping effect, perfect for showcasing dynamic headlines or key messages.</p>
                {/* code */}
                <p className="text-pretty text-lg">Alternatively, you can pass a single sentence to add a subtle flip animation without cycling. Like this:</p>
                {/* code */}
            </span>
        </div>
    )
}
