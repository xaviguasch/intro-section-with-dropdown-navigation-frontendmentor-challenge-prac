import React from 'react'

import { ContainerDiv } from './styles/Main.styles'

const Main = () => {
  return (
    <ContainerDiv>
      <div className='CopyDiv'>
        <h1 className='CopyTitleH1'>Make remote work</h1>
        <p className='TextP'>
          Get your team in sync, no matter your location. Streamline processes, create
          team rituals, and watch productivity soar.
        </p>
        <button>Learn More</button>
      </div>
    </ContainerDiv>
  )
}

export default Main
