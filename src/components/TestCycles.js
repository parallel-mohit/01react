import React from 'react'
import BoxHeader from './BoxHeader'

const TestCycles = () => {
  return (
    <>
      <BoxHeader title={'All Text cycles'} />
      <table style={{ marginTop: 20 }}>
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

          <tr>

            <td>
              Lorem Ipsum Dol
            </td>
            <td className='currentRelease'>4</td>

            <td>Fri, 11th Aug 2021</td>
            <td>Fri, 11th Aug 2021</td>
            <td>Client Name 1</td>

          </tr>


          <tr>

            <td>
              Lorem Ipsum Dol
            </td>
            <td className='currentRelease'>4</td>

            <td>Fri, 11th Aug 2021</td>
            <td>Fri, 11th Aug 2021</td>
            <td>Client Name 1</td>

          </tr>
          <tr>

            <td>
              Lorem Ipsum Dol
            </td>
            <td className='currentRelease'>4</td>

            <td>Fri, 11th Aug 2021</td>
            <td>Fri, 11th Aug 2021</td>
            <td>Client Name 1</td>

          </tr>
          <tr>

            <td>
              Lorem Ipsum Dol
            </td>
            <td className='currentRelease'>4</td>

            <td>Fri, 11th Aug 2021</td>
            <td>Fri, 11th Aug 2021</td>
            <td>Client Name 1</td>

          </tr>
        </tbody>
      </table>
    </>
  )
}

export default TestCycles