import React from 'react';

const withProfiler = (WrappedComponent, options) => {
  
  return class extends React.Component {
  
    shouldComponentUpdate(nextProps, nextState, nextContext) {
      //render start?
    }
    
    componentDidUpdate(prevProps, prevState, prevContext) {
      //render complete
    }
  
    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent {...this.props} />;
    }
  }
};

export { withProfiler };

