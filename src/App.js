import React, {Component} from 'react';
import './App.css';
//let counter = 1;
const styles = {
  textAlign: 'center',
  backgroundColor: '#282c34',
  color: 'white',
  paddingTop: '10px',
  paddingBottom: '10px',
};



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      output: 'Результат: '
    }
  }


  sum = () => {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    let result = Number(firstNumber) + Number(secondNumber);
    this.setState({output: 'Результат: ' + result});
   // console.log(result);
  }


  render() {
    return (
        <div className='App'>
          <div className="title" style={styles}>
            Сложение двух чисел
          </div>

          <div style={{textAlign: 'center'}}>
            <h4>Первое число:&ensp;
              <input type="text" id="firstNumber" onChange={this.sum} style={{textAlign: 'center', padding: '4px 0px 4px 0px'}}/>
             </h4>
          </div>

          <div style={{textAlign: 'center'}}>
            <h4>Второе число:&ensp;
              <input type="text" id="secondNumber" onChange={this.sum} style={{textAlign: 'center', padding: '4px 8px 4px 0px'}}/>
            </h4>
          </div>


          {/*
          <button onClick = {this.sum}>
            Вычислить
          </button>
          */}


          <div style={{textAlign: 'center'}}>
            <h4>
            {this.state.output}
            </h4>
          </div>

        </div>
    );
  }
}

App.propTypes = {};

export default App;

