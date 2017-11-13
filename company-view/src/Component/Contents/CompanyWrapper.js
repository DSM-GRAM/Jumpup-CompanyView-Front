import React from 'react';
import CompanyCard from './CompanyCard';
import './../main.css';
import axios from 'axios';
import logo from './logo.png';
import img from './img.png';

class CompanyWrapper extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            firstCompany: {
                "address": "전공동아리 GRAM",
                "establish": "2017-03-08",
                "info": "전공동아리 GRAM은 2017학년도 초에 설립된 동아리입니다. 약 1년의 시간동안 STAC과 동아리 경진대회를 거치며 소프트웨어 개발과 탑티어 동아리로 성장하였습니다. PlusTV와의 기업연계 프로젝트를 통해 Digital Signage 사업을 진행하고 있으며, PM/PO/QA/DevOps/개발자로 나뉘어 체계적인 프로젝트 진행을 위해 노력합니다.",
                "kind": "rocketpunch",
                "member_count": "11명",
                "name": "그램(GRAM)",
                "positions": [
                  {
                    "position_info": "2-3학년",
                    "position_name": "풀스택 개발자",
                    "tech_stack": "Full-Stack ∙ Frontend ∙ Backend ∙ Android ∙ iOS ∙ Git"
                  },
                  {
                    "position_info": "1-3학년",
                    "position_name": "모바일 클라이언트 개발자 (iOS/Android)",
                    "tech_stack": "Android ∙ Java ∙ Kotlin ∙ iOS ∙ Swift ∙ Git"
                  },
                  {
                    "position_info": "1-3학년",
                    "position_name": "UI/UX 디자이너",
                    "tech_stack": "Photoshop ∙ XD ∙ Sketch ∙ Zeplin ∙ After Effects ∙ Premier Pro"
                  },
                  {
                    "position_info": "1학년",
                    "position_name": "백엔드 엔지니어",
                    "tech_stack": "Python ∙ Flask ∙ Node.js ∙ Express.js ∙ Koa.js ∙ AWS ∙ SQL ∙ Git"
                  }],
                "tags": [
                  "안드로이드",
                  "웹",
                  "백엔드"
                ]
              },
            secondCompany: {
                "address": "전공동아리 GRAM",
                "establish": "2017-03-08",
                "info": "전공동아리 GRAM은 2017학년도 초에 설립된 동아리입니다. 약 1년의 시간동안 STAC과 동아리 경진대회를 거치며 소프트웨어 개발과 탑티어 동아리로 성장하였습니다. PlusTV와의 기업연계 프로젝트를 통해 Digital Signage 사업을 진행하고 있으며, PM/PO/QA/DevOps/개발자로 나뉘어 체계적인 프로젝트 진행을 위해 노력합니다.",
                "kind": "rocketpunch",
                "member_count": "11명",
                "name": "그램(GRAM)",
                "positions": [
                  {
                    "position_info": "2-3학년",
                    "position_name": "풀스택 개발자",
                    "tech_stack": "Full-Stack ∙ Frontend ∙ Backend ∙ Android ∙ iOS ∙ Git"
                  },
                  {
                    "position_info": "1-3학년",
                    "position_name": "모바일 클라이언트 개발자 (iOS/Android)",
                    "tech_stack": "Android ∙ Java ∙ Kotlin ∙ iOS ∙ Swift ∙ Git"
                  },
                  {
                    "position_info": "1-3학년",
                    "position_name": "UI/UX 디자이너",
                    "tech_stack": "Photoshop ∙ XD ∙ Sketch ∙ Zeplin ∙ After Effects ∙ Premier Pro"
                  },
                  {
                    "position_info": "1학년",
                    "position_name": "백엔드 엔지니어",
                    "tech_stack": "Python ∙ Flask ∙ Node.js ∙ Express.js ∙ Koa.js ∙ AWS ∙ SQL ∙ Git"
                  }],
                "tags": [
                  "안드로이드",
                  "웹",
                  "백엔드"
                ]
              },
            thirdCompany: {
                "address": "전공동아리 GRAM",
                "establish": "2017-03-08",
                "info": "전공동아리 GRAM은 2017학년도 초에 설립된 동아리입니다. 약 1년의 시간동안 STAC과 동아리 경진대회를 거치며 소프트웨어 개발과 탑티어 동아리로 성장하였습니다. PlusTV와의 기업연계 프로젝트를 통해 Digital Signage 사업을 진행하고 있으며, PM/PO/QA/DevOps/개발자로 나뉘어 체계적인 프로젝트 진행을 위해 노력합니다.",
                "kind": "rocketpunch",
                "member_count": "11명",
                "name": "그램(GRAM)",
                "positions": [
                    {
                        "position_info": "2-3학년",
                        "position_name": "풀스택 개발자",
                        "tech_stack": "Full-Stack ∙ Frontend ∙ Backend ∙ Android ∙ iOS ∙ Git"
                    },
                    {
                        "position_info": "1-3학년",
                        "position_name": "모바일 클라이언트 개발자 (iOS/Android)",
                        "tech_stack": "Android ∙ Java ∙ Kotlin ∙ iOS ∙ Swift ∙ Git"
                    },
                    {
                        "position_info": "1-3학년",
                        "position_name": "UI/UX 디자이너",
                        "tech_stack": "Photoshop ∙ XD ∙ Sketch ∙ Zeplin ∙ After Effects ∙ Premier Pro"
                    },
                    {
                        "position_info": "1학년",
                        "position_name": "백엔드 엔지니어",
                        "tech_stack": "Python ∙ Flask ∙ Node.js ∙ Express.js ∙ Koa.js ∙ AWS ∙ SQL ∙ Git"
                    }],
                "tags": [
                    "안드로이드",
                    "웹",
                    "백엔드"
                ]
            }
        };
    }
    componentDidMount (){
        // axios.get('http://52.79.134.200:3002/company')
        //     .then(response => {this.setFirstCompany(response.data)});
        // axios.get('http://52.79.134.200:3002/company')
        //     .then(response => {this.setSecondCompany(response.data)});
        // axios.get('http://52.79.134.200:3002/company')
        //     .then(response => {this.setThirdCompany(response.data)});

        setInterval(() => {
            axios.get('http://52.79.134.200:3002/company')
                .then(response => { this.setFirstCompany(response.data) });
            axios.get('http://52.79.134.200:3002/company')
                .then(response => { this.setSecondCompany(response.data) });
            axios.get('http://52.79.134.200:3002/company')
                .then(response => { this.setThirdCompany(response.data) });
        }, 10000);
    }
    setFirstCompany(data) { 
        this.setState({
            ...this.state,
            firstCompany: data
        });
    }  
    setSecondCompany(data){
        this.setState({
            ...this.state,
            secondCompany: data
        });
    }
    setThirdCompany(data){
        this.setState({
            ...this.state,
            thirdCompany: data
        });
    }

    render(){
        console.log(this.state);
        return(
            <div id="content"> 
                <CompanyCard img_url={this.state.firstCompany.image_url?this.state.firstCompany.image_url:img}
                             logo_url={this.state.firstCompany.logo_url?this.state.firstCompany.logo_url:logo}
                             postion={this.state.firstCompany.postion}
                             company={this.state.firstCompany} />
                <CompanyCard img_url={this.state.secondCompany.image_url?this.state.secondCompany.image_url:img}
                             logo_url={this.state.secondCompany.logo_url?this.state.secondCompany.logo_url:logo}
                             postion={this.state.secondCompany.postion}
                             company={this.state.secondCompany} />
                <CompanyCard img_url={this.state.thirdCompany.image_url?this.state.thirdCompany.image_url:img}
                             logo_url={this.state.thirdCompany.logo_url?this.state.thirdCompany.logo_url:logo}
                             postion={this.state.thirdCompany.postion}
                             company={this.state.thirdCompany} />
            </div>
        )
    }
}

export default CompanyWrapper;