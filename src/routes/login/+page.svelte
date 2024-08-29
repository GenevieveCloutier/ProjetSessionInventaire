<script>
    import '/src/app.css';
    import EnteteVide from '../../components/enteteVide.svelte';

    //ne fonctionne pas, retourne undefined, donc le message d'erreur ne s'affiche pas...
    export let error;
  </script>
  
  <EnteteVide/>
  <div class="login-container">
    <div class="login-box">
      <h2>Connexion</h2>

  
      {#if error === 'compte_supprime'}
        <p>Votre compte a été supprimé. Contactez l'administrateur pour plus d'informations.</p>
      {/if}

      <form method="post" action="?/login">
        
        <div class="input-group">
          <label for="nom">Courriel</label>
          <input type="email" name="email" id="email" required>
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" required>
        </div>
        <button type="submit" class="login-btn">Se connecter</button>
      </form>
      <a href="/motdepasseoublie" class="forgot-password">Mot de passe oublié</a>
    </div>
  </div>

  <style>
  
    
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
