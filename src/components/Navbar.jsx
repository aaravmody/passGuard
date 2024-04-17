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

    </nav>
  )
}

export default Navbar