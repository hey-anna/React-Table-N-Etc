// font 폰트
// import * as React from "react";
import { createTheme } from "@mui/material/styles";

// color
// import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    // primary: {
    //   main: purple[500],
    // },
    // secondary: {
    //   main: green[500],
    // },
    primary: {
      main: "#161616",
    },
    secondary: {
      main: "#EEFD53",
    },
    error: {
      main: "#DA1E28",
    },
  },
  typography: {
    fontFamily: [
      "Noto Sans KR",
      "sans-serif",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
    ].join(","),
  },

  components: {
    // 초기화 리셋
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
        html: {
          height: "100%",
          width: "100%",
        },
        body: {
          height: "100%",
          width: "100%",
        },
        "#root": {
          height: "100%",
          width: "100%",
        },
        table: {
          minWidth: 1080,
          // 1080 픽셀 이상 왜 출력될 수 있도록 해야 하는가
          // 테이블이 줄어들어도 전체 1080만큼 테이블의 크기가 자리잡게 되어서 가로 스크롤바가 생김
        },
      },
    },
    // mui 컴포넌트 기본 스타일 변경위한 설정(갠블로거 따라한거, 아아)
    MuiTablePagination: {
      styleOverrides: {
        root: {
          margin: "0 20px",
          borderRadius: 4,
          "&:last-child": {
            padding: "20px 0",
          },
        },
        spacer: {
          flex: "1 1 100%",
        },
      },
    },
  },
});

export default theme;
