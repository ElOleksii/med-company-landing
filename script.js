const emergencyStepsItems = document.querySelectorAll('.emergency-steps__item')
const emergencyStepsHoverContent = document.querySelector('.emergency-steps__content')

emergencyStepsItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const rect = item.getBoundingClientRect();
        });
        item.removeEventListener('mouseout', () => {
        });
    }
)

document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll('.faq__question');
    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});

