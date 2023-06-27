import React, { Fragment } from 'react'
const NavBar = React.lazy(() => import('./Pages/NavBar'))
const TheCalling = React.lazy(() => import('./Pages/Screen/Calling'))
const TheFooter = React.lazy(() => import('./Pages/Footer'))
import TheLoading from './Pages/Screen/TheLoading'
import { Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Css/styles.css'



const App = ({ route }) => {


    // <React.Suspense fallback={<TheLoading  />}>
    // <Home />
    // </React.Suspense>


    return (
        <Fragment>

            <React.Suspense >
                <TheCalling />
            </React.Suspense>

            <React.Suspense >
                <NavBar />
            </React.Suspense>


            <Outlet />


            <React.Suspense >
                <TheFooter />
            </React.Suspense>

        </Fragment>
    )
}

App.propTypes = {
    route: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
    route: null,
};

export default { element: App };