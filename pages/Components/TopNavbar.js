import Image from 'next/image'
import Icon from '../img/loupe.png'
import Email from '../img/email (1).png'

export default function TopNavbar () {
  return (
    <section>
      <nav className='navbar navbar-expand-sm navbar-light' id='top-nav'>
        <div className='container'>
          <div id='top-nav-mail'>
            <Image src={Email} alt='email-icon' />
            <a className='navbar-brand' href='#'>
              contact@dotgfx.com
            </a>
          </div>
          <div className='serach-box'>
            <form className='d-flex'>
              <input type='search' placeholder='Search' aria-label='Search' />
              <button className='btn btn-outline-success' type='submit'>
                <Image src={Icon} alt='icon' />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </section>
  )
}
