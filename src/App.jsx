import React from 'react'
import reactLogo from './assets/react.svg'
import Name from './components/Name'
import Position from './components/Position'
import {Age} from './components/Age'
import './App.css'

function App() {
  const [testList, setTestList] = React.useState([1,2,3])

  return (
      <div className='coming-soon'>
        <h1>CTD Swag</h1>
        <div style={{height: 100, width: 100}}>
          <img src={reactLogo} alt="react logo" />
        </div>
        <h2>Coming Soon...</h2>
        <ul>
          {testList.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
      // <div>
      //   <Name />
      //   <Position />
      //   <Age title="age"/>
      // </div>
  )

  // return React.createElement(
  //   'div',
  //   {
  //     className: 'coming-soon',
  //   },
  //   React.createElement('h1', null, 'CTD Swag'),
  //   React.createElement(
  //     'div',
  //     {
  //       style: {
  //         height: 100,
  //         width: 100,
  //       },
  //     },
  //     React.createElement('img', {
  //       src: reactLogo,
  //       alt: 'Code The Dream Logo',
  //     }),
  //   ),
  //   React.createElement('h2', null, 'Coming Soon...'),
  // );
}

export default App
