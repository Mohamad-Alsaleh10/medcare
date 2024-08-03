import React from 'react'
import './about.css'
import slugen from '../../assets/images/about/slugen.jpg'
import green from '../../assets/images/about/green.png'
import whyweare from '../../assets/images/about/whyweare.png'
import f1 from '../../assets/images/about/f1.png'
import f2 from '../../assets/images/about/f2.png'
import f3 from '../../assets/images/about/f3.png'
import f4 from '../../assets/images/about/f4.png'
import creative from '../../assets/images/about/creative.png'




import Navbar from '../../componnents/Navbar/Navbar'
import SectionEndPage from '../../componnents/SectionEndPage/SectionEndPage'

const About = () => {
  return (
    <>
        <Navbar />
      <div className='hero-about'>
        <div className='overlay'></div>
        <div className='hero-content'>
          <span>
             حولنا
          </span>
          <div>
            من نحن
          </div>
        </div>
      </div>

      {/* // slugen section  */}
      <div className="slugen-sec">
        <h3 className='specialh3'>
          <img src={green} alt="" />
          <span>دع  </span>
          الغد <span></span>
          <span>يبدأ </span>
          اليوم
        </h3>
        <div className="content">
          <img src={slugen} alt="" />
          <p>يمكنك الحصول على تشخيص علاجي ودواء عشبي مناسب من خلال ال AI</p>
        </div>
      </div>

      {/* why we are  */}
      <div className="whyweare">
        <div className='title'>
          <span className='top-title'></span>
          <span className='whywetitle'>لماذا نحن</span>
          <span className='whywedesc'> من اهدافنا ومعاييرنا  تسهيل عملية التشخيص ووسائل العلاج للمرضى  </span>
          <span className='bottom-title'></span>

        </div>

        <img src={whyweare} alt="" />

      </div>


      {/* our futures  */}
      <div className="futures">
        <h3 className='specialh3'>
          <img src={green} alt="" />
          مميزاتنا
        </h3>

        <div className="cards-futures">
          <div className="futures-container">
            <div className="future">
              <div>
                <img src={f1} alt="" />
                <h4>استخدام التكنولوجيا الجديدة</h4>
              </div>
            </div>
            <div className="future">
              <div>
                <img src={f2} alt="" />
                <h4>   التشخيص الحديث</h4>
              </div>
            </div>
            <div className="future">
              <div>
                <img src={f3} alt="" />
                <h4>  معلومات معتمدة</h4>
              </div>
            </div>
            <div className="future">
              <div>
                <img src={f4} alt="" />
                <h4>    سهولة الاستخدام </h4>
              </div>
            </div>
          </div>

          <div className="overlay-futures"></div>
        </div>
      </div>


      {/* all creative  */}
      <div className="all-creative">
        <div className="title">مميزون معاً</div>
        <img src={creative} alt="" />
      </div>
      <SectionEndPage/>

    </>

  )
}

export default About