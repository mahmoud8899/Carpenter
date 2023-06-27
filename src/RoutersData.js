import React from 'react'
import App from './App'
import TheLoading from './Pages/Screen/TheLoading'
const Home = React.lazy(() => import('./Pages/Home'))
const TheServices = React.lazy(() => import('./Pages/Home/TheServices'))


export const RoutersArray = [
    {
        element: <App.element />,
        path: '/',
        children: [

            {
                element: <React.Suspense  fallback={<TheLoading />} >
                    <Home />
                </React.Suspense>,
                path: '/',

            },
            
            {
                element: <React.Suspense fallback={<TheLoading />} >
                    <TheServices />
                </React.Suspense>,
                path: '/نجار-بالرياض/',

            },
            {
                element: <React.Suspense fallback={<TheLoading />} >
                  <Home   />
                </React.Suspense>,
                path: '*',

            },
           



         
        ]
    }
]