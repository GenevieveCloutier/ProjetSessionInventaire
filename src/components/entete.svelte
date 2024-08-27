<script>
    import { page } from "$app/stores";
    import { onMount } from 'svelte';
    import { goto} from "$app/navigation"; //importer goto
    import { redirect } from "@sveltejs/kit";

    $:routeId = $page.route.id;
    $:userId = $page.data.user ? $page.data.user.id : null;

    onMount(() => {
    if ($page.data.user.role_id == 1 || $page.data.user.role_id == 3 ){
        portailAdmin.hidden = false
    }
    else{
        portailAdmin.hidden = true;
    }
});
   
  </script>
  
  <body data-sveltekit-preload-data="hover">
      <nav id="navbar">
          <a href = "/"> <img src="/src/images/logoBlanc2.png" class="imageEntete" alt="Logo"></a>
          <div class="dropdown">
            <a href = "/items" class:active = {routeId == '/items'} class="catalogue" >Catalogue</a>
            <div class="dropdown-content">
                <a href="/items/outilsElectriques" class:active= {routeId == '/items/outilsElectriques'}>OUTILS ÉLECTRIQUES</a>
                <a href="/items/outilsPneumatiques" class:active= {routeId == '/items/outilsPneumatiques'}>OUTILS PNEUMATIQUES</a>
                <a href="/items/outilsManuels" class:active= {routeId == '/items/outilsManuels'}>OUTILS MANUELS</a>
                <a href="/items/divers" class:active= {routeId == '/items/divers'}>DIVERS</a>
            </div>
            </div>
                <a href={userId ? `/users/${userId}` : '/login'} class:active={routeId.startsWith(`/users`)}>Mon compte</a>
                <a href = "/admin" class:active = {routeId == '/admin'} class="admin" id="portailAdmin" hidden >Portail administrateur</a>
            
          <form class="logout" method="POST" action="/logout">
            <input type="hidden" name="action" value="logout">
            <button type="submit" class="deconnexion">Déconnexion</button>
        </form> 
       </nav>
   </body>
  <style>
  
  #navbar { 
      margin-top:50px;
      background-color: black;
      height: 100px;
      display: flex;
      align-items: center;
      position: relative;
  }
  
  .imageEntete{
      width: 100px;
      }
  
  a{
      color: white;
      text-decoration: none;
      font-size: 18px;
      font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0 50px;
  }
  .catalogue{
      position: relative;
      display: inline-block;
      cursor: pointer;
  }
  
  /* .compte {
    position: relative;
    display: inline-block;

  } */

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #695C4B;
        min-width: 70px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        top: 70%;
        left: 12%;
    } 
    .dropdown-content a {
        color: black;
        padding: 1px 1px;
        text-decoration: none;
        display: block;
    }
    .dropdown-content a:hover {
        background-color: white;
        display:block;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }
    .dropdown:hover .catalogue {
        background-color: gray;
    }

  
  .deconnexion {
      position: absolute;
      top: 50%;
      left: 90%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      cursor: pointer;
      font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      border: none;
      border-radius: 5px;;
      outline: none;
      padding: 10px 16px;
      background-color: gray;
      color: white;
      font-size: 18px;
  }
    .active {
      cursor: pointer;
      font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      border: none;
      border-radius: 5px;;
      outline: none;
      padding: 10px 16px;
      background-color: gray;
      color: white;
      font-size: 18px;
    }
    
  </style>
  