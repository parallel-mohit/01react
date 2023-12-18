import React from 'react'
import { useNavigate } from 'react-router-dom';

const BoxHeader = ({title}) => {
    const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/MainHeader/Release%20Container/Release%20Edit");
  };
    return (
        <div style={{paddingLeft:20,paddingRight:20,paddingTop:20}}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4 style={{ marginLeft: 'unset' }}>All {title}</h4>

                <button className='overviewBtn' onClick={handleEditClick}>
                    + Add New
                </button>
            </div>
            <div className='abc' style={{ marginLeft:'unset'}}>
                <input type='text' placeholder='Search `s`' style={{width:'unset'}}/>
                <button className='btnProject'>2022</button>
                <button className='btnProject'>client</button>
            </div>
        </div>
    )
}

export default BoxHeader