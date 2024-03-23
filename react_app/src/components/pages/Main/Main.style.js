import styled from 'styled-components'
import background from 'assets/images/background.png'

const MainWrapper = styled.main`
max-width: 100vw;
width: 100%;
overflow-x: hidden;
min-height: 100vh;
background-image: url(${background});
background-position: right;
@media (max-width: 1049px){
    width: 100%;
    overflow-x: hidden;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
}
`

export default MainWrapper