import React, { useState } from 'react'
import Navbar from '../../componnents/Navbar/Navbar';
import SectionEndPage from '../../componnents/SectionEndPage/SectionEndPage';

export default function UpdateUser() {
const [age , setAge ] = useState('28');
const [blood_pressure , setblood_pressure ] = useState('test');
const [breastfeeding , setbreastfeeding ] = useState('test');
const [diabetes , setdiabetes] = useState('test');
const [gender , setgender ] = useState('test');
const [heart_disease , setheart_disease ] = useState('test');
const [phone,setphone] = useState('0393939');
const [pregnant,setpregnant] = useState('test');


  return (
    <>
    <Navbar/>
        <div className='container tahs'>
      <h3> </h3>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">age</label>
        <input type="text" className="form-control" id="age" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label htmlFor="blood_pressure" className="form-label"> blood_pressure</label>
        <input type="text" className="form-control" id="blood_pressure" placeholder="blood pressure" value={blood_pressure} onChange={(e)=> setblood_pressure(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label htmlFor="breastfeeding" className="form-label"> breastfeeding</label>
        <input type="text" className="form-control" id="breastfeeding" placeholder="breast feeding" value={breastfeeding}  onChange={(e) => setbreastfeeding(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label htmlFor="diabetes" className="form-label"> diabetes</label>
        <input type="text" className="form-control" id="diabetes" placeholder="diabetes" 
        value={diabetes}
        onChange={(e) => setdiabetes(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="gender" className="form-label"> gender</label>
        <input type="text" className="form-control" id="gender" placeholder="gender" 
        value={gender}
        onChange={(e) => setgender(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="heart_disease" className="form-label"> heart_disease</label>
        <input type="text" className="form-control" id="heart_disease"  
        value={heart_disease}
        onChange={(e) => setheart_disease(e.target.value)}
        placeholder="heart_disease" />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label"> phone</label>
        <input type="text" className="form-control" id="phone" placeholder="phone" 
        value={phone}
        onChange={(e) => setphone(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="pregnant" className="form-label"> pregnant</label>
        <input type="text" className="form-control" id="pregnant" placeholder="pregnant" 
        value={pregnant}
        onChange={(e) => setpregnant(e.target.value)}
        />
      </div>


       <button className="btn btn-warning">update</button>


    </div>
    <SectionEndPage/>

    </>

  )
}
