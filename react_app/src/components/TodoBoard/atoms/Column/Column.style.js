const { default: styled } = require("styled-components");

const ColumnWrapper = styled.div`
width: 250px;
text-align: center;
background: rgba(225, 225, 225, 0.75);
border-radius: 15px;
`

const ColumnTitle = styled.h3`
text-transform: uppercase;
width: 100%;
height: 1.75rem;
background: rgba(250, 250, 250, 0.5);;
border-radius: 15px 15px 0 0;
text-align: center;
font-weight: 600;
`

const ColumnTasks = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
margin: 10px 0;
`

export default ColumnWrapper
export { ColumnTitle, ColumnTasks }