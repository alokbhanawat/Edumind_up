import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <div className="container page-content">
          <section id="program">
            <Title subTitle="Learn without limits" title="Find your path to success" />
            <Programs />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="campus">
            <Title subTitle="Life at Edumind" title="A campus made for possibility" />
            <Campus />
          </section>
          <section id="testimonials">
            <Title subTitle="Student stories" title="Good things happen here" />
            <Testimonials />
          </section>
          <section id="contact">
            <Title subTitle="We are here to help" title="Let’s start a conversation" />
            <Contact />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
