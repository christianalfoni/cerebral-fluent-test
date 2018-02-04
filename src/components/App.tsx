import './App.css';
import * as React from 'react';
import { connect } from '../fluent';

const logo = require('./logo.svg');

export default connect()
  .with(({ state }) => ({
    foo: state.foo
  }))
  .toClass(props =>
    class App extends React.Component<typeof props> {
      render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to {this.props.foo}</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.tsx</code> and save to reload.
            </p>
          </div>
        );
      }
    }
  );