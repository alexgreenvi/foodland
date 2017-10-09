$(document).ready(function () {
    _resize.init();
    header_fix.init();
    /* Пренос блоков соглана размеру экрана
     * Откуда : data-resize="logo" data-resize-width="1000"
     * Куда   : data-resize-after="logo"
     */

    $('.slider__carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        dotsClass: 'dots'
    });

    $('.recommendation-carousel').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<svg class='arrows arrows--prev' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'/></svg>",
        nextArrow: "<svg class='arrows arrows--next' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z'/></svg>",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.popular__carousel').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<svg class='arrows arrows--prev' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'/></svg>",
        nextArrow: "<svg class='arrows arrows--next' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z'/></svg>",
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.recommendation-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true,
        prevArrow: "<svg class='arrows arrows--prev' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'/></svg>",
        nextArrow: "<svg class='arrows arrows--next' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z'/></svg>",
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.random__carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<svg class='random__arrows random__arrows--prev' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'/></svg>",
        nextArrow: "<svg class='random__arrows random__arrows--next' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z'/></svg>",
    });
    $('.clients__carousel').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<svg class='arrows arrows--prev' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'/></svg>",
        nextArrow: "<svg class='arrows arrows--next' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z'/></svg>",
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.category-carousel').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<svg class='arrows arrows--prev' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'/></svg>",
        nextArrow: "<svg class='arrows arrows--next' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z'/></svg>",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 758,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.tm-carousel__carousel').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<svg class='arrows arrows--prev' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'/></svg>",
        nextArrow: "<svg class='arrows arrows--next' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z'/></svg>",
        vertical: true
    });

    $('.tm-carousel-horizontal__carousel').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<svg class='arrows arrows--prev' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'/></svg>",
        nextArrow: "<svg class='arrows arrows--next' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z'/></svg>",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.analog-carousel__carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<svg class='arrows arrows--prev' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'/></svg>",
        nextArrow: "<svg class='arrows arrows--next' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z'/></svg>",
        vertical: true
    });

    $('.block-product-img__carousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<svg class='arrows arrows--prev' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'/></svg>",
        nextArrow: "<svg class='arrows arrows--next' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z'/></svg>"
    });
    $('.product-use-carousel_4__carousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<svg class='arrows arrows--prev' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'/></svg>",
        nextArrow: "<svg class='arrows arrows--next' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z'/></svg>",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 758,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.product-use-carousel__carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<svg class='random__arrows random__arrows--prev' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'/></svg>",
        nextArrow: "<svg class='random__arrows random__arrows--next' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z'/></svg>"
    });


    $('.header__nav-btn').on('click', function () {
        var $parent = $(this).closest('.header'),
            $menu = $parent.find('.header__modal');
        $menu.toggleClass('active');
    });
    $('.header__modal__close').on('click', function () {
        var $parent = $(this).closest('.header__modal');
        $parent.removeClass('active');
    });
});


var _resize = {
    init: function () {
        this.width = 0;
        this.arElements = $('[data-resize]');
        this.arResize = [];

        this.load();
    },
    load: function () {

        this.arElements.each(function (index, element) {
            _resize.arResize[index] = [element];
        });

        this.resize();
        $(window).resize(this.resize);
    },
    resize: function () {
        _resize.width = $(document).width() + 5;
       // console.log(_resize.width);
        for (var i in _resize.arResize) {
            var _this = _resize.arResize[i];

            var name = $(_this).attr('data-resize');
            var size = $(_this).attr('data-resize-width');

            var before = $('[data-resize=' + name + ']');
            var after = $('[data-resize-after=' + name + ']');

            if ($(after).children().length < 1) {}

            if (_resize.width < size) {
                var block = before.children();
              //  console.log(block);

                block.detach();
                after.prepend(block);
            } else {
                var block = after.children();

                block.detach();
                before.prepend(block);
            }
        };
    }
};
var header_fix = {
    init: function () {
        var header = $('.header');


        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.header').addClass('fixed');
            } else if ($(this).scrollTop() < 100) {
                $('.header').removeClass('fixed');
            }
        });


    }
}

