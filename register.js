function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    
    if (password != confirmPassword) {
        document.getElementById("confirm-password").setCustomValidity("Passwords do not match");
    } else {
        document.getElementById("confirm-password").setCustomValidity("");
    }
}
document.getElementById("password").addEventListener("change", validatePassword);
document.getElementById("confirm-password").addEventListener("change", validatePassword);
$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault();
        $.ajax({
            url: 'register.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                $('#result').html(response);
            }
        });
    });
});