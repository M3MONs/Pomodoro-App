import { Spin } from "antd";
import styled from "styled-components";

const SpinWrapper = styled.div`
    position: absolute;
    width: 100%;
    max-width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
`;

const LoadingSpin = () => {
    return (
        <SpinWrapper>
            <Spin />
        </SpinWrapper>
    );
};

export default LoadingSpin;
