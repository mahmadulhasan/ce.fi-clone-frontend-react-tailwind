import React from 'react'
import Hero from './components/hero'
import Mainbody from './components/mainbody'
import Faq from './components/faq'
import Footer from './components/footer'
import Navbar from './components/navbar'

const App = () => {
  return (
    <main className='md:px-25 px-5 pt-20 flex flex-col gap-5'>
      <Navbar/>
      <Hero />
      <img src="/public/divider.png" alt="" className='w-full'/>
      <Mainbody/>
      <img src="/public/divider.png" alt="" className='w-full'/>
      <Faq/>
      <img src="/public/divider.png" alt="" className='w-full'/>
      <Footer/>
    </main>
  )
}

export default App
