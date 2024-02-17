const { default: styled } = require("styled-components");

const PomodoroClockWrapper = styled.div`
    width: 300px;
    height: 200px;
    border-radius: 25px;
    padding: 1.5rem;
    background: rgba(255,255,255,0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ClockWrapper = styled.div`
    font-size: 6rem;
    font-weight: 600;
    text-align: center;
`

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
`

export default PomodoroClockWrapper
export { ClockWrapper, ButtonsWrapper }