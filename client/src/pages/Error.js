import {Link} from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
  return (
    
      <Wrapper className='full-page'>
        <div>
            <img src={img} alt="not found" className='img' />
            <h1>Ohh! page not found</h1>
            <p>Sorry, the page you are looking for could not be found.</p>
            <Link to='/' className='btn'>Back to home</Link>
        </div>
     </Wrapper>        
    
  )
}

export default Error
