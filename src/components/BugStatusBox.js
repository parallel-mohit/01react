import React from 'react'

const BugStatusBox = () =>{
  return(
    <div className='BugStatusBox'>
      <CircularBug/>
      <CircularBug/>
      <CircularBug/>
      <CircularBug/>
      <CircularBug/>
      <CircularBug/>

    </div>
  )

}

const CircularBug = () => {
  return (
    <div className='bugBox'>
      <div className='circleBug'>
        <div><p>16%</p></div>
      </div>
      <div style={{ marginLeft: 10, display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div >
          <p className='circleBugRightText'>NEW</p>
          <p className='circleBugRightNumberText'>60</p>
        </div>
      </div>
    </div>
  )
}

export default BugStatusBox