import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {

  let [ 글제목, 글제목변경 ] = useState(['남자봄패션 코디','서촌나들이','패턴이 바꼈다']); //array 가 들어감
  let [ 따봉, 따봉변경 ] = useState( 0 );
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [input,CHinput] = useState('xdcx')
  function 제목바꾸기(){//state를 딥카피해서 변경-reference data type참조형 자료형
    var newArray = [...글제목]; //deep copy =서로 독립적인 값을 가지는것을 복사  직접 수정이 아닌 deep copy
    newArray[0] = '여자봄패션 코디';
    글제목변경( newArray );

  }

  function 순서바꾸기(){//state를 딥카피해서 변경-reference data type참조형 자료형
    var newArray = [...글제목]; //deep copy =서로 독립적인 값을 가지는것을 복사  직접 수정이 아닌 deep copy
    var tmp = newArray[0]
    newArray[0] = newArray[1];
    newArray[1] = tmp;
    글제목변경( newArray );

  }

  function 글발행(){
    var newArray = [...글제목];
    newArray.unshift(input); 
    // for(var i=3; i>=0; i--){
    //   if(i==0) newArray[i]= input;
    //   else newArray[i] = newArray[i-1];
    // }
    글제목변경( newArray );
  }

  return (
    <div className="App">

      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <button onClick={ 제목바꾸기 }>버튼</button>
      <button onClick={ 순서바꾸기 }>버튼</button>


      {
        글제목.map(function(글,i){
          return (
            <div className="list" key={i}>
              <h3 onClick={ ()=>{ 누른제목변경(i) } }> 
                { 글 } 
                <span onClick={ ()=>{ 따봉변경(따봉+1) } }> ❤️ </span> { 따봉 }
              </h3>
              <p>5월 15일 발행</p>
              <p>상세내용</p>
              <hr></hr>
            </div>
          )
        })
      }
      
      <div className="publish">
        <input onChange={ (e)=>{CHinput(e.target.value)} }></input>
        <button onClick={ 글발행 }>저장</button>
      </div>







      <button onClick={ ()=>{ modal변경(!modal) } }> 열고닫기 </button>


      { 
         
         <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
  
      } 
    </div> 
  );
}
 
function Modal(props){
  return(
    <div className="modal">
      <h3> { props.글제목[props.누른제목] } </h3>
      <p>5월 15일 발행</p>
      <p>상세내용</p>
    </div>
  )
}




export default App;
