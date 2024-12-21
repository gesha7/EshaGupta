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
const skillBarObserver = new IntersectionObserver(animateSkillBars, {
    threshold: 0.5 // Trigger when 50% of the element is visible
});

// Target each .skill-bar and observe it
document.querySelectorAll('.skill-bar').forEach(bar => {
    bar.style.width = '0'; // Ensure each skill bar starts at 0 width
    skillBarObserver.observe(bar);
});

// Typing effect function with backspacing and glowing outline
document.addEventListener("DOMContentLoaded", function() {
    const baseText = "Hi there, I'm ";
    const texts = ["Esha Gupta", "an AI Enthusiast", "a UI/UX Developer", "a Full Stack Developer"];
    let textIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100; // Adjust typing speed here
    const backspacingSpeed = 50; // Adjust backspacing speed here
    const delayBetweenTexts = 2000; // Delay between texts

    function typeText() {
        const typingTextElement = document.getElementById("typing-text");
        typingTextElement.classList.add("glow");
        if (charIndex < texts[textIndex].length) {
            typingTextElement.innerHTML = baseText + texts[textIndex].substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            setTimeout(() => {
                typingTextElement.classList.remove("glow");
                setTimeout(deleteText, delayBetweenTexts);
            }, 500); // Delay before removing glow
        }
    }

    function deleteText() {
        const typingTextElement = document.getElementById("typing-text");
        if (charIndex > 0) {
            typingTextElement.innerHTML = baseText + texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteText, backspacingSpeed);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(() => {
                typingTextElement.classList.add("glow");
                setTimeout(typeText, typingSpeed);
            }, 500); // Delay before starting to type next text
        }
    }

    // Initialize the typing effect with the base text
    const typingTextElement = document.getElementById("typing-text");
    typingTextElement.innerHTML = baseText;
    setTimeout(typeText, delayBetweenTexts);
});

// Function to handle the drop-down/pop-up effect for timeline items
document.addEventListener("DOMContentLoaded", function() {
    const positions = document.querySelectorAll('.dropdown-effect');

    function showPositions(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }

    const positionObserver = new IntersectionObserver(showPositions, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    positions.forEach(position => {
        positionObserver.observe(position);
    });
});