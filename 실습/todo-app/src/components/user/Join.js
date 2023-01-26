import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import {BASE_URL, USER} from '../../config/host-config'
const Join = () => {

    const API_BASE_URL = BASE_URL + USER;

  //검증 메세지 저장
  const [message, setMessage] = useState({
    username: "",
    password: "",
    email: "",
  });
  //검증 완료 여부
  const [validate, setValidate] = useState({
    username: "",
    password: "",
    email: "",
  });

  //유저 이름 입력란 검증 체인지 이벤트 핸들러
  const nameHandler = (e) => {
    const nameRegex = /^[가-힣]{2,5}$/;
    //검증시작
    let message;
    //문자열은 빈문자열일때만 false
    if (!e.target.value) {
      //유저 이름을 안적었을 때 === ''
      message = "유저 이름은 필수 입니다.";
      setValidate({
        ...validate,
        username: false,
      });
    } else if (!nameRegex.test(e.target.value)) {
      //이 패턴에 안맞으면
      message = "2~5글자 사이의 한글로만 작성해주세요";
      setValidate({
        ...validate,
        username: false,
      });
    } else {
      message = "사용 가능한 이름입니다.";
      setValidate({
        ...validate,
        username: true,
      });
    }
    setMessage({
      ...message,
      username: message,
    });
  };

  //비밀번호 검증
  const passwordHandler = (e) => {
    const pwRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
    //검증시작
    let msg;
    //문자열은 빈문자열일때만 false
    if (!e.target.value) {
      //패스워드 안적었을 때 === ''
      msg = "비밀번호는 필수 입니다.";
      setValidate({
        ...validate,
        password: false,
      });
    } else if (!pwRegex.test(e.target.value)) {
      //이 패턴에 안맞으면
      msg = "8글자 이상의 영문,숫자,특수문자를 포함해주세요";
      setValidate({
        ...validate,
        password: false,
      });
    } else {
      msg = "사용 가능한 비밀번호입니다.";
      setValidate({
        ...validate,
        password: true,
      });
    }
    setMessage({
      ...message,
      password: msg,
    });
  };

  // 이메일 중복확인 요청 함수
  const checkEmail = email => {
    fetch(`${API_BASE_URL}/check?email=${email}`)
      .then(res => res.json())
      .then(flag => {
          let msg;
          if (flag) {
              msg = '중복된 이메일입니다.';
              setValidate({
                  ...validate,
                  email: false
              });
          } else {
              msg = '사용 가능한 이메일입니다.';
              setValidate({
                  ...validate,
                  email: true
              });
          }
          setMessage({
              ...message,
              email: msg
          });
      });
};

  // 이메일 입력 검증
  const emailHandler = (e) => {
    const emailRegex = /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/;

    let emsg;
    if (!e.target.value) {
      emsg = "이메일은 필수값입니다!";
      setValidate({ ...validate, email: false });
    } else if (!emailRegex.test(e.target.value)) {
      emsg = "이메일 형식이 아닙니다!";
      setValidate({ ...validate, email: false });
    } else {
      checkEmail(e.target.value); //중복확인 따로 fetch를 날려야해서
    }
    setMessage({ ...message, email: emsg });
  };
  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ marginTop: "180px", marginBottom: "200px" }}
    >
      <form noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h5">
              계정 생성
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="fname"
              name="username"
              variant="outlined"
              required
              fullWidth
              id="username"
              label="유저 이름"
              autoFocus
              onChange={nameHandler}
            />
            <span
              style={
                validate.username ? { color: "green " } : { color: "red " }
              }
            >
              {message.username}
            </span>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="이메일 주소"
              name="email"
              autoComplete="email"
              onChange={emailHandler}
            />
            <span
              style={validate.email ? { color: "green " } : { color: "red " }}
            >
              {message.email}
            </span>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="패스워드"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={passwordHandler}
            />
            <span
              style={
                validate.password ? { color: "green " } : { color: "red " }
              }
            >
              {message.password}
            </span>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              계정 생성
            </Button>
          </Grid>
        </Grid>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              이미 계정이 있습니까? 로그인 하세요.
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Join;
