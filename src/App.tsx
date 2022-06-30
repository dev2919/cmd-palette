import React, {ReactNode, useEffect, useRef, useState} from 'react'
import './index.css';
import ListContainer from './components/listContainer';
import {SearchContextProvider} from './context/context'
import frame from './static/Frame.svg'

const App = () => {

  //TODO Make context for listItem container with obj of index that is active

  //this will user input array of object which will have all info for list items.
  const ItemList = [
    {
      selected: false, 
      type:'default',
      page: 'home',
      function: ()=> alert('hello'),
      content: {body:'Home page', icon: frame, keyCode: 'KeyM', shift:true},
    },
    {
      selected: false, 
      type:'default',
      page: 'home',
      content: {body:'Contact me', icon: frame, keyCode: 'KeyQ', shift:false},
      function: ()=> alert('hello with Q and no shift'),
    }
  ]


  return (
    <SearchContextProvider>
      <div tabIndex={1} className=' h-64 overflow-scroll'>
      <ListContainer ItemList={ItemList} />
      </div>
    </SearchContextProvider>
  )
}

export default App