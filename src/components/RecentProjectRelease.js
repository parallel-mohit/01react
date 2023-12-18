import React from 'react'
import { Link } from 'react-router-dom'

const RecentProjectRelease = ({ name, classNam }) => {
    console.log(classNam)
    return (
        <div className={classNam}>
            <h4 style={{ display: 'unset', letterSpacing: 0, font: 20 / 24 }}>{name}</h4>
            <div className='abc'>
                <input type='text' placeholder='Search Project' style={{ width: 'unset' }} className='searchTextDashb' />
                <button className='btnProject'>2022</button>
                <button className='btnProject'>client</button>
            </div>
            <div className='title'>
                <table >
                    <tr className='tdLato1417'>
                        <th>TITLE</th>
                        <th>CURRENT RELEASE</th>
                        <th>PROGRESS</th>
                        <th>START DATE</th>
                        <th>DUE DATE</th>
                        <th>CLIENT</th>
                    </tr>
                    <tr>
                        <td className='lorem'>
                            <div className='loremText'>
                                Lorem Ipsum Doller Sit Amet projects...
                            </div>
                            <p>17 open, 21 in-review</p>
                        </td>
                        <td className='tdTextDashb'>4</td>
                        <td>
                            <div className='line' style={{}}>
                                <div className='internalLine'></div>
                            </div>
                        </td>
                        <td>Fri, 11th Aug 2021</td>
                        <td>Fri, 11th Aug 2021</td>
                        <td>Client Name 1</td>
                    </tr>
                    <tr>
                        <td className='lorem'>
                            <div className='loremText'>
                                Lorem Ipsum Doller Sit Amet projects...
                            </div>

                            <p>17 open, 21 in-review</p>
                        </td>
                        <td className='tdTextDashb'>4</td>
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
                        <td className='lorem'>
                            <div className='loremText'>
                                Lorem Ipsum Doller Sit Amet projects...
                            </div>

                            <p>17 open, 21 in-review</p>

                        </td>
                        <td className='tdTextDashb'>4</td>
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
                        <td className='lorem'>
                            <div className='loremText'>
                                Lorem Ipsum Doller Sit Amet projects...
                            </div>
                            <p>17 open, 21 in-review</p>
                        </td>
                        <td className='tdTextDashb'>4</td>
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
                        <td className='lorem'>
                            <div className='loremText'>
                                Lorem Ipsum Doller Sit Amet projects...
                            </div>
                            <p>17 open, 21 in-review</p>
                        </td>
                        <td className='tdTextDashb'>4</td>
                        <td>
                            <div className='line'>
                                <div className='internalLine'></div>
                            </div>
                        </td>
                        <td>Fri, 11th Aug 2021</td>
                        <td>Fri, 11th Aug 2021</td>
                        <td>Client Name 1</td>
                    </tr>
                </table>

            </div>
        </div>
    )
}

export default RecentProjectRelease