$.getJSON("json/trufas.json", function(data){
    $.each(data.items, function(i, item) {
        $('#trufas').append('<div class="col-4">'+
                '<img class="img-fluid"'+
                    'src="'+item.imageUrl+'"'+
                    'alt="Trufa Meio Amargo">'+
            '</div>'+
            '<div class="align-self-center col-4">'+
                '<p><strong>'+item.name+'</strong></p>'+
               '<p class="form-text">R$ '+item.price+'</p>'+
                '<p><strong>R$ '+item.sellingPrice+'</strong></p>'+
            '</div>'+
            '<div class="align-self-center col-4">'+
                '<button class="btn btn-danger">Remover</button>'+
                '<button class="btn btn-primary">Adicionar</button>'+
            '</div>')
    });
});

