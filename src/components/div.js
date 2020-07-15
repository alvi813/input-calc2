import React, {Component} from 'react';
import '../App.css';


class Div extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstNumberDiv: "",
            secondNumberDiv: ""
        }
    }

    setFirstNumberDiv = (e) => {
        this.setState({firstNumberDiv: e.target.value})
    }

    setSecondNumberDiv = (e) => {
        this.setState({secondNumberDiv: e.target.value})
    }


    render() {
        const div = Number(this.state.firstNumberDiv) / Number(this.state.secondNumberDiv);

        return (
            <div>
                <div className="calculation">
                    <div className="title">
                        Деление
                    </div>


                    <h4>Первое число:&ensp;
                        <input
                            className="inputField"
                            type="number"
                            value={this.state.firstNumberDiv}
                            onChange={this.setFirstNumberDiv}
                        />
                    </h4>


                    <h4>Второе число:&ensp;
                        <input
                            className="inputField"
                            type="number"
                            value={this.state.secondNumberDiv}
                            onChange={this.setSecondNumberDiv}
                        />
                    </h4>


                    <h4>
                        Результат: {div}
                    </h4>

                </div>



            </div>
        );
    }
}


export default Div;

