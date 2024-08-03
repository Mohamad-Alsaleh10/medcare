import React, { useEffect, useState } from 'react';
import './Navbar.css';
import nav_logo from '../../assets/images/home/herbal-removebg-preview.png';
import facebook from '../../assets/icons/facebook.svg';
import insta from '../../assets/icons/insta.svg';
import call from '../../assets/icons/call.svg';
import mail from '../../assets/icons/mail.svg';
import w_facebook from '../../assets/icons/w_facebook.svg';
import w_insta from '../../assets/icons/w-insta.svg';
import w_call from '../../assets/icons/w_call.svg';
import w_mail from '../../assets/icons/w-mail.svg';
import logo1 from '../../assets/images/home/Group.svg';
import logo2 from '../../assets/images/home/Group (1).svg';
import logo3 from '../../assets/images/home/Group (2).svg';
import phone from '../../assets/icons/phone.svg';
import cancel from '../../assets/icons/x.svg';
import toggle from '../../assets/icons/toggle.svg';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { ColorContext } from '../../Contexts/ColorContext';


type TBrandData = {
  id: number,
  name: string
}

const Navbar = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [brandData, setBrandData] = useState<TBrandData[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/brands-published')
      .then((res) => setBrandData(res.data.data))
      .catch((err) => console.error(err))
      .finally(() => console.log(brandData));
  }, []);



  const handleOpenProducts = (item: React.SetStateAction<string>) => {
    setIsOpen((prevState) => !prevState);
    setSelectedItem(item);
  };
  const handleItemClick = (item: React.SetStateAction<string>) => {
    setSelectedItem(item);
  };

  const handleCancelClick = () => {
    setMenuActive(false);
    setSelectedItem('');
  };

  const handleToggleClick = () => {
    setMenuActive((prevState) => !prevState);
  };

  const handeleClickOnBrand = (id: number) => {
    navigate(`/brands/${id}`);
  }

  const { brandColor } = React.useContext(ColorContext);
  const mystyle = {
    backgroundColor: `${brandColor}`
  }

  return (
    <>
      <nav className={`MA_navbar ${menuActive ? 'hide' : ''}`}>
        <button
          className="menu-button"
          onClick={handleToggleClick}
          style={{ backgroundColor: 'inherit' }}
        >
          <img src={toggle} alt="toggle" />
        </button>
        <div className="navbar-logo">
          <img src={nav_logo} alt="nav_search" />
        </div>
        <div className="list" style={{ display: 'flex', flexDirection: 'row' }}>
          <ul className="navbar-items">
            <li className={`navbar-item ${selectedItem === 'home' ? 'active' : ''}`}>
              <Link to='/user' onClick={() => handleItemClick('home')}>
                الرئيسية
              </Link>
            </li>
            <li className={`navbar-item ${selectedItem === 'tashkhes' ? 'active' : ''}`}>
              <Link to='/user/tashkhes' onClick={() => handleItemClick('tashkhes')}>
                تشخيص
              </Link>
            </li>
            <li className={`navbar-item ${selectedItem === 'wasfat' ? 'active' : ''}`}>
              <Link to='/user/wasfat' onClick={() => handleItemClick('wasfat')}>
                الوصفات المأخوذة
              </Link>
            </li>
            <li className={`navbar-item ${selectedItem === 'about' ? 'active' : ''}`}>
              <Link to='/user/about' onClick={() => handleItemClick('about')} className='MA_font_about'>
                من نحن
              </Link>
            </li>
            <li className={`navbar-item ${selectedItem === 'contact' ? 'active' : ''}`}>
              <Link to='/user/contact' onClick={() => handleItemClick('contact')} className='MA_Font_Contact'>
                تواصل معنا
              </Link>
            </li>

            <li className={`navbar-item ${selectedItem === '/user/info' ? 'active' : ''}`}>
              <Link to='/user/info' onClick={() => handleItemClick('/user/info')} className='MA_Font_Contact'>
                 معلومات الحساب
              </Link>
            </li>
            <li className={`navbar-item ${selectedItem === '/' ? 'active' : ''}`}>
              <Link to='/' onClick={() => handleItemClick('/')} className='MA_Font_Contact btn btn-danger d-flex align-items-center'>
                  تسجيل خروج
              </Link>
            </li>
          </ul>

        </div>

      </nav>

      <div className={`ShowPage ${menuActive ? '' : 'hide'}`}></div>
      <div className={`mobile_nav ${menuActive ? 'active' : ''}`}>

        <div>
          <div className='MA_Icon_cancel'>
            <img
              src={cancel}
              alt="cancel"
              style={{ padding: '15px 15px' }}
              onClick={handleCancelClick}
            />

          </div>




          <ul className="mobile_nav_items">
            <li className={`mobile_nav_item  text_align ${selectedItem === 'home' ? 'active' : ''}`}>
              <Link to='/user' onClick={() => handleItemClick('home')}>
                الرئيسية
              </Link>
            </li>
            <li className={`mobile_nav_item text_align ${selectedItem === 'tashkhes' ? 'active' : ''}`}>
              <Link to='/user/tashkhes' onClick={() => handleItemClick('tashkhes')}>
                تشخيص
              </Link>
            </li>
            <li className={`mobile_nav_item text_align ${selectedItem === 'wasfat' ? 'active' : ''}`}>
              <Link to='/user/wasfat' onClick={() => handleItemClick('wasfat')}>
                الوصفات المأخوذة 
              </Link>
            </li>
            <li className={`mobile_nav_item text_align ${selectedItem === 'about' ? 'active' : ''}`}>
              <Link to='/user/about' onClick={() => handleItemClick('about')}>
                من نحن
              </Link>
            </li>
            <li className={`mobile_nav_item text_align ${selectedItem === 'contact' ? 'active' : ''}`}>
              <Link to='/user/contact' onClick={() => handleItemClick('contact')}>
                تواصل معنا 
              </Link>
            </li>
            <li className={`mobile_nav_item text_align  ${selectedItem === 'info' ? 'active' : ''}`}>
              <Link to='/user/info' onClick={() => handleItemClick('info')} >
              معلومات الحساب
 
              </Link>
            </li>
            <li className={`mobile_nav_item text_align  ${selectedItem === 'home' ? 'active' : ''}`}>
              <Link to='/' onClick={() => handleItemClick('home')} >
               تسجيل خروج
 
              </Link>
            </li>
          </ul>
        </div>
        <div className="mobile_nav_contact">
          <ul>
            <li style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
              <img src={w_facebook} alt="w_facebook" /><img src={w_insta} alt="w_insta" />
            </li>
            <li><img src={w_call} alt="w_call" />+963 2020 2020</li>
            <li><img src={phone} alt="phone" />+963 994 640000</li>
          </ul>
        </div>
      </div>


    </>
  );
};

export default Navbar;