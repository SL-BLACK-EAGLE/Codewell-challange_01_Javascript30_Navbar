// get the dropdown element
const dropdown = document.getElementById("dropdown");

// add event listener to the "Product" link
const productLink = document.querySelector(".navbar-item a");
productLink.addEventListener("mouseover", () => {
  dropdown.style.display = "block";
});

// hide the dropdown when the mouse leaves the "Product" link or the dropdown itself
const hideDropdown = () => {
  dropdown.style.display = "none";
};
productLink.addEventListener("mouseleave", hideDropdown);
dropdown.addEventListener("mouseleave", hideDropdown);
