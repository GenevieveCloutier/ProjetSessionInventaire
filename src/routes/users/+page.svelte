<script>
    import '/src/app.css';
    export let data;
    import Entete from '../../components/entete.svelte';

    const users = data.users;

    //let pasDeDonnees = document.querySelector('#pasDeDonnees');
    //.hidden = true;
    //let pasDeDonnees = true;
    if(users.length === 0){
        console.log("rien à afficher")
        //{pasDeDonnees}
        //pasDeDonnees.hidden = false;
    }

</script>

<Entete/>
<div class="boite-1">
    <h1>Utilisateurs</h1>
    <p>Aucun utilisateur à afficher</p>
{#each users as user}

    <h2>Utilisateur : {user.id}</h2>
    <p>{user.nom}</p>
    <p>{user.prenom}</p>
    <p>Role : {user.role.nom}</p>
    <p>Description role : {user.role.description}</p>
    <p>Password : {user.password}</p>
    <a href="./users/{user.id}">Lien</a>

{/each}
</div>