const { default: styled } = require("styled-components");

const BoardWrapper = styled.div`
    width: 100%;
    height: 375px;
    border-radius: 25px;
    background: rgba(0,0,0,0.4);
    grid-area: 2 / 1 / 3 / 3;
`

const ColumnsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 0 25px;
    height: 90%;
    margin-top: 2%;
    ul{
        list-style: none;
    }
`

const Column = styled.div`
    width: 250px;
    text-align: center;
    background: #d6d6de;
    border-radius: 15px;
`

export { BoardWrapper, ColumnsWrapper, Column }