import React, { Fragment } from 'react'
import { PageServices, PageTitle, TheName } from '../data/response'
import MetaDecorator from '../Screen/Title'



function TheServices() {




    return (
        <Fragment>
            <MetaDecorator
                title={`${PageTitle.title} | ${PageTitle.title1}`}
                description={PageTitle.des}
                imageUrl={PageTitle.image1}
                imageAlt={PageTitle.title}
            />

            <div className='flex flex-wrap flex-center margin-topone paddingTo width80 margin '>


                <h2 className='firstClass font-weight margin-left cursor margin-bottom__ cursor'>{TheName}</h2>

                {PageServices?.map((item, index) => (
                    <div key={index} className='margin-topone cursor '>
                        <h1 >{item?.name}</h1>
                        <div className='margin-topOneee'>
                            <p className='font-size option'>{item?.des}</p>
                        </div>
                        <ul >
                            {item?.Extra && item?.Extra?.map((Extr) => (

                                <li key={Extr?._id} >{Extr?._id } : {Extr?.name}</li>

                            ))}
                        </ul>
                    </div>
                ))}


            </div>
        </Fragment>

    )
}



export default TheServices