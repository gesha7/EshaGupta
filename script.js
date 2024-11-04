// Function to smoothly scroll to a specific section by its ID
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Function to handle the skill bar animation when they come into view
function animateSkillBars(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // Trigger animation when in view
            const bar = entry.target;
            const skillValue = bar.getAttribute('data-skill');
            bar.style.width = skillValue; // Animate to the data-skill percentage
        } else {
            // Optionally reset width to 0 when out of view to re-trigger animation
            entry.target.style.width = '0';
        }
    });
}

// Create an IntersectionObserver for the skill bars
const observer = new IntersectionObserver(animateSkillBars, {
    threshold: 0.5 // Trigger when 50% of the element is visible
});

// Target each .skill-bar and observe it
document.querySelectorAll('.skill-bar').forEach(bar => {
    bar.style.width = '0'; // Ensure each skill bar starts at 0 width
    observer.observe(bar);
});
