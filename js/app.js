    
/*caroal */
    $(function () {
        /*carosal*/
        $('.carosal').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow:".Previous",
            nextArrow:".Next"
        });

        $('.seventh_part_container').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay:true,
            autoplaySpeed:2000,
        });

        /*datepicker*/

        $('#datetimepicker4').datetimepicker({
            format: 'L'
        });

        $('#datetimepicker3').datetimepicker({
            format: 'LT'
    });
    });

