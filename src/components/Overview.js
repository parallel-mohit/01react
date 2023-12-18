import React from 'react'

const Overview = () => {
    return (
        <div style={{padding:20,}}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4 style={{ marginLeft: 'unset' }}>Project Details</h4>

                <div style={{ display: 'flex', justifyContent: 'space-between', width: '18%' }}>
                    <div className='overviewBtn'>
                        Next
                    </div>
                    <div className='overviewBtn overviewCancelBtn' style={{}} >
                        Cancel
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: 30 }}>
                <div >
                    <p>Project Name *</p>
                    <input type='text' style={{ width: '46vw' }} />
                </div>
                <div style={{ marginLeft: 10 }}>
                    <p>Project Name *</p>
                    <input type='text' style={{ width: '46.5vw' }} />
                </div>
            </div>
            <p>Project Name *</p>
            <textarea className='txtArea' />
            </div>
    )
}

export default Overview