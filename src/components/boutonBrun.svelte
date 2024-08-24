<script>
    export let texte;
    export let lien;
    export let fonction = () => {};
</script>

<a href={lien}><button on:click={fonction}> {texte} </button></a>

<style>
    button{
        background-color: #695C4B;
        color: white;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size:medium;
        border-color: black;
        border-radius: 5px;
        margin: 5px;
        padding: 5px;
        cursor: pointer;
        padding: 10px;
    }
</style>