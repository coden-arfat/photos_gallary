import React from 'react';
import './App.css';
import Photos_gallary from './Photos_gallary';
import Card from './Card';
function App() {
  return (
    <>
     <div className='all_btn'>
         <button className='btn'>Breakfast</button>
         <button className='btn'>Lanch</button>
         <button className='btn'>Dinner</button>
         </div>
    <Photos_gallary/>
    </>
  );
}

export default App;
