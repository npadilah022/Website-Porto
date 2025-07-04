// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    // Fungsi untuk menutup semua menu
    function closeAllMenus() {
        if (mobileMenu) mobileMenu.classList.add('hidden');
        if (sidebar) sidebar.classList.add('-translate-x-full');
        if (overlay) overlay.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }

    // Toggle mobile menu
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
            if (overlay) overlay.classList.toggle('hidden');
            document.body.classList.toggle('overflow-hidden');
            
            // Tutup sidebar jika terbuka
            if (sidebar && !sidebar.classList.contains('-translate-x-full')) {
                sidebar.classList.add('-translate-x-full');
            }
        });
        
        // Close mobile menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeAllMenus);
        });
    }

    // Toggle sidebar
    if (sidebarToggle && sidebar && overlay) {
        sidebarToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('-translate-x-full');
            overlay.classList.toggle('hidden');
            document.body.classList.toggle('overflow-hidden');
            
            // Tutup mobile menu jika terbuka
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // Close menus when overlay is clicked
    if (overlay) {
        overlay.addEventListener('click', closeAllMenus);
    }

    // Pastikan header tetap klikable
    const header = document.querySelector('header');
    if (header) {
        header.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
});