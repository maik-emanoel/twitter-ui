import { UserInfo } from "../context/UserContext";

export function saveUser(userInfo: UserInfo) {
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
}

export function loadUser() {
  const storedUser = localStorage.getItem("userInfo");
  return storedUser
    ? (JSON.parse(storedUser) as UserInfo)
    : {
        name: "",
        login: "",
        avatar: "",
        birthdayDate: {
          month: null,
          day: null,
          year: null,
        },
        created_at: ''
      };
}
