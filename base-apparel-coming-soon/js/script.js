const btn = document.getElementById("cta-btn");
const input = document.getElementById("cta-input");

btn.addEventListener("click", () => {
    const isValid = input.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm) ? true : false;
    const content = input.parentElement;
    const errMessage = content.parentElement.querySelector(".error-message");

    if (!isValid) {
        errMessage && errMessage.remove();

        input.classList.add("error-input");
        btn.classList.add("error-btn");
        content.querySelector(".cta__error-icon").style.display = "block";
        createErrorMessage(content);
    } else {
        removeErrorStyles(content, errMessage);
        alert("Welcome!");
    }
});

function removeErrorStyles(content, errMessage) {
    input.classList.remove("error-input");
    btn.classList.remove("error-btn");
    content.querySelector(".cta__error-icon").style.display = "none";
    errMessage && errMessage.remove();
}

function createErrorMessage(content) {
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    errorMessage.innerHTML = `<p>Please provide a valid email</p>`;
    content.parentElement.appendChild(errorMessage);
}