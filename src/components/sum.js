import React, {Component} from 'react';
import '../App.css';


class Sum extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstNumberSum: "",
            secondNumberSum: ""
        }
    }


    setFirstNumberSum = (e) => {
        this.setState({firstNumberSum: e.target.value})
    }

    setSecondNumberSum = (e) => {
        this.setState({secondNumberSum: e.target.value})
    }


    render() {
        const sum = Number(this.state.firstNumberSum) + Number(this.state.secondNumberSum);

        return (
            <div>
                <div className="calculation">
                    <div className="title">
                        Сложение
                    </div>


                    <h4>Первое число:&ensp;
                        <input
                            className="inputField"
                            type="number"
                            value={this.state.firstNumberSum}
                            onChange={this.setFirstNumberSum}
                        />
                    </h4>


                    <h4>Второе число:&ensp;
                        <input
                            className="inputField"
                            type="number"
                            value={this.state.secondNumberSum}
                            onChange={this.setSecondNumberSum}
                        />
                    </h4>


                    <h4>
                        Результат: {sum}
                    </h4>

                </div>



            </div>
        );
    }
}


export default Sum;

