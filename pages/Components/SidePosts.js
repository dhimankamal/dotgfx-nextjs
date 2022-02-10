import Image from 'next/image'

export default function SidePosts (props) {
  return (
    <div className='col-sm-12 my-3'>
              <div className='card'>
                <div className='card-body'>
                  <Image
                    className='post-image'
                    src={props.Image}
                    alt='postImage'
                  />
                  <div className='post-body'>
                    <p className='card-text post-text mt-3'>
                      {props.Des}
                    </p>
                  </div>
                </div>
              </div>
            </div>
  )
}
