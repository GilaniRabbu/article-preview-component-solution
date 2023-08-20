const ShareButton = document.querySelector("#share-img");
const Social = document.querySelector("#social-link");

ShareButton.addEventListener("click", () => {
    Social.classList.toggle("hidden");
});

const MobileBtn = document.querySelector(".mobile-share");
const MobileSocial = document.querySelector("#mobile-link");

ShareButton.addEventListener("click", () => {
    MobileSocial.classList.toggle("hidden");
});

MobileBtn.addEventListener("click", () => {
    MobileSocial.classList.toggle("hidden");
});