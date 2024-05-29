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

document.addEventListener("DOMContentLoaded", () => {
    function updateSecondsFromDate(targetDate) {
        const now = new Date();
        const target = new Date(targetDate);
        const differenceInSeconds = Math.floor((now - target) / 1000);
        document.querySelector(".countdown").textContent = differenceInSeconds;
    }

    const specificDate = "2024-03-01T00:00:00"; // Set your specific date here

    // Initial update
    updateSecondsFromDate(specificDate);

    // Update every second
    setInterval(() => {
        updateSecondsFromDate(specificDate);
    }, 1000);
});

