$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()
        const tarefa = $(inputTarefa)
        $('ul').append(`<li>${tarefa.val()}</li>`)
        $('li:last-child').click(function(e){
            $(this).toggleClass('completada')
        })
        tarefa.val('')
    })

    

})