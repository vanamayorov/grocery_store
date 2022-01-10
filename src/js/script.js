$(function () {
    $('.menu__show-btn').on('click', function () {
        $('.menu__list-wrapper').addClass('menu__list-wrapper--show');
    });

    $('.menu__list-wrapper').on('click', function (e) {
        if ($('.menu__close-btn').is($(e.target)) || (!$('.menu__list').is($(e.target)) && $('.menu__list').has(e.target).length === 0)) {
            $(this).removeClass('menu__list-wrapper--show');
        }
    });

    function changeTelTitle() {
        if ($(window).width() <= 600) {
            if ($.trim($('.header__order-name').text()) === 'тел.:') return;
            $('.header__order-name').text('тел.:');
        }
    }

    function changeAuthorTitle() {
        if ($(window).width() <= 840 && $(document).find(".about").length > 0) {
            if ($(".about__img-wrapper").has($('.about__figcaption')).length > 0) return;
            var text = $.trim($('.about__blockquote .about__figcaption').text()).split(" ");
            text[1] = text[1][0] + '.';
            text[2] = text[2][0] + '.' + '\n';
            $('.about__figcaption').text(text.join(" "));
            $('.about__figcaption').clone().appendTo(".about__img-wrapper");
        }
    }

    changeTelTitle();
    changeAuthorTitle();


    $(window).resize(function () {
        changeTelTitle();
        changeAuthorTitle();
    });

    const swiper = new Swiper(".banners__slider", {
        slidesPerView: 2,
        spaceBetween: 25,
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 2,
            }
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true
        }
    });

    $('.categories-tabs__button').on('click', function () {
        $('.categories-tabs__button').removeClass('categories-tabs__button--active');
        $(this).addClass('categories-tabs__button--active');
        var index = $(this).data('btn');
        $('.categories-tabs__products-list').removeClass('categories-tabs__products-list--active');
        $(`.categories-tabs__products-list[data-tab=${index}]`).addClass('categories-tabs__products-list--active');
    });

    const instagramSwiper = new Swiper(".our-instagram__slider", {
        slidesPerView: 6,
        breakpoints: {
            320: {
                slidesPerView: 3
            },
            620: {
                slidesPerView: 5
            },
            1150: {
                slidesPerView: 6
            },
            1490: {
                slidesPerView: 8
            }

        },
        loop: true,
        initialSlide: 0,
        slidesPerGroup: 1,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: true,
            disableOnInteraction: false
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true
        }
    });

    $('.catalogue-card__list').masonry({
        itemSelector: '.catalogue-card__item',
        gutter: 30
    });

    function makeBoldText() {
        let text = $.trim($('.shop-description p:first-child').text()).split(" ");
        let first = text[0],
            second = text[1],
            third = text[2];
        $('.shop-description p:first-child').html(`<b>${first} ${second} ${third}</b> ${text.slice(3).join(" ")}`);
    }

    makeBoldText();

    $(document).on("mousemove", ".our-instagram", parallax);
    const elem = $(".our-instagram");

    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        $(elem).css("background-position", x);
    }

    $('.partners-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                digits: true,
                maxlength: 10
            },
            mail: {
                required: true,
                email: true,
            },
            msg: {
                required: true,
            }
        },
        messages: {
            name: {
                required: "Это поле обязательно к заполнению.",
                minlength: "Пожалуйста, введите не менее 2 символов."
            },
            phone: {
                required: "Это поле обязательно к заполнению.",
                digits: "Пожалуйста, вводите только цифры.",
                maxlength: "Пожалуйста, введите не более 10 символов"
            },
            mail: {
                required: "Это поле обязательно к заполнению.",
                email: "Пожалуйста, введите действительный адрес электронной почты."
            },
            msg: {
                required: "Это поле обязательно к заполнению."
            }
        }

    });

    $('.order__form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            surname: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                digits: true,
                maxlength: 10
            },
            mail: {
                required: true,
                email: true,
            },
            address: {
                required: true,
            }
        },
        messages: {
            name: {
                required: "Это поле обязательно к заполнению.",
                minlength: "Пожалуйста, введите не менее 2 символов."
            },
            surname: {
                required: "Это поле обязательно к заполнению.",
                minlength: "Пожалуйста, введите не менее 2 символов."
            },
            phone: {
                required: "Это поле обязательно к заполнению.",
                digits: "Пожалуйста, вводите только цифры.",
                maxlength: "Пожалуйста, введите не более 10 символов"
            },
            mail: {
                required: "Это поле обязательно к заполнению.",
                email: "Пожалуйста, введите действительный адрес электронной почты."
            },
            address: {
                required: "Это поле обязательно к заполнению."
            }
        }

    });

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {
            Carousel: {
                fill: false,
                center: true,
            },
        },
    });
});

