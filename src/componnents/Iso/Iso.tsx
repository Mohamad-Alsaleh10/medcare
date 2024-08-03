import React from 'react';
import './Iso.css';
import TitleSection from '../TitleSection/TitleSection';
import Isosection from '../Isosection/Isosection';





const Iso = () => {
    return (
        <div className="na-iso HJ_MarginSection_Iso HJ_MarginSection">

            <TitleSection title_section="معاييرنا" className='HJ_DirectionRight' />

            <div className="na-iso-container">
                <div className="na-icons">
                    <div className="na-icons-part1">
                        <Isosection title="الجودة والأمان"  />
                        <Isosection title="الارتقاء بالصحة والعافية"/>
                        <Isosection title="الاستدامة" />
                    </div>
                    <div className="na-icons-part2">
                        <Isosection title="الشفافية والمسؤولية" />
                        <Isosection title="الامتثال للمعايير" />
                    </div>
                </div>

  

            </div>
        </div>
    )
}

export default Iso;
