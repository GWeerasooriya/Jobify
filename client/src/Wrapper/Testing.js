import styled from 'styled-components';

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

export default Wrapper

