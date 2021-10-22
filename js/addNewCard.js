export const addNewCard = ( gallery ) => {
    
    const cardBody = document.createElement( "section" );
   // const cardHeaderImage = document.createElement( "img" );
    const divCard = document.createElement( "div" );
    const divCardHeader = document.createElement( "div" );
    const divCardHeaderLeft = document.createElement( "div" );
    const divElipse = document.createElement( "div" );
    const pAgentTopic = document.createElement( "p" );
    const divCardHeaderRigth = document.createElement( "div" );
    const pSas = document.createElement( "p" );
    const imageCard = document.createElement( "img" );
    const divMain = document.createElement( "div" );
    const pDescription = document.createElement( "p" );
    const divFooter = document.createElement( "div" );
    const pUpdate = document.createElement( "p" );
    const pDate = document.createElement( "p" );
//clases
    cardBody.classList.add( "cards-container" )
    divCard.classList.add( "card" );
    divCardHeader.classList.add( "card__header card-red" );
    divCardHeaderLeft.classList.add( "card-header__left" );
    divCardHeaderRigth.classList.add( "card-header__right" );
    divMain.classList.add( "card__main" );
    divFooter.classList.add( "card__footer" );



    imageCard.scr="./assets/img/Vector.svg";



    const textAgent = document.createTextNode( "Agenda/Topic" );
    const textElipse = document.createTextNode( "1" );
    const textSaas = document.createTextNode( "SAAS-0000" );
    const textDescrip = document.createTextNode( "Description of what is done here" );
    const textUpdate = document.createTextNode( "Last Update" );
    const textDate = document.createTextNode( "3/8/2020" );

   
    pAgentTopic.appendChild( textAgent );
    pSas.appendChild( textSaas );
    pDescription.appendChild( textDescrip );
    pDescription.appendChild( textDate );
    pUpdate.appendChild( textUpdate );
    pDate.appendChild( textDate );
    divElipse.appendChild(textElipse);
    
    gallery.appendChild( cardBody );
};