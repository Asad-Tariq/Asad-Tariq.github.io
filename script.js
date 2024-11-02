// Function to show the selected section and update the banner text
function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll(".section-content");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  selectedSection.style.display = "block";

  // Update the banner text to match the selected section's title
  const bannerText = document.getElementById("banner-text");
  bannerText.textContent = selectedSection.querySelector("h2").textContent;
}

// Show the "About" section by default on page load
window.onload = () => {
  showSection("about");
};
