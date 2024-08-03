import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../componnents/Navbar/Navbar';
import SectionEndPage from '../../componnents/SectionEndPage/SectionEndPage';

export default function Wasfat() {
  const [comments, setComments] = useState({});
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});

  const recipes = [
    { id: 1, title: "وصفة عشبية 1", content: "تفاصيل الوصفة 1" },
    { id: 2, title: "وصفة عشبية 2", content: "تفاصيل الوصفة 2" },
    { id: 3, title: "وصفة عشبية 3", content: "تفاصيل الوصفة 3" }
  ];

  const handleCommentChange = (id, event) => {
    setComments({ ...comments, [id]: event.target.value });
  };

  const handleLike = (id) => {
    setLikes({ ...likes, [id]:  1 });
  };

  const handleDislike = (id) => {
    setDislikes({ ...dislikes, [id]:  1 });
  };

  return (
<div className='mb-100'>
  <Navbar />
  <div className="container mt-5 mb-10">
    {recipes.map(recipe => (
      <div className="card shadow-sm bg-light rounded-3 border-0 mb-3" key={recipe.id}>
        <div className="card-body p-3">
          <h5 className="card-title fs-5 mb-3">{recipe.title}</h5>
          <p>{recipe.content}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item py-2"><strong>اسم الوصفة:</strong> test</li>
            <li className="list-group-item py-2"><strong> كمية العلاج:</strong> test</li>
            <li className="list-group-item py-2"><strong>وقت الاستخدام:</strong> test</li>
            <li className="list-group-item py-2"><strong>طريقة التحضير:</strong> test</li>
            <li className="list-group-item py-2"><strong>اسم العشبة:</strong> test</li>
            <li className="list-group-item py-2"><strong> الجزء المستخدم من العشبة:</strong> test</li>
            <li className="list-group-item py-2"><strong> الكمية من كل عشبة:</strong> test</li>
            <li className="list-group-item py-2"><strong>المواد المساعدة(اسم-كمية):</strong> test</li>
            <li className="list-group-item py-2"><strong>التحذيرات:</strong> test</li>
            <li className="list-group-item py-2"><strong>التعارضات:</strong> test</li>
          </ul>
          <div className="mt-3 d-flex justify-content-between align-items-center">
            <button className="btn btn-success me-2" onClick={() => handleLike(recipe.id)}>إعجاب ({likes[recipe.id] || 0})</button>
            <button className="btn btn-danger" onClick={() => handleDislike(recipe.id)}>عدم إعجاب ({dislikes[recipe.id] || 0})</button>
          </div>
          <div className="mt-3">
            <h5>التعليقات</h5>
            <textarea className="form-control mb-2" rows="2" value={comments[recipe.id] || ''} onChange={(event) => handleCommentChange(recipe.id, event)} placeholder="أضف تعليقك"></textarea>
            <button className="btn btn-primary mt-2">إرسال </button>
          </div>
        </div>
      </div>
    ))}
  </div>
  <SectionEndPage/>

</div>

  );
}
