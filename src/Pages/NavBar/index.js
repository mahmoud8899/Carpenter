import React, { useState } from 'react'
import CallIcons from '../../Icons/call.png'
import MapsIcons from '../../Icons/map.png'
import ListNavBar from './ListNavBar'
import { ListNavBarTop, TheName } from './Response'
import { MyAddress, TelefonNumber } from '../data/response'
import MyImage from '../Screen/Images/index'


export default function NavBar() {







    const [css, setCss] = useState({
        menubar: 'menu-btn',
        hidden: 'hidden'
    })

    const Change = () => {
        if (css.menubar === 'menu-btn') {
            setCss({
                ...css,
                menubar: 'menu-btn open',
                hidden: 'hidden open'
            })
        } else {
            setCss({
                ...css,
                menubar: 'menu-btn',
                hidden: 'hidden'
            })
        }
    }


    return (
        <div className='padding__ background'>

            <div className='flex flex-wrap flex-center margin-topone'>


                <div className='width50 flex flex-center'>
                    <div className='margin-leftOne widthx'>

                        <p className='font-size'>
                            {TelefonNumber.title}
                        </p>
                        <p className='font-size margin-top option cursor'>
                            <a href={`tel:${TelefonNumber.telefon}`} className="Telefon_link" title='نجار تركيب اثاث ايكيا' >
                                {TelefonNumber.telefon}
                            </a>
                        </p>

                    </div>
                    <a href={`tel:${TelefonNumber.telefon}`} className="Telefon_link" title='نجار اثاث' >

                        <MyImage
                            image={CallIcons}
                            className='CallImage add'
                            alt='the calling'
                            width='40px'
                            height='40px'
                            key='3'

                        />
                    </a>

                </div>

                <div className='width50 Extra flex flex-center '>
                    <div className='margin-leftOne widthx'>
                        <p className='font-size'>{MyAddress.title}</p>
                        <p className='font-size margin-top option cursor'>
                            {MyAddress.address}
                        </p>
                    </div>
                    <MyImage
                        image={MapsIcons}
                        className='CallImage'
                        alt='the calling'
                        width='40px'
                        height='40px'
                        key='5'

                    />

                </div>

            </div>

            <nav className='flex flex-row align-items flex-wrap margin-top2'>
                <h2 className='firstClass font-weight margin-left cursor'> {TheName}</h2>

                <div onClick={Change} className='widthbar flex  flex-row align-items' >
                    <div className={css.menubar}  >
                        <div className='menu-btn__burger' />
                    </div>
                </div>

                <div className={css.hidden}>
                    <ListNavBar
                        ClassName='flex flex-row flex-wrap cursor'
                    />
                </div>

            </nav>


        </div>
    )
}
