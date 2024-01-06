const modalDialog = document.querySelector("#modalDialog");
const showModalButton = document.querySelector("#btn-show-modal");
const exitButton = document.querySelector("#btn-exit");
const claimButton = document.querySelector("#btn-claim-gift");

showModalButton.addEventListener("click", (e) => {
    modalDialog.showModal();
});

exitButton.addEventListener("click", (e) => {
    modalDialog.close();
});

claimButton.addEventListener("click", (e) => {
    const buttonLoader = document.querySelector(".loader");

    buttonLoader.setAttribute("data-show", "show");

    const buttonText = document.querySelector("#txt-btn-claim");

    setTimeout(() => {
        buttonLoader.setAttribute("data-show", "hide");
        buttonText.innerHTML = "Gift Claimed!";
        claimButton.toggleAttribute("disabled");
    }, 1000);
});