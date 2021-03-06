import Image from 'next/image'
import Logo from '../img/logo 2.png'
import Link from 'next/link'

export default function Navbar () {
  return (
    <section>
      <header>
        <div className='container'>
          <nav className='navbar navbar-expand-lg'>
            <div className='container-fluid'>
              <Link href='/'>
              <a className='navbar-brand'>
                <Image src={Logo} alt='logo' />
              </a>
              </Link>
              

              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
              >
                <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                  <li className='nav-item'>
                    <Link href='/'>
                    <a className='nav-link' aria-current='page'>
                      Home
                    </a>
                    </Link>
                   
                  </li>
                  <li className='nav-item dropdown'>
                    <a
                      className='nav-link dropdown-toggle'
                      id='navbarDropdown'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Template
                    </a>

                    <ul
                      className='dropdown-menu'
                      aria-labelledby='navbarDropdown'
                    >
                      <li>
                        <a className='dropdown-item'>Action</a>
                      </li>
                      <li>
                        <a className='dropdown-item'>Another action</a>
                      </li>
                      <li>
                        <hr className='dropdown-divider' />
                      </li>
                      <li>
                        <a className='dropdown-item'>Something else here</a>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-item'>
                    <Link href='/about'>
                    <a className='nav-link'>About Us</a>
                    </Link>
                    
                  </li>
                  <li className='nav-item'>
                    <Link href='/contact'>
                    <a className='nav-link navbarbutton'>Contact Us</a>
                    </Link>
                    
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </section>
  )
}
