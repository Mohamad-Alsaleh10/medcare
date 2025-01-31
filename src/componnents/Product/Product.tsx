import React from 'react'
import './Product.css'
//import product from '../../assets/images/Dahab/product1.webp'
import { FaAngleDoubleLeft } from "react-icons/fa";
import { TProduct } from '../../types/types';
import { Link, useNavigate } from 'react-router-dom';




const Product: React.FC<TProduct> = ({ additional_image, name, color }) => {

  const navigate = useNavigate();

  const navigateProductDetails = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    navigate(`/productDetails/${id}`);
  }

  const mystyle = {
    backgroundColor: `${color}`,
  }

  return (
    <div className='ra-product'>
      <img src={additional_image} />
      <h3>{name}</h3>

      <button onClick={(event) => navigateProductDetails(event, 1)} style={mystyle}>   عرض التفاصيل <FaAngleDoubleLeft className='fa-angle-icon' /> </button>

    </div>
  )

}


export default Product