import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogged } from "../redux/account";
import AccountLogged from "./AccountLogged";
import { Link } from "react-router-dom";

// onClick={()=>{
//     dispatch(userLogged({login:"login",pass:"haslo"}))
// }
//     }

function Account() {
  const dispatch = useDispatch();
  const { isUserLogged } = useSelector((state) => state.account);
  const [passInputHandler, setPassInputHandler] = useState("");
  const [logInputHandler, setLogInputHandler] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginObj = {
      login: logInputHandler,
      pass: passInputHandler,
    };
    dispatch(userLogged(loginObj))
    setPassInputHandler("")
    setLogInputHandler("")
  };

  return (
    <>
      {!isUserLogged && (
        <div className="logIn">
          <h2 className="logIn__header">logowanie</h2>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="logIn__form"
          >
            <div className="logIn__form-element">
              <label htmlFor="login" className="logIn__label">
                Login:
              </label>
              <input
                onChange={(e) => {
                  setLogInputHandler(e.target.value);
                }}
                value={logInputHandler}
                className="logIn__input"
                id="login"
                type="text"
                placeholder="wpisz swój login"
              />
            </div>

            <div className="logIn__form-element">
              <label htmlFor="pass" className="logIn__label">
                Hasło:
              </label>
              <input
                onChange={(e) => {
                  setPassInputHandler(e.target.value);
                }}
                className="logIn__input"
                value={passInputHandler}
                type="password"
                id="pass"
                placeholder="wpisz swoje hasło"
              />
            </div>
            <div className="logIn__form-element--right">
              <Link to="/registration" className="logIn__link">
                Zarejestruj się
              </Link>
              <Link to="/remindPass" className="logIn__link">
                Przypomnij hasło
              </Link>
            </div>
            <button className="helmar__button logIn__button">
              Zaloguj się
            </button>
          </form>
        </div>
      )}
      {isUserLogged && <AccountLogged />}
    </>
  );
}

export default Account;
