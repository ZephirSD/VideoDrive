import { Link } from "react-router-dom";

const Game = ({nom, prix, image, id }) => {
  return (
    <Link style={{ textDecoration: "none" }} to={`/ficheProduit/${id}`}>
      <div className="game">
        <div className="img-container">
          <img src={image} alt="Logo-Game" />
        </div>

        <div className="info-container">
          <div className="info-title">
            <h3>{nom}</h3>
            <span>{ `${prix}€`}</span>
          </div>
          <div>
            <div>
              <div onClick="" className="logo-panier">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="20"
                  fill="currentColor"
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </div>
            </div>
            <div>
              <div onClick="" className="logo-paiement">
                <span>Acheter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Game;
