import React from 'react'
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// import Index from './Pages/Index/Index';
// import About from './Pages/About/About';
// import Portfolio from './Pages/Portfolio/Portfolio';
// import Contact from './Pages/Contact/Contact';
// import Blog from './Pages/Blog/Blog';
// import BlogView from './Pages/Blog/BlogView';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <Navbar/>
      <BrowserRouter >
          {/* <Routes><Route path="/" element={<Index />} /></Routes> */}
          {/* <Routes><Route path="/about" element={<About />} /></Routes> */}
          {/* <Routes><Route path="/portfolio" element={<Portfolio />} /></Routes> */}
          {/* <Routes><Route path="/contact" element={<Contact />} /></Routes> */}
          {/* <Routes><Route path="/blog" element={<Blog />} /></Routes> */}
          {/* <Routes><Route path="/blog/:id" element={<BlogView />} /></Routes> */}
      </BrowserRouter >
    </div>
  )
}

export default App