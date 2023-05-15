import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function FicheProduit() {
    const [jeuxIdListe, setjeuxIdListe] = useState([]);
    let paramID = useParams();
    const fetchJeuxId = async () => {
       await axios.get(`http://127.0.0.1:5000/api/jeux/${paramID.id}`)
        .then(response => setjeuxIdListe(response.data));
    }
    useEffect(() => {
        fetchJeuxId();
    },[]);
  return (
      <>
          <Header/>
          <main className='padMain'>
              <div className="gridInfo">
                  <div className='caseTitreImage'>
                      <h1 className='titreProduit'>{ jeuxIdListe.nom }</h1>
                      <div className='caseImage'>
                          <img src={jeuxIdListe.image} alt="imageProduit" srcset="" />
                      </div>
                      <p className='paraGenre'><span className='libelleGenre'>Genre:&nbsp;</span><span className='texteGenre'>{ jeuxIdListe.genre}</span></p>
                  </div>
                  <div className='caseBtnPrix'>
                      <div className='caseBtn'>
                        <button className="btnPanier">Ajouter au panier&nbsp;<span><FontAwesomeIcon icon={faPlus}/></span></button>
                        <div className="btnAcheter">
                            <Link style={{ textDecoration: "none" }} to="/paymentPage">
                            <span>Acheter</span>
                            </Link>
                        </div>
                      </div>
                      <div className="casePrix">
                          <div className="prix">{`${jeuxIdListe.prix_neuf} €`}</div>
                          <div className="libellePrix">Prix neuve</div>
                      </div>
                      <div className="casePrix">
                          <div className="prix">{`${jeuxIdListe.prix_occasion} €`}</div>
                          <div className="libellePrix">Prix occasion</div>
                      </div>
                      <div className="casePrix">
                          <div className="prix">{`${jeuxIdListe.prix_expo} €`}</div>
                          <div className="libellePrix">Prix expo</div>
                      </div>
                  </div>
              </div>
              <div className="paraDescr">
                  {jeuxIdListe.description}
              </div>
          </main>
          <Footer/>
      </>
  )
}

export default FicheProduit;
