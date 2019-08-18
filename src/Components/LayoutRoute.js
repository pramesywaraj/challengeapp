import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './Layout';

export const LayoutRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props, ref) => (
            <Layout>
                <Component {...props} ref={ref} /> 
            </Layout>
        )} 
    />
)