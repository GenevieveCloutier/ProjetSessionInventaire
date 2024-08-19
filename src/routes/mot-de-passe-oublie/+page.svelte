<script>
    let username = '';
    let email = '';
    let message = '';
    let formSubmitted = false;
  
    function handleSubmit() {
      // Simuler l'envoi de l'email avec un nouveau mot de passe
      formSubmitted = true;
      message = `Nous vous avons envoyé un courriel à ${email} avec un nouveau mot de passe.`;
    }
  </script>
  
  <style>
    .mot-de-passe-oublie-container {
        display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-image: url('/images/fond.png');
      background-size: cover;
      background-position: center;
    }
  
    .mot-de-passe-oublie-box {
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
  
    .message {
      margin-top: 1rem;
      color: green;
    }
  </style>
  
  <div class="mot-de-passe-oublie-container">
    <div class="mot-de-passe-oublie-box">
      <h2>Mot de passe oublié</h2>
      <form on:submit|preventDefault={handleSubmit}>
        <div class="input-group">
          <label for="username">Nom d'utilisateur</label>
          <input type="text" id="username" bind:value={username} required>
        </div>
        <div class="input-group">
          <label for="email">Courriel</label>
          <input type="email" id="email" bind:value={email} required>
        </div>
        <button type="submit" class="submit-btn">Envoyer</button>
      </form>
      {#if formSubmitted}
        <div class="message">{message}</div>
      {/if}
    </div>
  </div>