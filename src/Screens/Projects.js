import React from 'react'
import Header from '../components/Header'
import RecentProjectRelease from '../components/RecentProjectRelease'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <>
            <Header />
            <div className='dashboardBox'>


                <div style={{}}>
                    <h2>Manage Your Projects</h2>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3>PROJECT</h3>
                        <Link to={`/MainHeader`}>
                            <div className='newProjectBtn'>
                                <p>+ New Project</p>
                            </div>
                        </Link>
                    </div>
                </div>


                <div className='lineBox'>
                    <div className='rout'>
                        <p style={{ flexGrow: 1, paddingLeft: 30 }} >Active</p>
                        <p style={{ flexGrow: 1 }}>Inactive</p>
                        <p style={{ flexGrow: 8 }}></p>
                    </div>
                    <div className='line bigLine' ></div>
                </div>


            </div>
            <RecentProjectRelease name={"All Active Projects"} classNam={'ManageYourProject'} />
            <Footer />


        </>
    )
}

export default Projects