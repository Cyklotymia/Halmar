import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogged } from "../redux/account";


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
    {!isUserLogged && <div class ="logIn">logowanko</div>}
    </>
  );
}

export default Account;
