import React from 'react';

class PlayerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      // this.setState({
      //   value: event.target.value
      // });
    }
    handleSubmit(event) {
        alert('selected Number '+ this.state.value);
        event.preventDefault();
    }
    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="jumbotron">
                            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label className="col-sm-4 control-label">Enter Number of Players:</label>
                                    <div className="col-sm-6">
                                        <select className="form-control" value={this.state.value} onChange={this.handleChange}>
                                            <option value="">Select</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayerForm;
