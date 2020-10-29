import React from 'react'
// import images from './Data.js'
// import ImageListItem from './ImageListItem'

// ===========================================================================================================

// state = {
    //     filter:''
    //   }
    
    
    // handleChange = e => {
        //     this.setState({
            //         filter: e.target.value,
            //     });
            // }
            
            // console.log(this.props.imageBoogers);
            // const filteredAnimals = this.props.imageBoogers.filter((animal) => {
                //     if(!this.state.filter) return true;
                
                //     if(animal.keyword === this.state.filter) return true;
        
                //     return false
                // })
                
// =================================================================================================================

export default class Dropper extends React.Component {
    render() {
         return (
    <>
            <div className="dropDown">
                <select onChange={this.props.dropDown}>
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

{/* ==================================================================================================================== */}
            
            <div className="dropDownInside">

                <select onChange={this.handleChange}>
                    <option value='1'> One Horn</option> 
                    <option value='2'>Two Horn</option>
                    <option value='3'>Three Horn</option>
                    <option value='100'>100 Horners</option> 
            
                </select>
            
            </div>

{/* ==================================================================================================================== */}

            {/* <div className="animal-map">
            {
                    filteredAnimals.map((item, i) => {
                        return <ImageListItem
                        scandalousDragonHorns={item.url}
                        alternativeDisposition={item.description}
                        magicalKeys={item.keyword}
                        hornsFromHell={item.horns}
                        key={i}
                        />
                    })
            }

            </div> */}

    </>
        )
    }
}
