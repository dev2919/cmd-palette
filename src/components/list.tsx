import React, { useState, useEffect, useRef , useContext } from 'react'


const List = () => {

  const [active, setActive] = useState <boolean> (false)
  const itemRef2 = useRef<any>({});
  const arr = [1,2,3,4,5,6,7,8]

  useEffect(() => {

    itemRef2!.current["itm-0"]!.focus();
    
    
    if (active) {
      // itemRef2!.current!.classList.remove("bg-red-100")
      // itemRef2!.current!.classList.remove("focus")
      // itemRef2!.current!.
      // console.log(itemRef2.current["itm-3"]);
      

       itemRef2!.current!["itm-3"].classList.add("bg-red-500")
       itemRef2!.current["itm-3"]!.focus();
       
      // itemRef2!.current!.focus()
      // itemRef2!.current!.classList.add('bg-shark-50')
      // itemRef2!.current!.classList.remove("bg-red-100")
    } else{
      // itemRef2!.current!.classList.add('bg-red-100')
      // itemRef2!.current!.classList.remove("bg-shark-50")
      // itemRef2!.current!["itm-3"].classList.remove("focus")

    }
    
  }, [active])

  const handleKeyPress = (e, field) => {

    const moveDown = () =>{
      itemRef2!.current![field].classList.remove("selected")
      itemRef2!.current![field].classList.remove("bg-red-500")
      itemRef2!.current![field].nextSibling.focus();
      itemRef2!.current![field].nextSibling.classList.add("bg-red-500")
      itemRef2!.current![field].nextSibling.classList.add("selected")
      console.log("down");
      
    }
    
    const moveUp = () => {
      itemRef2!.current![field].classList.remove("selected")
      itemRef2!.current![field].classList.remove("bg-red-500")
      itemRef2!.current![field].previousSibling.focus();
      itemRef2!.current![field].previousSibling.classList.remove("bg-red-500")
      itemRef2!.current![field].previousSibling.classList.add("bg-slate-400")
      itemRef2!.current![field].previousSibling.classList.add("selected")

      console.log("up");
    }

    switch (e.keyCode) {
      case 38:
        moveUp();
        break;
      case 40:
        moveDown();
        break;
    }
  };



  return (
    <div className="wrap">
      {
        arr.map((e, index)=>{
          return <div className="cont h-10 bg-slate-400 my-8" tabIndex={0} ref={ref => {itemRef2.current[`itm-${index}`] = ref }} id={`itm-${index}`} onKeyUp={(e)=>handleKeyPress(e, `itm-${index}`)}>827532585985900544</div>
        })
      }
    </div>
  )
}

export default List