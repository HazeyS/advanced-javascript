function answer1() {
  /* Replace 'undefined' with some JSX */
    
  return (<div>Hello World!</div>);
}


function answer2() {
  class BuggyComponent extends React.Component {
    render() {
      return (
        <div>
          a + b = {this.props.a + this.props.b}
        </div>
      );
    }
  }

  return (
    <BuggyComponent a={4} b={7}/>
  );
}


function answer3() {
  function AddAPropToMe(someProps) {
    return (
      <div>
        {someProps.one}
        , {someProps.two}
        , {someProps.toe}
        ,
        is a sort of fun game!
      </div>
    );
  }

  return (
    <AddAPropToMe
      one={'Tic'}
      two={'tac'}
      toe={'toe'}
    />
  );
}


function answer4() {
  class InputComponent extends React.Component {
    constructor(props) {
      super(props);
     this.handleChange = this.handleChange.bind(this);    
      this.state = {
        userInput: ''
      };
    }
      handleChange(e) {
    this.setState({userInput: e.target.value});
  }
    render() {
      return (
        <div>
          <input onChange={this.handleChange}/>
          <p>
            The user typed `{this.state.userInput}`
          </p>
        </div>
      );
    }
  }

  return <InputComponent/>;
}

function answer5() {    
  class Dots extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    componentDidMount(e) {
      var counter = function() {
        console.log(this.state.count);
        this.setState({
          count: ((this.state.count + 1) % 3) + 1
        });
          
      }.bind(this);
      
      setInterval(counter, 1000);
    };   
      
    render() {  
       let conCount = function(){
          if(this.state.count % 3 === 0){
              return(
                <div>...</div> 
              )
          }
          else if(this.state.count % 2 === 0){
              return(
                <div>..</div>
              )
          }
          else{
              return(
                <div>.</div>
              )
          }
      }.bind(this);
       let dots = conCount();
       let countNum = (this.state.count);
      return (
        <div>
         {dots}
        </div>
      );
    }
  }

  return <Dots/>;
}

function answer6() {
  let convertMeToArrowSyntax = (a, b, c) => {return a* (b-c)};

  return convertMeToArrowSyntax(3, 7, 5);
}

function answer7() {
  var myObject = {
    x: 8,
    y: 3
  };

  function addXtoY() {
    return this.x + this.y;
  }
  let newFunction = addXtoY.bind(myObject);
  try {
    return newFunction();
  } catch(e) {
    return String(e);
  }
}

function answer8() {
  var myObject = {
    x: 8,
    y: 3,
    addXtoY: function() {
      return this.x + this.y;
    }
  };

  function Component(props) {
    return (
      <div>
        AddXtoY returned {props.callback()}
      </div>
    );
  }
    let newFunction = myObject.addXtoY.bind(myObject);

  return (
    <Component callback={newFunction}/>
  );
}
