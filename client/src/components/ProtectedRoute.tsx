import { RootState } from '@/store'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const { user, token } = useSelector((state: RootState) => state.auth)

    if (!user) {
        return (
            <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24"></svg>
        )
    }

    if (!token) {
        return <Navigate to="/signin" replace />
    }

    return (
        <Outlet />
    )
}

export default ProtectedRoute