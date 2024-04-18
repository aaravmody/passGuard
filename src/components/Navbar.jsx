import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-200 flex items-center px-4 h-14'>
        <div className="logo font-bold text-2xl text-blue-800 flex gap-1 w-full">PassGuard <div className='h-10 flex '><lord-icon
    src="https://cdn.lordicon.com/pdwpcpva.json"
    trigger="hover">
</lord-icon></div></div>
<div className='justify-end flex gap-5 align-middle text-center pr-4'>
        <ul>
            <li className='flex gap-4'>
                <a className='hover:font-bold' href='/'>Home</a>
                <a className='hover:font-bold' href='#'>Contact</a>
                <a className='hover:font-bold' href='#'>About</a>
            </li>
        </ul>
        </div>
        <div>

          <a href='https://github.com/aaravmody/passGuard'>
        <img className='invert w-12 h-10 p-2 border border-white backdrop-grayscale-0 rounded-xl' src="github.png" alt="git" /> </a>

          </div>
    </nav>
  )
}

export default Navbar