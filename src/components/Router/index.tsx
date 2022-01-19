import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '@components/Home'
import JestDemo from '@components/JestDemo'

type Props = Record<string, unknown>

const Router: FC<Props> = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lender" element={<JestDemo />} />
      <Route path="/borrower" element={<JestDemo />} />
    </Routes>
  </BrowserRouter>
)

export default Router
