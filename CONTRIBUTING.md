# Contributing to Raven Notes

🎉 First off, thanks for taking the time to contribute! 🎉

We love contributions! ❤️

The following is a set of guidelines for contributing to the Raven Notes project. We will add to this list as questions arise.

As always, use your good judgement and try to adhere to the project conventions. If in doubt, ask questions and we will be happy to respond ✌️

## Style Guide

We don't have strong preferences, but we like to keep everything aligned. That's why we use [prettier](https://github.com/prettier/prettier) ✨

Everything else that we agree upon, will be listed below.

### Imports & Exports

Place your imports at the top, exports at the bottom.

_Example_:

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
