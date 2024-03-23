const { default: styled } = require("styled-components");

const BoardWrapper = styled.div`
    width: 100%;
    min-height: 375px;
    border-radius: 25px;
    background: rgba(0,0,0,0.4);
    grid-area: 2 / 1 / 3 / 3;
    @media (max-width: 1049px){
        max-width: 450px;
    }
`

const ColumnsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 0 25px;
    height: 90%;
    margin-top: 2%;
    @media (max-width: 1049px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding: 20px 25px;
    }
    ul{
        list-style: none;
    }
`

export { BoardWrapper, ColumnsWrapper }