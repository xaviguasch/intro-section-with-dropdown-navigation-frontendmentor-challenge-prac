import Header from './components/Header'
import Main from './components/Main'

import styled from 'styled-components'

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
`

function App() {
  return (
    <>
      <Header />

      <Main />
    </>
  )
}

export default App
