import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import shootingStar from "../assets/images/shooting-star.svg";

function WalletHeader({ isHomePage }) {
  const location = useLocation();
  const navigate = useNavigate();

  const defineTitleByLocation = () => {
    if (location.pathname.includes('/edit-token')) {
      return 'Edit Token';
    }
    return 'Add Token';
  };

  const defineButtonName = location.pathname === '/' ? 'Add Token' : 'Voltar';

  const goToPage = () => {
    if (location.pathname === '/') {
      navigate('/add-token');
    } else {
      navigate('/');
    }
  };

  return (
    <section>
      {isHomePage ? (
        <div className="home-title-and-button">
          <div className="shooting-star">
            <img src={shootingStar} alt="Shooting Star" />
            <p>Wish Wallet</p>
          </div>
          <Button name={defineButtonName} onButtonClick={() => goToPage()} />
        </div>
      ) : (
        <div className="form-header">
          <div className="shooting-star">
            <img src={shootingStar} alt="Shooting Star" />
            <p>Wish Wallet</p>
          </div>
          <div className="title-and-button">
            <p className="page-title">{defineTitleByLocation()}</p>
            <Button
              name={defineButtonName}
              onButtonClick={() => goToPage()}
              kind="back"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default WalletHeader;
