console.log("Hello from my dashboard!");
const checkboxes = document.querySelectorAll("input");
console.log(checkboxes.length);
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
        console.log("Checkbox changed!");
    });
});