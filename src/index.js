import React from 'react'
import ReactDOM from 'react-dom/client'

function Greeting() {
  return (
    <React.Fragment>
      <div>
        <h3>Hello People</h3>
        <ul>
          <li>
            <a href='#'>Hello world</a>
          </li>
        </ul>
      </div>
      <h2>Hello Everyone</h2>
    </React.Fragment>
  )
}

// function Greeting() {
//   return React.createElement('h2', {}, ' Hello world');
// }

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greeting />)
