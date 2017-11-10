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
                "address": "전공동아리 그램",
                "establish": "2017-03-08",
                "info": "트레드링스는 2015년에 설립된 회사로 사원수 12명 규모의 벤처기업입니다.   2015년 08월 설립 3개월만에 Seed투자를 유치할만큼 가능성과시장성을동시에 인정받은 기업니다.2016년 08월 Series A VC투자 20억 투자 유치를 하였습니다.   트레드링스는 물류 온라인 정보 제공 및 플랫폼 서비스를 제공하는 회사입니다.  트레드링스는 비효율적인 국제물류 시장에 21세기형 온라인 물류 플랫폼을 제공함으로써  중소기업의 수출입 증대에 앞장서는 혁신적인 기업입니다.  \n\n더 보기",
                "kind": "rocketpunch",
                "member_count": "11-50명",
                "name": "트레드링스(TradLinx)",
                "positions": [
                  {
                    "position_info": "4,000 - 10,000만원 / 경력",
                    "position_name": "시스템 개발",
                    "tech_stack": "Java ∙ HTML ∙ C# ∙ Node.js ∙ Azure ∙ Hibernate ∙ spring-boot ∙ rdbms ∙ NoSQL ∙ Python"
                  },
                  {
                    "position_info": "4,000 - 6,000만원 / 경력",
                    "position_name": "서버 개발자 모집",
                    "tech_stack": "full stack ∙ RESTful-api ∙ JAVA / Spring ∙ 풀스택개발 ∙ Node.js ∙ Azure ∙ Hibernate ∙ Front-end ∙ spring-framework"
                  }
                ],
                "tags": [
                  "안드로이드",
                  "",
                ]
              },
            secondCompany: {
                "address": "대한민국 서울특별시 강남구 학동로 128 5층",
                "establish": "2015-05-22",
                "info": "트레드링스는 2015년에 설립된 회사로 사원수 12명 규모의 벤처기업입니다.   2015년 08월 설립 3개월만에 Seed투자를 유치할만큼 가능성과시장성을동시에 인정받은 기업니다.2016년 08월 Series A VC투자 20억 투자 유치를 하였습니다.   트레드링스는 물류 온라인 정보 제공 및 플랫폼 서비스를 제공하는 회사입니다.  트레드링스는 비효율적인 국제물류 시장에 21세기형 온라인 물류 플랫폼을 제공함으로써  중소기업의 수출입 증대에 앞장서는 혁신적인 기업입니다.  \n\n더 보기",
                "kind": "rocketpunch",
                "member_count": "11-50명",
                "name": "트레드링스(TradLinx)",
                "positions": [
                  {
                    "position_info": "4,000 - 10,000만원 / 경력",
                    "position_name": "시스템 개발",
                    "tech_stack": "Java ∙ HTML ∙ C# ∙ Node.js ∙ Azure ∙ Hibernate ∙ spring-boot ∙ rdbms ∙ NoSQL ∙ Python"
                  },
                  {
                    "position_info": "4,000 - 6,000만원 / 경력",
                    "position_name": "서버 개발자 모집",
                    "tech_stack": "full stack ∙ RESTful-api ∙ JAVA / Spring ∙ 풀스택개발 ∙ Node.js ∙ Azure ∙ Hibernate ∙ Front-end ∙ spring-framework"
                  }
                ],
                "tags": [
                  "모바일서비스",
                  "웹서비스",
                  "마케팅",
                  "소프트웨어",
                  "데이터",
                  "IT서비스",
                  "O2O",
                  "platform",
                  "BigData",
                  "물류",
                  "Contents",
                  "logistics",
                  "forwarder",
                  "International",
                  "Shipping"
                ]
              },
            thirdCompany: {
                "address": "대한민국 서울특별시 강남구 학동로 128 5층",
                "establish": "2015-05-22",
                "image_url": "https://media.rocketpunch.com/company/8284/tradlinx_cover_1471500163.png",
                "info": "트레드링스는 2015년에 설립된 회사로 사원수 12명 규모의 벤처기업입니다.   2015년 08월 설립 3개월만에 Seed투자를 유치할만큼 가능성과시장성을동시에 인정받은 기업니다.2016년 08월 Series A VC투자 20억 투자 유치를 하였습니다.   트레드링스는 물류 온라인 정보 제공 및 플랫폼 서비스를 제공하는 회사입니다.  트레드링스는 비효율적인 국제물류 시장에 21세기형 온라인 물류 플랫폼을 제공함으로써  중소기업의 수출입 증대에 앞장서는 혁신적인 기업입니다.  \n\n더 보기",
                "kind": "rocketpunch",
                "logo_url": "https://media.rocketpunch.com/cache/fd/6b/fd6b1edc7a358ea4600158296c4e50f1.png",
                "member_count": "11-50명",
                "name": "트레드링스(TradLinx)",
                "positions": [
                  {
                    "position_info": "4,000 - 10,000만원 / 경력",
                    "position_name": "시스템 개발",
                    "tech_stack": "Java ∙ HTML ∙ C# ∙ Node.js ∙ Azure ∙ Hibernate ∙ spring-boot ∙ rdbms ∙ NoSQL ∙ Python"
                  },
                  {
                    "position_info": "4,000 - 6,000만원 / 경력",
                    "position_name": "서버 개발자 모집",
                    "tech_stack": "full stack ∙ RESTful-api ∙ JAVA / Spring ∙ 풀스택개발 ∙ Node.js ∙ Azure ∙ Hibernate ∙ Front-end ∙ spring-framework"
                  }
                ],
                "tags": [
                  "모바일서비스",
                  "웹서비스",
                  "마케팅",
                  "소프트웨어",
                  "데이터",
                  "IT서비스",
                  "O2O",
                  "platform",
                  "BigData",
                  "물류",
                  "Contents",
                  "logistics",
                  "forwarder",
                  "International",
                  "Shipping"
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
        }, 30000);
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
                <CompanyCard img_url={this.state.secondCompany.image_url}
                             logo_url={this.state.secondCompany.logo_url}
                             postion={this.state.secondCompany.postion}
                             company={this.state.secondCompany} />
                <CompanyCard img_url={this.state.thirdCompany.image_url}
                             logo_url={this.state.thirdCompany.logo_url}
                             postion={this.state.thirdCompany.postion}
                             company={this.state.thirdCompany} />
            </div>
        )
    }
}

export default CompanyWrapper;