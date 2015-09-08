var React = require('react');
var AddItem = require('./AddItem');
var List = require('./List');

var ListContainer = React.createClass({
  // use getInitialState and return a list property whose value is an empty array.
  getInitialState: function(){
    return {
      list: []
    };
  },
  //create the handleAddItem method which takes in an item as its parameter and then resets the list state adding that new item to the list. remember, you should treat your state as if it's immutable. Don't do this this.state.list.push(newItem), instead use this.setState.
  handleAddItem: function(newItem){
    this.setState({
      list: this.state.list.concat([newItem])
    });
  },
  //create a handleRemoveItem method that takes in an index then splices that index out of our list state. again don't all splice directly on this.state.list, instead create a reference to this.state.list and splice that then reset the list state with that new spliced array.
  handleRemoveItem: function(index){
    var newList = this.state.list;
    newList.splice(index, 1);
    this.setState({
      list: newList
    });
  },
  //Now that we have our helper methods set up we need to use render to specify what the UI will look like. I'll give you the intial UI at first because it's a lot of bootstrap markup then you can render the AddItem and List component.
  render: function(){
    return (
      <div className="col-sm-6 col-md-offset-3">
        <div className="col-sm-12">
          <h3 className="text-center"> Todo List </h3>
          <AddItem add={this.handleAddItem}/>
          <List items={this.state.list} remove={this.handleRemoveItem}/>
        </div>
      </div>
    )
  }
});

module.exports = ListContainer;
