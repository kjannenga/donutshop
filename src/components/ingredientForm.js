import React, {Component} from 'react'
import './css/ingredient.css'

const styles = {
  amount:{
      height:'25px',
      width: '50px',
      border:'1px solid black',



  }
}




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

            <div className="ingline">

                <textarea className="amount" value={this.state.amount} placeholder="amount" name="amount" onChange={this.handleChange}></textarea>

                <select className="select" value={this.state.unit} name="unit">
                    <option value="cups">cup(s)</option>
                    <option value="tsp">teaspoon(s)</option>
                    <option value="tbs">tablespoon(s)</option>
                    <option value="lb">pound(s)</option>
                    </select>

                <textarea className="what" value={this.state.what} placeholder="what" name="what" onChange={this.handleChange}></textarea>
              </div>


        )
    }
}

export default ingredientForm

