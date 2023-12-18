import React from 'react'
import Header from '../components/Header'
import Project from '../components/Project'
import BugStatusBox from '../components/BugStatusBox'
import ProjectStatusMainBox from '../components/ProjectStatusMainBox'
import RecentProjectRelease from '../components/RecentProjectRelease'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className='main'>
        <div className='dashboardBox'>

          <div style={{}}>
            <h2>Dashboard</h2>
            <h3>DASHBOARD</h3>
          </div>
          
        </div>
        <div className='boxDiv'>
            <div className='box' style={{}}>
              <div className='boxHeading'>
                <h4>Project in Highlights</h4>
                <div className='sideBoxHeading'>
                  <p>Overdue Tasks:<span> 64</span></p>
                </div>
              </div>
              <div className='projectMainBox'>
                <Project />
                <Project />
                <Project />
              </div>
            </div>
            <div className='box' style={{}}>
              <div className='boxHeading'>
                <h4>Bug Status</h4>
                <div className='sideBoxHeading'>
                  <p>Total:<span style={{ color: '#20B2F2' }}> 300</span></p>
                </div>

              </div>
              <BugStatusBox />
            </div>
            <div className='box' style={{}}>
              <div className='boxHeading'>
                <h4>Project Status</h4>
                <div className='sideBoxHeading'>
                  <p>Total:<span style={{ color: '#20B2F2' }}> 300</span></p>
                </div>
              </div>
              <ProjectStatusMainBox />
            </div>
          </div>

        <RecentProjectRelease name={"Recent Project Releases"} classNam={'RecentProjectBox'} />


        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
          <Link to={`/Projects`} className='viewAllBtn'>View All</Link>
        </div>

      </div>
      
      <Footer />
    </>
  )
}

export default Dashboard

