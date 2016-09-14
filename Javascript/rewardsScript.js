/**
 * Created by aliceeaster on 9/13/16.
 */
/*The following lines pertaining to dropdown content was borrowed from 'http://www.w3schools.com/howto/howto_js_dropdown.asp' then modified*/
/* When the user clicks on the button,
 toggle between hiding and showing the dropdown content */
function dropFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

function submitFunction() {
    var username = String(document.loginForm.emailBox.value);
    var password = String(document.loginForm.passBox.value);

    if (username === 'alice' && password === 'easter') {

    }
}