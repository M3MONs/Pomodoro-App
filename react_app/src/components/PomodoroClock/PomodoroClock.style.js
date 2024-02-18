const { default: styled } = require("styled-components");

const PomodoroClockWrapper = styled.div`
    width: 450px;
    height: 200px;
    border-radius: 25px;
    padding: 1.5rem;
    background: rgba(0,0,0,0.4);
    color: #d6d6de;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ClockWrapper = styled.div`
    font-size: 6rem;
    font-weight: 600;
    /* -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black; */
    text-align: center;
`

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
`

export default PomodoroClockWrapper
export { ClockWrapper, ButtonsWrapper }