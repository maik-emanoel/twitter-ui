interface changeTitleProps {
  path: string;
  userLogin: string;
  userName: string;
}

export function changeTitle({ path, userLogin, userName }: changeTitleProps) {
  const projectName = "Twitter UI";

  if (path === "/") {
    document.title = "Home | " + projectName;
  } else if (path === "/notifications") {
    document.title = "Notifications | " + projectName;
  } else if (path === "/messages") {
    document.title = "Messages | " + projectName;
  } else if (path === `/${userLogin}`) {
    document.title = `${userName} (@${userLogin}) | ` + projectName;
  } else {
    document.title = projectName;
  }
}
