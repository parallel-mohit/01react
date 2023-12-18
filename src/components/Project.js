
let Project = () => {
  return (
    <div className="projectDiv">
      <div className='Project'>
        <div>
          <div className="projectNameHeadingDashb">PROJECT NAME</div>
          <div className="dueDateTextDashb">Due Date:</div>
          <div className='date'>12th May,2022</div>
        </div>
        <div>
          <div className="actionReqTextDashb">Action Required:<span style={{ fontWeight: '600', color: '#F20810' }}>23</span></div>
          <div className='btnBox'>
            <div style={{ display: 'flex' }}>
              <div className='btn' id='criticalBtn'>
                <div className="btnText" >12 <span style={{ fontWeight: 'normal' }}>Critical</span></div>
              </div>
              <div className='btn btnSpace' id='highBtn' >
                <div className="btnText" style={{color:'white'}}>12 <span style={{ fontWeight: 'normal' }}>High</span></div>
              </div>
            </div>
            <div>
              <div className='btn ' id='majorBtn'>
                <div className="btnText" style={{color:'#955002'}}>12 <span style={{ fontWeight: 'normal' }}>Major</span></div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <hr />
    </div>
  )
}
export default Project