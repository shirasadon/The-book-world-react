import httpService from "./httpservice";
import jwt_decode from "jwt-decode";
const TOKEN_KEY = "token";
setTokenHeader();

console.log(getUser());

function setTokenHeader() {
  httpService.setCommonHeader("x-auth-token", getJwt());
}
export function getJwt() {
  return localStorage.getItem(TOKEN_KEY);
}

export function CreateUser(user) {
  return httpService.post("/user", user);
}

export async function LoginUser(credentials) {
  const { data } = await httpService.post("/authication", credentials);
  console.log(data);
  console.log(credentials);
  localStorage.setItem(TOKEN_KEY, data.token);
  setTokenHeader();
  const userLogin = data.user;
  return userLogin;
}
export function LogOutUser() {
  localStorage.removeItem(TOKEN_KEY);
  setTokenHeader();
}

export function getUser() {
  try {
    const token = getJwt();
    return jwt_decode(token);
  } catch (err) {
    console.log(err);
    return null;
  }
}
const userService = {
  CreateUser,
  LoginUser,
  LogOutUser,
  getJwt,
  getUser,
};

export default userService;
