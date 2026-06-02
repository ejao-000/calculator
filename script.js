const screen = document.getElementById("screen");

function appendValue(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = "";
}

function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = "Error";
    }
}

const themes = [
    "dark",
    "light",
    "blue",
    "green",
    "purple"
];

let currentTheme = 0;

document.getElementById("themeBtn").addEventListener("click", () => {
    document.body.classList.remove(...themes);

    currentTheme++;
    if (currentTheme >= themes.length) {
        currentTheme = 0;
    }

    document.body.classList.add(themes[currentTheme]);
});
