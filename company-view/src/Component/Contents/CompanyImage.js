import React from 'react';
import './../main.css'

class CompanyImage extends React.Component{
    render(){
        return(
            <img className="company_image" src={this.props.url}/>
        )
    }  
}

export default CompanyImage;