import { Component } from 'react';

modulejs.define('HBWFormUser', ['React', 'ReactDOM', 'HBWFormSelect'], (React, ReactDOM, Select) => {
  class HBWFormUser extends Component {
    componentDidMount () {
      this.props.onRef(this);
    };

    componentWillUnmount () {
      this.props.onRef(undefined);
    };

    render() {
      const params = Object.assign({}, this.props.params, {
        placeholder: this.props.params.placeholder || 'User',
        mode: 'lookup',
        url: '/users/lookup',
        choices: []
      });

      return <Select
        name={this.props.name}
        params={params}
        env={this.props.env}
        onRef={(i) => {
          this[`${this.props.name}`] = i
        }}/>;
    };

    serialize() {
      return this[`${this.props.name}`].serialize();
    }
  }

  return HBWFormUser;
});
