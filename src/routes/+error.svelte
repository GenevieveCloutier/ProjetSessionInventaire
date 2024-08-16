
<script>
	import { page } from '$app/stores';
    import '/src/app.css';
</script>

<div class="boite-1">
    <h1>{$page.error.message}</h1>
<p>page temporaire et bouton temporaire pour gérer les erreurs au lieu de planter le serveur si il n'y pas de
     données à afficher</p>
     <a href = "/"><button>Retour à l'accueil</button></a>
</div>