import './index.css';
import CmdPalette from './components/cmdPalette'

const App = () => {

  //this will user input array of object which will have all info for list items.
  const ItemList = [
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

  const Theme = {
    '--color-icon_background': '#111317',
    '--color-background': '#1C2027',
    '--color-active': '#14171c',
    '--color-text': '#FEFEFE',
    '--color-icon_color': '#FEFEFE',
    '--color-input_border': '#4f46e5',
    '--color-input_border_inactive': '#494D52',
  }


  return (
    <CmdPalette ItemList={ItemList} Theme={Theme} />
  )
}

export default App