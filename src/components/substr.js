import React, {Component} from 'react';
import '../App.css';


class Substr extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstNumberSubstr: "",
            secondNumberSubstr: ""
        }
    }


    setFirstNumberSubstr = (e) => {
        this.setState({firstNumberSubstr: e.target.value})
    }

    setSecondNumberSubstr = (e) => {
        this.setState({secondNumberSubstr: e.target.value})
    }


    render() {
        const substr = Number(this.state.firstNumberSubstr) - Number(this.state.secondNumberSubstr);

        return (
            <div>
                <div className="calculation">
                    <div className="title">
                        Вычитание
                    </div>


                    <h4>Первое число:&ensp;
                        <input
                            className="inputField"
                            type="number"
                            value={this.state.firstNumberSubstr}
                            onChange={this.setFirstNumberSubstr}
                        />
                    </h4>


                    <h4>Второе число:&ensp;
                        <input
                            className="inputField"
                            type="number"
                            value={this.state.secondNumberSubstr}
                            onChange={this.setSecondNumberSubstr}
                        />
                    </h4>


                    <h4>
                        Результат: {substr}
                    </h4>

                </div>



            </div>
        );
    }
}


export default Substr;

