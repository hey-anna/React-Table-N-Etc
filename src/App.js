import "./App.css";
import React from "react";
import Customer from "./components/Customer";

// 04) 배열 형태로 바꿔주기
const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    //랜덤으로 이미지 보여주는 사이트 / 사이즈는 64*64
    name: "한나",
    birthday: "230122",
    gender: "여자",
    job: "대학생",
  },
  {
    id: 5,
    image: "https://placeimg.com/64/64/2",
    //랜덤으로 이미지 보여주는 사이트 / 사이즈는 64*64
    name: "손흥민",
    birthday: "123345",
    gender: "남자",
    job: "축구선수",
  },
  {
    id: 7,
    image: "https://placeimg.com/64/64/3",
    //랜덤으로 이미지 보여주는 사이트 / 사이즈는 64*64
    name: "피카츄",
    birthday: "555555",
    gender: "중성",
    job: "포켓몬",
  },
];

function App() {
  return (
    <div className="App">
      <div>dd</div>
      {customers.map((c) => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
      {/* <div>
        <Customer
          id={customers[0].id}
          image={customers[0].image}
          name={customers[0].name}
          birthday={customers[0].birthday}
          gender={customers[0].gender}
          job={customers[0].job}
        />
        <Customer
          id={customers[1].id}
          image={customers[1].image}
          name={customers[1].name}
          birthday={customers[1].birthday}
          gender={customers[1].gender}
          job={customers[1].job}
        />
        <Customer
          id={customers[2].id}
          image={customers[2].image}
          name={customers[2].name}
          birthday={customers[2].birthday}
          gender={customers[2].gender}
          job={customers[2].job}
        />
      </div> */}
    </div>
  );
}
// 03) 회원정보 확장
// const customer = {
//   id: 1,
//   image: "https://placeimg.com/64/64/any",
//   //랜덤으로 이미지 보여주는 사이트 / 사이즈는 64*64
//   name: "한나",
//   birthday: "230122",
//   gender: "남자",
//   job: "대학생",
// };

// function App() {
//   return (
//     <div className="App">
//       <div>dd</div>
//       <Customer
//         id={customer.id}
//         image={customer.image}
//         name={customer.name}
//         birthday={customer.birthday}
//         gender={customer.gender}
//         job={customer.job}
//       />
//     </div>
//   );
// }

// 02)
// Customer에게 props로 데이터를 전달하는 부분에서,, id값과, 이미지 경로 값 또한 함께 보내줄 수 있도록 처리를 하겠다.
//

// 실제로 보내고자 하는 데이터를 명시해줄 수 있다

// 한명의 회원 정보
// const customer = {
//   // 키 : 값
//   name: "잠탱이",
//   birthday: "230122",
//   gender: "남자",
//   job: "대학생",
// };

// function App() {
//   return (
//     <div className="App">
//       <div>dd</div>
//       <Customer
//         name={customer.name}
//         birthday={customer.birthday}
//         gender={customer.gender}
//         job={customer.job}
//       />
//     </div>
//   );
// }

// 01)
// App에 Customer를 불러 오는데
// 이 때 props라는 것을 이용해서 터이터를 전달할 수가 있다
// component에서 props를
// L name props로 어떠한 내용을 보내주고
// L 그 다음 birthday속성으로 어떠한 내용을 보내주고
// L gender, job 등등 보내 줄 수 있도록 작성할 수 있다

export default App;
