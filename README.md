# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Extra notes

## TSX: Components vs. Elements 

In TSX (TypeScript with JSX) and React in general, the terms "component" and "element" are used to describe different concepts within the framework. Here's an overview of the difference between a component and an element in React:

### Component
A component is a reusable building block in React that can be either a class or a function. Components define how to render UI and how to handle user interactions and state changes. In TypeScript, you can use typed interfaces or types to enforce a specific structure for the props that the component receives.

There are two types of components in React:

#### **Class Components**
These are defined using a JavaScript class that extends React.Component. Class components have their own state and lifecycle methods.

#### **Function Components**
These are defined using a JavaScript or TypeScript function that takes props as its argument and returns a React element. Function components may be stateful or stateless, and with the introduction of React Hooks, they can also have their own state and lifecycle methods.

Example of a TypeScript function component:

```Javascript
import React from 'react';

interface Props {
  message: string;
}

const MyComponent: React.FC<Props> = ({ message }) => {
  return <div>{message}</div>;
};

export default MyComponent;
```
### Element
An element is a plain JavaScript object that represents a DOM node (or a custom React component). It's a description of what the DOM should look like when rendered. Elements are immutable and can be nested inside other elements.

A React element can represent a native DOM element (like a div, span, etc.) or a custom user-defined React component.

Example of creating a React element using JSX:

```Javascript
const element = <div>Hello, World!</div>;
```

In summary, a component is a reusable building block that returns a React element when rendered. An element, on the other hand, is a lightweight representation of a DOM node or a custom component. It describes the structure and properties of the UI, which is used by React to render the actual DOM.


## Props vs attributes

In React with TypeScript, the terms "props" and "attributes" are related but refer to different concepts. Here's an overview of the differences between props and attributes:

### Props

Props (short for properties) are the means by which data is passed between components in React. When you create a custom React component, you define the data the component receives from its parent component through props.

In TypeScript, you can use typed interfaces or types to enforce a specific structure for the props that a component receives. This helps catch type-related issues at compile time and makes your code more robust.

Here's an example of defining props using an interface and passing them to a custom React component:

```Javascript
interface MyComponentProps {
  message: string;
  onClick: () => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ message, onClick }) => {
  return <button onClick={onClick}>{message}</button>;
};
```

### Attributes

Attributes, on the other hand, are used to provide additional information or configuration for HTML elements. They are part of the DOM (Document Object Model) and are used to customize the behavior, appearance, or content of an element.

When you use React components, some attributes map directly to the component's props, while others are managed internally by React. For example, when you use an input element in JSX, the attributes you define (such as type, value, and onChange) become part of the props for that component.

Here's an example of using attributes with an input element:

```Javascript
const MyInput: React.FC = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
};
```
In summary, props are used to pass data and event handlers between React components, while attributes are used to provide additional information or configuration for HTML elements. In React, attributes often become part of the props for a given element, allowing you to customize the behavior, appearance, and content of the element.


# Local Storage

# React Hooks

# External Events

# Providers