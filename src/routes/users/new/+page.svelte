
<script>
  import BoutonSoumettre from '../../../components/boutonSoumettre.svelte';
  import Entete from "../../../components/entete.svelte";

</script>

<Entete/>
 
<div class="form-container">
  <div class="form-box">
    <h2>Créer un nouvel utilisateur</h2>
    <form method="POST" action="?/new">
      <div class="input-group">
        <label for="nom">Nom</label>
        <input type="text" name="nom" id="nom" required>
      </div>

      <div class="input-group">
        <label for="prenom">Prénom</label>
        <input type="text" name="prenom" id="prenom" required>
      </div>

      <div class="input-group">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required>
      </div>

      <div class="input-group">
        <label for="telephone">Téléphone</label>
        <input type="tel" name="telephone" id="telephone" required>
      </div>

      <div class="input-group">
        <label for="password">Mot de passe</label>
        <input type="password" name="password" id="password" required>
      </div>

      <div class="input-group">
        <label for="role">Rôle</label>
        <select name="role" id="role" required>
          <option value="">Veuillez sélectionner</option>
          <option value=2>Employé</option>
          <option value=3>Chef d'équipe</option>
          <option value=1>Administrateur</option>
        </select>
      </div>
      <input type="hidden" name="statut_user" id="statut_user" value="actif" required readonly>
      <div class="centrer">
        <BoutonSoumettre texte={"Envoyer"}/>
        <a href = "/users" ><button>Annuler</button></a>
    </div>
    </form>
  </div>
</div>

<style>
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .form-box {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 300px;
  }

  h2 {
    margin-bottom: 1.5rem;
  }

  .input-group {
    margin-bottom: 1rem;
    text-align: left;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input, select {
    width: 100%;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  button {
      padding: 0.75rem;
      border: none;
      border-radius: 4px;
      background-color: gray;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      text-align: center;
    }
  
    button:hover {
      background-color: #695C4B;
    }

    .centrer{
        text-align: center;
    }
  .submit-btn {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 4px;
    background-color: #695C4B;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }

  .submit-btn:hover {
    background-color: #695C4B;
  }

  .role-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .role-group input {
    margin-right: 0.5rem;
  }
</style>

