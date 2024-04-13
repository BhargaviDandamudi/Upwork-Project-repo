document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector('.nav');
    const navIcon = document.querySelector('#nav-icon');

    navIcon.onclick = function () {
        if (nav.classList.toggle('responsive')) {
            navIcon.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M16.707 10.293A1 1 0 0 1 16 11H8a1 1 0 0 1-1-1h2.707l-5.657-5.657a1 1 0 1 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414z' fill='white'/></svg>";
        } else {
            navIcon.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z' fill='white'/></svg>";
        }
    };
});
const searchBox = document.querySelector('.search-box');
		const searchInput = searchBox.querySelector('input[type="text"]');

		searchBox.addEventListener('click', () => {
			searchInput.focus();
		});