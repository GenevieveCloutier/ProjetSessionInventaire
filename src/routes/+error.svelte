
<script>
	import { page } from '$app/stores';
    import '/src/app.css';
</script>

<div class="boite-3">
        <div id=status><h1>{$page.status}</h1></div>
        <p>OUPS!</p> 
        <p>{$page.error.message}</p>
</div>
<br><br>
<div class="retour">
    <a href = "/">RETOUR À LA PAGE D'ACCUEIL</a></div>
<div class="logoNoir">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src="/src/images/logoNoir.png" alt="Logo image">
</div>