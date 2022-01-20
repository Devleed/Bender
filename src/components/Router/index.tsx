import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '@components/Home'
import Borrower from '@components/Borrower'
import Lender from '@components/Lender'

type Props = Record<string, unknown>

const Router: FC<Props> = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lender" element={<Lender />} />
      <Route path="/borrower" element={<Borrower />} />
    </Routes>
  </BrowserRouter>
)

export default Router
