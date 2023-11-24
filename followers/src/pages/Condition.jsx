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
     
      (
    <div className="max-w-2xl mx-auto my-8 p-4 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-4">Conditions d'achat</h1>
      
      <p className="mb-4">
        Bienvenue sur Followerstuido. En effectuant un achat sur ce Site, vous acceptez les conditions d'achat suivantes :
      </p>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">1. Commandes et Paiement</h2>
        <ul className="list-disc pl-4">
          <li>En passant une commande sur notre Site, vous confirmez que vous avez lu et accepté nos conditions d'achat.</li>
          <li>Le paiement peut être effectué en utilisant les méthodes de paiement acceptées telles que carte de crédit et les crypto monnaies.</li>
          <li>Votre commande ne sera traitée qu'après réception du paiement.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">2. Prix et Taxes</h2>
        <ul className="list-disc pl-4">
          <li>Les prix des produits ou services sont indiqués en €. Toutes les taxes applicables sont incluses dans le prix final, sauf indication contraire.</li>
          <li>Followerstudio se réserve le droit de modifier les prix à tout moment. Les modifications de prix n'affecteront pas les commandes déjà passées.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">3. Livraison</h2>
        <ul className="list-disc pl-4">
          <li>Les informations sur les délais de livraison sont fournies lors de la commande.</li>
          <li>Followerstudio ne peut être tenu responsable des retards de livraison causés par des circonstances indépendantes de notre volonté.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">4. Annulations et Remboursements</h2>
        <ul className="list-disc pl-4">
          <li>Les demandes d'annulation doivent être soumises avant l'expédition de la commande. Les remboursements seront traités conformément à notre politique de remboursement.</li>
          <li>Les produits personnalisés ou numériques peuvent ne pas être remboursables.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">5. Garanties</h2>
        <ul className="list-disc pl-4">
          <li>Les garanties applicables aux produits sont spécifiées sur les pages de description des produits.</li>
          <li>Followerstudio n'assume aucune responsabilité pour les dommages causés par une utilisation inappropriée ou abusive des produits.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">6. Propriété intellectuelle</h2>
        <ul className="list-disc pl-4">
          <li>Tous les droits de propriété intellectuelle liés aux produits ou services, y compris les droits d'auteur et les marques commerciales, restent la propriété de Followerstudio ou de ses fournisseurs.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">7. Confidentialité</h2>
        <ul className="list-disc pl-4">
          <li>Vos informations personnelles seront traitées conformément à notre politique de confidentialité.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">8. Modification des Conditions</h2>
        <ul className="list-disc pl-4">
          <li>Followerstudio se réserve le droit de modifier ces conditions d'achat à tout moment. Les modifications seront publiées sur le Site.</li>
        </ul>
      </div>

      <p className="mt-8">
        Si vous avez des questions concernant nos conditions d'achat, veuillez nous contacter à <a href="mailto:contact@followerstudio.fr" className="text-blue-500">contact@followerstudio.fr</a>.
      </p>

      <p className="mt-4">
        Merci de votre confiance et de votre intérêt pour Followerstudio.
      </p>
    </div>
  
     <Footer/>
    </div>
  );
}

export default Condition;
