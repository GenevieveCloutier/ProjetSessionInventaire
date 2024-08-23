<script>
    import '/src/app.css';
    import Entete from '../../components/entete.svelte';
    import { onMount } from 'svelte';
    import BoutonBrun from '../../components/boutonBrun.svelte';

    export let data;
    const users = data.users;

    //pour afficher une page disant "Pas d'utilisateur trouvé au lieu de la page erreur si la BD n'a pas d'utilisateur "
    onMount(() => {
    let pasDonnees = document.querySelector("#pasDonnees");
    let ajoutUser = document.querySelector("#ajoutUser")
    if(users.length === 0){
        pasDonnees.innerHTML = "Aucun utilisateur trouvé!"
    }
    else{
        pasDonnees.hidden = true;
        ajoutUser.hidden = true;
    }
});

</script>

<Entete />
<div class="boite-1">
    <h1>Utilisateurs</h1>
    <!-- si pas d'utilisateur, afficher ceci: -->
    <p id="pasDonnees"></p>
    <p id="ajoutUser"><BoutonBrun lien={"/users/new"} texte={"Ajouter un utilisateur"}/></p>
{#each users as user}

    <!-- sinon afficher ceci -->
    <!-- la mise en forme des données est à faire, qui s'en occupe? -->
    <h2>Utilisateur : {user.id}</h2>
    <p>{user.nom}</p>
    <p>{user.prenom}</p>
    <p>Role : {user.role.nom}</p>
    <p>Description role : {user.role.description}</p>
    <p>Password : {user.password}</p>
    <a href="./users/{user.id}">Lien</a>

{/each}
</div>