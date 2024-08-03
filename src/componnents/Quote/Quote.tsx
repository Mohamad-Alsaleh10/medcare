import React from 'react'
import qoute from '../../assets/icons/qoute.svg'
import './Quote.css'

const Quote = () => {

    return (
        <div className="na-qoute">
            <div className="na-rectangle1">
                <img src={qoute} alt="quote" className="quote-icon" />
                <span> يمكنك من خلال موقعنا الحصول على تشخيص وعلاج بالاعشاب الطيبعية</span>
                <h6>معاَ للعلاج بالاعشاب  الطبيعية</h6>
            </div>
        </div>
    )
}

export default Quote