/* ==============================
   PRECIFY — LANDING PAGE SCRIPT
   ============================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('open');
            menuToggle.classList.toggle('active');
            const isOpen = nav.classList.contains('open');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close menu when a link is clicked
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // --- Scroll Animations (Intersection Observer) ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));

    // --- Bar Chart Animation ---
    const barChart = document.getElementById('bar-chart');
    if (barChart) {
        const chartObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bars = barChart.querySelectorAll('.bar-chart__bar');
                    bars.forEach(bar => {
                        const value = parseFloat(bar.getAttribute('data-value'));
                        // Scale: max bar width is 100% of container
                        // Scale values so 53.7 maps to ~90% width for visual clarity
                        const scaledWidth = Math.max(value * 1.6, 2);
                        bar.style.width = scaledWidth + '%';
                    });
                    chartObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        chartObserver.observe(barChart);
    }

    // --- Interactive Demo ---
    const demoCategories = document.getElementById('demo-categories');
    const demoComplexity = document.getElementById('demo-complexity');
    const demoSubmit = document.getElementById('demo-submit');
    const demoResult = document.getElementById('demo-result');

    let selectedCategory = null;
    let selectedComplexity = null;

    // Price data (fictional, for demonstration only)
    const priceData = {
        design: {
            simple: { min: 20, max: 30, label: 'R$ 20 – R$ 30' },
            intermediate: { min: 30, max: 50, label: 'R$ 30 – R$ 50' },
            advanced: { min: 75, max: 100, label: 'R$ 75 – R$ 100' }
        },
        video: {
            simple: { min: 25, max: 40, label: 'R$ 25 – R$ 40' },
            intermediate: { min: 50, max: 75, label: 'R$ 50 – R$ 75' },
            advanced: { min: 100, max: 150, label: 'R$ 100 – R$ 150' }
        },
        writing: {
            simple: { min: 15, max: 25, label: 'R$ 15 – R$ 25' },
            intermediate: { min: 30, max: 50, label: 'R$ 30 – R$ 50' },
            advanced: { min: 60, max: 100, label: 'R$ 60 – R$ 100' }
        },
        programming: {
            simple: { min: 30, max: 50, label: 'R$ 30 – R$ 50' },
            intermediate: { min: 50, max: 100, label: 'R$ 50 – R$ 100' },
            advanced: { min: 100, max: 200, label: 'R$ 100 – R$ 200+' }
        },
        other: {
            simple: { min: 20, max: 30, label: 'R$ 20 – R$ 30' },
            intermediate: { min: 30, max: 50, label: 'R$ 30 – R$ 50' },
            advanced: { min: 75, max: 100, label: 'R$ 75 – R$ 100' }
        }
    };

    const categoryLabels = {
        design: 'Design e artes',
        video: 'Edição de vídeo',
        writing: 'Redação',
        programming: 'Programação',
        other: 'Outros serviços digitais'
    };

    const complexityLabels = {
        simple: 'Simples',
        intermediate: 'Intermediária',
        advanced: 'Avançada'
    };

    function handleOptionClick(container, type) {
        container.querySelectorAll('.demo-option').forEach(btn => {
            btn.addEventListener('click', () => {
                container.querySelectorAll('.demo-option').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                if (type === 'category') {
                    selectedCategory = btn.getAttribute('data-category');
                } else {
                    selectedComplexity = btn.getAttribute('data-complexity');
                }
                updateSubmitButton();
            });
        });
    }

    function updateSubmitButton() {
        if (selectedCategory && selectedComplexity) {
            demoSubmit.disabled = false;
        } else {
            demoSubmit.disabled = true;
        }
    }

    if (demoCategories && demoComplexity && demoSubmit) {
        handleOptionClick(demoCategories, 'category');
        handleOptionClick(demoComplexity, 'complexity');

        demoSubmit.addEventListener('click', () => {
            if (!selectedCategory || !selectedComplexity) return;

            const data = priceData[selectedCategory][selectedComplexity];
            const catLabel = categoryLabels[selectedCategory];
            const compLabel = complexityLabels[selectedComplexity];

            demoResult.innerHTML = `
                <div class="demo-result__content">
                    <span class="demo-result__label">Faixa de preço demonstrativa</span>
                    <div class="demo-result__price">${data.label}</div>
                    <span class="demo-result__complexity">${compLabel}</span>
                    <p class="demo-result__category">${catLabel}</p>
                </div>
            `;
        });
    }

    // --- FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-item__question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all
            faqItems.forEach(fi => {
                fi.classList.remove('active');
                fi.querySelector('.faq-item__question').setAttribute('aria-expanded', 'false');
            });

            // Open clicked if it was closed
            if (!isActive) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // --- Profile Button -> Form ---
    const profileButtons = document.querySelectorAll('[data-profile]');
    const profileRadios = document.querySelectorAll('input[name="profile"]');

    profileButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const profile = btn.getAttribute('data-profile');
            // Pre-select the radio button
            profileRadios.forEach(radio => {
                if (radio.value === profile) {
                    radio.checked = true;
                }
            });
        });
    });

    // --- Form Validation ---
    const form = document.getElementById('interest-form-el');
    const formSubmit = document.getElementById('form-submit');
    const formSuccess = document.getElementById('form-success');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Clear previous errors
            document.querySelectorAll('.form-error').forEach(err => err.textContent = '');
            document.querySelectorAll('.form-input').forEach(inp => inp.classList.remove('error'));

            // Validate name
            const name = document.getElementById('name');
            if (!name.value.trim()) {
                document.getElementById('name-error').textContent = 'Por favor, informe seu nome.';
                name.classList.add('error');
                isValid = false;
            }

            // Validate email
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                document.getElementById('email-error').textContent = 'Por favor, informe seu e-mail.';
                email.classList.add('error');
                isValid = false;
            } else if (!emailRegex.test(email.value.trim())) {
                document.getElementById('email-error').textContent = 'Por favor, informe um e-mail válido.';
                email.classList.add('error');
                isValid = false;
            }

            // Validate profile
            const profileSelected = document.querySelector('input[name="profile"]:checked');
            if (!profileSelected) {
                document.getElementById('profile-error').textContent = 'Selecione uma opção.';
                isValid = false;
            }

            // Validate consent
            const consent = document.getElementById('consent');
            if (!consent.checked) {
                document.getElementById('consent-error').textContent = 'É necessário concordar com a política de privacidade.';
                isValid = false;
            }

            if (isValid) {
                // Show loading state
                formSubmit.querySelector('.btn__text').setAttribute('hidden', '');
                formSubmit.querySelector('.btn__loading').removeAttribute('hidden');
                formSubmit.disabled = true;

                // Simulate submission (no backend yet)
                setTimeout(() => {
                    formSubmit.querySelector('.btn__text').removeAttribute('hidden');
                    formSubmit.querySelector('.btn__loading').setAttribute('hidden', '');
                    formSubmit.disabled = false;

                    // Hide form fields, show success
                    const formGroups = form.querySelectorAll('.form-group, .form-consent, .form-microcopy, #form-submit');
                    formGroups.forEach(el => el.setAttribute('hidden', ''));
                    formSuccess.removeAttribute('hidden');

                    // Reset form
                    form.reset();
                }, 1500);
            }
        });
    }

    // --- Header scroll effect ---
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 20px rgba(25, 63, 52, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(25, 63, 52, 0.06)';
        }

        lastScroll = currentScroll;
    });

});
