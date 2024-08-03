import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../componnents/Navbar/Navbar';
import SectionEndPage from '../../componnents/SectionEndPage/SectionEndPage';

export default function UserInfo() {
    const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
  "age" : 28,
  "blood_pressure":"test",
  "breastfeeding":"test",
  "diabetes":"test",
  "gender":"test",
  "heart_disease":"test",
  "phone":"test",
  "pregnant":"test",



  });

  useEffect(() => {
    // Example URL, replace it with your actual API endpoint
    const apiUrl = 'url/user_info';
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setUserInfo(data.user_info);
      })
      .catch(error => console.error('Error fetching user info:', error));
  }, []);

  return (
    <>
    <Navbar/>
    <div className="container mt-5 vh-100">
      {userInfo ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">معلومات المستخدم</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>العمر:</strong> {userInfo.age}</li>
              <li className="list-group-item"><strong>الضغط الدموي:</strong> {userInfo.blood_pressure}</li>
              <li className="list-group-item"><strong>رضاعة الصغار:</strong> {userInfo.breastfeeding}</li>
              <li className="list-group-item"><strong>السكري:</strong> {userInfo.diabetes}</li>
              <li className="list-group-item"><strong>الجنس:</strong> {userInfo.gender}</li>
              <li className="list-group-item"><strong>أمراض القلب:</strong> {userInfo.heart_disease}</li>
              <li className="list-group-item"><strong>رقم الهاتف:</strong> {userInfo.phone}</li>
              <li className="list-group-item"><strong>الحمل:</strong> {userInfo.pregnant}</li>
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button className='btn btn-success' onClick={()=>navigate('/user/update')}>update</button>
      <button className='btn btn-danger'>delete</button>

    </div>
    <SectionEndPage/>

    </>

  );
}