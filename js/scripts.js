const siteRootUrl = new URL('../', document.currentScript.src);

document.addEventListener('DOMContentLoaded', async () => {
    /**
     * Language preference and translated interface text.
     * The browser language is used once; an explicit choice is remembered.
     */
    const translations = {
        en: {
            'nav.band': 'The Band', 'nav.shows': 'Shows', 'nav.media': 'Media', 'nav.press': 'Press',
            'nav.rider': 'EPK & Rider', 'nav.contact': 'Contact', 'nav.history': 'History',
            'nav.gallery': 'Gallery', 'nav.imprint': 'Imprint',
            'home.bandTitle': 'The Band', 'home.showsTitle': 'Upcoming Shows',
            'home.pressTitle': 'Press', 'home.riderTitle': 'EPK & Stage Rider',
            'home.riderText': 'Download our Electronic Press Kit and Stage/Tech Rider.',
            'home.riderButton': 'Download EPK & Rider',
            'home.riderNote': 'Includes high-resolution band photos, logos, and technical requirements.',
            'home.contactTitle': 'Contact', 'home.contactText': 'Reach out to us for bookings and inquiries.',
            'home.contactNote': 'We are always open to collaborations and shows.',
            'media.consent': 'Accept external services to load our {service} player.',
            'media.loadYoutube': 'Load YouTube', 'media.loadSpotify': 'Load Spotify',
            'history.title': 'Band History', 'gallery.title': 'Gallery',
            'gallery.subtitle': 'Moments from the stage', 'gallery.photos': 'Photos by Michael Vogel',
            'gallery.all': 'All', 'common.back': 'Back to main page',
            'footer.rights': 'All rights reserved.',
            'shows.location': 'Location:', 'shows.with': 'With:',
            'imprint.back': 'Back to main page'
        },
        de: {
            'nav.band': 'Die Band', 'nav.shows': 'Konzerte', 'nav.media': 'Media', 'nav.press': 'Presse',
            'nav.rider': 'EPK & Rider', 'nav.contact': 'Kontakt', 'nav.history': 'Geschichte',
            'nav.gallery': 'Galerie', 'nav.imprint': 'Impressum',
            'home.bandTitle': 'Die Band', 'home.showsTitle': 'Kommende Konzerte',
            'home.pressTitle': 'Presse', 'home.riderTitle': 'EPK & Stage Rider',
            'home.riderText': 'Ladet unser Electronic Press Kit und unseren Stage/Tech-Rider herunter.',
            'home.riderButton': 'EPK & Rider herunterladen',
            'home.riderNote': 'Enthält hochauflösende Bandfotos, Logos und technische Anforderungen.',
            'home.contactTitle': 'Kontakt', 'home.contactText': 'Kontaktiert uns für Booking und Anfragen.',
            'home.contactNote': 'Wir freuen uns immer über Kooperationen und Konzerte.',
            'media.consent': 'Externe Dienste akzeptieren, um unseren {service}-Player zu laden.',
            'media.loadYoutube': 'YouTube laden', 'media.loadSpotify': 'Spotify laden',
            'history.title': 'Bandgeschichte', 'gallery.title': 'Galerie',
            'gallery.subtitle': 'Momente von der Bühne', 'gallery.photos': 'Fotos von Michael Vogel',
            'gallery.all': 'Alle', 'common.back': 'Zurück zur Startseite',
            'footer.rights': 'Alle Rechte vorbehalten.',
            'shows.location': 'Ort:', 'shows.with': 'Mit:',
            'imprint.back': 'Zurück zur Startseite'
        }
    };

    const supportedLanguages = ['en', 'de'];
    const siteContent = { shows: [], press: [] };
    const germanLongForm = {
        '.band-intro': [
            'Asura Falls stehen für energiegeladenen modernen Metalcore mit klarer Botschaft, massiven Riffs und zwei unverwechselbaren Stimmen. Die sechsköpfige Band verbindet melodische Tiefe, emotionale Intensität und außergewöhnliche Vielfalt.',
            'Mit Einflüssen von Bullet For My Valentine, Killswitch Engage und In Flames erschaffen Asura Falls eine kraftvolle Mischung aus eingängigen Melodien, aggressiven Breakdowns und atmosphärischen Momenten. Cleangesang und rohe Screams treffen auf schwere Gitarrenriffs und sorgen immer wieder für Überraschungen.',
            'Seit dem Neustart mit Jenny und Nemo am Gesang hat die Band eine neue Dynamik gewonnen. Gemeinsam mit Jonas (8-saitige Gitarre), Cons (7-saitige Leadgitarre), Sueri (Bass) und Erasmus (Schlagzeug) bilden sie ein sechsköpfiges Kraftpaket, das bereit ist, die Bühnen zu erobern.',
            'Ob auf großen Bühnen oder bei intimen Clubshows: Asura Falls stehen für Authentizität, Leidenschaft und elektrisierende Live-Energie. Die Band verwandelt kleine Clubs ebenso wie große Bühnen in ein Meer aus Bewegung und Emotion.',
            'Mit neuen Songs und kommenden Konzerten sind Asura Falls bereit für den nächsten Schritt – kompromisslos, ehrlich und mit einem klaren Ziel: ihre Musik in die Welt zu tragen.'
        ],
        '.member-bio p': [
            'Schon als kleines Kind stand Jenny gern auf der Bühne – ganz gleich, wo sie war. Gefiel ihr ein Lied, sang und tanzte sie dazu. In ihrer Jugend entwickelte sich ihr musikalisches Talent stetig weiter, seitdem singt sie in Bands. Mit ihrer fesselnden Bühnenpräsenz und einer Stimme von sanft und gefühlvoll bis kraftvoll und aggressiv bringt sie enorme Dynamik in die Band.',
            'Nemo entdeckte früh seine Leidenschaft für Musik und ist heute, viele Jahre später, Frontmann von Asura Falls. Seine langjährige Erfahrung als Shouter, Rapper und Texter verleiht jedem Auftritt intensive Überzeugung und rohe Emotion.',
            'Von seinem Musiklehrer inspiriert begann Jonas seine musikalische Reise vergleichsweise spät, dafür umso entschlossener. Einflüsse von Classic Rock bis Modern Metal prägten seinen Sound. Mit acht Saiten und seinem Songwriting legt er das Fundament aus Härte und Melancholie und ist zugleich der Technikexperte der Band.',
            'Cons ist seit dem ersten Tag Gründungsmitglied, Leadgitarrist und damit der Veteran der Band. Er spielt seit seinem achten Lebensjahr Gitarre. Einflüsse aus Blues, Metal und modernen Core-Bands prägen seine melodischen Riffs und atmosphärischen Synth-Elemente.',
            'Sueri entdeckte mit 14 Jahren seine Leidenschaft für tiefe Töne; seine Wurzeln liegen im Skatepunk der frühen 2000er. Seit 2016 ist er festes Mitglied von Asura Falls und liefert am Bass das unverzichtbare Fundament der Musik.',
            'Obwohl Erasmus mehrere Instrumente beherrscht, gehört seine wahre Leidenschaft dem Schlagzeug. Einflüsse von Videospiel-Soundtracks bis Progressive Metal verbinden sich in seinem Spiel zu kraftvollen Beats und verspielten Fills, die Asura Falls vorantreiben.'
        ],
        '.history-content p': [
            'Die Geschichte von Asura Falls begann 2014 – nicht im Proberaum, sondern bei feuchtfröhlichen Nächten, Gartenpartys und langen Abenden voller Musik. Die Gitarristen Cons und Schosch spielten damals in verschiedenen Bands, hatten aber immer eines gemeinsam: ihre Gitarren. Bei ihren Treffen entstanden eigene Riffs, spontane Songideen und energiegeladene Covers. Schnell wurde klar, dass daraus mehr als nur ein Zeitvertreib werden würde.',
            'Inspiriert von Bands wie Killswitch Engage und Parkway Drive nahm die Idee einer eigenen Band Gestalt an. Gemeinsam mit Alex am Schlagzeug und Thomas am Bass entstand die erste Besetzung von Asura Falls. Kurz darauf vervollständigte Sänger Basti die Band.',
            'Die ersten Konzerte folgten bald. 2015 spielten Asura Falls ihr Live-Debüt bei „Möwa Rockt“. Es folgten Bandwettbewerbe und Auftritte in Jugendzentren, bei denen sich die Band mit immer mehr eigenen Songs einen Namen machte und wertvolle Bühnenerfahrung sammelte.',
            'In den folgenden Jahren entwickelten sich Asura Falls stetig weiter. Besetzungswechsel prägten ihren Weg und ihr Sound reifte. Nach Thomas’ Ausstieg übernahm Sueri den Bass. Als Gründungsgitarrist Schosch 2018 die Band verließ, kam kurz darauf Jonas dazu und brachte technische Stärke, Musikalität und neue kreative Energie mit.',
            'Nicht immer lief alles reibungslos. Besonders bei Gesang und Schlagzeug fehlten wiederholt feste Mitglieder. Während der COVID-19-Pandemie wurde die Suche fast unmöglich. Trotzdem gab die Band nicht auf. Dennis kam am Schlagzeug und Erik als Sänger dazu; gemeinsam arbeiteten sie intensiv an neuem Material, auch wenn fast zwei Jahre lang kaum Auftritte möglich waren.',
            'Nach der Pandemie kehrte die Band mit neuer Energie auf die Bühne zurück. Als Erik die Band verließ, begann erneut die Suche nach einer Stimme. Mit Nemo fand Asura Falls schließlich einen vielseitigen Frontmann. Kurz darauf kam Jenny hinzu – ihre melodische und kraftvolle Stimme ergänzte Nemos Screams und eröffnete dem Sound eine neue Dimension.',
            'Wenig später folgte ein weiterer Rückschlag: Schlagzeuger Dennis verließ Asura Falls. Mit Erasmus fand die Band jedoch einen Drummer, dessen technische Fähigkeiten und kraftvolle Beats den Sound auf ein neues Niveau hoben und der bis heute fester Bestandteil ist.',
            'Heute steht Asura Falls für eine Band, die trotz vieler Rückschläge nie aufgegeben hat. Angetrieben von Leidenschaft, Zusammenhalt und ständiger Entwicklung zeigt ihre Geschichte, dass echte Musik aus Ausdauer, Freundschaft und dem festen Willen entsteht, immer weiterzumachen.'
        ]
    };
    const savedLanguage = localStorage.getItem('asura-falls-language');
    let currentLanguage = supportedLanguages.includes(savedLanguage)
        ? savedLanguage
        : (navigator.language || 'en').toLowerCase().startsWith('de') ? 'de' : 'en';

    const localized = (value) => {
        if (!value || typeof value !== 'object') return value || '';
        return value[currentLanguage]
            || value.en
            || value.de
            || Object.values(value).find(candidate => typeof candidate === 'string' && candidate.trim())
            || '';
    };

    const renderShows = () => {
        const container = document.getElementById('shows-content');
        if (!container) return;
        container.innerHTML = siteContent.shows.map(show => {
            const location = show.location ? `<p><strong>${translations[currentLanguage]['shows.location']}</strong> ${localized(show.location)}</p>` : '';
            const withArtists = show.with ? `<p><strong>${translations[currentLanguage]['shows.with']}</strong> ${localized(show.with)}</p>` : '';
            const description = show.description ? `<p>${localized(show.description)}</p>` : '';
            const ticket = show.ticketLabel
                ? show.url
                    ? `<a href="${show.url}" class="btn btn-tickets" target="_blank" rel="noopener noreferrer">${localized(show.ticketLabel)}</a>`
                    : `<span class="btn btn-tickets ticket-label">${localized(show.ticketLabel)}</span>`
                : '';
            return `<article class="show-card animate-on-scroll visible">
                <img src="${show.image}" alt="${localized(show.title)}" class="show-image" loading="lazy">
                <div class="show-info"><h3>${localized(show.title)}</h3>${description}${location}${withArtists}${ticket}</div>
            </article>`;
        }).join('');
    };

    const renderPress = () => {
        const container = document.getElementById('press-content');
        if (!container) return;
        container.innerHTML = siteContent.press.map(item => `
            <div class="col-md-6 mb-4 animate-on-scroll visible">
                <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="text-decoration-none">
                    <article class="content-box press-box h-100">
                        <img src="${item.image}" alt="${localized(item.imageAlt)}" class="img-fluid rounded mb-3" loading="lazy">
                        <h4>${localized(item.title)}</h4><p class="text-muted">${localized(item.description)}</p>
                    </article>
                </a>
            </div>`).join('');
    };

    const applyLanguage = (language, persist = false) => {
        currentLanguage = supportedLanguages.includes(language) ? language : 'en';
        if (persist) localStorage.setItem('asura-falls-language', currentLanguage);
        document.documentElement.lang = currentLanguage;
        const route = window.location.pathname.replace(/\/+$/, '').split('/').pop() || 'home';
        const pageTitles = {
            home: { en: 'Asura Falls | Metalcore from Frankfurt', de: 'Asura Falls | Metalcore aus Frankfurt' },
            history: { en: 'History | Asura Falls', de: 'Geschichte | Asura Falls' },
            gallery: { en: 'Gallery | Asura Falls', de: 'Galerie | Asura Falls' },
            imprint: { en: 'Imprint | Asura Falls', de: 'Impressum | Asura Falls' }
        };
        if (pageTitles[route]) document.title = pageTitles[route][currentLanguage];
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const translated = translations[currentLanguage][element.dataset.i18n];
            if (translated) element.textContent = translated.replace('{service}', element.dataset.service || '');
        });
        document.querySelectorAll('[data-i18n-en][data-i18n-de]').forEach(element => {
            element.textContent = element.dataset[`i18n${currentLanguage === 'de' ? 'De' : 'En'}`];
        });
        Object.entries(germanLongForm).forEach(([selector, germanTexts]) => {
            document.querySelectorAll(selector).forEach((element, index) => {
                if (!element.dataset.englishText) element.dataset.englishText = element.textContent.trim();
                element.textContent = currentLanguage === 'de'
                    ? (germanTexts[index] || element.dataset.englishText)
                    : element.dataset.englishText;
            });
        });
        document.querySelectorAll('[data-title-en][data-title-de]').forEach(element => {
            element.textContent = currentLanguage === 'de' ? element.dataset.titleDe : element.dataset.titleEn;
        });
        document.querySelectorAll('.language-toggle button').forEach(button => {
            const active = button.dataset.language === currentLanguage;
            button.classList.toggle('active', active);
            button.setAttribute('aria-pressed', active.toString());
        });
        renderShows();
        renderPress();
        document.dispatchEvent(new CustomEvent('languagechange', { detail: { language: currentLanguage } }));
    };

    document.querySelectorAll('.language-toggle button').forEach(button => {
        button.addEventListener('click', () => applyLanguage(button.dataset.language, true));
    });

    document.querySelectorAll('[data-current-year]').forEach(element => {
        element.textContent = new Date().getFullYear();
    });

    applyLanguage(currentLanguage);

    if (document.getElementById('shows-content') || document.getElementById('press-content')) {
        try {
            const [showsResponse, pressResponse] = await Promise.all([
                fetch(new URL('data/shows.json', siteRootUrl)),
                fetch(new URL('data/press.json', siteRootUrl))
            ]);
            if (!showsResponse.ok || !pressResponse.ok) throw new Error('Content request failed');
            const parseContentResponse = async response => {
                const text = (await response.text()).replace(/^\uFEFF/, '');
                // Content editors commonly remove one translation line and leave
                // its preceding comma behind. Accept that harmless JSON mistake.
                return JSON.parse(text.replace(/,\s*([}\]])/g, '$1'));
            };
            [siteContent.shows, siteContent.press] = await Promise.all([
                parseContentResponse(showsResponse),
                parseContentResponse(pressResponse)
            ]);
            renderShows();
            renderPress();
        } catch (error) {
            console.error('Unable to load website content.', error);
        }
    }

    /**
     * 1. Navigation & Smooth Scroll
     * Optimized to handle same-page anchors and cross-page hash links.
     * EXCLUDES carousel controls to prevent jumping.
     */
    const navHeight = () => document.querySelector('.navbar').offsetHeight;

    const smoothScrollTo = (target) => {
        const targetElement = typeof target === 'string' ? document.getElementById(target) : target;
        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - (navHeight() - 10);
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            return true;
        }
        return false;
    };

    const handleLinkClick = (e) => {
        const link = e.currentTarget;
        const href = link.getAttribute('href');
        
        // Ignore carousel controls and empty links
        if (!href || href === '#' || href === 'javascript:void(0)' || link.classList.contains('carousel-control-prev') || link.classList.contains('carousel-control-next')) {
            return;
        }

        // If it's a simple hash link on the current page
        if (href.startsWith('#')) {
            if (smoothScrollTo(href.substring(1))) {
                e.preventDefault();
                history.pushState(null, null, href);
                closeMobileMenu();
            }
        } 
        // If it's a link to the home page plus a hash from another page
        else if (href.includes('#')) {
            const [path, hash] = href.split('#');
            const currentPath = window.location.pathname;
            
            // If we are already on the page the hash refers to
            if (currentPath.endsWith(path) || ((path === './' || path === '../' || path === '/') && currentPath.endsWith('/'))) {
                if (smoothScrollTo(hash)) {
                    e.preventDefault();
                    history.pushState(null, null, '#' + hash);
                    closeMobileMenu();
                }
            }
        }
    };

    const closeMobileMenu = () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const toggler = document.querySelector('.navbar-toggler');
            if (toggler) toggler.click();
        }
    };

    document.querySelectorAll('a[href*="#"]').forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

    // Handle hash on initial page load
    if (window.location.hash) {
        setTimeout(() => smoothScrollTo(window.location.hash.substring(1)), 200);
    }

    /**
     * Active section indicator.
     * Highlights the home-page navigation link for the section currently
     * passing beneath the fixed navbar.
     */
    const sectionNavLinks = Array.from(document.querySelectorAll('.navbar a[href*="#"]'))
        .map(link => {
            const hash = new URL(link.href, window.location.href).hash;
            return { link, section: hash ? document.querySelector(hash) : null };
        })
        .filter(item => item.section);

    if (sectionNavLinks.length) {
        let sectionUpdateQueued = false;

        const updateActiveSection = () => {
            sectionUpdateQueued = false;
            const marker = window.scrollY + navHeight() + 40;
            let activeItem = null;

            const atPageBottom = window.scrollY + window.innerHeight
                >= document.documentElement.scrollHeight - 2;

            if (atPageBottom) {
                activeItem = sectionNavLinks[sectionNavLinks.length - 1];
            } else {
                sectionNavLinks.forEach(item => {
                    const sectionTop = item.section.getBoundingClientRect().top + window.scrollY;
                    if (sectionTop <= marker) activeItem = item;
                });
            }

            sectionNavLinks.forEach(item => {
                const active = item === activeItem;
                item.link.classList.toggle('active', active);
                if (active) {
                    item.link.setAttribute('aria-current', 'location');
                } else {
                    item.link.removeAttribute('aria-current');
                }
            });
        };

        const queueActiveSectionUpdate = () => {
            if (sectionUpdateQueued) return;
            sectionUpdateQueued = true;
            requestAnimationFrame(updateActiveSection);
        };

        window.addEventListener('scroll', queueActiveSectionUpdate, { passive: true });
        window.addEventListener('resize', queueActiveSectionUpdate);
        window.addEventListener('hashchange', queueActiveSectionUpdate);
        updateActiveSection();
    }

    /**
     * 2. Scroll Animation (Optimized with requestAnimationFrame for smoothness)
     */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                requestAnimationFrame(() => {
                    entry.target.classList.add('visible');
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    /**
     * 3. Media Loaders (YouTube / Spotify)
     */
    const setupLoader = (btnId, placeholderId, iframeHtml) => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener('click', () => {
                const placeholder = document.getElementById(placeholderId);
                placeholder.innerHTML = iframeHtml;
                placeholder.style.background = 'transparent';
                placeholder.style.border = 'none';
            });
        }
    };

    setupLoader('loadYouTube', 'youtube-placeholder', 
        '<iframe style="border-radius:12px; border:none; width:100%; height:352px;" src="https://www.youtube.com/embed/videoseries?list=PLV8oNL8D_M-BPqYUnhmC_LzIbsH4a2o3a" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>');
    
    setupLoader('loadSpotify', 'spotify-placeholder', 
        '<iframe style="border-radius:12px; border:none; width:100%; height:352px;" src="https://open.spotify.com/embed/artist/1M0iXpavLgKsRaZfiB18ne?utm_source=generator&theme=0" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>');

    /**
     * 4. Back to Top Logic
     */
    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 600) {
                backToTop.classList.add("visible");
            } else {
                backToTop.classList.remove("visible");
            }
        }, { passive: true });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /**
     * 5. Gallery Filter Logic
     */
    const filterButtons = document.querySelectorAll('.btn-filter');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-category');
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                document.querySelectorAll('.gallery-item').forEach(item => {
                    item.style.display = (category === 'all' || item.classList.contains(category)) ? 'block' : 'none';
                });
            });
        });
    }
});

/**
 * Global Lightbox Functions
 */
function showImage(src) {
    const overlay = document.getElementById('imageOverlay');
    const img = document.getElementById('overlayImage');
    if (overlay && img) {
        img.src = src;
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Lightbox Closer
(function() {
    const lightboxOverlay = document.getElementById('imageOverlay');
    if (lightboxOverlay) {
        lightboxOverlay.addEventListener('click', () => {
            lightboxOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
})();
