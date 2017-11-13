import React from 'react';
import './../main.css'
import CompanyInfo from './CompanyInfo';
import CompanyPosition from './CompanyPosition';
import CompanyImage from './CompanyImage';
import CompanyLogoImage from './CompanyLogoImage';

class CompanyCard extends React.Component{
    render(){
        let positions=this.props.company.positions;

        let getCompanyPostion=()=>{
            let i = 0;
            return(
                positions.map(function(position){
                    i++;
                    console.log(i);
                    if (i > 2) return;
                    return(
                        <CompanyPosition position={position}/>
                    )
                })
            )
        }
    
        return(
            <div className="card" id="card1">
                <CompanyImage url={this.props.img_url}/>
                <CompanyLogoImage url={this.props.logo_url}/>
                <CompanyInfo company={this.props.company}/>

                <div className="title_info">취업정보</div> 
                
                {getCompanyPostion()}
            </div>   
        )
    }  
}

export default CompanyCard;