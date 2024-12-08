  
import main from '../assets/image.png'; 

import Wrapper from '../Wrapper/Testing'
import {Logo} from '../components';

const Landing = () => {
  return( 
  <Wrapper>
    <nav>
      <Logo/>
    </nav>
    <dev classname="container page">
        <dev classname="info">
        <h1>Job&nbsp;<span>Tracking</span>&nbsp;App</h1>

            <p>I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue bottle single-origin coffee chia. 
                Aesthetic post-ironic venmo, quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch narwhal.</p>
         <button classname="btn btn-hero">Login/Register</button>
        </dev>
        <img src={main} alt="job hunt" classname="img main-img"/>
    </dev>

    </Wrapper>
  )

}
export default Landing






