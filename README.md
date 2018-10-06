# Raven

Collaborative note taking.

## Style Guide

### Imports at the top, exports at the bottom

**DO**

```jsx
class Button extends Component {
  render() {
    return <button>Click Me</button>;
  }
}

export default Button;
```

**DON'T**

```jsx
export default class Button extends Component {
  render() {
    return <button>Click Me</button>;
  }
}
```
