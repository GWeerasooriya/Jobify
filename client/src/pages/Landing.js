import logo from '../assets/image1.png'; 
import main from '../assets/image.png'; 
import styled from 'styled-components';

const Landing = () => {
  return( 
  <Wrapper>
    <nav>
    <img src={logo} alt='JOBIFY' classname='logo'/>
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

const Wrapper = styled.main`
nav{
    width:var(--fluid-width);
        max-width:var(--max-width);
        margin:10 auto;
        hight:var(--nav-height);
        display: flex;
        align-items:center;
        margin-left:100px ;
}
.page{
    main-hight:calc(100vh-var(--nav-height));
    display: grid;
    align-items:center;
    margin-top:3rem;
    margin-left:100px ;
}
h1{
    margin-left:100px ;
    front-weight:700;
    span{
        color:var(--blue-500);
    }
}
p{
    margin-left:100px ;
    color: var(--grey-600);
    front-weight:20px;
}
.main-img{
    display: none;
    margin-left:1000px ;
}
@media (min-width:992px){
    .page{
        grid-template-columns:1fr 1fr;
        column-gap:3rem;
    }
    .main-img{
        display :block ;
    }
}
.btn btn-hero {
  align-self: flex-end; /* Aligns the button to the right within the flex container */
  margin-right: 100px; /* Optional: adjusts right margin for consistency */
}

`;

export default Landing






