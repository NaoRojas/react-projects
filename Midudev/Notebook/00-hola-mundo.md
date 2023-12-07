





```react
import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const createButton = ({text}) => {
   return (
      <button>
        {text}
      </button>
   )
}

root.render(
<React.Fragment>
  {createButton({text: 'Click me!'})}
  {createButton({text: 'Click me too!'})}
</React.Fragment>
)
```

```react
const Button = ({text}) => {
   return (
      <button>
        {text}
      </button>
   )
}

root.render(
<React.Fragment>
  {Button({text: 'Click me!'})}
  {Button({text: 'Click me too!'})}
</React.Fragment>
)
```

