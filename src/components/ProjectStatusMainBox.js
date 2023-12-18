import React from 'react'

const ProjectStatus = () => {
  return (
    <div className='ProjectStatusBox'>
      <div style={{
        display: 'flex', flexDirection: 'column'
        , rowGap: 10, marginRight: 20.22, marginLeft: 18.78, marginTop: 13
      }}>
        <div className='ProjectStatusInternalBox'>
          <p>Completed Projects</p>
          <p style={{fontWeight:'normal'}}>45/175</p>
        </div>
        <div className='line' >
          <div className='internalLine'/>
        </div>
      </div>
    </div>
  )
}


const ProjectStatusMainBox = () => {
  return (
    <div className='ProjectStatusMainBox'>
      <ProjectStatus />
      <ProjectStatus />
      <ProjectStatus />
    </div>
  )
}
export default ProjectStatusMainBox