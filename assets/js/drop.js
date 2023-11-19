// Add an event listener for mouseenter to open the dropdown
document.querySelector('.custom-dropdown').addEventListener('mouseenter', function () {
   // Show the dropdown menu
   var dropdownMenu = document.querySelector('.custom-dropdown .dropdown-menu');
   dropdownMenu.classList.add('show');
});

// Add an event listener for mouseleave to close the dropdown
document.querySelector('.custom-dropdown').addEventListener('mouseleave', function () {
   // Hide the dropdown menu
   var dropdownMenu = document.querySelector('.custom-dropdown .dropdown-menu');
   dropdownMenu.classList.remove('show');
});

// Add an event listener to close the dropdown when a link is clicked
document.querySelectorAll('.custom-dropdown .dropdown-item').forEach(function (item) {
   item.addEventListener('click', function () {
       // Hide the dropdown menu
       var dropdownMenu = document.querySelector('.custom-dropdown .dropdown-menu');
       dropdownMenu.classList.remove('show');
   });
});

// Add your set_typing_format function here
function set_typing_format(format, label) {
   // Implement your logic here
   console.log('Selected format:', format);
   console.log('Selected label:', label);
}