// Активный элемент по умолчанию под номером 2

$(document).ready(function () {
    // $('[data-number="item2"]').addClass('active');

    $('.icon').hover(function () {
        var number = $(this).data('number');

        $('.icon[data-number="' + number + '"]').addClass('hover')

        $(this).mouseout(function () {
            $('.icon[data-number="' + number + '"]').removeClass('hover')
        });

    });


    $('.icon').on('click', function () {

        var number = $(this).data('number');

        if ($('[data-number="' + number + '"]').hasClass('active')) {
            $('[data-type="piece"]').removeClass('active');
        } else {
            $('[data-type="piece"]').removeClass('active');
            $('[data-number="' + number + '"]').addClass('active');

        }

        $('[data-cheese="content"]').removeClass('active');
        $('[data-cheese-index="' + number + '"]').addClass('active');

        // Чтобы добавить анимацию, связанную с кликом по куску сыра, необходимо добавить
        // data-type="piece"
        // 
        // и присвоить порядковый номер, соответствующий номеру куска
        // data-number="item(порядковый номер)"
    });
});

$(document).ready(function () {

    var rotate = 0,
        active = 1,
        to = 0;

    $('.circle').on('click', function () {
        var $this = $(this),
            index = $this.attr('data-index');


        if (active == 3 && index == 1) rotate -= 120;
        if (active == 3 && index == 2) rotate += 120;

        if (active == 2 && index == 1) rotate += 120;
        if (active == 2 && index == 3) rotate -= 120;

        if (active == 1 && index == 2) rotate -= 120;
        if (active == 1 && index == 3) rotate += 120;


        //console.log('актимнам' + active + ' тек ' + index);

        anime({
            targets: '#spinner .rotate-wrap',
            rotate: rotate + 'deg',
            duration: 0,
            easing: 'easeInOutSine'

        });

        if (active != index) {
            if (active == 3 && index == 1) to -= -120;
            if (active == 3 && index == 2) to += -120;

            if (active == 2 && index == 1) to += -120;
            if (active == 2 && index == 3) to -= -120;

            if (active == 1 && index == 2) to -= -120;
            if (active == 1 && index == 3) to += -120;


            anime({
                targets: '.circle',
                rotate: +to + 'deg',
                duration: 50,
                easing: 'easeInOutSine'
            });
        }


        active = index;

        $('.circle').removeClass('active');
        $this.addClass('active');

        $('[data-spinner="content"]').removeClass('active')
        $('[data-index="' + index + '"]').addClass('active')


        // var index = $(this).data('index'),
        //     current = $(this).parent().attr('data-current'),
        //     destination = $(this).parent().attr('data-to');
        //
        //
        // if (index != destination || destination) {
        //     $('.circle').removeClass('active')
        //     $this = $(this).addClass('active').parent();
        //
        //     if($this.attr('data-to') === 'num3') {index = 'num1'}
        //
        //     $this.attr('data-current', index);
        //     $this.attr('data-to', index);
        //     $this.attr('data-from', current);
        //
        //     $('[data-spinner="content"]').removeClass('active')
        //     $('[data-index="'+ index +'"]').addClass('active')
        // }

        // Для элементов контента, связанных с вращением изображений, необходимо добавить этим элементам
        // data-spinner="content"
        //
        // и присвоить соответствующий порядковый номер
        // data-index="num(порядковый номер)"

    })

    //   Выпадающие меню

});

(function () {
    [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
        new SelectFx(el);
    });
})();

