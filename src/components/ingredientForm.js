import React, {Component} from 'react'

class ingredientForm extends Component {
    constructor(props){
        super(props)
        this.state={
            items: [
                {
                    amount:this.props.amount,
                    unit:this.props.unit,
                    what:this.props.what
                }
            ]
        }
    }
        handleChange = (e) =>{
            this.setState({
               [e.target.name]:e.target.value
        })
        this.props.updateIngredient(this.props.index, this.state.items)
    }
    
    render(){
        return(

            <div>

                <textarea value={this.state.amount} placeholder="amount" name="amount" onChange={this.handleChange}></textarea>

                <select value={this.state.unit} name="unit">
                    <option value="cups">cup(s)</option>
                    <option value="tsp">teaspoon(s)</option>
                    <option value="tbs">tablespoon(s)</option>
                    <option value="lb">pound(s)</option>
                    </select>

                <textarea value={this.state.what} placeholder="what" name="what" onChange={this.handleChange}></textarea>
              </div>


        )
    }
}

export default ingredientForm

