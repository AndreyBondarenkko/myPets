(function ($) {

    //Выравнивание блоков по высоте
    function heightBlock(class_block) {
        var max_col_height = 0;
        $(class_block).each(function () {
            $(this).removeAttr('style');
            if ($(this).height() > max_col_height) {
                max_col_height = $(this).height();
            }
        });
        $(class_block).height(max_col_height);
    };

    $(document).ready(function () {
        //Выравнивание блоков по высоте
        heightBlock('.card .card-box__text'); //какой блок выравниваем

    });

    window.onload = function () {};
    
})(jQuery);