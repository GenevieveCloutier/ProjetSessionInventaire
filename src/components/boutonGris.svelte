<script>
    export let texte;
    export let lien;
    export let fonction;
</script>

<a href={lien}><button on:click={fonction}> {texte} </button></a>

<style>
    button{
        background-color: gray;
        color: black;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size:medium;
        border-color: black;
        border-radius: 5px;
        margin: 5px;
        padding: 5px;
        color: white;
        padding: 10px;
        cursor: pointer;
    }
</style>