$(document).ready(function () {
    //обработка click выбора маршрута и способа добраться 
    var routeBy = $('.route__by'),
        routeByFoot = $('.route__by_foot'),
        routeByCar = $('.route__by_car'),
        routeByPublic = $('.route__by_public'),
        routeMetro = $('.route__metro'),
        metroTS = $('.route__metro_ts'),
        metroYZ = $('.route__metro_yz'),
        iframe = $('iframe');

    //обработка click по метро
    metroTS.click(function () {
        if (metroTS.hasClass('active')) {
            return;
        } else {
            routeMetro.removeClass('active');
            metroTS.addClass('active');
            if (routeByFoot.hasClass('active')) {
                iframe.attr('src', 'https://yandex.ru/map-widget/v1/-/CBUDeBC6gB');
            } else if (routeByCar.hasClass('active')) {
                iframe.attr('src', 'https://yandex.ru/map-widget/v1/-/CBUDe4glcC');
            } else {
                iframe.attr('src', 'https://yandex.ru/map-widget/v1/-/CBUD4SfGlD');
            }
        }
    });

    //обработка click по метро
    metroYZ.click(function () {
        if (metroYZ.hasClass('active')) {
            return;
        } else {
            routeMetro.removeClass('active');
            metroYZ.addClass('active');
            if (routeByFoot.hasClass('active')) {
                iframe.attr('src', 'https://yandex.ru/map-widget/v1/-/CBUDiSAKXA');
            } else if (routeByCar.hasClass('active')) {
                iframe.attr('src', 'https://yandex.ru/map-widget/v1/-/CBUDiWeDCB');
            } else {
                iframe.attr('src', 'https://yandex.ru/map-widget/v1/-/CBUDiWT01A');
            }
        }
    });

    //обработка click по способу добаться
    routeByFoot.click(function () {
        if (routeByFoot.hasClass('active')) {
            return;
        } else {
            routeBy.removeClass('active');
            routeByFoot.addClass('active');
            if (metroTS.hasClass('active')) {
                iframe.attr('src', 'https://yandex.ru/map-widget/v1/-/CBUDeBC6gB');
            } else {
                iframe.attr('src', 'https://yandex.ru/map-widget/v1/-/CBUDiSAKXA');
            }
        }
    });

    //обработка click по способу добаться
    routeByCar.click(function () {
        if (routeByCar.hasClass('active')) {
            return;
        } else {
            routeBy.removeClass('active');
            routeByCar.addClass('active');
            if (metroTS.hasClass('active')) {
                iframe.attr('src', 'https://yandex.ru/map-widget/v1/-/CBUDe4glcC');
            } else {
                iframe.attr('src', 'https://yandex.ru/map-widget/v1/-/CBUDiWeDCB');
            }
        }
    });

    //обработка click по способу добаться
    routeByPublic.click(function () {
        if (routeByPublic.hasClass('active')) {
            return;
        } else {
            routeBy.removeClass('active');
            routeByPublic.addClass('active');
            if (metroTS.hasClass('active')) {
                iframe.attr('src', 'https://yandex.ru/map-widget/v1/-/CBUD4SfGlD');
            } else {
                iframe.attr('src', 'https://yandex.ru/map-widget/v1/-/CBUDiWT01A');
            }
        }
    });
});

//----------------------
//  карта регионов
//----------------------

