const { default: styled } = require("styled-components");

const PomodoroClockWrapper = styled.div`
    width: 450px;
    height: 250px;
    border-radius: 25px;
    padding: 1.5rem;
    background: rgba(0,0,0,0.4);
    color: #d6d6de;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: end;
    @media (max-width: 1049px){
        max-width: 450px;
        width: 100%;
        padding: 1.5rem 0;
        align-self: center;
    }
`

const ClockWrapper = styled.div`
    font-size: 5.5rem;
    font-weight: 600;
    text-align: center;
`

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    span{
        font-weight: 500;
    }
`

const ClockTitle = styled.h2`
    text-align: center;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    font-family: "Pacifico";
`

export default PomodoroClockWrapper
export { ClockWrapper, ButtonsWrapper, ClockTitle }