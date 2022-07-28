import React, { useState, useEffect, useRef, useContext } from 'react'
import useEventListener from '@use-it/event-listener'
import icon from '../static/shift.svg'
import { lookupIcon } from "heroicons-lookup";

type Content = {
  body?: string;
  icon?: any;
  keyCode?: string;
  shift?: boolean
};

const ListItem = ({ itemsRef, id, handleKeyPress, listFunction, content = { body: 'home', icon: 'ExternalLinkIcon', keyCode: null } }: { itemsRef: React.MutableRefObject<object>, id: string, handleKeyPress: any, listFunction: any, content?: Content }) => {

  let Icon;

  try {
    Icon = lookupIcon(content.icon, "outline")
  } catch (error) {
    console.log(error);
    Icon = lookupIcon("ExternalLinkIcon", "outline")
  }


  const shortCutHandler = (keyEvent) => {

    if (String(keyEvent.code) === content.keyCode && keyEvent.shiftKey === content.shift) {
      listFunction?.()
    }
  }



  useEventListener('keypress', shortCutHandler);

  return (
    <div
      ref={ref => { itemsRef.current[id] = ref }}
      onKeyUp={(e) => handleKeyPress(e, id, listFunction)}
      tabIndex={1}
      onTouchStart={(e) => e.currentTarget.classList.add("bg-shark-900")}
      onTouchEnd={(e) => e.currentTarget.classList.remove("bg-shark-900")}
      onMouseEnter={(e) => e.currentTarget.focus()}
      onClick={() => listFunction?.()}
      className="flex flex-row justify-between items-center mx-auto px-4 py-4 rounded-lg my-2 outline-none select-none cursor-pointer hover:bg-shark-900 focus:bg-shark-900">
      <div className="flex flex-row gap-6 justify-start items-center">
        <div className=" p-3 bg-shark-600 rounded-full" >
          {Icon ? <Icon className="flex h-6 text-white " /> : null}
        </div>
        <p className="block text-lg text-white ">{content.body}</p>
      </div>
      <div className="flex flex-row gap-3 justify-start items-start invisible sm:visible ">

        {content.shift ?
          <div
            className="flex flex-col gap-2 justify-center items-center h-8 p-3 bg-shark-600 rounded-md ">
            <img src={icon} className="h-6" alt="" />
          </div>
          : null}

        {content.keyCode ?
          <div className="flex flex-col gap-2 justify-center items-center h-8 p-3 bg-shark-600 rounded-md">
            <p className="block text-lg text-white ">{content.keyCode.charAt(content.keyCode.length - 1)}</p>
          </div>
          : null
        }
      </div>
    </div>

  )
}

export default ListItem