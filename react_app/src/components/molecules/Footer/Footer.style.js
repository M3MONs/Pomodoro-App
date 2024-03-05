const { default: styled } = require("styled-components");

const FooterWrapper = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2rem;
    text-align: center;
    font-weight: 600;
    color: #d6d6de;
    background-color: rgba(0,0,0,0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    a{
        text-decoration: none;
    }
`

export default FooterWrapper