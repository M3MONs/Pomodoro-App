import styled from "styled-components";

const MainWrapper = styled.main`
    max-width: 100vw;
    width: 100%;
    min-height: 100vh;

    @media (max-width: 1049px) {
        width: 100%;
        overflow-x: hidden;
        min-height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
    }
`;

export default MainWrapper;
