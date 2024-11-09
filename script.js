document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Aquí puedes agregar la lógica de validación de los campos
    const name = document.getElementById("name").value;
    const cardNumber = document.getElementById("card-number").value;
    const expiry = document.getElementById("expiry").value;
    const cvc = document.getElementById("cvc").value;
    const email = document.getElementById("email").value;

    // Validar que todos los campos estén completos
    if (!name || !cardNumber || !expiry || !cvc || !email) {
        alert("Por favor complete todos los campos.");
    } else {
        // Redirigir a la página de éxito
        window.location.href = "exito.html";
    }
});
