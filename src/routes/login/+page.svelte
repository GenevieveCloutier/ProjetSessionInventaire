
<script >
  import EnteteVide from '../../components/enteteVide.svelte';

  </script>
  
  
  <EnteteVide/>
  <div class="login-container">
    <div class="login-box">
      <h2>Connexion</h2>
      <form method="POST" action="?/login">

        <div class="input-group">
          <label for="email" >Courriel associé au compte</label>
          <input type="text" name="email" id="email" required>

        </div>
        <div class="input-group">
          <label for="password">Mot de passe</label>
          <input type="password" name="password" id="password" required>
        </div>
<!-- 
        {#if form?.invalid}
            <p class="error">Le nom d'utilisateur et le mot de passe sont requis</p>
        {/if}

        {#if form?.credentials}
          <p class="error">L'utilisateur et/ou le mot de passe ne sont pas valides</p>
        {/if} -->


        <button type="submit" class="login-btn">Se connecter</button>
      </form>
      <a href="/mot-de-passe-oublie" class="forgot-password">Mot de passe oublié</a>
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
  

