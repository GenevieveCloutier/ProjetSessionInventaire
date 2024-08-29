
<script>
	import { page } from '$app/stores';
    import BoutonBrun from '../components/boutonBrun.svelte';
    import '/src/app.css';
</script>

<div class="boite-3">
        <div id=status><h1>{$page.status}</h1></div>
        <p>OUPS!</p> 
        <p>{$page.error.message}</p>
        <BoutonBrun lien={'/'} texte={"Retour"} />
</div>
<br><br>

<div class="logoNoir">
    <img src="/src/images/logoNoir.png" alt="Logo">
</div>