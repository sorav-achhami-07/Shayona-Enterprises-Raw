// sorav header js
        const header = document.querySelector('#siteHeader');
        const productsTrigger = document.querySelector('.products-trigger');
        const productsMenu = document.querySelector('#productsMenu');
        const productItem = document.querySelector('.products-nav-item');
        const mobileToggle = document.querySelector('.mobile-toggle');
        const navContent = document.querySelector('.nav-content');
        const categoryButtons = [...document.querySelectorAll('.category')];
        const productImage = document.querySelector('.product-feature__image');
        const productTitle = document.querySelector('.product-feature__title');
        const productDescription = document.querySelector('.product-feature__description');
        const productFeature = document.querySelector('.product-feature');
        const quoteDialog = document.querySelector('#quoteDialog');
        const quoteForm = document.querySelector('#quoteForm');
        const formMessage = document.querySelector('#formMessage');
        const mobileProductsAccordion = document.querySelector('#mobileProducts');
        const mobileDrawerClose = document.querySelector('.mobile-drawer__close');
        const menuBackdrop = document.querySelector('.menu-backdrop');
        const mobileLinks = [...document.querySelectorAll('[data-mobile-link]')];
        const mobileMedia = window.matchMedia('(max-width: 1180px)');

        const productData = {
        'wall-panels': { title: 'Wall Panels', description: 'Surface statements made for exceptional interiors.', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=85', alt: 'Warm wood panelled interior' },
        doors: { title: 'Doors', description: 'Distinctive entrances with a refined architectural finish.', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1500&q=85', alt: 'Elegant timber doorway' },
        'laminate-wood': { title: 'Laminates & Wood', description: 'Natural character and durable texture for every surface.', image: 'https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1500&q=85', alt: 'Warm wood furniture details' },
        veneers: { title: 'Laminates & Veneers', description: 'Layered beauty, selected for rich detail and lasting appeal.', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1500&q=85', alt: 'Refined interior wood finishes' },
        flooring: { title: 'Flooring', description: 'A foundation of warmth, designed to stand the test of time.', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=85', alt: 'Contemporary room with wood flooring' },
        sheets: { title: 'Acrylic & Decorative Sheets', description: 'High-finish surfaces for a contemporary point of view.', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=85', alt: 'Modern decorative surface interior' },
        moulding: { title: 'Wall Moulding & Bending', description: 'Architectural details that give walls graceful dimension.', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1500&q=85', alt: 'Detailed interior wall moulding' },
        furniture: { title: 'Furniture', description: 'Comfort, craft and form for a space that feels complete.', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1500&q=85', alt: 'Contemporary furniture in a warm living room' },
        kitchens: { title: 'Modular Kitchens', description: 'Functionally crafted kitchens with enduring material beauty.', image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1500&q=85', alt: 'Premium modular kitchen' },
        accessories: { title: 'Interior Accessories', description: 'The finishing pieces that bring a considered interior together.', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1500&q=85', alt: 'Carefully styled interior accessories' }
        };

        // const productData = {
        //   'wall-panels': { title: 'Wall Panels', description: 'Surface statements made for exceptional interiors.', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=85', alt: 'Warm wood panelled interior' },
        //   doors: { title: 'Doors', description: 'Distinctive entrances with a refined architectural finish.', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1500&q=85', alt: 'Elegant timber doorway' },
        //   'laminate-wood': { title: 'Laminates', description: 'Natural character and durable texture for every surface.', image: 'https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1500&q=85', alt: 'Warm wood furniture details' },
        //   veneers: { title: 'Plywood & Boards', description: 'Layered beauty, selected for rich detail and lasting appeal.', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1500&q=85', alt: 'Refined interior wood finishes' },
        //   flooring: { title: 'Acrylic & Decorative Sheets', description: 'A foundation of warmth, designed to stand the test of time.', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=85', alt: 'Contemporary room with wood flooring' },
        //   sheets: { title: 'Acrylic & Decorative Sheets', description: 'High-finish surfaces for a contemporary point of view.', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=85', alt: 'Modern decorative surface interior' },
        //   moulding: { title: 'Funitures', description: 'Architectural details that give walls graceful dimension.', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1500&q=85', alt: 'Detailed interior wall moulding' },
        //   furniture: { title: 'Furniture', description: 'Comfort, craft and form for a space that feels complete.', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1500&q=85', alt: 'Contemporary furniture in a warm living room' },
        //   kitchens: { title: 'Modular Kitchens', description: 'Functionally crafted kitchens with enduring material beauty.', image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1500&q=85', alt: 'Premium modular kitchen' },
        //   accessories: { title: 'Interior Accessories', description: 'The finishing pieces that bring a considered interior together.', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1500&q=85', alt: 'Carefully styled interior accessories' }
        // };

        let closeTimer;
        let productSwapTimer;

        function setProductsOpen(shouldOpen) {
        clearTimeout(closeTimer);
        productsMenu.classList.toggle('is-open', shouldOpen);
        productsMenu.setAttribute('aria-hidden', String(!shouldOpen));
        productsTrigger.setAttribute('aria-expanded', String(shouldOpen));
        }

        function openProducts() { setProductsOpen(true); }
        function closeProducts() { setProductsOpen(false); }

        function setMobileProductsOpen(shouldOpen) {
        mobileProductsAccordion.classList.toggle('is-open', shouldOpen);
        mobileProductsAccordion.setAttribute('aria-hidden', String(!shouldOpen));
        productsTrigger.setAttribute('aria-expanded', String(shouldOpen));
        }

        function setMobileMenuOpen(shouldOpen) {
        navContent.classList.toggle('is-open', shouldOpen);
        menuBackdrop.classList.toggle('is-visible', shouldOpen);
        document.body.classList.toggle('menu-open', shouldOpen);
        mobileToggle.classList.toggle('is-open', shouldOpen);
        mobileToggle.setAttribute('aria-expanded', String(shouldOpen));
        mobileToggle.setAttribute('aria-label', shouldOpen ? 'Close menu' : 'Open menu');

        if (!shouldOpen) setMobileProductsOpen(false);
        }

        function updateProduct(category) {
        const data = productData[category.dataset.category];
        if (!data) return;

        categoryButtons.forEach((button) => {
            const selected = button === category;
            button.classList.toggle('is-selected', selected);
            button.setAttribute('aria-selected', String(selected));
        });

        clearTimeout(productSwapTimer);
        productFeature.classList.add('is-changing');
        productSwapTimer = window.setTimeout(() => {
            productImage.src = data.image;
            productImage.alt = data.alt;
            productTitle.textContent = data.title;
            productDescription.textContent = data.description;
            productFeature.setAttribute('aria-label', `Explore ${data.title}`);
            productFeature.classList.remove('is-changing');
        }, 160);
        }

        productsTrigger.addEventListener('click', () => {
        if (mobileMedia.matches) {
            setMobileProductsOpen(!mobileProductsAccordion.classList.contains('is-open'));
            return;
        }

        setProductsOpen(!productsMenu.classList.contains('is-open'));
        });

        productItem.addEventListener('mouseenter', () => {
        if (!mobileMedia.matches) openProducts();
        });

        productItem.addEventListener('mouseleave', () => {
        if (!mobileMedia.matches) closeTimer = window.setTimeout(closeProducts, 180);
        });

        productsMenu.addEventListener('mouseenter', () => clearTimeout(closeTimer));
        productsMenu.addEventListener('mouseleave', () => { closeTimer = window.setTimeout(closeProducts, 180); });

        categoryButtons.forEach((category) => {
        category.addEventListener('mouseenter', () => updateProduct(category));
        category.addEventListener('focus', () => updateProduct(category));
        category.addEventListener('click', () => updateProduct(category));
        });

        mobileToggle.addEventListener('click', () => {
        setMobileMenuOpen(!navContent.classList.contains('is-open'));
        });

        mobileDrawerClose.addEventListener('click', () => setMobileMenuOpen(false));
        menuBackdrop.addEventListener('click', () => setMobileMenuOpen(false));

        mobileLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (mobileMedia.matches) setMobileMenuOpen(false);
        });
        });

        mobileMedia.addEventListener('change', ({ matches }) => {
        if (!matches) {
            setMobileMenuOpen(false);
            setMobileProductsOpen(false);
        }
        });

        document.addEventListener('click', (event) => {
        if (!header.contains(event.target)) closeProducts();
        });

        document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeProducts();
            if (navContent.classList.contains('is-open')) setMobileMenuOpen(false);
        }
        });

        let lastScrollY = window.scrollY;
        let isScrollTicking = false;

        function updateHeaderOnScroll() {
        const currentScrollY = window.scrollY;
        const isScrollingDown = currentScrollY > lastScrollY;

        header.classList.toggle('is-scrolled', currentScrollY > 12);

        if (currentScrollY < 28) {
            header.classList.remove('is-condensed');
        } else if (isScrollingDown && currentScrollY > 88) {
            header.classList.add('is-condensed');
        } else if (!isScrollingDown) {
            header.classList.remove('is-condensed');
        }

        lastScrollY = currentScrollY;
        isScrollTicking = false;
        }

        function updateTopBandVisibility() {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;

        const heroRect = heroSection.getBoundingClientRect();

        if (heroRect.top <= 0) {
            header.classList.add('header--scrolled');
        } else if (heroRect.top >= 0 && window.scrollY <= 12) {
            header.classList.remove('header--scrolled');
        }
        }

        function handleScroll() {
        if (!isScrollTicking) {
            window.requestAnimationFrame(() => {
            updateHeaderOnScroll();
            updateTopBandVisibility();
            });
            isScrollTicking = true;
        }
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', updateTopBandVisibility);

        updateHeaderOnScroll();
        updateTopBandVisibility();

        document.getElementsByClassName('quote-button').forEach((button) => {
        button.addEventListener('click', () => {
            quoteDialog.showModal();
            quoteDialog.querySelector('input')?.focus();
        });
        });

        document.getElementsByClassName('quote-button').addEventListener('click', () => quoteDialog.close());
        quoteDialog.addEventListener('click', (event) => {
        if (event.target === quoteDialog) quoteDialog.close();
        });
        quoteForm.addEventListener('submit', (event) => {
        event.preventDefault();
        formMessage.textContent = 'Thank you — your callback request is ready to be sent.';
        quoteForm.reset();
        });


// sorav hero section js
            (function() {
      var slides = document.querySelectorAll('.slide');
      var texts = document.querySelectorAll('.slide-text');
      var dots = document.querySelectorAll('.nav-dot');
      var current = 0;
      var total = slides.length;
      var isAnimating = false;
      var autoTimer;

      function goTo(index) {
        if (isAnimating || index === current) return;
        isAnimating = true;

        slides[current].classList.remove('active');
        texts[current].classList.remove('active');
        texts[current].classList.add('exit');
        dots[current].classList.remove('active');

        slides[index].classList.add('active');

        setTimeout(function() {
          texts[current].classList.remove('exit');
          texts[index].classList.add('active');
          dots[index].classList.add('active');
          current = index;
          setTimeout(function() { isAnimating = false; }, 200);
        }, 200);
      }

      function next() { goTo((current + 1) % total); }
      function prev() { goTo((current - 1 + total) % total); }

      function resetAuto() {
        clearInterval(autoTimer);
        autoTimer = setInterval(next, 4000);
      }

      dots.forEach(function(dot) {
        dot.addEventListener('click', function() {
          var idx = parseInt(this.getAttribute('data-slide'));
          goTo(idx);
          resetAuto();
        });
      });

      var navUp = document.getElementById('navUp');
      var navDown = document.getElementById('navDown');
      if (navUp) navUp.addEventListener('click', function() { prev(); resetAuto(); });
      if (navDown) navDown.addEventListener('click', function() { next(); resetAuto(); });

      document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { next(); resetAuto(); }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { prev(); resetAuto(); }
      });

      autoTimer = setInterval(next, 4000);
    })();