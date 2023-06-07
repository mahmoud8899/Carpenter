import { HomeSlider } from "../data/response";
import React from 'react'

import Cover from '../../Icons/rr.png'
import MyImage from '../Screen/Images/index'


export default function FirstSlider() {



    return (
        <div className='flex flex-wrap align-items padding__ width80 margin '>




            <div className='backgroundTo width50 paddingTo border-radius Order__ style_border'>
                <h2>{HomeSlider.title}</h2>
                <div className='flex flex-column'>
                    <h1 className='font-size margin-top '>{HomeSlider.des}</h1>
                    <p className='font-size margin-top cursor option'>
                        <a href={`tel:+${HomeSlider.telefon}`} className="Telefon_link" >
                            {HomeSlider.telefon}
                        </a>
                    </p>
                </div>
            </div>

            <div className="width50">
                <MyImage
                    image={Cover}
                    width='100%'
                    height='400px'
                    className='ImageSlider'
                    alt={HomeSlider.title}
                    title={HomeSlider.title}
                />
            </div>


        </div>
    )
}