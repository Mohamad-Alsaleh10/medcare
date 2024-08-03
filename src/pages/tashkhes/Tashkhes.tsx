import React from 'react'
import './tashkhes.css'
import Navbar from '../../componnents/Navbar/Navbar'
import SectionEndPage from '../../componnents/SectionEndPage/SectionEndPage'
const Tashkhes = () => {
  return (
    <>
    <Navbar/>
    <div className='container tahs'>
      <h3> يمكنك الاستعلام عن حالتك وتشخيصها </h3>
      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">query type</button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" >disease</a></li>
          <li><a className="dropdown-item">benefit</a></li>
        </ul>
        <input type="text" className="form-control" aria-label="write thing tp search" />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">search</button>

      </div>


    </div>
    <SectionEndPage/>
</>
  )
}

export default Tashkhes