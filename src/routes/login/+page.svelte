<script>
    import '/src/app.css';
    import EnteteVide from '../../components/enteteVide.svelte';

  

  let username = '';
  let password = '';
</script>


<EnteteVide/>
<div class="login-container">
  <div class="login-box">
    <h2>Connexion</h2>
    <form method="post">
      <input type="hidden" name="action" value="login"> <!--ajouter test-->
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

