import React from "react";

// 한명에 대한 고객 정보로 들어갈 내용이 프로파일,인포 총 2개의 컴포넌트 나누어서 들가게 만듦
function Customer(props) {
  return (
    <div>
      <CustomerProfile id={props.id} image={props.image} name={props.name} />
      <CustomerInfo
        birthday={props.birthday}
        gender={props.gender}
        job={props.gender}
      />
    </div>
  );
}

function CustomerProfile(props) {
  return (
    <div>
      <img src={props.image} alt="profile" />
      <h2>
        {props.name}({props.id})
      </h2>
    </div>
  );
}

function CustomerInfo(props) {
  return (
    <div>
      <p>{props.birthday}</p>
      <p>{props.gender}</p>
      <p>{props.job}</p>
    </div>
  );
}

export default Customer;
