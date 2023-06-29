import React from "react";

// @@ 별로 중요한 내용아님, 너무 잠와서 타이핑 침
// Customer class 정의 - 리액트에 컴포넌트 형태로 작성이 된 클래스
// (kyy - 근데 이거는 구버전이라(클래스컴포넌트), 함수형 컴포넌트로 변경함)

// 리액트의 컴퍼넌트는 일종의 라이브러리이자 Class 이다
// 이것을 상속 받아서 하나의 컴퍼넌트를 정의할 수가 있다

// 기본적으로 컴포넌트라는 라이브러리는 render 렌더 함수가 항상 포함되어 있다
// (kyy - render 구버전)
// 렌더는 항상 수행되는 내용으로써 이 커스터머라는 컴포넌트를 실제 화면에 그리고자 할 때
// 실제로 그려지는 내용이 render에 담기게 된다

// Customer가 포함하고 있는 내용이다.
// this 키워드 이용해서..
// 전달 받은 name라는 props를 출력할 수 있도록
// 최신 리액트에서는 this를 빼준다
function Customer(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.birthday}</p>
      <p>{props.gender}</p>
      <p>{props.job}</p>
    </div>
  );
}

// function Customer(props) {
//   return (
//     <div>
//       <h2>엘사</h2>
//       <p>230122</p>
//       <p>남자</p>
//       <p>대학생</p>
//     </div>
//   );
// }

// class Customer extends React.Component {
//     render() {
//       <div>
//         <h2>엘사</h2>
//         <p>230122</p>
//         <p>남자</p>
//         <p>대학생</p>
//       </div>;
//     }
//   }

export default Customer; // 내보내기
