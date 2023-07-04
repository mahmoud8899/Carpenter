import React from 'react'
import App from './App'
import TheLoading from './Pages/Screen/TheLoading'
import Services from './Pages/Home/Services'
const Home = React.lazy(() => import('./Pages/Home'))
const TheServices = React.lazy(() => import('./Pages/Home/TheServices'))
const TheAboutUs = React.lazy(() => import('./Pages/Home/AboutUs'))
const TheMpas = React.lazy(() => import('./Pages/Home/TheMpas'))
const Title = React.lazy(() => import('./Pages/Screen/Title/index'))
import Imagesd from './Icons/services/asas.jpeg'
import LastWork from './Icons/lastworking/7.jpeg'


export const RoutersArray = [
    {
        element: <App.element />,
        path: '/',
        children: [

            {
                element: <React.Suspense fallback={
                    <div className='devloading'>
                        <TheLoading />
                    </div>
                } >
                    <Home />
                </React.Suspense>,
                path: '/',

            },

            {
                element: <React.Suspense
                    fallback={
                        <div className='devloading'>
                            <TheLoading />
                        </div>
                    }
                >
                    <TheServices />
                </React.Suspense>,
                path: '/نجار-بالرياض/',

            },

            {
                element: <React.Suspense
                    fallback={
                        <div className='devloading'>
                            <TheLoading />
                        </div>
                    }
                >

                    <Title
                        title='نجار أثاث بالرياض'
                        description='نجار أثاث الرياض هو خبير ماهر في صناعة الأثاث بدقة واحترافية. يقدم تصميمات مخصصة وجودة عالية تلبي احتياجاتك وتتناسب مع ذوقك الشخصي'
                        imageUrl={LastWork}
                        imageAlt='نجار أثاث بالرياض'

                    />
                    <div className='margin-bottom margin-top2 paddingTo'>
                        <h1 className='text-align'>نجار بالرياض هو فنان ماهر في صناعة الأثاث</h1>
                    </div>
                    <TheAboutUs />
                    <Services />


                </React.Suspense>,
                path: '/نجار-أثاث-بالرياض/',



            },

            {
                element: <React.Suspense
                    fallback={
                        <div className='devloading'>
                            <TheLoading />
                        </div>
                    }
                >

                    <Title
                        title='نجار تفصيل بالرياض'
                        description='نجار التفصيل في الرياض هو فنان ماهر يتمتع بخبرة عالية في تصميم وتنفيذ الأثاث المخصص. يتميز بالإبداع والدقة في التفاصيل'
                        imageUrl={Imagesd}
                        imageAlt='نجار تفصيل بالرياض'

                    />

                    <div className='margin-bottom margin-top2 paddingTo'>
                        <h1 className='text-align'>نجار التفصيل بالرياض يتمتع بخبرة عالية في تصميم وتنفيذ الأثاث المخصص</h1>
                    </div>

                    <TheMpas />


                </React.Suspense>,
                path: '/نجار-تفصيل-بالرياض/',



            },



            {
                element: <React.Suspense fallback={
                    <div className='devloading'>
                        <TheLoading />
                    </div>
                }
                >
                    <Home />
                </React.Suspense>,
                path: '*',

            },





        ]
    }
]