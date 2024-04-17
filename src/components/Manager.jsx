import React from 'react'
import { useRef } from 'react';

const Manager = () => {
    const showPass = ()=>{
        alert("Show the passwd");
    }
    return (
        <>
        <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
    <div className="mx-auto mycontainer">
        <h1 className='text-4xl text-blue-900 text-center gap-2'>PassGuard</h1>
        <p className='text-lg text-center'>Your own Password Manager</p>
    <div className='text-white flex flex-col p-4 gap-6 items-center'>
        <input placeholder='Enter website URL' className='rounded-full border border-blue-800 w-full text-black p-4 py-1' type="text" name='' id=''/>
        <div className='flex w-full justify-between gap-8'>
            <input placeholder='Enter username' className='rounded-full border border-blue-800 w-full text-black p-4 py-1' type='text'>
            </input>
            <div className="relative">
            <input placeholder='Enter Password' className='rounded-full border border-blue-800 w-full text-black p-4 py-1' type='text' />
            <span className='absolute right-[3px] top-[2px] cursor-pointer' onClick={showPass} ><lord-icon
    src="https://cdn.lordicon.com/vfczflna.json"
    trigger="hover"
    colors="primary:#000000,secondary:#000000"
    width={2}>
</lord-icon></span>
            </div>
        </div>
        <button className='flex justify-center items-center text-blue-900 rounded-full px-8 py-2 w-fit bg-green-200 hover:bg-green-300 gap-2 font-semibold border border-green-900'>
        <lord-icon
    src="https://cdn.lordicon.com/jgnvfzqg.json"
    trigger="hover">
</lord-icon>
        Add Password</button>
    </div>
    </div>
    
    </>
    )
}

export default Manager