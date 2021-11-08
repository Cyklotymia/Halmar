import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/images/banner_newsletter.jpg"

function Newsletter() {
    const [inputText, setInputText] = useState(" ")
  return (
    <section className="newsletter">
      <div className="newsletter__mask">
        
      </div>
        <img className="newsletter__background"src={backgroundImage} alt="" />
      <div className="wrapper">
        <div className="newsletter__content">

        <div className="newsletter__header--container">
          <div className="newsletter__icon--container">
            <i className="newsletter__icon halmar-icon_23"></i>
          </div>
          <div className=" halmar__header newsletter__header">
            zapisz się do{" "}
            <span className="halmar__header--bold newsletter__header--bold">
              newsletter
            </span>
          </div>
        </div>
        <form className="newsletter__form" onSubmit={(e)=>{
            e.preventDefault()
        }}>
            <input value={inputText} onChange={
                    (e)=>{
                        setInputText(e.target.value)
                        console.log(inputText);
                    }
                } type="email" className="newsletter__input" placeholder="Wpisz adres email" />
            <button className="newsletter__button halmar__button">zapisz się</button>
            <div className="newsletter__agreement">
                <input className="newsletter__agreement--input"  type="checkbox" name="agree" id="agree"  />
                <label htmlFor="agree" className="newsletter__agreement--text">Wyrażam zgodę na otrzymywanie drogą elektroniczną na wskazany przeze mnie adres e-mail informacji dotyczących świadczonych przez Administratora.Zgoda może zostać cofnięta w każdym czasie. </label>
            </div>
        </form>
        <div className="newsletter__icons--container">
            <Link to="idk" className="newletter__icon--conatainer">
                <i className="newletter__icon halmar-icon_24"></i>
            </Link>
            <Link to="idk" className="newletter__icon--conatainer">
                <i className="newletter__icon halmar-icon_25"></i>
            </Link>
            <Link to=" idk" className="newletter__icon--conatainer">
                <i className="newletter__icon halmar-icon_26"></i>
            </Link>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
