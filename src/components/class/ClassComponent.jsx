import React from 'react';
import Child from '../../Child';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      products: [],
      loading: false,
      productOverview: {},
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  componentDidMount() {
    try {
      const fetchData = async () => {
        const resp = await fetch('https://fakestoreapi.com/products');
        const data = await resp.json();
        this.setState({ ...this.state, products: data });
      };

      fetchData();
    } catch (error) {
      console.log('xatolik');
    }
  }

  componentDidUpdate() {
    try {
      const fetchData = async () => {
        const resp = await fetch(
          `https://fakestoreapi.com/products/${this.state.count}`
        );
        const data = await resp.json();
        this.setState({ ...this.state, productOverview: { ...data } });
      };
      fetchData();
    } catch (error) {
      console.log('xatolik');
    }
  }

  componentWillUnmount() {
    console.log('component unmounted');
  }

  increment = function () {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = function () {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    // if (this.state.loading) {
    //   return <h1 className="text-4xl text-center my-4">Loading...</h1>;
    // }
    return (
      <div className="flex flex-col items-center mt-20">
        <h1>{this.state.count}</h1>

        <button
          className="border p-3 px-8"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Increment
        </button>
        <button
          className="border p-3 px-8"
          onClick={() => this.setState({ count: this.state.count - 1 })}
        >
          Decrement
        </button>

        <Child
          title="Hello from parent"
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
        />

        {this.state.productOverview.image &&
          this.state.productOverview.title && (
            <div className="my-3 h-[280px] border rounded-3xl p-3 px-8 flex items-center gap-4 w-[600px]">
              <img
                src={this.state.productOverview.image}
                alt=""
                className="max-w-[150px]"
              />
              <div className="text-2xl font-semibold">
                <span>Product Num: {this.state.count}</span>
                <h1>{this.state.productOverview.title}</h1>
                <h1>${this.state.productOverview.price}</h1>
              </div>
            </div>
          )}
        <div className="grid grid-cols-4 gap-3">
          {this.state.products.length > 0 ? (
            this.state.products.map((product, index) => {
              return (
                <div
                  key={product.id}
                  className={`border p-4 rounded ${
                    this.state.count == index + 1 ? 'bg-slate-400' : 'bg-white'
                  }`}
                >
                  <img src={product.image} alt="" />
                  <h1>{product.title.slice(0, 50)}...</h1>
                  <h1>${product.price}</h1>
                </div>
              );
            })
          ) : (
            <h1 className="text-4xl text-center my-4 text-gray-600 col-span-4">
              No products awailable
            </h1>
          )}
        </div>
      </div>
    );
  }
}

export default ClassComponent;
