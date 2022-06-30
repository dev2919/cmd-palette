import React, { useState, useEffect, useRef , useContext } from 'react'
import {SearchContext} from '../context/context'
import useEventListener from '@use-it/event-listener'
import icon from '../static/shift.svg'

type Content = {
  body?: string;
  icon?: string;
  keyCode?:string;
  shift?:boolean
};

const ListItem = ({itemsRef, id, handleKeyPress, listFunction, content = {body:'home', icon: null, keyCode:null}}: {itemsRef:  React.MutableRefObject<object>, id: string, handleKeyPress: any, listFunction: any, content?: Content}) => {


const shortCutHandler = (keyEvent) => {

  if (String(keyEvent.code) === content.keyCode && keyEvent.shiftKey === content.shift ) {
    listFunction?.()
  }
}

useEventListener('keypress', shortCutHandler);

    return (
        <div
            ref={ref => {itemsRef.current[id] = ref }}
            onKeyUp={(e)=>handleKeyPress(e, id, listFunction)}
            tabIndex={0}
            className="flex flex-row justify-between items-center mx-auto px-4 py-4 rounded-lg my-2 outline-none
            ">
            <div className="flex flex-row gap-6 justify-start items-center">
                <div className=" p-3 bg-shark-800 rounded-full" > 
                <img src={content.icon} className="h-6" alt="" />
                </div>
                <p className="block text-lg text-white ">{content.body}</p>
            </div>
            <div className="flex flex-row gap-3 justify-start items-start">

              {content.shift?
               <div
                 className="flex flex-col gap-2 justify-center items-center h-8 p-3 bg-shark-800 rounded-md">
                   <img src={icon} className="h-6" alt="" />
               </div>
              : null}
               

                <div
                    className="flex flex-col gap-2 justify-center items-center h-8 p-3 bg-shark-800 rounded-md">
                    <p className="block text-lg text-white ">{content.keyCode.charAt(content.keyCode.length - 1)}</p>
                </div>
            </div>
        </div>

    )
}

export default ListItem