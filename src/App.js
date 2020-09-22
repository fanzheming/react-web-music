import { renderRoutes } from 'react-router-config';
import routes from './router';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import React, { memo } from 'react'
import { withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const App = memo(function () {
    return (
        <Provider store={store}>
            <AppHeader />
            {renderRoutes(routes)}
            <AppFooter />
        </Provider>
    )
})

export default withRouter(App)
