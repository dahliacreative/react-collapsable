# React Collapsable

A collapsable react component, animated bases on the content.

## Installation

```
npm i react-collapsable -S
```

or with yarn;

```
yarn add react-collapsable
```

## Usage

```
import React, { useState } from 'react'
import Collapsable from 'react-collapsable'

const myComponent = () => {
    const [isOpen, toggleOpen] = useState(false);
    return (
        <div>
            <button onClick={() => toggleOpen(!isOpen)}>Toggle</button>
            <Collapsable isOpen={isOpen}>
                <h1>My Content In Here!</h1>
            </Collapsable>
        </div>
    )
}
```
