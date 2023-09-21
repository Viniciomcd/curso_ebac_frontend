$('form').on ('submit', function(e) {
    e.preventDefault()

    const list = $('#entradaDados').val()

    const novoItem =  $('<li></li>');
    $(`<li>${list}</li>`).appendTo(novoItem);
    $(novoItem).appendTo('ul')

    $('#entradaDados').val(' ')

    $('li').click(function() {
        $(this).css('text-decoration', 'line-through');
    })
})


