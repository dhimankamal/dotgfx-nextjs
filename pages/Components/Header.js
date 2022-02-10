import Image from 'next/image'
import HaaderImage from '../img/header.png'


export default function Header () {
  return (
    <section>
        <div className="container mainheader">
          <div className="row">
            <div className="col-md-4" id="header-text">
              <h1>DOWNLOAD</h1>
              <p>FREE</p>
              <ul>
                <li>Graphics</li>
                <li>Design</li>
                <li>Elements</li>
              </ul>
            </div>
            <div className="col-md-8">
              <Image src={HaaderImage} alt="header Image" />
            </div>
          </div>
        </div>
      </section>
  )
}
