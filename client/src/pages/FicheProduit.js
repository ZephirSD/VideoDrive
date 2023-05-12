import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'

function FicheProduit() {
  return (
      <>
          <main className='padMain'>
              <div className="gridInfo">
                  <div className='caseTitreImage'>
                      <h1 className='titreProduit'>Ys IX Monstrum Nox Deluxe Edition</h1>
                      <div className='caseImage'>
                          {/* <img src="" alt="imageProduit" srcset="" /> */}
                      </div>
                      <p className='paraGenre'><span className='libelleGenre'>Genre:&nbsp;</span><span className='texteGenre'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, est.</span></p>
                  </div>
                  <div className='caseBtnPrix'>
                      <div className='caseBtn'>
                        <button className="btnPanier">Ajouter au panier&nbsp;<span><FontAwesomeIcon icon={faPlus}/></span></button>
                      </div>
                      <div className="casePrix">
                          <div className="prix">49,00 €</div>
                          <div className="libellePrix">Prix neuve</div>
                      </div>
                      <div className="casePrix">
                          <div className="prix">49,00 €</div>
                          <div className="libellePrix">Prix occasion</div>
                      </div>
                      <div className="casePrix">
                          <div className="prix">49,00 €</div>
                          <div className="libellePrix">Prix expo</div>
                      </div>
                  </div>
              </div>
              <div className="paraDescr">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, quisquam modi voluptatem ullam minus quos! Ad, molestias fugit voluptas culpa tenetur omnis modi, rem labore maxime sapiente, debitis eius. Aperiam ipsa ipsum culpa quam sit recusandae quo ratione consequuntur itaque rerum, quas magni excepturi rem esse eveniet inventore aliquam quaerat fugiat neque doloremque nemo quae? Modi, adipisci rem numquam a quisquam ea! Doloribus, adipisci quo.
              </div>
          </main>
          <Footer/>
      </>
  )
}

export default FicheProduit