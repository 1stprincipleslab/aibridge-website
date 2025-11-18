document.addEventListener('DOMContentLoaded', function() {
    // Header template
    const headerHTML = `<header class="header">
	<div class="container">
		<div class="header-inner">
			<div class="logo">
				<a href="index.html" aria-label="aibridge">
					<img src="images/airbridge.png" alt="aibridge logo" style="height:40px; width:auto;"/>
				</a>
			</div>
			<nav class="main-nav">
				<ul class="menu">
					<li class="menu-item"><a href="index.html">Home</a></li>
					<li class="menu-item"><a href="about.html">About us</a></li>
					<li class="menu-item"><a href="services.html">Services</a></li>
					<li class="menu-item"><a href="case-studies.html">Case Studies</a></li>
					<li class="menu-item"><a href="blog.html">Blogs</a></li>
				</ul>
			</nav>
			<a class="header-btn" href="contact.html">Start your project</a>
			<div class="mobile-button"><span></span></div>
		</div>
	</div>
</header>`;

    // Footer template
    const footerHTML = `<footer class="footer">
	<div class="footer-top">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-sm-6 col-12 footer-menu">
					<div class="footer-logo">
						<a class="my-logo" href="index.html" aria-label="aibridge"><img src="images/airbridge.png" alt="aibridge logo" style="height:40px; width:auto;"/></a>
					</div>
					<p>Headquartered in New Zealand with a presence in India, we serve as a strategic partner for our clients, empowering them with innovative solutions that keep them ahead of the curve.</p>
				</div>
				<div class="col-lg-2 col-sm-6 col-12 footer-menu">
					<div class="footer-item">
						<h4>Site map</h4>
						<ul class="list-unstyled">
							<li><a href="index.html">Home</a></li>
							<li><a href="about.html">About us</a></li>
							<li><a href="services.html">Services</a></li>
							<li><a href="case-studies.html">Case Studies</a></li>
							<li><a href="contact.html">Contact</a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-2 col-sm-6 col-12 footer-menu">
					<div class="footer-item">
						<h4>Company</h4>
						<ul class="list-unstyled">
							<li><a href="terms.html">Terms & Conditions</a></li>
							<li><a href="policy.html">Privacy Policy</a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-4 col-sm-6 col-12 footer-menu">
					<div class="footer-item">
						<h4>Subscribe Newsletter</h4>
						<div class="footer-newsletter">
							<input type="text" name="text" placeholder="Email address" required="">
							<a class="submit" href="#0"><i class="fa fa-send"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer-bottom text-center">
		<div class="container">
			<div class="copyright d-flex align-items-center justify-content-md-between flex-sm-wrap justify-content-sm-center">
				<p>Copyright &copy; 2024, <span>aibridge</span> All Rights Reserved.</p>
				<ul class="list-unstyled social-media d-flex align-items-center">
					<li><a href="#0"><i class="fa fa-facebook"></i></a></li>
					<li><a href="#0"><i class="fa fa-pinterest"></i></a></li>
					<li><a href="#0"><i class="fa fa-instagram"></i></a></li>
					<li><a href="#0"><i class="fa fa-linkedin"></i></a></li>
					<li><a href="#0"><i class="fa fa-behance"></i></a></li>
				</ul>
			</div>
		</div>
	</div>
</footer>`;

    // Load header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
        // Set current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const menuItems = headerPlaceholder.querySelectorAll('.menu-item a');
        menuItems.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.parentElement.classList.add('current');
            }
        });
    }

    // Load footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
});