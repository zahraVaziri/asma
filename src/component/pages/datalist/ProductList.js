import { Product } from "./product";

import React, {useEffect, useState} from "react";
import {SwiperSlide, Swiper}  from 'swiper/react';

export const ProductList = (props) => {
    const [amir,setAmir]=useState(false)
    useEffect(()=>{
        setAmir(true)
    })
    return(
        <>
         <Swiper navigation={true} slidesPerView={1} spaceBetween={5} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                        
                        }} breakpoints={{
                        "640": {
                            "slidesPerView": 1,
                            "spaceBetween": 20
                        },
                        "768": {
                            "slidesPerView": 2,
                            "spaceBetween": 30
                        },
                        "1024": {
                            "slidesPerView":3,
                            "spaceBetween": 40
                        }
                        }} className="mySwiper py-5">
            {props.products.map((item)=> (
               <SwiperSlide className='py-2'>
                   {
                       amir ? <Product data={item} /> : ''
                   }
               </SwiperSlide>
                )
               
            )} 
         </Swiper>
        </>
    )
    
}

