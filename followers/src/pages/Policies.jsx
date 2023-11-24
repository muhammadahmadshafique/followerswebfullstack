import React from "react";
import { Link } from "react-router-dom";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

function Condition() {
  return (
    <div>
      <div className="flex gap-y-8 px-12 flex-col md:flex-row justify-center md:justify-between items-center pt-[25px]">
        <div>
          <Link to="/">
            <img src="/Logo.png" alt="" srcset="" />
          </Link>
        </div>
        <div className="n1 gap-x-[40px]">
          <a href="#contact">
            {" "}
            <p className="font-fcl">Contact</p>
          </a>

          <Link to="/Buyfollowers">
            <button className="navbutton whitespace-nowrap text-white font-fcl text-[13px] md:text-[16px]">
              Nos prestations
            </button>
          </Link>
        </div>
      </div>
      
      <div className="max-w-2xl p-12 mx-auto my-8 p-4 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-4">Politique de Confidentialité</h1>
      
      <p className="mb-4">
        Followerstudio s'engage à protéger votre vie privée et à garantir la sécurité de vos informations personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations. En utilisant notre site web <a href="https://followerstudio.fr/" className="text-blue-500" target="_blank" rel="noopener noreferrer">Followerstudio</a>, vous acceptez les termes de cette politique de confidentialité.
      </p>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Collecte d'Informations Personnelles</h2>
        <ol className="list-decimal pl-4">
          <li>Informations d'identification personnelle telles que votre nom, adresse e-mail, numéro de téléphone, etc., lorsque vous nous fournissez ces informations volontairement, par exemple lors de l'inscription à notre newsletter ou lors de la création d'un compte sur le Site.</li>
          <li>Informations de navigation telles que l'adresse IP, le type de navigateur, la version du navigateur, les pages que vous consultez sur notre Site, les horaires d'accès et d'autres données de navigation.</li>
          <li>Cookies et technologies similaires : Nous utilisons des cookies et d'autres technologies de suivi pour collecter des informations sur votre utilisation de notre Site. Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter votre expérience de navigation sur notre Site.</li>
        </ol>
      </div>

      {/* Repeat the above structure for each section (Utilisation des Informations, Partage des Informations, etc.) */}
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Utilisation des Informations</h2>
        <ol className="list-decimal pl-4">
          <li>Fournir et personnaliser nos services.</li>
          <li>Communiquer avec vous, notamment pour répondre à vos questions, traiter vos demandes et vous envoyer des informations sur nos produits et services.</li>
          <li>Améliorer et optimiser notre Site, y compris l'analyse de l'utilisation du Site, la gestion de la sécurité et la prévention de la fraude.</li>
        </ol>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Partage des Informations</h2>
        <ol className="list-decimal pl-4">
          <li>Fournisseurs de services tiers : Nous pouvons partager vos informations avec des prestataires de services tiers qui nous aident à gérer et à améliorer notre Site.</li>
          <li>Respect des obligations légales : Nous pouvons divulguer vos informations personnelles si cela est nécessaire pour se conformer à une obligation légale ou pour protéger nos droits, notre vie privée, notre sécurité ou notre propriété.</li>
        </ol>
      </div>

      {/* Repeat the above structure for each section (Sécurité des Informations, Vos Choix, etc.) */}
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Sécurité des Informations</h2>
        <p>
          Nous prenons des mesures raisonnables pour protéger vos informations personnelles contre la perte, le vol, l'accès non autorisé, la divulgation, la modification ou la destruction. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Vos Choix</h2>
        <p>
          Vous avez le droit de demander l'accès, la rectification ou la suppression de vos informations personnelles que nous détenons. Vous pouvez également choisir de ne plus recevoir nos communications marketing en nous contactant à <a href="mailto:contact@followerstudio.fr" className="text-blue-500">contact@followerstudio.fr</a>.
        </p>
      </div>

      {/* Repeat the above structure for each section (Modification de la Politique de Confidentialité, Coordonnées, etc.) */}
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Modification de la Politique de Confidentialité</h2>
        <p>
          Nous pouvons mettre à jour cette politique de confidentialité de temps à autre pour refléter les modifications de nos pratiques en matière d'information. La version la plus récente de la politique de confidentialité sera toujours disponible sur notre Site.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Coordonnées</h2>
        <p>
          Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité, veuillez nous contacter à <a href="mailto:contact@followerstudio.fr" className="text-blue-500">contact@followerstudio.fr</a>.
        </p>
      </div>

    </div>
     <Footer/>
    </div>
  );
}

export default Condition;