ymaps.ready(function () {

    geoMap = new ymaps.Map('map', {
        center: [62.788252602236476, 88.50848728079634],
        type: "yandex#map",
        // убрать все элементы control на карте
        controls: [],
        zoom: 3
    });

    var lastCollection = 0,
        lng = 'ru',
        contr = 'RU',
        level = '0';

    if (lastCollection) {
        geoMap.geoObjects.remove(lastCollection);
    }

    ymaps.regions.load(contr, {
        lang: lng,
        quality: level
    }).then(function (result) {
        lastCollection = result.geoObjects;
        //  осноыной цвет регионов
        lastCollection.options.set('fillColor', '#fff145');
        //  цвет границ
        lastCollection.options.set('preset', {
            strokeWidth: 1,
            strokeColor: 'ffd13b'
        });
        lastCollection.each(function (reg) {
            switch (reg.properties.get('osmId')) {
                case '191706':
                    {
                        reg.options.set(
                            'fillColor',
                            '#159d40');
                        reg.options.set('preset', {
                            strokeWidth: 1,
                            strokeColor: '0f7120'
                        });
                        break;
                    }

                case '190090':
                    {
                        reg.options.set(
                            'fillColor',
                            '#159d40');
                        reg.options.set('preset', {
                            strokeWidth: 1,
                            strokeColor: '0f7120'
                        });
                        break;
                    }
                case '145454':
                    {
                        reg.options.set(
                            'fillColor',
                            '#159d40');
                        reg.options.set('preset', {
                            strokeWidth: 1,
                            strokeColor: '0f7120'
                        });
                        break;
                    }
            }
        });


        geoMap.geoObjects.add(lastCollection);


        // Создание макета балуна 
        MapBalloonLayout = ymaps.templateLayoutFactory.createClass(
                '<div class="map-balloon">' +
                '<a class="map-balloon__close" href="#">&#9587;</a>' +
                '<div class="map-balloon__arrow"></div>' +
                '<div class="map-balloon__inner">' +
                '$[[options.contentLayout observeSize minWidth=235 maxWidth=235 maxHeight=350]]' +
                '</div>' +
                '</div>', {
                    /**
                     * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
                     * @function
                     * @name build
                     */
                    build: function () {
                        this.constructor.superclass.build.call(this);

                        this._$element = $('.map-balloon', this.getParentElement());

                        this.applyElementOffset();

                        this._$element.find('.map-balloon__close')
                            .on('click', $.proxy(this.onCloseClick, this));
                    },

                    /**
                     * Удаляет содержимое макета из DOM.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
                     * @function
                     * @name clear
                     */
                    clear: function () {
                        this._$element.find('.map-balloon__close')
                            .off('click');

                        this.constructor.superclass.clear.call(this);
                    },

                    /**
                     * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                     * @function
                     * @name onSublayoutSizeChange
                     */
                    onSublayoutSizeChange: function () {
                        MapBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

                        if (!this._isElement(this._$element)) {
                            return;
                        }

                        this.applyElementOffset();

                        this.events.fire('shapechange');
                    },

                    /**
                     * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                     * @function
                     * @name applyElementOffset
                     */
                    applyElementOffset: function () {
                        this._$element.css({
                            left: -(this._$element[0].offsetWidth / 2),
                            top: -(this._$element[0].offsetHeight + this._$element.find('.map-balloon__arrow')[0].offsetHeight)
                        });
                    },

                    /**
                     * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                     * @function
                     * @name onCloseClick
                     */
                    onCloseClick: function (e) {
                        e.preventDefault();

                        this.events.fire('userclose');
                    },

                    /**
                     * Используется для автопозиционирования (balloonAutoPan).
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
                     * @function
                     * @name getClientBounds
                     * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
                     */
                    getShape: function () {
                        if (!this._isElement(this._$element)) {
                            return MapBalloonLayout.superclass.getShape.call(this);
                        }

                        var position = this._$element.position();

                        return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                    [position.left, position.top], [
                        position.left + this._$element[0].offsetWidth,
                        position.top + this._$element[0].offsetHeight + this._$element.find('.map-balloon__arrow')[0].offsetHeight
                    ]
                ]));
                    },

                    /**
                     * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
                     * @function
                     * @private
                     * @name _isElement
                     * @param {jQuery} [element] Элемент.
                     * @returns {Boolean} Флаг наличия.
                     */
                    _isElement: function (element) {
                        return element && element[0] && element.find('.map-balloon__arrow')[0];
                    }
                }),
            MapBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div class="map-balloon__inner__content">$[properties.balloonContent]</div>'
            );

        placemarkFactory = new ymaps.Placemark([55.61414730895103, 37.47190599999999], {
            balloonContent: '142771, Москва, пос. Мосрентген, ПП «Автострой»'
        }, {
            // Опции.
            balloonShadow: false,
            balloonLayout: MapBalloonLayout,
            balloonContentLayout: MapBalloonContentLayout,
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../images/icons/fact-sh.png',
            // Размеры метки.
            iconImageSize: [41, 37]
        });
        placemarkFactory2 = new ymaps.Placemark([64.9614028569075, 62.40949755273436], {
            balloonContent: '142771, Москва, пос. Мосрентген, ПП «Автострой»'
        }, {
            // Опции.
            balloonShadow: false,
            balloonLayout: MapBalloonLayout,
            balloonContentLayout: MapBalloonContentLayout,
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../images/icons/fact-sh.png',
            // Размеры метки.
            iconImageSize: [41, 37]
        });
        placemarkFactory3 = new ymaps.Placemark([58.55266732499611, 84.33820849023435], {
            balloonContent: '142771, Москва, пос. Мосрентген, ПП «Автострой»'
        }, {
            // Опции.
            balloonShadow: false,
            balloonLayout: MapBalloonLayout,
            balloonContentLayout: MapBalloonContentLayout,
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../images/icons/fact-sh.png',
            // Размеры метки.
            iconImageSize: [41, 37]
        });
        placemarkFactory4 = new ymaps.Placemark([58.73593601918061, 67.15559130273435], {
            balloonContent: '142771, Москва, пос. Мосрентген, ПП «Автострой»'
        }, {
            // Опции.
            balloonShadow: false,
            balloonLayout: MapBalloonLayout,
            balloonContentLayout: MapBalloonContentLayout,
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../images/icons/fact-sh.png',
            // Размеры метки.
            iconImageSize: [41, 37]
        });
        placemarkFactory5 = new ymaps.Placemark([58.09025713015575, 55.20246630273436], {
            balloonContent: '142771, Москва, пос. Мосрентген, ПП «Автострой»'
        }, {
            // Опции.
            balloonShadow: false,
            balloonLayout: MapBalloonLayout,
            balloonContentLayout: MapBalloonContentLayout,
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../images/icons/fact-sh.png',
            // Размеры метки.
            iconImageSize: [41, 37]
        });
        placemarkOffice = new ymaps.Placemark([52.9244134978265, 39.64582567773435], {
            balloonContent: '142771, Москва, пос. Мосрентген, ПП «Автострой»'
        }, {
            // Опции.
            balloonShadow: false,
            balloonLayout: MapBalloonLayout,
            balloonContentLayout: MapBalloonContentLayout,
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../images/icons/office-sh.png',
            // Размеры метки.
            iconImageSize: [41, 37]
        });
        placemarkFilial = new ymaps.Placemark([47.786119567765326, 40.524731927734344], {
            balloonContent: '142771, Москва, пос. Мосрентген, ПП «Автострой»'
        }, {
            // Опции.
            balloonShadow: false,
            balloonLayout: MapBalloonLayout,
            balloonContentLayout: MapBalloonContentLayout,
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../images/icons/filial-sh.png',
            // Размеры метки.
            iconImageSize: [41, 37]
        });
        placemarkFilial2 = new ymaps.Placemark([51.58964143433744, 45.138989740234344], {
            balloonContent: '142771, Москва, пос. Мосрентген, ПП «Автострой»'
        }, {
            // Опции.
            balloonShadow: false,
            balloonLayout: MapBalloonLayout,
            balloonContentLayout: MapBalloonContentLayout,
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../images/icons/filial-sh.png',
            // Размеры метки.
            iconImageSize: [41, 37]
        });
        geoMap.geoObjects.add(placemarkFactory)
            .add(placemarkFactory2)
            .add(placemarkFactory3)
            .add(placemarkFactory4)
            .add(placemarkFactory5)
            .add(placemarkOffice)
            .add(placemarkFilial)
            .add(placemarkFilial2);


    }, function () {
        //alert('no response');
    });

});
