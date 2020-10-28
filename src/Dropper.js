import React from 'react'



export default class Dropper extends React.Component {

    state = {
        filter:''
    }

    handleChange = e => {
        this.setState({
            filter: e.target.value,
        });
    }

    render() {
        console.log(this.props.imageBoogers);
        const filteredAnimals = this.props.imageBoogers.filter((animal) => {
            if(!this.state.filter) return true;

            if(animal.keyword === this.state.filter) return true;

            return false
        })
        return (
    <>
            <div className="dropDown">
                <select onChange={this.handleChange}>
                    <option value=''>Show All</option>
                    <option value='addax'>Addaz</option>
                    <option value='chameleon'>Chameleon</option>
                    <option value='dragon'>Dragon</option>
                    <option value='lizard'>Lizard</option>
                    <option value='markhor'>Markhor</option>
                    <option value='mouflon'>Mouflon</option>
                    <option value='narwhal'>Narwhal</option>
                    <option value='rhino'>Rhino</option>
                    <option value='triceratops'>Triceratops</option>
                    <option value='unicorn'>Unicorn</option>
                    <option value='unilego'>Unilego</option>
                </select>
            </div>

            <div className="dropDownInside">
                <select onChange={this.handleChange}>
                    <option value='1'> One Horn</option> 
                    <option value='2'>Two Horn</option>
                    <option value='3'>Three Horn</option>
                    <option value='100'>100 Horners</option> 
                </select>
            </div>

    </>
        )
    }
}
