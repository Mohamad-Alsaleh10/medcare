
import './Hero.css'
import React from 'react'

interface HeroProps {
  description: string;
  presentation_image: string;
  background_image: string;
  brandImage: string;
}

export const Hero: React.FC<HeroProps> = ({  description, presentation_image, brandImage, background_image }) => {

  const mystyle = {
    backgroundImage: `url(${presentation_image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  const style = {
    backgroundImage: `url(${background_image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'left bottom',
  };

  return (
    <div className='MA_hero' style={mystyle}>
   
        <div className='box'> 
          <div className='image'>
            <img src={brandImage} alt="" />
          </div>
          <div className='text'>
            <p>{description}</p>
          </div>
        </div>

        <div className='HJ_photo'>
          <div  style={style}></div>
        </div>
  
    </div>
  );

};
