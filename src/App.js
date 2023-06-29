import "./App.css";
import React from "react";
import Customer from "./components/Customer";

// 실제로 보내고자 하는 데이터를 명시해줄 수 있다

const customer = {
  // 키 : 값
  name: "잠탱이",
  birthday: "230122",
  gender: "남자",
  job: "대학생",
};

function App() {
  return (
    <div className="App">
      <div>dd</div>
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    </div>
  );
}

// App에 Customer를 불러 오는데
// 이 때 props라는 것을 이용해서 터이터를 전달할 수가 있다
// component에서 props를
// L name props로 어떠한 내용을 보내주고
// L 그 다음 birthday속성으로 어떠한 내용을 보내주고
// L gender, job 등등 보내 줄 수 있도록 작성할 수 있다

export default App;
