# React Collapsable

[![Maintainability](https://api.codeclimate.com/v1/badges/299653f46371c688a3ab/maintainability)](https://codeclimate.com/github/dahliacreative/react-collapsable/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/299653f46371c688a3ab/test_coverage)](https://codeclimate.com/github/dahliacreative/react-collapsable/test_coverage)

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

## Props

| Prop                              | Required | Default |
| --------------------------------- | -------- | ------- |
| isOpen (boolean)                  |          |         |
| minAnimationDuration (in seconds) |          | 0.3     |
| maxAnimationDuration (in seconds) |          | 1       |
| speedDivider (in milliseconds)    |          | 1000    |
