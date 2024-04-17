import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import copy from '../../public/copy.png'

const Manager = () => {
    const ref=useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({site:"",username:"",password:""})
    const [passwordArray, setpasswordArray] = useState([])
    useEffect(()=>{
        let passwords = localStorage.getItem("passwords");
        if(passwords)
        {
            setpasswordArray=JSON.parse(passwords)
        }
    },[])

    const showPass = ()=>{
        ref.current
        if(ref.current.src.includes("icons/eyecross.png")){
            ref.current.src = "icons/eye.png"
            passwordRef.current.type = "password"
        }
        else{
            ref.current.src = "icons/eyecross.png"
            passwordRef.current.type = "text"
        }
    }

    const copyText = (text) => {
        navigator.clipboard.writeText(text)
    }

    const savePass =()=>{
        console.log(form)
        setpasswordArray([...passwordArray,form])
        localStorage.setItem("password",JSON.stringify([...passwordArray,form]))
        console.log([...passwordArray,form])
    }

    const handleChange= (e)=> {
        setform({...form,[e.target.name]:[e.target.value]})
    }
    return (
        <>
        <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
    <div className="mx-auto mycontainer">
        <h1 className='text-4xl text-blue-900 text-center gap-2'>PassGuard</h1>
        <p className='text-lg text-center py-2'>Your own Password Manager</p>
    <div className='text-white flex flex-col p-4 gap-6 items-center'>
        <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border border-blue-800 w-full text-black p-4 py-1' type="text" name='site' id=''/>
        
        <div className='flex w-full justify-between gap-8'>
            <input value={form.username} onChange={handleChange} placeholder='Enter username' className='rounded-full border border-blue-800 w-full text-black p-4 py-1' type='text' name='username'>
            </input>
            
            <div className="relative">
            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-blue-800 w-full text-black p-4 py-1' type='password' name='password' />
            <span className='absolute right-[3px] top-[2px] cursor-pointer' onClick={showPass} >
                <img ref={ref} className='p-1' width={26} src="icons/eye.png" alt='eye' />
            </span>
            </div>
        </div>
        <button onClick={savePass} className='flex justify-center items-center text-blue-900 rounded-full px-8 py-2 w-fit bg-green-200 hover:bg-green-300 gap-2 font-semibold border border-green-900'>
        <lord-icon
    src="https://cdn.lordicon.com/jgnvfzqg.json"
    trigger="hover">
</lord-icon>
        Add Password</button>
    </div>
    <div className="passwords">
        <h2 className='font-bold text-2xl py-4 text-blue-900'>Your Passwords </h2>
        {passwordArray.length === 0 && <div> No passwords to show </div>}
        {passwordArray.length != 0 && <table className="table-auto w-full rounded-xl overflow-hidden">
  <thead className='w-full bg-purple-800 text-white'>
    <tr>
      <th className='py-2'>Website</th>
      <th className='py-2'>Username</th>
      <th className='py-2'>Password</th>
    </tr>
  </thead>
  <tbody className='bg-green-300'>
    {passwordArray.map((item,index)=>{
        return <tr key={index}>
        <td className='items-center justify-center text-center py-2 border border-white flex gap-3'><a href={item.site} target='_blank' >{item.site} </a> <img className='cursor-pointer' onClick={copyText(item.site)} src={copy} height={1} width={15}/></td>
        <td className='items-center justify-center text-center py-2 border border-white'>{item.username}</td>
        <td className='items-center justify-center text-center py-2 border border-white'>{item.password}</td>
        </tr>
    })}

  </tbody>
</table>}
    </div>
    </div>
    
    </>
    )
}

export default Manager