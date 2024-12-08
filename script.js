const button = document.getElementById("submitbutton");
const contentInput = document.getElementById("content");
const colorInput = document.getElementById("color");
const checkbox = document.getElementById("divStyle");
const outputDiv = document.getElementById("output");

// Eventlistener för textfält
document.addEventListener("input", (e) => {
    const target = e.target;

    console.log("Target element:", target);
    console.log("Target name:", target.name);

    if (target.id === "content") {
        outputDiv.textContent = target.value; // Uppdatera div med textfältets innehåll
    }
});

// Eventlistener för checkbox
checkbox.addEventListener("change", () => {
    const color = colorInput.value; // Hämta färgvärdet från fältet
    outputDiv.style.backgroundColor = color; // Ändra bakgrundsfärg på div
});

// Eventlistener för button
button.addEventListener("click", () => {
    outputDiv.textContent = ""; // Rensa innehållet i div utan att ta bort elementet
    console.log("Knappen gick bra att trycka på!");
});

// Debug: Kontrollera om alla element har hämtats korrekt
console.log("Checkbox element:", checkbox);
console.log("Text fields:", contentInput);
console.log("Button element:", button);
console.log("Div element:", outputDiv);