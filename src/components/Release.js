import React from 'react'
import BoxHeader from './BoxHeader'
import { Link, useNavigate } from 'react-router-dom'

const Release = () => {
    let navigate = useNavigate();
    let onDetailClick = () => {
        navigate(`Release Details`)
    }

  return (
    <>
        <BoxHeader title={'Releases'} />
        <div className='ReleaseBox' >
            <table >
                <thead>
                    <tr >

                        <th>RELEASE NAME</th>
                        <th>SCOPE</th>
                        <th>PROJECT MANAGER</th>
                        <th>START DATE</th>
                        <th>END DATE</th>

                    </tr>
                </thead>


                <tbody>
               
                    <tr onClick={onDetailClick}>
                    {/* <button style={{width:'100%'}}> */}
                            <td className='loremText'  >

                                <div>
                                    Lorem Ipsum Doller Sit Amet projects...
                                </div>
                                <div>
                                    17 open, 21 in-review
                                </div>
                            </td>
                            <td className='currentRelease'>4</td>
                            <td>
                                <div className='line'>
                                    <div className='internalLine'></div>
                                </div>
                            </td>
                            <td>Fri, 11th Aug 2021</td>
                            <td>Fri, 11th Aug 2021</td>
                            <td>Client Name 1</td>
                            
                    </tr>
                   

                    <tr>
                        <td className='loremText'>
                            <div>
                                Lorem Ipsum Doller Sit Amet projects...
                            </div>
                            <div>
                                17 open, 21 in-review
                            </div>
                        </td>
                        <td className='currentRelease'>4</td>
                        <td>
                            <div className='line'>
                                <div className='internalLine'></div>
                            </div>
                        </td>
                        <td>Fri, 11th Aug 2021</td>
                        <td>Fri, 11th Aug 2021</td>
                        <td>Client Name 1</td>
                    </tr>
                    <tr>
                        <td className='loremText'>
                            <div>
                                Lorem Ipsum Doller Sit Amet projects...
                            </div>
                            <div>
                                17 open, 21 in-review
                            </div>
                        </td>
                        <td className='currentRelease'>4</td>
                        <td>
                            <div className='line'>
                                <div className='internalLine'></div>
                            </div>
                        </td>
                        <td>Fri, 11th Aug 2021</td>
                        <td>Fri, 11th Aug 2021</td>
                        <td>Client Name 1</td>
                    </tr>
                    <tr>
                        <td className='loremText'>
                            <div>
                                Lorem Ipsum Doller Sit Amet projects...
                            </div>
                            <div>
                                17 open, 21 in-review
                            </div>
                        </td>
                        <td className='currentRelease'>4</td>
                        <td>
                            <div className='line'>
                                <div className='internalLine'></div>
                            </div>
                        </td>
                        <td>Fri, 11th Aug 2021</td>
                        <td>Fri, 11th Aug 2021</td>
                        <td>Client Name 1</td>
                    </tr>
                    <tr>
                        <td className='loremText'>
                            <div>
                                Lorem Ipsum Doller Sit Amet projects...
                            </div>
                            <div>
                                17 open, 21 in-review
                            </div>
                        </td>
                        <td className='currentRelease'>4</td>
                        <td>
                            <div className='line'>
                                <div className='internalLine'></div>
                            </div>
                        </td>
                        <td>Fri, 11th Aug 2021</td>
                        <td>Fri, 11th Aug 2021</td>
                        <td>Client Name 1</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </>
)
}

export default Release