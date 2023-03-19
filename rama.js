function MyFunction(){
    email = $('#email').val()
    pesan = $('#pesan').val()
    
    $("#pesann").css({
        'display' : 'block',
        'color' : 'red',
        'background' : 'white'
    });
    $('#nama').html(email)
    $('#comment').html(pesan)
}