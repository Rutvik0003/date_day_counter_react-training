import styled from "styled-components"
import Globlestyle from './styles/Globlestyle'
import Counter from "./Components/Counter"

const Container = styled.div`
  background: linear-gradient(135deg, #FFF19C, #FFB3B3); /* Midnight-blue gradient */

  height: 100vh;
`

function App() {
  

  return (
    <>
    <Globlestyle/>
    <Container>
      <Counter/>
    </Container>
    </>
  )
}

export default App
