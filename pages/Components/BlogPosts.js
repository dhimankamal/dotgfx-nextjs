import PostImage from '../img/Rectangle.png'
import Posts from './Posts'
import SidePosts from './SidePosts'

export default function BlogPosts () {
  
  return (
    <section className='main-posts'>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-9'>
            <div className='row'>
              <Posts PostTitle=" Lorem ipsum, or lipsum as it is" Des="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts" Image={PostImage}/>
              <Posts PostTitle=" Lorem ipsum, or lipsum as it is" Des="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts" Image={PostImage}/>
              <Posts PostTitle=" Lorem ipsum, or lipsum as it is" Des="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts" Image={PostImage}/>
              <Posts PostTitle=" Lorem ipsum, or lipsum as it is" Des="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts" Image={PostImage}/>

            </div>
          </div>
          <div className='col-md-3'>
            <SidePosts Image={PostImage} Des="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print," />
            <SidePosts Image={PostImage} Des="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print," />
            <SidePosts Image={PostImage} Des="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print," />
          </div>
        </div>
      </div>
    </section>
  )
}
