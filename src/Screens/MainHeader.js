import React from 'react'
import RecentProjectRelease from '../components/RecentProjectRelease'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, Outlet } from 'react-router-dom'
import Overview from '../components/Overview'

const MainHeader = () => {
    return (
      <>
            <Header />
            <div className='main'>
                <div className='dashboardBox'>


                    <div style={{}}>
                        <h2>Manage Your Projects</h2>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>PROJECT</h3>

                            <div className='performanceBtn'>
                                <p>Performance Enhanc..</p>
                            </div>

                        </div>
                    </div>


                    <div className='lineBox'>
                        <div className='rout'>
                            <Link to={``} style={{ flexGrow: 1, textDecoration: 'none' }}>
                                <p >OverView</p>
                            </Link>

                            <Link to={`Release Container`} style={{ flexGrow: 1, textDecoration: 'none' }}>
                                <p >release</p>
                            </Link>
                            <Link to={`Requirenments`} style={{ flexGrow: 1, textDecoration: 'none' }}>
                                <p >requirements</p>
                            </Link>
                            <Link to={`Test Cases`} style={{ flexGrow: 1, textDecoration: 'none' }}>
                                <p >test cases</p>
                            </Link>
                            <Link to={`Test Cycles`} style={{ flexGrow: 1, textDecoration: 'none' }}>
                                <p >test Cycles</p>
                            </Link>
                            <Link to={`Bugs`} style={{ flexGrow: 1, textDecoration: 'none' }}>
                                <p>Bugs</p>
                            </Link>
                            <p style={{ flexGrow: 4 }}></p>
                        </div>
                        <div className='line bigLine ' ></div>
                    </div>
                   
                </div>
                <div className='OverViewBox'>
                        <Outlet />
                    </div>

            </div>
            <Footer />


        </>

    )
}

export default MainHeader