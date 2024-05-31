import styled from 'styled-components'
import background from 'assets/images/background.jpg'

const MainWrapper = styled.main`
max-width: 100vw;
width: 100%;
min-height: 100vh;


@media (max-width: 1049px){
    width: 100%;
    overflow-x: hidden;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
}
`

export const Background = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-image: url(${background});
background-position: right;
filter: blur(3px);
z-index: -1;
overflow: hidden;
`

export default MainWrapper