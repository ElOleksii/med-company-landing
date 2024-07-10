const emergencyStepsItems = document.querySelectorAll(".emergency-steps__item");
const emergencyStepsHoverContent = document.querySelector(
  ".emergency-steps__content"
);

emergencyStepsItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    const rect = item.getBoundingClientRect();
  });
  item.removeEventListener("mouseout", () => {});
});
