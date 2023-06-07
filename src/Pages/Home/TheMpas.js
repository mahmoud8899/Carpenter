import React from 'react'
import GoogleMapReact from 'google-map-react';
import { MpaStyles } from './Mapstyles'
import TheMpasOne from '../../Icons/ww.png'
import { TheMapInf, MyAddress, TelefonNumber } from '../data/response';
import MyImage from '../Screen/Images/index'

export default function TheMpas() {

    const defaultProps = {
        center: {
            lat: 24.843049,
            lng: 46.656977
        },
        zoom: 15
    };

    const AnyReactComponent = ({ text }) => {

        return (
            <div className=''>
                <MyImage
                    image={TheMpasOne}
                  
                    alt='the map'
                    width='50px'
                    height='50px'
                    title='the map'

                />

                {text}
            </div>

        )
    };




    return (

        <div>

            <h2 className='text-align margin-bottom margin-top2'>{TheMapInf.title}</h2>


            <div className='Maps position' >

                <div className=' paddingTo width50 mapsText' >
                    <h2>{MyAddress.title}</h2>
                    <div className='margin-topOneee'>
                        <p className='font-size '>{MyAddress.address}</p>
                    </div>

                    <h2 className='margin-topOneee'>{TelefonNumber.title}</h2>
                    <div className='margin-topOneee'>
                        <p className='font-size '>
                            <a href={`tel:+${TelefonNumber.telefon}`} className="Telefon_link" >
                                {TelefonNumber.telefon}
                            </a>

                        </p>
                    </div>
                </div>


                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCEB_-tQr1NNxJRvK8xyfRbz4dO8a-JQxA" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    defaultOptions={{ styles: MpaStyles }}

                >
                    <AnyReactComponent
                        lat={24.843049}
                        lng={46.656977}
                        text="نجار الرياض"


                    />

                </GoogleMapReact>
            </div>
        </div>






    )
}