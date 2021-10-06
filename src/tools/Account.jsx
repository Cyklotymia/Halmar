import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogged } from "../redux/account";
import { Link } from "react-router-dom";
import AccountLogged from "./AccountLogged";


// onClick={()=>{
//     dispatch(userLogged({login:"login",pass:"haslo"}))
// }
//     }

function Account() {
  const dispatch = useDispatch();
  const { isUserLogged } = useSelector((state) => state.account);
  console.log(isUserLogged);

  return (
      <>
    {!isUserLogged && <div className ="logIn">
        <h2 className="logIn__header">logowanie</h2>
        <form className="logIn__form">
            <label htmlFor="login" className="logIn__label">Adres e-mail</label>
            <input id="login"type="text" placeholder="wpisz swój login" />

            <label htmlFor="pass" className="logIn__label">Hasło</label>
            <input type="text" id="pass" placeholder="wpisz swoje hasło" />
            <Link to ="/registration"className="logIn__link">Zarejestruj się</Link>
            <Link to ="/remindPass"className="logIn__link">Przypomnij hasło</Link>

            <button className="helmar__button logIn__button">Zaloguj się</button>


        </form>
        </div>}
    {isUserLogged && <AccountLogged/>}
    </>
  );
}

export default Account;
