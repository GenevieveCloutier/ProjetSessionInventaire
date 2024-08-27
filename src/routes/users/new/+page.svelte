
<script>
    import Entete from '../../../components/entete.svelte';
  
    let nom = '';
    let prenom = '';
    let email = '';
    let telephone = '';
    let password = '';
    let role = '';
  
    function handleSubmit() {
      console.log('Nom:', nom);
      console.log('Prénom:', prenom);
      console.log('Email:', email);
      console.log('Téléphone:', telephone);
      console.log('Mot de passe:', password);
      console.log('Rôle:', role);
    }

  </script>
  

  
  <Entete />

  <div class="form-container">
    <div class="form-box">
      <h2>Créer un nouvel utilisateur</h2>
      <form on:submit|preventDefault={handleSubmit}>
        <div class="input-group">
          <label for="nom">Nom</label>
          <input type="text" id="nom" bind:value={nom} required>
        </div>
        <div class="input-group">
          <label for="prenom">Prénom</label>
          <input type="text" id="prenom" bind:value={prenom} required>
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" bind:value={email} required>
        </div>
        <div class="input-group">
          <label for="telephone">Téléphone</label>
          <input type="tel" id="telephone" bind:value={telephone} required>
        </div>
        <div class="input-group">
          <label for="password">Mot de passe</label>
          <input type="password" id="password" bind:value={password} required>
        </div>
        <div class="role-group">
          <label>Rôle</label>
          <label><input type="radio" name="role" value="Employé" bind:group={role} required> Employé</label>
          <label><input type="radio" name="role" value="Administrateur" bind:group={role} required> Administrateur</label>
          <label><input type="radio" name="role" value="Chef d'équipe" bind:group={role} required> Chef d'équipe</label>
        </div>
        <button type="submit" class="submit-btn">Envoyer</button>
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
      background-image: url('/images/fond.png');
      background-size: cover;
      background-position: center;
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