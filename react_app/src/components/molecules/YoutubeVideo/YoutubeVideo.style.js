const { default: styled } = require("styled-components");

const YoutubeWrapper = styled.div`
    width: 450px;
    height: 250px;
    border-radius: 25px;
    padding: 1.5rem;
    background: rgba(0, 0, 0, 0.4);
    align-self: end;
    iframe {
        width: 100%;
    }
    @media (max-width: 1049px) {
        max-width: 400px;
        width: 100%;
        align-self: center;
    }
`;

export const YoutubeContentWrapper = styled.div`
    width: 100%;
    height: 220px;
`;

export default YoutubeWrapper;
