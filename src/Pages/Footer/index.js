import React from 'react'
import { TheName } from '../NavBar/Response'
import ListNavBar from '../NavBar/ListNavBar'
import facebook from '../../Icons/facebook.png'

import whatapp from '../../Icons/whatapp.png'
import instagram from '../../Icons/instagram.png'
import MyImage from '../Screen/Images/index'


export default function TheFooter() {



    const FooterLinke = [
        {
            _id: 1,
            image: facebook,
            name: 'facebook',
            link: 'https://www.facebook.com/profile.php?id=100092699676341&mibextid=ZbWKwL',
        },
        {
            _id: 2,
            image: instagram,
            name: 'instagram',
            link: 'https://www.instagram.com/atefsmair1994/',
        },
        {
            _id: 2,
            image: whatapp,
            name: 'whatapp',
            link: 'https://wa.me/+966568970473',
        }

    ]


    return (
        <footer className='flex flex-wrap flex-center margin-topone paddingTo width80 margin backgroundTo style_border'>

            <div className='width50 margin-top'>
                <h2 className='firstClass'>{TheName}</h2>
            </div>

            <div className='width50'>
                <ListNavBar ClassName='flex' />
            </div>
            <div className='Line margin-top' />


            <div className='margin-topone text-align'>
                <p className='font-size option'>© جميع الحقوق محفوظة</p>
            </div>

            <div className='margin-topone'>
                <h2 className='firstClass'>تستطيع متابعة حساباتنا</h2>

                <div className='flex align-items'>
                    {FooterLinke?.map((item, index) => (
                        <div className='margin-leftOne  cursor'>

                            <a href={item.link} title='facbook page' target="_blank" key={index} >
                                <MyImage
                                    image={item.image}
                                    className='border-radius cursor '
                                    alt={item.name}
                                    width='40px'
                                    height='40px'
                                    title="facebook"

                                />
                            </a>

                        </div>
                    ))}





                </div>
            </div>

        </footer>

    )
}
