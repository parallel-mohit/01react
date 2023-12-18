import React, { useState } from 'react'
import LogInQALogo from '../Illustration.png'
import LogInQALogo2 from '../Illustration@2x.png'
import interraLogo from '../images/InterraIT Logo.png'
import QaLogo from '../images/QA-Logo.png'
import window from '../images/1.png'
import { Link } from 'react-router-dom'
const LoginPage = () => {
    let [auth, setAuth] = useState(false)
    let handleAuthentication = () => {
        setAuth(true)
    }
    return (

        <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
            <div style={{
                backgroundColor: '#4FC3F7', width: '70%', display: 'flex',
                flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
            }}>
                <img src={LogInQALogo} style={{ height: 400, width: 800 }} ></img>

                {/* <picture>
                    <source srcSet='Illustration.png' media='(max-width:600)'>
                </picture> */}
                {/* <picture>
                    <source srcSet={LogInQALogo} media="(max-width: 600px)" style={{width:200,height:20}}></source>
                    <img srcSet={LogInQALogo2}></img>

                </picture> */}

                <p  className='openSansReg12' style={{
                    position: 'absolute',
                    bottom: 10,
                    left: 10,
                }}>Illustrations from “www.vecteezy.com” & Icons from " www.flaticon.com "</p>


            </div>
            <div style={{ backgroundColor: '#EBEDFC', width: '30%' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 20 }}>
                    <img src={interraLogo}
                        style={{ width: 180, height: 68, marginTop: 25, }} />
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 150
                }}>
                    <img src={QaLogo}
                        style={{ width: 300, height: 172, }} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <Link to={`Dashboard`} style={{
                        display: 'flex',

                        backgroundColor: '#03A9F4',
                        width: 268,
                        height: 40,
                        marginTop: '25%',
                        borderRadius: 3,
                        textDecoration:'none',
                       justifyContent:'space-evenly'


                    }}
                        onClick={handleAuthentication}>

                        <img src={window}
                            style={{ marginTop: 9, width: 22, height: 22 }} />

                        <div className='openSansSemi16' style={{
                            display:'flex',
                            alignItems:'center',
                             justifyContent:'center',
                         
                            color: '#ffffff',
                           
                        }}>Sign in with Microsoft</div>




                        {/* </button> */}
                    </Link>
                </div>




            </div>
        </div >
    )
}

export default LoginPage

// let styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingHorizontal: 10,
//         paddingVertical: 10,
//         backgroundColor: '#F5F5F5',
//     }, SignInText: {
//         paddingVertical: 9,
//         fontSize: 16,
//         color: 'white',
//         paddingLeft: 20
//     }, txt: {
//         fontSize: 10,
//         color: '#616161'

//     }
// })