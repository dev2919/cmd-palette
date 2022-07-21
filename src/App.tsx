import React, {ReactNode, useEffect, useRef, useState, Fragment} from 'react'
import './index.css';
import ListContainer from './components/listContainer';
import {SearchContextProvider} from './context/context'
import { Dialog, Transition } from '@headlessui/react'
import useEventListener from '@use-it/event-listener'
import Fuse from 'fuse.js'

const App = () => {

  //TODO Make context for listItem container with obj of index that is active

  //this will user input array of object which will have all info for list items.
  const ItemList = [
    {
      selected: false, 
      type:'default',
      page: 'home',
      function: ()=> alert('hello'),
      content: {body:'Home page', icon: 'HomeIcon', keyCode: 'KeyM', shift:true},
    },
    {
      selected: false, 
      type:'default',
      page: 'home',
      content: {body:'Contact me on tinder', icon: 'ExternalLinkIcon', keyCode: '', shift:false},
      function: ()=> alert('hello with Q and no shift'),
    },
    {
      selected: false, 
      type:'default',
      page: 'home',
      content: {body:'Contact me on tinder unique', icon: 'ExternalLinkIcon', keyCode: 'KeyQ', shift:false},
      function: ()=> alert('hello with Q and no shift'),
    }
    ,
    {
      selected: false, 
      type:'default',
      page: 'home',
      content: {body:'name is devesh 😊', icon: 'ExternalLinkIcon', keyCode: 'KeyQ', shift:false},
      function: ()=> alert('yaay you clicked :)'),
    }
    ,
    {
      selected: false, 
      type:'default',
      page: 'home',
      content: {body:'Contact me on tinder', icon: 'ExternalLinkIcon', keyCode: 'KeyQ', shift:false},
      function: ()=> alert('hello with Q and no shift'),
    }
    ,

  ]

  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  const shortCutHandler = (keyEvent) => {


    if (String(keyEvent.code) === "KeyK" && (keyEvent.ctrlKey === true || keyEvent.metaKey === true)) {
      setOpen(true)
    }
  }
  
  useEventListener('keydown', shortCutHandler);



  return (
    <SearchContextProvider>
      
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-shark-800 bg-opacity-40 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-shark-800 p-4 rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-[100vw] sm:my-8 sm:max-w-2xl sm:w-full sm:relative sm:top-28 sm:self-start">
                  <div tabIndex={1} className=' overflow-y-scroll max-h-80'>
                    <ListContainer ItemList={ItemList} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>

        </Dialog>
    </Transition.Root>



    </SearchContextProvider>
  )
}

export default App