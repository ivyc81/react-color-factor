import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import ColorList from './ColorList';
import Color from './Color';
import NewColorForm from './NewColorForm';
// import './Routers.css';

class Routers extends Component {
  render() {
    return (
      <div className="Routers">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path='/colors'
              render={() => <ColorList colorData={this.props.colorData} />} />
            <Route
              exact
              path='/colors/new'
              render={(rtProps) => <NewColorForm {...rtProps} triggerAddColor={this.props.triggerAddColor} />} />
            <Route
              exact
              path='/colors/:color'
              render={(rtProps) => <Color  {...rtProps} colorData={this.props.colorData[rtProps.match.params.color]} />} />
            {/* <Redirect to='/colors' /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routers;