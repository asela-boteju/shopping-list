$(function() {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const addListItem = $(this).find('input[name="shopping-list-entry"]').val();
        console.log(addListItem)
        $("ul").append(`<li><span class="shopping-item">${addListItem}</span> <div class="shopping-item-controls"><button class="shopping-item-toggle"> <span class="button-label">check</span> </button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`)
    })

    $('ul').on('click', 'button[class="shopping-item-delete"]', function(event){
        $(this).parent().parent().remove();
    })

    $('ul').on('click', 'button[class="shopping-item-toggle"]', function(event){
        console.log($(this).parent().parent().find('.shopping-item__checked'))
        if ($(this).parent().parent().hasClass('shopping-item__checked')){
            $(this).parent().parent().removeClass('shopping-item__checked');
        } else {
           $(this).parent().parent().addClass('shopping-item__checked'); 
        }
        
    })

})