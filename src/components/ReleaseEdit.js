import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import menuLogo from '../images/dots.png'
import deleteIcon from '../images/delete.png'
const ReleaseEdit = () => {
  let [releaseName,setReleaseName]=useState()
  let [projectManager,setProjectManager]=useState('')
  let [Scope,setScope]=useState('')
  let [employeName,setEmployeName]=useState('')
  let [role,setRole]=useState('')
  let [startDate,setStartDate]=useState()
  let [endDate,setEndDate]=useState()

  return (
    <div className='ReleaseDetailsBox'>
      <div style={{ display: 'flex', justifyContent: 'space-between', }}>
        <div>
          <h4 style={{ marginLeft: 'unset' }}>Release Details</h4>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '18%' }}>
          <div className='overviewBtn'>
            Next
          </div>
          <div className='overviewBtn overviewCancelBtn' style={{}} >
            Cancel
          </div>
        </div>

      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
        <div style={{ width: '60%', }}>
          <div style={{
            marginTop: 35,
            display: 'flex',

            justifyContent: 'space-between',

          }}>
            <div style={{ width: '100%', marginRight: 20 }}>
              <h5>Release Name</h5>
              <input type='text' value={releaseName} onChange={(text)=>setReleaseName(text.target.value)} />
            </div>
            <div style={{width:'100%'}} >
              <div style={{display:'flex'}}>
                <h5>Project Manager</h5>
                <pre style={{ color: 'red' }}> *</pre>
              </div>
              <div>
                <input type='text' value={projectManager} onChange={(text)=>setProjectManager(text.target.value)}/>
              </div>
            </div>

          </div>
          <div style={{ width: '100%', marginRight: 20, marginTop: 20 }}>
          <div style={{display:'flex'}}>
                <h5>Scope</h5>
                <pre style={{ color: 'red' }}> *</pre>
              </div>
              <div>
                <input type='text' style={{ height: '20vh' }}
                value={Scope} onChange={(text)=>setScope(text.target.value)}/>
              </div>
           
          </div>
          <div style={{
            marginTop: 35,
            display: 'flex',
          }}>
            <div style={{ marginRight: 20 }}>
              <h5>Planned Start Date</h5>
              <hr style={{ margin: 'unset', marginBottom: 10, marginTop: 10 }} />
              <input type='date'></input>
            </div>
            <div >
              <h5>Planned End Date</h5>
              <hr style={{ margin: 'unset', marginBottom: 10, marginTop: 10 }} />
              <input type='date'></input>
            </div>
          </div>
        </div>
        <div className='vr' />
        <div className='ReleaseTableBox'>
          <h6>Team Members</h6>
          <h5>Employee</h5>
          <input type='text' placeholder='Enter Employee Name/Email'
          value={employeName} onChange={(text)=>setEmployeName(text.target.value)}
          style={{ marginBottom: 20 }} />
          <label for='role' >Role</label>
          <br />
          <div className='roleBox'>
            <select name="role" id="role" style={{ width: '70%' }}>
              <option value="QA Lead">QA Lead</option>
              <option value="QA analyst">QA analyst</option>
              <option value="react developer">react developer</option>
              <option value="react native developer">react native developer</option>
            </select>
            <button className='newProjectBtn' style={{ backgroundColor: '#03A9F4', width: 'unset', paddingLeft: 20, paddingRight: 20 }}>Add</button>
          </div>

          <table id='releaseDetailTable' >
            <thead>
              <tr>
                <th>NAME</th>
                <th>email id</th>
                <th>ROle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Employee Name
                </td>
                <td>
                  Employee@QAapp.com
                </td>
                <td>
                  QA Lead
                </td>
                <td>
                  <img src={deleteIcon} style={{ height: 20, width: 20 }} />
                </td>
              </tr>
              <tr>
                <td>
                  Employee Name
                </td>
                <td>
                  Employee@QAapp.com
                </td>
                <td>
                  QA Lead
                </td>
              </tr>
              <tr>
                <td>
                  Employee Name
                </td>
                <td>
                  Employee@QAapp.com
                </td>
                <td>
                  QA Lead
                </td>
              </tr>
              <tr>
                <td>
                  Employee Name
                </td>
                <td>
                  Employee@QAapp.com
                </td>
                <td>
                  QA Lead
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>

  )
}

export default ReleaseEdit