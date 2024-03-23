const { default: styled } = require("styled-components");

const PomodoroContentWrapper = styled.section`
width: 100vw;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
gap: 25px;
`

const GridWrapper = styled.div`
display: grid;
grid-auto-rows: 100px auto;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr 1.5fr;
grid-row-gap: 25px;
grid-column-gap: 25px;
@media (max-width: 1049px){
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px 0;
}
`

export default PomodoroContentWrapper
export { GridWrapper }