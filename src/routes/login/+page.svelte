<script>
    import '/src/app.css';
</script>

<h1>Login</h1>

<form method="POST" action="?/login">

    <label for="Utilisateur">Utilisateur</label>
    <input type="text" name="nom" id="nom">
<!--

    <label for="prenom">Prenom</label>
    <input type="text" name="prenom" id="prenom">
-->
    <label for="password">Mot de passe</label>
    <input type="password" name="password" id="password">

    <input type="submit" value="Login">

</form>