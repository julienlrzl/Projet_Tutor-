/**
 * Page react Actors
 *
 * Ce composant affiche les informations sur les acteurs du film "Intouchable".
 * Les détails sur les acteurs, tels que leur nom, photo et biographie, sont présentés dans des cartes.
 *
 * Auteur du Projet:
 * - [Larzul Julien]
 *
 * Historique:
 * - Date de création: [26/10/2023]
 * - Dernière mise à jour: [22/11/2023]
 *
 * Description:
 * - Cette page présente les acteurs présent dans le film
 * - Chaque carte contient des informations sur un acteur spécifique.
 * - Chaque carte contient une photo de profil des acteurs.
 *
 * Remarque:
 * - On n'utilise pas la page car nous avons aucune informations sur les acteurs des films dans la base de donnée
 *
 */

import React from "react";
import "../styles/Actors.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import ImageOmar from "../assets/omarSy.png";
import ImageToledano from "../assets/toledano.png";
import ImageNakache from "../assets/nakache.png";
import ImageCluzet from "../assets/cluzet.png";
import ImageFleurot from "../assets/fleurot.png";
import ImageDeMeaux from "../assets/deMeaux.png";

function Actors() {
  return (
    <div>
      <div className="flex-container1">
        <div className="item1">
          <div id="description">
            <h3>ACTORS</h3>
          </div>
          <div id="titleFilm">
            <h2>Casting du film Intouchable</h2>
          </div>
          <div id="minus">
            <FontAwesomeIcon
              icon={faMinus}
              size="2xl"
              style={{ color: "#d29d00" }}
            />
          </div>
        </div>
      </div>
      <div className="flex-container2 ">
        <div className="card item auto">
          <div className="card-image">
            <img src={ImageOmar} alt="Omar Sy PP" />
          </div>
          <p className="card-title">Omar Sy</p>
          <p className="card-body">
            Omar Sy est un acteur, producteur de cinéma, réalisateur, scénariste
            et humoriste français, né le 20 janvier 1978 à Trappes. Il accède à
            la notoriété en formant, avec Fred Testot, le duo comique Omar et
            Fred.
          </p>
        </div>
        <div className="card item auto">
          <div className="card-image">
            <img src={ImageNakache} alt="Nakache PP" />
          </div>
          <p className="card-title">Olivier Nakache</p>
          <p className="card-body">
            Olivier Nakache, né le 14 avril 1973 à Suresnes, est un réalisateur,
            scénariste et producteur français. Il travaille en binôme avec Éric
            Toledano. Il est le frère de l'actrice et réalisatrice Géraldine
            Nakache.
          </p>
        </div>
        <div className="card item auto">
          <div className="card-image">
            <img src={ImageToledano} alt="Toledano PP" />
          </div>
          <p className="card-title">Éric Toledano</p>
          <p className="card-body">
            Éric Toledano est un réalisateur, scénariste et dialoguiste français
            né le 3 juillet 1971 à Paris. Il travaille en binôme avec Olivier
            Nakache à la fois pour l'écriture et la réalisation.
          </p>
        </div>
      </div>
      <div className="flex-container3">
        <div className="card item auto">
          <div className="card-image">
            <img src={ImageCluzet} alt="Cluzet PP" />
          </div>
          <p className="card-title">François Cluzet</p>
          <p className="card-body">
            François Cluzet est un acteur français, né le 21 septembre 1955 dans
            le 9ᵉ arrondissement de Paris.
          </p>
        </div>
        <div className="card item auto">
          <div className="card-image">
            <img src={ImageFleurot} alt="Fleurot PP" />
          </div>
          <p className="card-title">Audrey Fleurot</p>
          <p className="card-body">
            Audrey Fleurot est une actrice française, née le 6 juillet 1977 à
            Mantes-la-Jolie. Elle se fait connaître, auprès du grand public, par
            le rôle de la Dame du lac dans Kaamelott. Elle enchaîne avec ceux de
            Josephine Karlsson dans Engrenages et de Hortense Larcher dans Un
            village français.
          </p>
        </div>
        <div className="card item auto">
          <div className="card-image">
            <img src={ImageDeMeaux} alt="deMeaux PP" />
          </div>
          <p className="card-title">Joséphine de Meaux</p>
          <p className="card-body">
            Joséphine de Meaux, née le 23 janvier 1977 à Boulogne-Billancourt,
            est une actrice française.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Actors;
