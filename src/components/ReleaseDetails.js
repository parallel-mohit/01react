import React from 'react'
import { Link } from 'react-router-dom'
import menuLogo from '../images/dots.png'

const ReleaseDetails = () => {
  return (
    <div className='ReleaseDetailsBox'>
      <div style={{ display: 'flex', justifyContent: 'space-between', }}>
        <div>
          <h4 style={{ marginLeft: 'unset' }}>Release Details</h4>
        </div>
        <div style={{ display: 'flex' }}>
          <Link to={`/MainHeader/Release%20Container/Release%20Edit`} className='overviewBtn'>
            Edit
          </Link>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
            <img src={menuLogo} className='menuLogo' />
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
              <hr style={{ margin: 'unset', marginBottom: 10, marginTop: 10 }} />
              <p>Lorem ipsum dolor sit amet,</p>
            </div>
            <div style={{ width: '100%', }}>
              <h5>Project Manager</h5>
              <hr style={{ margin: 'unset', marginBottom: 10, marginTop: 10 }} />
              <p>Project Manager Name</p>
            </div>
          </div>
          <div style={{ width: '100%', marginRight: 20, marginTop: 20 }}>
            <h5>Scope</h5>
            <hr style={{ margin: 'unset', marginBottom: 10, marginTop: 10 }} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id enim augue. Suspendisse efficitur massa
              a ligula euismod, sit amet pharetra ante cursus. Sed molestie venenatis metus, non sagittis dolor ultrices vel.
              Nulla purus orci, vestibulum eu pharetra ut, vulputate eu tortor. Aenean ut felis sapien. Vestibulum sit amet enim
              rhoncus, egestas nulla vitae, consectetur lacus. Quisque tortor quam, consequat lacinia maximus accumsan
              id magna. Fusce id eros id erat dictum tincidunt. Sed nec tincidunt tellus, at lobortis elit. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent fringilla nulla id quam convallis,
              non feugiat justo semper.</p>
          </div>
          <div style={{
            marginTop: 35,
            display: 'flex',
          }}>
            <div style={{ marginRight: 20 }}>
              <h5>Planned Start Date</h5>
              <hr style={{ margin: 'unset', marginBottom: 10, marginTop: 10 }} />
              <p>11/3/23</p>
            </div>
            <div >
              <h5>Planned End Date</h5>
              <hr style={{ margin: 'unset', marginBottom: 10, marginTop: 10 }} />
              <p>11/9/23</p>
            </div>
          </div>
        </div>
        <div className='vr' />
        <div className='ReleaseTableBox'>
          <h6>Team Members</h6>
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

export default ReleaseDetails