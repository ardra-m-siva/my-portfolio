
    document.addEventListener("DOMContentLoaded", function () {
        const progressBars = document.querySelectorAll(".animated-bar");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.getAttribute("data-width");
                    bar.style.width = width + "%";
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });

        progressBars.forEach((bar) => observer.observe(bar));
    });
