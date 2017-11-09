import React from 'react';
import './../main.css'

class CompanyInfo extends React.Component{
    render(){
        let summaryInfo=this.props.company.info;
        let summaryTags="...";

        console.log(this.props.company.info.length);
        if(this.props.company.info.length>117) summaryInfo=this.props.company.info.split("",117).join("")+"...";
        
        if(!!this.props.company.tags) summaryTags=this.props.company.tags.splice(0,3);

        let getTags=()=>{
            let i=0;
            return (
                summaryTags.map(function(tag){
                    i++;
                    if(i===3) return tag+"...";
                    else return tag+",";
                })
            )
        }
        return(
            <div>
                <h1 className="company_name">{this.props.company.name}</h1>
                <h4 className="company_address">{this.props.company.address}</h4>
                <div className="title_info">기업정보</div>
                <h4 className="company_info">설립일 : {this.props.company.establish}</h4>
                <h4 className="company_info">구성원 : {this.props.company.member_count}</h4>
                <h3 className="company_major">{summaryTags}</h3>
                <h3 className="company_intro">{summaryInfo}</h3>
            </div>   
        )
    }  
}

export default CompanyInfo;