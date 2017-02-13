/* eric/meet-jquery
*
* /gulpfile.js - gulp tasks
*
* code by email...
* started at 13/02/2017
*
*/

const fHandleTabClick = function (oEvent) {
    oEvent.preventDefault();
    console.log("yop");
    const $target = oEvent.currentTarget;
    if ($target.parentNode.classList.contains( "active" )) {
        return;
    }
    document.querySelector( "ul.nav-tabs li.active" ).classList.remove( "active" );
    $target.parentNode.classList.add( "active" );
    document.querySelector( ".tab-content .tab-pane.active" ).classList.remove( "active" );
    document.getElementById( $target.getAttribute( "data-tab-target" ) ).classList.add( "active" );
};

window.addEventListener( "load", function () {
    // 1. select a with rel=external attributes
    Array.from(document.querySelectorAll( 'a[rel*="external"]')).forEach( function ( $elt ) {
        // $elt.addEventListener( "click", function (oEvent) {
        //     oEvent.preventDefault();
        //     window.open( oEvent.currentTarget.getAttribute( "href" ) );
        // } )
        $elt.setAttribute( "target", "_new" );
    } );

    // 2. tab mecanism
    Array.from(document.querySelectorAll( 'ul.nav.nav-tabs a')).forEach( function ( $elt ) {
        $elt.addEventListener( "click", fHandleTabClick );
    })
});
