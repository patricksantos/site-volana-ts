import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { isAuthenticated } from '../../core/services/auth';
import { LoginModule } from '../Login/LoginModule';
import { DashboardModule } from '../Dashboard/DashboardModule';
import './App.css';

const AppRoutes = () => {
    function PrivateRoute({ children }: any) {
        const auth = isAuthenticated();
        return auth ? children : <Navigate to="/" />;
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginModule />} />
                    <Route
                        path='/dashboard'
                        element={
                            <PrivateRoute>
                                <DashboardModule />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default AppRoutes;
