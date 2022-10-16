import { useContext } from "react";
import ctx from "../context/authContext";

export default function UseMenu() {
  const { user, logOut, logIn } = useContext(ctx);
  console.log(user);
  return (
    <div>
      <p>{user}</p>
      {user ? (
        <button type="button" onClick={logOut}>
          Выйти
        </button>
      ) : (
        <button type="button" onClick={logIn}>
          Войти
        </button>
      )}
    </div>
  );
}
