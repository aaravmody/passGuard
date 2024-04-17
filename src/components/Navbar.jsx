import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-200 flex justify-between items-center px-4 h-14'>
        <div className="logo font-bold text-2xl text-blue-800">PassGuard <lord-icon
    src="https://cdn.lordicon.com/pdwpcpva.json"
    trigger="hover">
</lord-icon></div>
        <ul>
            <li className='flex gap-4'>
                <a className='hover:font-bold' href='/'>Home</a>
                <a className='hover:font-bold' href='#'>Contact</a>
                <a className='hover:font-bold' href='#'>About</a>
            </li>
        </ul>
        <button className='text-white rounded-md gap-2 '>
        <img className='invert w-10 p-2' src="icons.github.png" alt="git" /> 
          </button>
    </nav>
  )
}

export default Navbar