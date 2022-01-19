import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '@components/Home'

type Props = Record<string, unknown>

const Router: FC<Props> = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lender" element={<Home />} />
      <Route path="/borrower" element={<Home />} />
    </Routes>
  </BrowserRouter>
)

export default Router
