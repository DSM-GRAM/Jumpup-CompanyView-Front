import React from 'react';
import styles from './main.css'

class Category extends React.Component{
    render(){
        return(
            <div id="side">
            <img id="logo" alt="이미지가 없습니다."/>
            <div id="progress_area">
                <div id="pointA"></div>
                <div id="valueA">
                    <div id="pathA"></div>
                    <div id="textA">웹 개발자</div>
                </div>
                
                <div id="pointB"></div>
                <div id="valueB">
                    <div id="textB">앱 개발자</div>
                    <div id="pathB"></div>
                </div>
                
                <div id="pointC"></div>
                <div id="valueC">
                    <div id="pathC"></div>
                    <div id="textC">게임 개발자</div>
                </div>
    
                <div id="pointD"></div>
                <div id="valueD">
                    <div id="textD">서버 개발자</div>
                    <div id="pathD"></div>
                </div>
    
                <div id="pointE"></div>
                <div id="valueE">
                    <div id="pathE"></div>
                    <div id="textE">시스템 개발자</div>
                </div>
    
                <div id="pointF"></div>
                <div id="valueF">
                    <div id="textF">서버 개발자</div>
                    <div id="pathF"></div>
                </div>
                <div id="pointF"></div>
            </div>
        </div>

        )
    }
}

export default Category;