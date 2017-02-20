/* eric/meet-jquery
*
* /src/js/script.js - script js of the page
*
* code by email...
* started at 13/02/2017
*
*/
const rEmailValidation = /([\w\.]+)@((?:[\w]+\.)+)([a-z]{2,})/i;
let $Tabs, $TrombinoFigures, $CommentForm, $EmailInput, $NameInput, $CommentTextarea;

const fChangeTab = function ( oEvent ) {
    oEvent.preventDefault();
    $Tabs.parent().filter( ".active").removeClass( "active" );
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

const fCheckEmail = function () {
    let sEmail = ($EmailInput.val() || "").trim(),
        bIsValide = rEmailValidation.test(sEmail);
    $EmailInput.parents(".control-group").toggleClass("error", !bIsValide);
    return bIsValide;
}
const fCheckName = function () {
    let sName = ($NameInput.val() || "").trim(),
        bIsValide = (sName.length > 4);
    $NameInput.parents(".control-group").toggleClass("error", !bIsValide);
    return bIsValide;
}
const fCheckComment = function () {
    let sComment = ($CommentTextarea.val() || "").trim(),
        bIsValide = (sComment.length > 4 && sComment.length < 140);
    $CommentTextarea.parents(".control-group").toggleClass("error", !bIsValide);
    return bIsValide;
}

const fHandleFormValidation = function (oEvent) {
    let aChecks =[fCheckEmail(), fCheckName(), fCheckComment()],
        bAllIsOk;
    bAllIsOk = aChecks.reduce(function (bPrevious, bCurrent) {
        return bPrevious && bCurrent;
    }, true);
    if (bAllIsOk) {
        return true;
    }
    window.alert('Veuillez remplir correctement les champs du formulaire.');
    return false;
}

//called when dom is loaded
$( function () {

    // 1. link with rel=external
    $( 'a[rel="external"]').attr( "target", "_new" );

    // 2. tab
    // $Tabs = $( "ul.nav.nav-tabs a" );
    // $Tabs.on( "click", fChangeTab );
    $Tabs = $( 'ul.nav.nav-tabs a').on( "click", fChangeTab );

    // 3. trombinoscope
    $TrombinoFigures = $("#trombino figure");
    $TrombinoFigures.hide().first().show();
    setInterval(fHandleTrombino, 1000);


    // 4. Handle formulaire validation
    ($CommentForm = $("form")).on("submit", fHandleFormValidation);

    ($EmailInput = $("#inputEmail")).on("blur", fCheckEmail);

    ($NameInput = $("#inputName")).on("blur", fCheckName);

    ($CommentTextarea = $("#inputComment")).on("blur", fCheckComment);
























})
