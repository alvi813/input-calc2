import React, {Component} from 'react';
import '../App.css';


class Multip extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstNumberMultip: "",
            secondNumberMultip: "",
        }
    }


    setFirstNumberMultip = (e) => {
        this.setState({firstNumberMultip: e.target.value})
    }

    setSecondNumberMultip = (e) => {
        this.setState({secondNumberMultip: e.target.value})
    }



    render() {
        const multip = Number(this.state.firstNumberMultip) * Number(this.state.secondNumberMultip);

        return (
            <div>
                <div className="calculation">
                    <div className="title">
                        Умножение
                    </div>


                    <h4>Первое число:&ensp;
                        <input
                            className="inputField"
                            type="number"
                            value={this.state.firstNumberMultip}
                            onChange={this.setFirstNumberMultip}
                        />
                    </h4>


                    <h4>Второе число:&ensp;
                        <input
                            className="inputField"
                            type="number"
                            value={this.state.secondNumberMultip}
                            onChange={this.setSecondNumberMultip}
                        />
                    </h4>


                    <h4>
                        Результат: {multip}
                    </h4>

                </div>



            </div>
        );
    }
}


export default Multip;

