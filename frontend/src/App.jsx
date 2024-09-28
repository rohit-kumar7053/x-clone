/** @format */

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import SignUpPage from "./pages/auth/signup/SignUpPage.jsx";
import LoginPage from "./pages/auth/login/LoginPage.jsx";
import NotificationPage from "./pages/notification/NotificationPage.jsx";
import ProfilePage from "./pages/profile/ProfilePage.jsx";

import Sidebar from "./components/common/Sidebar.jsx";
import RightPanel from "./components/common/RightPanel.jsx";

import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./components/common/LoadingSpinner.jsx";

const App = () => {
    const { data: authUser, isLoading } = useQuery({
        // we use queryKey to give a unique to our query and refer to it later
        queryKey: ["authUser"],
        queryFn: async () => {
            try {
                const res = await fetch("/api/auth/me");
                const data = await res.json();
                if (data.error) {
                    return null;
                }
                if (!res.ok) {
                    throw new Error(data.error || "Something went wrong");
                }
                console.log("authUser is here:", data);
                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
        retry: false,
    });

    if (isLoading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <LoadingSpinner size="lg" />
            </div>
        );
    }

    return (
        /* Main routing with if else logic for the application */
        <div className="flex max-w-6xl mx-auto">
            {/* Commen component, bc it's not wrapped with Routes  */}
            {authUser && <Sidebar />}
            <Routes>
                {/* Home route, redirects to login if the user is not authenticated */}
                <Route
                    path="/"
                    element={authUser ? <HomePage /> : <Navigate to="/login" />}
                />

                {/* Login route, redirects to home if the user is already authenticated */}
                <Route
                    path="/login"
                    element={!authUser ? <LoginPage /> : <Navigate to="/" />}
                />

                {/* Signup route, redirects to home if the user is already authenticated */}
                <Route
                    path="/signup"
                    element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
                />

                {/* Notifications route, redirects to login if the user is not authenticated */}
                <Route
                    path="/notifications"
                    element={
                        authUser ? (
                            <NotificationPage />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />

                {/* Profile route, redirects to login if the user is not authenticated */}
                <Route
                    path="/profile/:username"
                    element={
                        authUser ? <ProfilePage /> : <Navigate to="/login" />
                    }
                />
            </Routes>

            {authUser && <RightPanel />}
            <Toaster />
        </div>
    );
};

export default App;
