// DOM Elements
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');
const overlay = document.getElementById('overlay');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// Mobile Menu Toggle
mobileMenuToggle.addEventListener('click', () => {
  const isActive = navMenu.classList.contains('active');
  
  if (isActive) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
});

// Open Mobile Menu
function openMobileMenu() {
  navMenu.classList.add('active');
  mobileMenuToggle.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close Mobile Menu
function closeMobileMenu() {
  navMenu.classList.remove('active');
  mobileMenuToggle.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  
  // Close all dropdowns when closing mobile menu
  closeAllDropdowns();
}

// Overlay Click
overlay.addEventListener('click', () => {
  closeMobileMenu();
});

// Dropdown Functionality
dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    
    const dropdown = toggle.parentElement;
    const isActive = dropdown.classList.contains('active');
    
    // Close all other dropdowns
    closeAllDropdowns();
    
    // Toggle current dropdown
    if (!isActive) {
      dropdown.classList.add('active');
    }
  });
});

// Close All Dropdowns
function closeAllDropdowns() {
  const activeDropdowns = document.querySelectorAll('.dropdown.active');
  activeDropdowns.forEach(dropdown => {
    dropdown.classList.remove('active');
  });
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  const isDropdownClick = e.target.closest('.dropdown');
  const isMobileMenuClick = e.target.closest('.mobile-menu-toggle');
  
  if (!isDropdownClick && !isMobileMenuClick) {
    closeAllDropdowns();
  }
});

// Handle window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAllDropdowns();
    closeMobileMenu();
  }
});

// Prevent dropdown menu from closing when clicking inside it
document.querySelectorAll('.dropdown-menu').forEach(menu => {
  menu.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});
