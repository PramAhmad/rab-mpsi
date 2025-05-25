// Function to load the navbar component
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            // Extract just the navbar HTML (between <nav> and </nav>)
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const navbar = doc.querySelector('.navbar');
            
            // Insert at the beginning of the body
            document.body.insertBefore(navbar, document.body.firstChild);
            
            // Also add the script to mark the active nav item
            const script = document.createElement('script');
            script.textContent = `
                // Set active navigation item based on current page
                const currentPage = window.location.pathname;
                
                // Remove 'active' class from all nav items
                document.querySelectorAll('.navbar-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Set active class based on current page
                if (currentPage.includes('index.html')) {
                    document.getElementById('nav-rab').classList.add('active');
                } else if (currentPage.includes('ganchat.html')) {
                    document.getElementById('nav-kurva').classList.add('active');
                } else if (currentPage.includes('cashflow.html')) {
                    document.getElementById('nav-cashflow').classList.add('active');
                } else if (currentPage.includes('kurva.html')) {
                    document.querySelector('.dropdown-content a[href="kurva.html"]').classList.add('active');
                }
            `;
            document.body.appendChild(script);
        })
        .catch(error => {
            console.error('Error loading the navbar:', error);
        });
}

// Call the function when the document is loaded
document.addEventListener('DOMContentLoaded', loadNavbar);