/* eric/meet-jquery
*
* /src/js/script.js - script js of the page
*
* code by email...
* started at 13/02/2017
*
*/

let $tabs;

const fChangeTab = function ( oEvent ) {
    oEvent.preventDefault();
    $tabs.parent().filter( ".active").removeClass( "active" );
    $( this ).parent().addClass( "active" );
    $( ".tab-content .tab-pane.active" ).removeClass( " ctive" );
    $( `#${ $( this ).data( "tab-target" )}` ).addClass( "active" );
}

//called when dom is loaded
$( function () {

    // 1. link with rel=external
    $( 'a[rel="external"]').attr( "target", "_new" );

    // 2. tab
    // $tabs = $( "ul.nav.nav-tabs a" );
    // $tabs.on( "click", fChangeTab );
    $tabs = $( 'ul.nav.nav-tabs a').on( "click", fChangeTab );



    //part1








})
