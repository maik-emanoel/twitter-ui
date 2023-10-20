import { UserInfo } from "../context/UserContext";
import emptyUserAvatar from "../assets/emptyUserAvatar.png"

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
        bio: "",
        birthdayDate: {
          month: null,
          day: null,
          year: null,
        },
        followers: 0,
        following: 0,
        created_at: ''
      };
}
