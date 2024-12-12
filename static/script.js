// Add basic form validation and interactivity
document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");

    forms.forEach((form) => {
        form.addEventListener("submit", function (event) {
            const inputs = form.querySelectorAll("input");
            let valid = true;

            inputs.forEach((input) => {
                if (!input.value.trim()) {
                    valid = false;
                    input.style.border = "1px solid red";
                } else {
                    input.style.border = "1px solid #ccc";
                }
            });

            if (!valid) {
                event.preventDefault();
                alert("Please fill in all the fields.");
            }
        });
    });
});
