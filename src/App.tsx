import React, { ReactNode, useEffect, useRef, useState, Fragment } from 'react'
import './index.css';
import ListContainer from './components/listContainer';
import Footer from './components/footer';
import { SearchContextProvider } from './context/context'
import { Dialog, Transition } from '@headlessui/react'
import useEventListener from '@use-it/event-listener'
import Fuse from 'fuse.js'

const App = () => {

  //this will user input array of object which will have all info for list items.
  const ItemList: { selected: Boolean, function: Function, content: { body: string, icon: string, keyCode: string, shift: boolean } }[] = [
    {
      selected: false,
      function: () => window.open('#'),
      content: { body: 'Home page', icon: 'HomeIcon', keyCode: 'KeyM', shift: true },
    },
    {
      selected: false,
      content: { body: 'Contact me on tinder', icon: 'ExternalLinkIcon', keyCode: '', shift: false },
      function: () => alert('hello with Q and no shift'),
    },
    {
      selected: false,
      content: { body: 'Contact me on tinder unique', icon: 'ExternalLinkIcon', keyCode: 'Digit1', shift: true },
      function: () => alert('hello with Q and no shift'),
    }
    ,
    {
      selected: false,
      content: { body: 'name is devesh 😊', icon: 'ExternalLinkIcon', keyCode: 'KeyQ', shift: false },
      function: () => alert('yaay you clicked :)'),
    }
    ,
    {
      selected: false,
      content: { body: 'Contact me on tinder', icon: 'ExternalLinkIcon', keyCode: 'KeyQ', shift: false },
      function: () => alert('hello with Q and no shift'),
    }
    ,

  ]

  const theme = {
    '--color-icon_background': '#111317',
    '--color-background': '#1C2027',
    '--color-active': '#14171c',
    '--color-text': '#FEFEFE',
    '--color-icon_color': '#FEFEFE',
    '--color-input_border': '#4f46e5',
    '--color-input_border_inactive': '#494D52',
  }

  useEffect(() => {
    for (const property in theme) {
      document.documentElement.style.setProperty(property, theme[property])
    }
  }, [])
  

  const [open, setOpen] = useState(true)

  const shortCutHandler = (keyEvent) => {


    if (String(keyEvent.code) === "KeyK" && (keyEvent.ctrlKey === true || keyEvent.metaKey === true)) {
      setOpen(true)
    }
  }

  useEventListener('keydown', shortCutHandler);



  return (
    <SearchContextProvider>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-opacity-40 transition-opacity" />
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
                <Dialog.Panel className="relative bg-background p-4 rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-[100vw] sm:my-8 sm:max-w-2xl sm:w-full sm:relative sm:top-28 sm:self-start">
                  <div tabIndex={1} className=' overflow-y-scroll max-h-96 pb-6'>
                    <ListContainer ItemList={ItemList} />
                  </div>
                  <Footer />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>

        </Dialog>
      </Transition.Root>

      {/* temporary remove me later */}
      <button
        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-text bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-input_border"
        onClick={() => setOpen(true)}>Use me</button>

    </SearchContextProvider>
  )
}

export default App