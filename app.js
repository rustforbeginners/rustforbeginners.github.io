let customize_button=document.getElementById("customize");
let customize_menu=document.getElementById("customize-menu");
customize_menu.style.display="none";
customize_button.addEventListener("click", () => {
    if (customize_menu.style.display=="none") {
        customize_menu.style.display="block";
    } else {
        customize_menu.style.display="none";
    }
});
let color_input=document.getElementById("background-picker");
color_input.addEventListener("input", () => {
    document.body.style.backgroundColor=color_input.value;
});
let mail_button=document.getElementById("contact");
mail_button.addEventListener("click", () => {
    window.open("mailto:jno2009@outlook.com");
});