/* eric/meet-jquery
*
* /src/js/script.js - script js of the page
*
* code by email...
* started at 13/02/2017
*
*/
const rEmailValidation = /([\w\.]+)@((?:[\w]+\.)+)([a-z]{2,})/i;
let $tabs, $TrombinoFigures, $commentForm, $emailInput, $nameInput, $commentTextarea;

const fChangeTab = function ( oEvent ) {
    oEvent.preventDefault();
    $tabs.parent().filter( ".active").removeClass( "active" );
    $( this ).parent().addClass( "active" );
    $( ".tab-content .tab-pane.active" ).removeClass( " ctive" );
    $( `#${ $( this ).data( "tab-target" )}` ).addClass( "active" );
}

const fHandleTrombino = function () {
    $TrombinoFigures.filter(":visible").fadeOut(function () {
        let $next = $(this).next();

        if ($next.length === 0) {
            $next = $TrombinoFigures.first()
        }
        $next.fadeIn();
    });
}

const fHandleFormValidation = function (oEvent) {
    let bHasErrors = false,
    sEmail, sName, sComment;
    //1 check email
    sEmail = ($emailInput.val() || "").trim();
    if (!rEmailValidation.test(sEmail)) {
        console.error("email is not valid");
        bHasErrors = true;
    }else {
        console.info("email is valide");
    }
    //2 check name
    sName = ($nameInput.val() || "").trim();
    if (sName.length <4){
        console.error("name isn't valide");
        bHasErrors = true;
    }else {
        console.info("name is valide");
    }
    //3 check comment
    sComment = ($commentTextarea.val() || "").trim();
    if (sComment.length < 10 || sComment.length > 140){
        console.error("comment isn't valide");
        bHasErrors = true;
    }else {
        console.info("comment is valide");
    }


    if (bHasErrors) {
        window.alert('Veuillez remplir le formulaire correctement');
        return false; // évenement ne continue pas.
    }
    return true;
}
//called when dom is loaded
$( function () {

    // 1. link with rel=external
    $( 'a[rel="external"]').attr( "target", "_new" );

    // 2. tab
    // $tabs = $( "ul.nav.nav-tabs a" );
    // $tabs.on( "click", fChangeTab );
    $tabs = $( 'ul.nav.nav-tabs a').on( "click", fChangeTab );

    // 3. trombinoscope
    $TrombinoFigures = $("#trombino figure");
    $TrombinoFigures.hide().first().show();
    setInterval(fHandleTrombino, 1000);


    // 4. Handle formulaire validation
    $commentForm = $("form");
    $emailInput = $("#inputEmail");
    $nameInput = $("#inputName");
    $commentTextarea = $("#inputComment");

    $commentForm.on("submit", fHandleFormValidation)






















})
