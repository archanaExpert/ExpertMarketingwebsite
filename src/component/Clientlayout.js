import React from 'react'
import Header from './Header'
import Footer from './Footer'
import WhatsAppIcon from './WhatsAppIcon'

const Clientlayout = ({children}) => {
  return (
    <>
   
    <Header/>
    <main>
        {children}
    </main>
    <WhatsAppIcon/>
    <Footer/>
    </>
  )
}

export default Clientlayout