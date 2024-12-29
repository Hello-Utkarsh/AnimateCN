import TextDocs from "./TextDocs";

export default function Docs() {
    
    return (
        <div className='bg-black px-6 py-16 flex min-h-screen gap-8 text-white'>
            <div className="w-[20%] overflow-y-auto gap-6 flex flex-col">
                <h2 className="text-lg">Introduction</h2>
                <span>
                    <h2 className='text-lg'>Text Animations</h2>
                    <div className='ml-4 my-2 flex flex-col gap-3'>
                        <h4 className='text-base'>Typing</h4>
                        <h4 className='text-base'>Flip</h4>
                    </div>
                </span>
                <span>
                    <h2 className='text-lg'>Button Animations</h2>
                    <div className='ml-4 my-2 flex flex-col gap-3'>
                        <h4 className='text-base'>Typing</h4>
                        <h4 className='text-base'>Flip</h4>
                    </div>
                </span>
                <span>
                    <h2 className='text-lg'>Hover Animations</h2>
                    <div className='ml-4 my-2 flex flex-col gap-3'>
                        <h4 className='text-base'>Typing</h4>
                        <h4 className='text-base'>Flip</h4>
                    </div>
                </span>
            </div>
            <TextDocs />
        </div>
    )
}
