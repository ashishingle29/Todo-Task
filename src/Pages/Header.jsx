// import React from 'react'
// import './Header.css'
// import { Link } from 'react-router-dom'

// function Header() {
//   return (
//       <header>
//           <div class="logo">My Website</div>
//           <nav>
//               <ul >
//                   <Link href="/">Home</Link></li>
//                   <Link href="/contact">Contact</Link>
//                   <Link href="/todotask">To-Do Task</Link>
//               </ul>
//           </nav>
//       </header>

//   )
// }

// export default Header


import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header className='header'>
            <div className='header__logo'>
                <h1>Todo Task</h1>
            </div>
            <nav className='header__nav'>
                <ul>
                    <li><NavLink to='/' exact="true" >Home</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                    <li><NavLink to='/todotask'>To-Do Task</NavLink></li>

                </ul>
            </nav>
        </header>
    )
}

export default Header
