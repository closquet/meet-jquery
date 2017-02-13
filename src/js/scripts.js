/* eric/katbiznis
*
* /gulpfile.js - gulp tasks
*
* code by email...
* started at 13/02/2017
*
*/

window.addEventListener( "load", function () {
    // 1. select a with rel=external attributes
    Array.from(document.querySelectorAll( 'a[rel*="external"]')).forEach( function ( $elt ) {
        // $elt.addEventListener( "click", function (oEvent) {
        //     oEvent.preventDefault();
        //     window.open( oEvent.currentTarget.getAttribute( "href" ) );
        // } )
        $elt.setAttribute( "target", "_new" );
    } );

});
