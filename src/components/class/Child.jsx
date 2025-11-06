import { Component } from 'react';

// call | apply | bind
class Child extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="border p-6 m-6">
        <h1>
          Child Component{' '}
          <span className="text-red-500">{this.props.title}</span>
        </h1>
        <p className="text-center text-red-500 my-4 text-2xl">
          {this.props.count}
        </p>

        <button className="border p-3 px-8" onClick={this.props.increment}>
          Click btn 1
        </button>
        <button className="border p-3 px-8" onClick={this.props.decrement}>
          Click btn 2
        </button>
      </div>
    );
  }
}
export default Child;
