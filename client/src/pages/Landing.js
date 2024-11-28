import React from 'react'
import logo from '../assets/image1.png'; 
import main from '../assets/image.png'; 

const Landing = () => {
  return( <main>
    <nav>
    <img src={logo} alt='JOBIFY' classname='logo'/>
    </nav>
    <dev classname="container page">
        <dev classname="info">
            <h1>job<span>tracking</span>app</h1>
            <p>I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue bottle single-origin coffee chia. 
                Aesthetic post-ironic venmo, quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch narwhal.</p>
                <button classname="btn btn-hero">Login/Register</button>
        </dev>
        <img src={main} alt="job hunt" classname="img main-img"/>
    </dev>

    </main>
  )
}

export default Landing





