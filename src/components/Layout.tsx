import React, { ReactNode } from 'react'
import '../styles/global.css'
import TopLeftImg from './TopLeftImg'
import Nav from './Nav'
import Header from './Header'

type Props = {
    children ?: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="page bg-site text-white bg-cover relative">
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  )
}

export default Layout
