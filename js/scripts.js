$(document).ready(function () {
    _resize.init();
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
    $('.product-use-carousel__carousel').slick({
       infinite: true,
       slidesToShow: 1,
           slidesToScroll: 1,
           arrows: true,
           prevArrow: "<svg class='random__arrows random__arrows--prev' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'/></svg>",
           nextArrow: "<svg class='random__arrows random__arrows--next' width='42' height='42' viewBox='0 0 477.175 477.175'><path d='M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z'/></svg>",
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

        for (var i in _resize.arResize) {
            var _this = _resize.arResize[i];

            var name = $(_this).attr('data-resize');
            var size = $(_this).attr('data-resize-width');

            var before = $('[data-resize=' + name + ']');
            var after = $('[data-resize-after=' + name + ']');

            if ($(after).children().length < 1) {}

            if (_resize.width < size) {
                var block = before.children();

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


        console.log('актимнам' + active + ' тек ' + index);

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
