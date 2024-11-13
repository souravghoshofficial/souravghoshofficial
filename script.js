function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    // Toggle visibility of nav links on click
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}