/**
 * ==============================
 * Your Javascript Code Goes Here
 * ==============================
 **/

$_ready(() => {
    $_('button[data-action="exit"]').click((e) => {
        window.close();
    });
});