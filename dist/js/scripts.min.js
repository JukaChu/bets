var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el);
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })

    })
}

allLozadImg();


// scroll animations
var anim = document.querySelectorAll('.anim')

function scrollAnimations() {
    if (anim.length) {
        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                var el = entry.target;
                if (entry.isIntersecting) {
                    if (el.classList.contains('anim-js')) {

                    } else {
                        el.style.animationDelay = el.dataset.animDelay + 'ms';
                        el.style.animationDuration = el.dataset.animDuration + 'ms';
                        el.style.animationName = el.dataset.anim;
                    }
                    el.classList.add('done');


                } else {
                    el.classList.remove('done');
                }

            })
        }, {threshold: .5});
        if (window.innerWidth > 991) {
            anim.forEach(animate => {
                observer.observe(animate)
            })
        } else {

            anim.forEach(animate => {

                observer.observe(animate)


            })
        }
    }
}

scrollAnimations();


//page content

let pageContent = [...document.querySelectorAll('.page-content__cont > span')];
let pageContentLink = [...document.querySelectorAll('.page-content__cont ul li a')];

function controlPageContent() {
    if (pageContent.length) {
        pageContent.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.page-content__cont').classList.toggle('open');
            })
        });
        pageContentLink.forEach((bt2) => {
            let dataItem = bt2.dataset.lnk;
            bt2.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                bt2.closest('.page-content__cont').classList.remove('open');
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(`.${dataItem}`).offset().top - 100
                }, 500);
            });
        })
    }
}

controlPageContent();

//
let copyText = [...document.querySelectorAll('.copy-text')];

function copyOurText() {
    if (copyText.length) {
        copyText.forEach((btn) => {
            btn.addEventListener('click', () => {
                myFunction(btn);
            })
        })
    }
}

copyOurText();

function timerText() {
    copyText[0].classList.remove('copied')
}

let timeOut = setTimeout(timerText, 4000);

function myFunction(btn) {
    // Get the text field

    navigator.clipboard.writeText(btn.innerHTML);

    // Alert the copied text
    // alert("Copied the text: " + copyText.innerHTML);
    clearTimeout(timeOut);
    btn.classList.add('copied');
    timeOut = setTimeout(timerText, 4000)

}


//faq
let faqItems = [...document.querySelectorAll('.single-faq .faq-head')];

function controlFaq() {
    if (faqItems.length) {
        faqItems.forEach((btn, k) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                faqItems.forEach((btn2, l) => {
                    if (l !== k) {
                        btn2.closest('.single-faq').classList.remove('open');
                    }

                });
                btn.closest('.single-faq').classList.toggle('open');
            })
        })
    }
}

controlFaq();

//faq

let headerLangs = [...document.querySelectorAll('.header-langs > span')];

function controlLangs() {
    if (headerLangs.length) {
        headerLangs.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.header-langs').classList.toggle('open');
            })
        });

        $('body').on('click', function (e) {
            if (e.target.closest('.header-langs')) {
            } else {
                [...document.querySelectorAll('.header-langs')].forEach((hl) => {
                    hl.classList.remove('open');
                });
            }
        })
    }
}

controlLangs();

let downBanner = [...document.querySelectorAll('.download-banner')];

function showDownBanner() {
    if (downBanner.length) {
        downBanner.forEach((btn) => {
            setTimeout(() => {
                btn.classList.add('show');
            }, 3700)
        })
    }
}

showDownBanner();