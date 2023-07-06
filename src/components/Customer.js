import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell"; // 테이블에 들어가는 각 원소

function Customer(props) {
  return (
    <TableRow>
      <TableCell>{props.id}</TableCell>
      <TableCell>
        <img src={props.image} alt="profile"></img>
      </TableCell>
      <TableCell>{props.birthday}</TableCell>
      <TableCell>{props.gender}</TableCell>
      <TableCell>{props.job}</TableCell>
    </TableRow>
    /* <CustomerProfile id={props.id} image={props.image} name={props.name} />
      <CustomerInfo
        birthday={props.birthday}
        gender={props.gender}
        job={props.job} */
  );
}

// function CustomerProfile(props) {
//   return (
//     <div>
//       <img src={props.image} alt="profile" />
//       <h2>
//         {props.name}({props.id})
//       </h2>
//     </div>
//   );
// }

// function CustomerInfo(props) {
//   return (
//     <div>
//       <p>{props.birthday}</p>
//       <p>{props.gender}</p>
//       <p>{props.job}</p>
//     </div>
//   );
// }

export default Customer;
