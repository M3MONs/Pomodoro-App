const { default: styled } = require("styled-components");

const Wrapper = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
margin: 10px 0;
height: 100%;
@media (max-width: 1049px){
    min-height: 330px;
}
`
export default Wrapper