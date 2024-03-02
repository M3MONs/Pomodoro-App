const { default: styled } = require("styled-components");

const TaskWrapper = styled.li`
    width: 85%;
    padding: .25rem .5rem;
    background: white;
    border-radius: 5px;
    font-weight: 500;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
`

const ContentWrapper = styled.div`
    padding: 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export { TaskWrapper, ContentWrapper }