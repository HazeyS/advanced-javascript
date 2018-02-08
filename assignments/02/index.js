

const formatTime = (time) => {
    if(time < 10) {
      return '0' + time;
    }
    return time;
}

function TimeDisplay(props){
  let centiseconds = formatTime(Math.floor(props.millisecond % 1000 / 10));
  let seconds = formatTime(Math.floor(props.millisecond % 60000 / 1000));
  let minutes = formatTime(Math.floor(props.millisecond / 60000));

    if(props.millisecond === 0){
      return(
        <div>
          Times up!
        </div>
      );  
    }else{
    return(
      <div>
         {minutes}:{seconds}:{centiseconds}
      </div>
      );
    }
    
}


class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.counter = this.counter.bind(this);
    
    this.state = {
      currentMillisecond: props.startMillisecond
    };
    console.log(this);
  }
  handleChange(e) {
    this.setState({currentMillisecond: e.target.value});
    
  }
  counter(){
    setInterval(
      function(){
        let newTime = this.state.currentMillisecond;
        

        newTime += 10;
        this.setState({currentMillisecond: newTime});
      }, 10
    );
  }
render() {
    return (
      <div>
        <TimeDisplay startMillisecond={300} millisecond={this.state.currentMillisecond}/>
        <br/>
        Count<br/>
        <input id="down" type="radio" name="button"/>Down<br/>
        <input id="up" type="radio" name="button" onClick={this.counter} />Up<br/><br/>
        
        Start Time
        <input onChange={this.handleChange}/>
      </div>
    ); 
  }
};
ReactDOM.render(
    // <TimeDisplay millisecond={789234}/>,
    <Watch/>,
    document.getElementById('root')
);





