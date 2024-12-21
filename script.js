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

// Typing effect function with backspacing
document.addEventListener("DOMContentLoaded", function() {
    const baseText = "Hi there, I'm Esha Gupta, ";
    const texts = ["AI Enthusiast", "UI/UX Developer", "Full Stack Developer"];
    let textIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100; // Adjust typing speed here
    const backspacingSpeed = 50; // Adjust backspacing speed here
    const delayBetweenTexts = 2000; // Delay between texts

    function typeText() {
        if (charIndex < texts[textIndex].length) {
            document.getElementById("typing-text").innerHTML = baseText + texts[textIndex].substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            setTimeout(deleteText, delayBetweenTexts);
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            document.getElementById("typing-text").innerHTML = baseText + texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteText, backspacingSpeed);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeText, typingSpeed);
        }
    }

    // Initialize the typing effect with the base text
    document.getElementById("typing-text").innerHTML = baseText;
    setTimeout(typeText, delayBetweenTexts);
});