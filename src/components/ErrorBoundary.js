import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  // Whenever you add componentDidCatch() method to any class component in react it makes that component an error boundary.
  // Whenever Child component throws an error and we want to handle that in parent component then we should use error boundary.
  // Whenever we want to handle the error in same component we can simply use try catch block.

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
