import Image from 'next/image'

export default function Posts (props) {
  return (
    <div className='col-sm-6 my-3'>
    <div className='card'>
      <div className='card-body'>
        <Image
          className='post-image'
          src={props.Image}
          alt='post-image'
          
        />
        <div className='post-body'>
          <h5 className='card-title mt-3'>
            {props.PostTitle}
          </h5>
          <p className='card-text post-text'>
           {props.Des}
          </p>
          <a className='post-btn' href='#'>
            Learn more
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}
