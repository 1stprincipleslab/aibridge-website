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
					<li class="menu-item mobile-only"><a href="contact.html">Start your project</a></li>
				</ul>
			</nav>
			<a class="header-btn" href="contact.html">Start your project</a>
			<div class="mobile-button"><span></span></div>
		</div>
	</div>
</header>`;

    // Footer template
    const footerHTML = `<footer class="footer">
	<style>
	.blog-sidebar {
                background: #ffffff;
                border: 1px solid #edf0f7;
                border-radius: 24px;
                padding: 30px;
                margin-bottom: 30px;
            }
	.footer-legal {
		padding: 5px 0;
		text-align: center;
		border: none;
		background: transparent;
	}
	.footer-legal a {
		color: #666;
		text-decoration: none;
		margin: 0 15px;
		font-size: 14px;
	}
	.footer-legal a:hover {
		color: #641ff9;
	}
	@media (max-width: 768px) {
		.footer-legal {
			padding: 3px 0;
		}
		.footer-legal a {
			display: block;
			margin: 2px 0;
		}
	}
	</style>
	<div class="footer-top">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-3 col-md-6 col-12 footer-menu d-flex justify-content-center align-items-center" style="min-height: 200px;">
					<div class="footer-logo">
						<a class="my-logo" href="index.html" aria-label="aibridge"><img src="images/airbridge.png" alt="aibridge logo" style="height:40px; width:auto;"/></a>
					</div>
				</div>
				<div class="col-lg-5 col-md-6 col-12 footer-menu">
					<div class="footer-item">
						<ul class="list-unstyled">
							<li><a href="index.html">Home</a></li>
							<li><a href="about.html">About us</a></li>
							<li><a href="services.html">Services</a></li>
							<li><a href="case-studies.html">Case Studies</a></li>
							<li><a href="blog.html">Blogs</a></li>
							<li><a href="contact.html">Contact</a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-4 col-md-12 col-12 footer-menu">
					<div class="footer-item">
						<div class="blog-sidebar" style="background: linear-gradient(135deg, #641ff9 0%, #02c5f7 100%); color: #fff;margin-top: 0;">
							<h3 class="sidebar-title" style="color: #fff;">Stay Updated</h3>
							<p style="color: #fff; margin-bottom: 20px;">Get the latest insights delivered to your inbox. No spam, just valuable content.</p>
							<div class="footer-newsletter">
								<input type="email" placeholder="Your email address" style="width: 100%; padding: 12px; border: none; border-radius: 8px; margin-bottom: 15px;">
								<button style="background: #fff; color: #641ff9; border: none; padding: 12px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; width: 100%;">Subscribe</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer-legal">
		<div class="container">
			<a href="terms.html">Terms & Conditions</a>
			<a href="policy.html">Privacy Policy</a>
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