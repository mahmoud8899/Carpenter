import React, { Fragment } from 'react'
import Services from './Services'
import LastWorking from './LastWorking'
import TheMpas from './TheMpas'
import FirstSlider from './Slider'
import TheAboutUs from './AboutUs'
import MetaDecorator from '../Screen/Title/index'
import { PageTitle, TheName } from '../data/response'

export default function Home() {









    // option 

    // FirstSlider --- slider image and info 
    // TheAboutUs --- about us
    // Services it is about srives... 







    return (
        <Fragment>

            <MetaDecorator
                title={PageTitle.title}
                description={PageTitle.des}
                imageUrl={PageTitle.image}
                imageAlt={PageTitle.title}
            />

            <FirstSlider />

            <div className='margin-bottom__' id="about">
                <div className='Line margin-top2' />
                <TheAboutUs />

            </div>
            <Services />

            <div className='margin-bottom__'>
                <div className='Line margin-top2' />
                <LastWorking />

            </div>
            <div id="calling">
                <TheMpas />
            </div>
        </Fragment>


    )
}