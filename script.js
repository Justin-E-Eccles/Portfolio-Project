document.addEventListener("DOMContentLoaded", () => {
    const projectTitles = document.querySelectorAll(".project-title");

    projectTitles.forEach(title => {
        title.addEventListener("click", () => {
            const details = title.nextElementSibling;
            if (details.style.display === "block") {
                details.style.display = "none";
            } else {
                details.style.display = "block";
            }
        });
    });
});