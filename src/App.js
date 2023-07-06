import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import Container from "@mui/material/Container";
import Customer from "./components/Customer";
// Table
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// 초기화(그냥 불러와서 바로 사용 가능 ????)
import CssBaseline from "@mui/material/CssBaseline";

import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./css/styles";

// theme
// const theme = createTheme({
//   // 팔레트 : 자주 사용하는 것 palette로 설정
//   palette: {
//     // primary: {
//     //   main: purple[500],
//     // },
//     // secondary: {
//     //   main: green[500],
//     // },
//     primary: {
//       main: "#161616",
//     },
//     secondary: {
//       main: "#EEFD53",
//     },
//     error: {
//       main: "#DA1E28",
//     },
//   },
//   // 텍스트
//   typography: {
//     fontFamily: [
//       "Noto Sans KR",
//       "sans-serif",
//       "-apple-system",
//       "BlinkMacSystemFont",
//       "Segoe UI",
//       "Roboto",
//       "Oxygen",
//       "Ubuntu",
//       "Cantarell",
//       "Fira Sans",
//       "Droid Sans",
//       "Helvetica Neue",
//     ].join(","),
//   },
// });

// useStyles
const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    color: theme.palette.primary.main,
  },

  // 이렇게 적용해도 되는지 모르겠지만, 갠블로거가 한거 그대로 반영
  // 혹시 속성이 안먹으면, 내가하던방식이나, 리액트방식 css에 직접 넣기
  // 이거는 그냥 삭제, 너무 고민하지말고 바로바로 좀 넘어가자
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       "*": {
  //         boxSizing: "border-box",
  //         margin: 0,
  //         padding: 0,
  //       },
  //       html: {
  //         height: "100%",
  //         width: "100%",
  //       },
  //       body: {
  //         height: "100%",
  //         width: "100%",
  //       },
  //       "#root": {
  //         height: "100%",
  //         width: "100%",
  //       },
  //     },
  //   },
  // },
}));

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// });

// export default function Hook() {
//   const classes = useStyles();
//   return <Button className={classes.root}>Hook</Button>;
// }

// const theme = createTheme();

// const useStyles = makeStyles((theme) => ({
//   root: {
//     color: theme.palette.primary.main,
//   },
// }));

// const App = (props) => {
//   const classes = useStyles();
//   return <ThemeProvider theme={theme}><div {...props} className={classes.root}></ThemeProvider>;
// }

// 04) 배열 형태로 바꿔주기
const customers = [
  {
    id: 1,
    image: "https://picsum.photos/64/64",
    //랜덤으로 이미지 보여주는 사이트 / 사이즈는 64*64
    name: "한나",
    birthday: "230122",
    gender: "여자",
    job: "대학생",
  },
  {
    id: 5,
    image: "https://picsum.photos/64/64",
    //랜덤으로 이미지 보여주는 사이트 / 사이즈는 64*64
    name: "손흥민",
    birthday: "123345",
    gender: "남자",
    job: "축구선수",
  },
  {
    id: 7,
    image: "https://picsum.photos/64/64",
    //랜덤으로 이미지 보여주는 사이트 / 사이즈는 64*64
    name: "피카츄",
    birthday: "555555",
    gender: "중성",
    job: "포켓몬",
  },
];

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Container className="App" maxWidth="xl" disableGutters={true}>
          <CssBaseline />
          <div>dd</div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>번호</TableCell>
                  <TableCell>이미지</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>생년월일</TableCell>
                  <TableCell>직업</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
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
              </TableBody>
            </Table>
          </TableContainer>
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
        </Container>
      </ThemeProvider>
    </React.StrictMode>
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
