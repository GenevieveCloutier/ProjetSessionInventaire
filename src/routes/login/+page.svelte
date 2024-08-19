<!--<script>
    import '/src/app.css';
</script>

<h1>Login</h1>

<form method="POST" action="?/login">

    <label for="Utilisateur">Utilisateur</label>
    <input type="text" name="nom" id="nom">
<!-

    <label for="prenom">Prenom</label>
    <input type="text" name="prenom" id="prenom">
->
    <label for="password">Mot de passe</label>
    <input type="password" name="password" id="password">

    <input type="submit" value="Login">

    
</form>
-->
<script>
  import Entete from '../../components/entete.svelte';

    let username = '';
    let password = '';
  
    function handleLogin() {
      // Ajoute ici la logique de connexion
      console.log('Utilisateur:', username);
      console.log('Mot de passe:', password);
    }
  </script>
  
  <style>
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }
  
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-image: url('/images/fond.png');
      background-size: cover;
      background-position: center;
    }
  
    .login-box {
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
  
    input {
      width: 100%;
      padding: 0.5rem;
      border-radius: 4px;
      border: 1px solid #ccc;
    }
  
    .login-btn {
      width: 100%;
      padding: 0.75rem;
      border: none;
      border-radius: 4px;
      background-color: #695C4B;
      color: white;
      font-size: 1rem;
      cursor: pointer;
    }
  
    .login-btn:hover {
      background-color: #695C4B;
    }
  
    .forgot-password {
      display: block;
      margin-top: 1rem;
      color: #007BFF;
      text-decoration: none;
    }
  
    .forgot-password:hover {
      text-decoration: underline;
    }
  </style>
  
  <Entete/>
  <div class="login-container">
    <div class="login-box">
      <h2>Connexion</h2>
      <form on:submit|preventDefault={handleLogin}>
        <div class="input-group">
          <label for="username">Utilisateur</label>
          <input type="text" id="username" bind:value={username} required>
        </div>
        <div class="input-group">
          <label for="password">Mot de passe</label>
          <input type="password" id="password" bind:value={password} required>
        </div>
        <button type="submit" class="login-btn">Se connecter</button>
      </form>
      <a href="/mot-de-passe-oublie" class="forgot-password">Mot de passe oublié</a>
    </div>
  </div>