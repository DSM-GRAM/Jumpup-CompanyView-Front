import React from 'react';
import './../main.css'

class CompanyLogoImage extends React.Component{
    render(){
        return(
            <div className="logo_area">
                <img className="company_logo" src={this.props.url}/>
            </div> 
        )
    }  
}

export default CompanyLogoImage;