import Head from 'next/head'
import Image from 'next/image'
import ContactImage from './img/contact.png'

export default function Contact () {
  return (
    <>
      <Head>
        <title>Dotgfx - Contact</title>
      </Head>
      <section className='pages'>
        <div className='container'>
          <div className='pageheader'>
            <h1>Contact Us</h1>
          </div>
          <div className='pagecontent'>
            <div className='contact-form'>
                <div className='contactimage'>
                <Image src={ContactImage} alt='image' />

                </div>
             
              <form action=''>
                <h2>Get in touch</h2>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
                <textarea rows={4} placeholder='Meassage' defaultValue={''} />
                <button className='contact-btn'> Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
