# Components Modal React

A simple and customizable React modal component, designed for ease of use and flexibility.

## Getting Started

Install this package:

```shell
npm i components-modal-react
```

Import the Modal component:

```js
import Modal from "components-modal-react/modal";
```

## Usage

Here's how you can use the modal component in your React project.

# Basic Example

```shell
import React, { useState } from 'react';
import Modal from "components-modal-react/modal";


const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h1>This is a Modal</h1>
        <p>Here is some modal content!</p>
      </Modal>
    </div>
  );
};

export default App;

```

# Props

The Modal component accepts the following props:

Prop Type Required Description
show boolean Yes Controls whether the modal is visible or not.
onClose () => void Yes Callback function to handle closing the modal.
children React.ReactNode No The content to be displayed inside the modal.

# CSS Styling

If you want to customize the styles, you can either modify Modal.css or override the styles in your own stylesheet by targeting the following class names:

.modal-overlay – The overlay behind the modal.
.modal-content – The main modal container.
.button – The close button inside the modal.
