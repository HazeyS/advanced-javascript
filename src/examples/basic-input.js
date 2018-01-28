/* Basic example demonstrating input - using stateful components */
class BasicInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      userInput: '',
      lists : []
    };
  }
  handleChange(e) {
    // this.setState({userInput: e.target.value});
    let setValue = document.getElementById('text').value;
    
     
    if(document.getElementById('text').value == ''){
      //do nothing
    }else{
      this.setState({lists: [...this.state.lists, setValue]});
      document.getElementById('text').value='';
    }
  }
    
  render() {
    const list = this.state.lists.map((item, i) => {
        return <li key={i}>{item}</li>
    })
    return (
      <div>
          <p>
            Please enter some input. <br/>
            Input box <b>cannot</b> be empty
          </p>
          <input id="text"/>
        <button onClick={this.handleChange}>Add</button>
          <ul>
            {list}
            </ul>
      </div>
        
    ); 
  }
}

const renderBasicInput = () => {
  ReactDOM.render(
    <div>
      This is a simple example to demonstrate a reactive update.
      <BasicInput/>
    </div>,
    document.getElementById('root')
  );
};

//use for help https://codepen.io/antonietta/pen/KzxxWN?editors=1010