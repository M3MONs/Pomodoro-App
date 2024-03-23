const { default: styled } = require("styled-components");

const FooterWrapper = styled.footer`
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 2rem;
    text-align: center;
    font-weight: 600;
    color: whitesmoke;
    background-color: rgba(0,0,0,0.30);
    display: flex;
    justify-content: center;
    align-items: center;
    a{
        text-decoration: none;
        color: wheat !important;
    }
    @media (max-width: 1049px){
        position: sticky;
    }
`

export default FooterWrapper