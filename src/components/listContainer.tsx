import React, { useState, useEffect, useRef, useContext } from 'react'
import { SearchContext } from '../context/context'
import ListItem from './listItem'
import uniqid from 'uniqid';
import Searchbar from './searchbar';
import Fuse from 'fuse.js';
import { log } from 'console';
import { IndexKind } from 'typescript';


const ListContainer = ({ ItemList }: { ItemList: Array<Object> }) => {

  const [list, setList] = useState<Array<any>>(ItemList)
  const itemsRef = useRef<object>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const { search } = useContext(SearchContext)


  useEffect(() => {

    const options = {
      keys: [
        "content.body"
      ]
    };

    const fuse = new Fuse(ItemList, options);

    // Change the search input
    const searchInput = search

    const result = fuse.search(searchInput).map(item => { return item.item })

    result.length ? setList(result) : setList(ItemList)


  }, [search])



  const handleKeyPress = (e, field, listFunction) => {

    console.log(e);
    

    const moveDown = () => {

      const nextSibling = itemsRef!.current![field]?.nextSibling

      if (nextSibling) {
        nextSibling.focus();
      }

    }

    const moveUp = () => {

      const previousSibling = itemsRef!.current![field].previousSibling

      if (previousSibling) {
        previousSibling.focus();
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

    const modal = containerRef.current
    const height = modal.scrollHeight
    modal.style.setProperty('max-height', height + 'px');

  }, [Object.keys(itemsRef.current).length])


  return (
    <div
      ref={containerRef}
      className='h-80 sm:h-auto sm:min-h-0 sm:max-h-72 transition-all delay-200 ease-in el'
      tabIndex={1}
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