var React = require('react');

var AddItem = React.createClass({
  // use getInitialState to set an initial state of your component with a newItem property whose value is an empty string
  getInitialState: function(){
    return {
      newItem: ''
    }
  },
  // Create a handleChange method that is going to use setState to update newItem with whatever is in the input box
  handleChange: function(e){
    this.setState({
      newItem: e.target.value
    })
  },
  // Create a handleSubmit method that will be called on onKeyDown that checks to see if the current key pressed was the enter key (e.keyCode === 13) and if it was, call the add method on AddItem's props object and pass it the current state of newItem. Once you invoke add then reset the newItem state to an empty string.
  handleSubmit: function(e){
    if(e.keyCode === 13){
      this.props.add(this.state.newItem);
      this.setState({
        newItem: ''
      });
    }
  },
// Create a render method that returns an opening and closing <div> tag.
// Inside the <div> create an input box with a type of text a className of form-control and whose properties are tied to the state and helper methods we created above. hint: you'll add a value, onKeyDown, and onChange property to your input box.
  render: function(){
    return (
      <div>
        <input type="text"
          className="form-control"
          value={this.state.newItem}
          placeholder="New Item"
          onKeyDown={this.handleSubmit}
          onChange={this.handleChange} />
      </div>
    )
  }
});

module.exports = AddItem;
