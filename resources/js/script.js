// Run after the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // ===== Hide/Show Photo =====
  const toggleBtn = document.getElementById("toggleBtn");
  const photoContainer = document.getElementById("photo-container");

  if (toggleBtn && photoContainer) {
    toggleBtn.addEventListener("click", () => {
      const isHidden = photoContainer.style.display === "none";
      photoContainer.style.display = isHidden ? "block" : "none";
      toggleBtn.textContent = isHidden ? "Hide Photo" : "Show Photo";
    });
  }

  // ===== Dynamic Artist List =====
  const addArtistButton = document.getElementById("add-artist");
  const artistsContainer = document.getElementById("artists-container");

  if (addArtistButton && artistsContainer) {
    addArtistButton.addEventListener("click", () => {
      const artist = prompt("Enter one of your favorite artists:");
      if (artist && artist.trim() !== "") {
        const p = document.createElement("p");
        p.textContent = "• " + artist.trim();

        // light styling
        p.style.backgroundColor = "#f0f8ff";
        p.style.padding = "5px";
        p.style.margin = "5px 0";
        p.style.borderRadius = "3px";

        artistsContainer.appendChild(p);
      }
    });
  } else {
    // Helpful console hints if something is missing
    if (!addArtistButton) console.warn('Missing element with id="add-artist"');
    if (!artistsContainer) console.warn('Missing element with id="artists-container"');
  }
});