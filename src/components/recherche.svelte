<script>

export const actions = {
    recherche: async ({ cookies, request}) => {
        const data = await request.formData();
        console.log(data.get("recherche"))
    }
}

</script>
<div class=centrer>
    <form method="GET" action="?/recherche">
        <img class="icone" src="src/images/lignes.png" alt="icone menu">
        <input type="text" name="resultatRecherche" placeholder="rechercher dans le catalogue">
        <button type="submit"><img class="icone" src="src/images/loupe.png" alt="icone loupe"></button>
    </form>
</div>

<style>
    .centrer{
        display:block;
        width: 350px;
        background-color: rgba(0, 0, 0, 0.436);
        float: right;
        margin-right: 20px;
        color: white;
        padding: 10px;
    }

    .icone{
        width:20px;
    }

    button{
        background: none;
        border:none;
        float: right;
        cursor:pointer;
    }

    form{
        padding:none;
        margin:none;
    }
    input{
        width: 250px;
        background-color: rgba(0, 0, 0, 0.00);
        border: none;
        margin-left:20px;
        color:white;
        font-size:15px;
        
    }
    input:focus::placeholder {
        color: transparent;
    }

    ::placeholder{
        color: white;
        font-size:15px;
    }
</style>