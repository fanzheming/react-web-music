import { renderRoutes } from 'react-router-config';
import routes from './router';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import React, { memo, Suspense } from 'react'
import { withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppPlayerBar from './pages/player/app-player-bar';

const App = memo(function () {
    return (
        <Provider store={store}>
            <AppHeader />
            <Suspense fallback={<div>page loading</div>}>
                {renderRoutes(routes)}
            </Suspense>
            <AppFooter />
            <AppPlayerBar />
        </Provider>
    )
})

export default withRouter(App)
