import React from 'react'
import '../styles/styles.css'
import QaLogo from '../images/QA-Logo.png'
import bellIcon from '../images/bell.png'
import exitIcon from '../images/logout.png'
import folderIcon from '../images/folder.png'
import searchIcon from '../images/search-interface-symbol.png'

const Header = () => {
  return (

    <div className='header'>
      <div className='headerDiv1'>
        <div className='qaImgDiv'>
          <img src={QaLogo} className='qaImg' alt='qalogoi' />
        </div>

        <div style={{marginLeft:10}}>
          <div style={{  height: 4, backgroundColor: '#008CFE', marginTop: 2 }} />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', paddingLeft:20,paddingRight:20}}>
            <img src={folderIcon} className='imgIcon' style={{marginLeft:'unset'}}/>
            <p className='headerProjectText'>PROJECTS</p>
          </div>
        </div>
      </div>
      <div className='headerDiv2' >
        <div className='searchBox'>
          <img src={searchIcon} className='qaImg' style={{ position: 'relative', left: 32, top: 0, textDecorationColor: '#9E9E9E', height: 20, width: 20 }} />
          <input type='text' placeholder='Search' className='searchBar' />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={bellIcon} className='imgIcon' ></img>
          <img src={exitIcon} className='imgIcon' ></img>
        </div>
      </div>
    </div>
  )
}

export default Header