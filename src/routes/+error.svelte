
<script>
	import { page } from '$app/stores';
    import '/src/app.css';
</script>

<div class="boite-1">
    <h1>{$page.error.message}</h1>
<p>OUPS! Une erreur s'est produit!</p>
</div>
<br><br>
<div class="retour">
    <a href = "/">RETOUR À LA PAGE D'ACCUEIL</a></div>
<div class="logoNoir">
    <img src="/src/images/logoNoir.png" alt="Logo">
</div>