const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            // Follower cursor with slight delay
            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });
        
        // Add hover effect on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .btn, .nav-link, .card, input, textarea');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                cursorFollower.classList.add('hover');
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                cursorFollower.classList.remove('hover');
            });
            
            element.addEventListener('mousedown', () => {
                cursor.classList.add('click');
            });
            
            element.addEventListener('mouseup', () => {
                cursor.classList.remove('click');
            });
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Fade-in animation for elements
        function checkFade() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                
                if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
                    element.classList.add('visible');
                }
            });
        }
        
        window.addEventListener('scroll', checkFade);
        window.addEventListener('load', checkFade);

        // Animated counter for stats
        function animateCounter() {
            const counters = document.querySelectorAll('.stat-number');
            const speed = 200;
            
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-count');
                const count = +counter.innerText;
                const increment = Math.ceil(target / speed);
                
                if (count < target) {
                    counter.innerText = Math.min(count + increment, target);
                    setTimeout(animateCounter, 1);
                }
            });
        }
        
        // Start counter animation when stats are in view
        let counterAnimated = false;
        
        function checkCounter() {
            const statsSection = document.querySelector('.bg-light');
            if (statsSection && !counterAnimated) {
                const sectionTop = statsSection.getBoundingClientRect().top;
                if (sectionTop < window.innerHeight - 100) {
                    animateCounter();
                    counterAnimated = true;
                }
            }
        }
        
        window.addEventListener('scroll', checkCounter);
        window.addEventListener('load', checkCounter);

        function showSubmitting() {
  const submitBtn = document.querySelector('#contact-form button[type="submit"]');
  if (submitBtn) submitBtn.disabled = true;
}

document.getElementsByName('hidden_iframe')[0]?.addEventListener('load', function() {
  const form = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (form) form.reset();
  if (success) success.style.display = 'block';
  const submitBtn = document.querySelector('#contact-form button[type="submit"]');
  if (submitBtn) submitBtn.disabled = false;
});