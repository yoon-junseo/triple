import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const MainPage = lazy(() => import('@/pages/MainPage'))

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
