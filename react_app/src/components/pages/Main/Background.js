import styled from "styled-components";
import background from "assets/images/background.jpg";

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${background});
    background-position: right;
    filter: blur(3px);
    z-index: -1;
    overflow: hidden;
`;

export default Background;
