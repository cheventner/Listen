# Listen

couleur fond 
#252b4d

couleur barre navigation 
#1b2039

couleur police et fond bouton
#3bc8e7



#connexion, header, #graphique, #analyse, span {
    padding: 10px;
  }
  
  html, body {
    height: 100%;
    margin: 0;
  }
  
  body {
    background-color: #252b4d;
    font-family: san-serif;
    font-size: 1.2em;
    color: #3bc8e7;
  }
  
  #gridcontainer{
    /*changed the height from 100% to auto as the layout breaks when the height of the content 'overflows'.*/
    height: auto;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: min-content auto min-content;
    background-color: #FFAFB0;
  }
  
  #connexion {
      border: solid green;
    grid-column: 1/2;
    grid-row: 2/3;
    background-color: #5EB7B7;
  }
  
  header {
      border: solid hotpink;
    grid-column: 1/3;
    grid-row: 1/2;
    background-color: #96D1C7;
  }
  
  /* #graphique {
    grid-column: 1/3;
    grid-row: 3/4;
    background-color: #96D1C7;
  } */
  
  #analyse {
      border:solid blue;
    grid-column: 2/3;
    grid-row: 2/3;
  /*   background-color: #FC7978; */
   
  }
  
  .#graphique {
      border:solid olive;
    display: flex; 
  }
  
  .image {
    display: inline-block;
    height: 1500px;
    margin: 1500px;
    background-color: #D6D5D5;
    flex-grow: 1;
    margin: 0 20px;
  }
  
  h1, h4, p {
    padding: 5px;
  }
  
   @media only screen and (max-width: 850px) {
  
     /*changes to code to arrange #connexion below #analyse. */
   #gridcontainer{
       display: flex;
       flex-direction: column;
     } 
     
     #connexion {
       order: 1
     }
     
     /* #graphique {
       order: 2;
     } */
     
     /*end of changes*/
     
     . {
      flex-direction: column;
    }
     
     .image {
       margin-bottom: 20px;
     }
  }