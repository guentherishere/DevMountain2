// build processes
// ---------------
// gulp
// grunt
// webpack
// need to use these becuase you write in JSX, and webpack turns JSX into JavaScript on the fly
// webpack bundles your file in to one spot so your browser can access everything

//example
var webpack = require('webpack');
var os = require('os');

module.exports = {
    plugins: [
        new webpack.NormalModuleReplacementPlugin(/^react$/, 'react/addons'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.IgnorePlugin(/vertx/)
    ],

//this is like your server js. Where the file will start.
    entry: [
        'webpack-dev-server/client?http://' + os.hostname() + ':4000',
        'webpack/hot/dev-server',
        './react/App.jsx'
    ],

//where it puts all of your stuff
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
        publicPath: '/'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', 'index.js', 'index.jsx', '.styl']
    },

//loaders are what webpack uses to build your bundle
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'react-hot!babel', exclude: [/node_modules/] },
            { test: /\.js$/, loader: 'babel', exclude: [/node_modules/] },
            { test: /\.css$/, loader: "style!css"}
        ]
    },

    devtool: 'eval'
};


// include bundle.js in your script, no react script required

//FIRST REACT COMPONENT
//saved as app.jsx
//npm install react
//npm install -g webpack

var React = require("react");
var Name = require("./Name.jsx"); //points to this file, code at bottom

var list = [{name: "Eric"}. {name: "Mihir"}, {name: "Christian"}];
var thing = 6+6;
var App = react.createClass({
  //react method that gives it something to start with
  getInitialState: function() {
    return {
      name: "Dan"
    };
  },
  //something you define
  nameChange: function(name){
    console.log("hello");
    this.setState({
      name: "Florence"
    });
  },
  //nameChange: function(name){
//   this.setState({
//     name: name,
//     arr: this.state.arr.concat([5])
//   })
// }
  inputChange: function(){
    this.setState({
      name: this.refs.dan.getDOMNode().value
    })
  }
  render: function(){
    //map is native to arrays, takes a callback kind of like forEach
    var nameList = list.map(function(item, index){
      var style = {
        background: "blue",
        //any time a propert would have a hyphe, like font-size, you can join it fontSize
        // if item.name equal to eric then do this, else do this
        fontSize: item.name == "Eric" ? "5rem" : "2rem";
      }
      // return <Name name={item.name}/>
      return (
        <h1 key={index} style={style} className="name" onClick={this.nameChange.bind(null, item.name)}>{item.name}</h1>
      )
    }.bind(this))
    return (
      //jsx portion goes here and has to fall between the divs, can't use multiple divs. think of this as ng-view
      <div>
      {nameList}
        <button onClick={this.nameChange}></button>
        <h1>React! Woat! {thing} {this.state.name}</h1> //this represents the react component
        <input ref="dan"/>
        <button onClick={this.inputChange()}>Change name</button>
      </div>
    );
  }
});
//can write a function anywhere
function dan() {
  console.log("dan");
}

React.render(<App />, document.getElementById("app"));

//now in terminal run webpack
//webpack --w

//name.jsx
var React = require("react");
var Name = React.createClass({
  render: function(){
    return (
      <h1>
      {this.props.name}
      </h1>
    )
  }
});

module.exports = Name;

//the this keyword is kind of like your scope in angular
