import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';

import NewProject from './components/pages/NewProject'
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';


function App  () {
  return (
      <div>
        
  <div> 
     <BrowserRouter>
    <NavBar></NavBar>
    <Container customClass="min-height">
       
       
       <Routes >
     
     <Route path='/' element={<Home />}/>
     <Route path='/projects' element={<Projects/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/company' element={<Company/>}/>
     <Route path="/newproject" element={<NewProject />}/>
     <Route path="/project/:id" element={<Project />}/>
   </Routes>
  
       
       </Container>
    
    </BrowserRouter></div>
    <Footer/>
      </div>
   
  )
}

export default App



/**
 <NavBar/>
        
        <Container customClass="min-height">
       
        <Routes >
      
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/company' element={<Company/>}/>
       
          
        </Routes>
        
        </Container>
        <div>    <Footer/></div>
 */