import React from "react";

class PersonCard extends React.Component{

    constructor (props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    render(){

        const {firstName, lastName, hairColor} = this.props;

        return(
            <div className="row justify-content-center">
                <div className="col-3 card mb-3 mt-3 p-2">
                    <h2> {lastName}, {firstName}</h2>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {hairColor}</p>
                    <button className="btn btn-info" onClick={this.brithdayDate}>{firstName}'s Birthday</button>
                </div>
            </div>
        )
    }

    brithdayDate = () => {
        let newAge = this.state.age + 1;
        this.setState({age: newAge});
    }


}
export default PersonCard;