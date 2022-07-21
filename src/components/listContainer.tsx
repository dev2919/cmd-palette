import React, { useState, useEffect, useRef , useContext, ReactNode, Children } from 'react'
import {ListContext, SearchContext} from '../context/context'
import ListItem from './listItem'
import uniqid from 'uniqid';
import Searchbar from './searchbar';
import Fuse from 'fuse.js'

const ListContainer = ({ ItemList }: {ItemList: any}) => {

  const [active, setActive] = useState <boolean> (false)
  const [list, setList] = useState <any> (ItemList)
  const itemsRef = useRef<object>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const listContext = useContext(ListContext)
  const searchContext= useContext(SearchContext)

  
  useEffect(() => {
    
    const options = {
      keys: [
        "content.body"
      ]
    };
    
    const fuse = new Fuse(ItemList, options);
    
    // Change the pattern
    const pattern = searchContext.search

    const result = fuse.search(pattern).map(item =>{return item.item})

    result.length?setList(result):setList(ItemList)
 
    
  },[searchContext.search])

 

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
    
    const ele = containerRef.current
    const height = ele.scrollHeight
    ele.style.setProperty('max-height', height + 'px');

    console.log(height);
    

  }, [Object.keys(itemsRef.current).length])
  



  
  useEffect(() => {
    itemsRef!.current[Object.keys(itemsRef!.current)[0]]?.focus();
    itemsRef!.current[Object.keys(itemsRef!.current)[0]]?.classList.add("bg-shark-900")
    
  }, [itemsRef])


    return (
        <div 
        ref={containerRef}
        className='h-80 sm:h-auto sm:min-h-0 sm:max-h-50 transition-all ease-in el'
        tabIndex={0}
        >
          <Searchbar itemsRef={itemsRef} id={uniqid('Searchbar-')} handleKeyPress={handleKeyPress} />
          {
            list.map((item, index) => {
              return <ListItem itemsRef={itemsRef} listFunction={item.function} content={item.content} id={uniqid('item-')} handleKeyPress={handleKeyPress} />
            })
          }
        </div>

    )
}

export default ListContainer