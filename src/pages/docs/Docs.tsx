import { useState } from "react";
import BtnDocs from "./BtnDocs";
import TextDocs from "./TextDocs";
import Intro from "./Intro";
import ScrlDocs from "./ScrlDocs";

export default function Docs() {
    const [docs, setDocs] = useState('TextDocs')
    const allDocs: any = { 'TextDocs': <TextDocs />, 'BtnDocs': <BtnDocs />, 'Intro': <Intro />, 'ScrlDocs': <ScrlDocs /> }


    return (
        <div className='bg-black px-6 py-16 flex min-h-screen gap-8 text-white'>
            <div className="w-[20%] overflow-y-auto gap-6 flex flex-col">
                <h2 onClick={() => setDocs('Intro')} className="text-lg cursor-pointer">Introduction</h2>
                <span>
                    <h2 onClick={() => setDocs('TextDocs')} className='text-lg cursor-pointer'>Text Animations</h2>
                    <div className='ml-4 my-2 flex flex-col gap-3'>
                        <h4 className='text-base'>Typing</h4>
                        <h4 className='text-base'>Flip</h4>
                    </div>
                </span>
                <span>
                    <h2 onClick={() => setDocs('BtnDocs')} className='text-lg cursor-pointer'>Button Animations</h2>
                    <div className='ml-4 my-2 flex flex-col gap-3'>
                        <h4 className='text-base'>Ripple</h4>
                        <h4 className='text-base'>Glow</h4>
                        <h4 className='text-base'>Loading</h4>
                    </div>
                </span>
                <span>
                    <h2 onClick={() => setDocs('ScrlDocs')} className='text-lg cursor-pointer'>Scoll Animations</h2>
                    <div className='ml-4 my-2 flex flex-col gap-3'>
                        <h4 className='text-base'>Scale</h4>
                        <h4 className='text-base'>Pinning</h4>
                    </div>
                </span>
            </div>
            <div className='w-[65%] flex flex-col gap-8'>
                {allDocs[docs]}
            </div>
        </div>
    )
}
