import React, { useState, useEffect, useRef , useContext, ReactNode, Children } from 'react'
import {ListContext} from '../context/context'
import ListItem from './listItem'
import uniqid from 'uniqid';
import Searchbar from './searchbar';

const ListContainer = ({ ItemList }: {ItemList: any}) => {

  const [active, setActive] = useState <boolean> (false)
  const itemsRef = useRef<object>({});
  const listContext = useContext(ListContext)

  const handleKeyPress = (e, field, listFunction, removeFocus) => {

    const moveDown = () =>{

      if (itemsRef!.current![field]?.nextSibling){

        itemsRef!.current![field].classList.remove("bg-shark-900")
        itemsRef!.current![field].nextSibling.focus();
        itemsRef!.current![field].nextSibling.classList.add("bg-shark-900")
      }

    }
    
    const moveUp = () => {

      if (itemsRef!.current![field].previousSibling){
        itemsRef!.current![field].classList.remove("bg-shark-900")      
        itemsRef!.current![field].previousSibling.focus();
        itemsRef!.current![field].previousSibling.classList.add("bg-shark-900")
      }

    }
   
    const listItems = Object.keys(itemsRef!.current).filter(ele => ele.startsWith("item-"));

    if(removeFocus){
      for (let index = 0; index < listItems.length; index++) {
        itemsRef!.current![listItems[index]].classList.remove("bg-shark-900")
      }
    }

    switch (e.keyCode) {
      case 38:
        moveUp();
        break;
      case 40:
        moveDown();
        break;
      case 13:
        listFunction?.()
        break;
    }
  };

  
  useEffect(() => {
    itemsRef!.current[Object.keys(itemsRef!.current)[0]]?.focus();
    itemsRef!.current[Object.keys(itemsRef!.current)[0]]?.classList.add("bg-shark-900")
    
  }, [itemsRef])


    return (
        <div 
        tabIndex={0}
        >
          <Searchbar itemsRef={itemsRef} id={uniqid('Searchbar-')} handleKeyPress={handleKeyPress} />
          {
            ItemList.map((item, index) => {
              return <ListItem itemsRef={itemsRef} listFunction={item.function} content={item.content} id={uniqid('item-')} handleKeyPress={handleKeyPress} />
            })
          }
        </div>

    )
}

export default ListContainer