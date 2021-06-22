var trufas = {}

$.getJSON("json/trufas.json", function(data){
    $.each(data.items, function(i, item) {
        trufas[item.uniqueId] = item

        $('#trufas').append('<div class="col-4">'+
            '<img class="img-fluid"'+
                'src="'+item.imageUrl+'"'+
                'alt="'+item.name+'">'+
        '</div>'+
        '<div class="align-self-center p-4 col-4">'+
            '<p><strong>'+item.name+'</strong></p>'+
            '<p class="form-text">R$ '+item.price+'</p>'+
            '<p><strong>R$ '+item.sellingPrice+'</strong></p>'+
        '</div>'+
        '<div class="align-self-center p-4 col-4">'+
            '<button class="btn btn-danger btn-add">Remover</button>'+
            '<button class="btn btn-primary btn-rm">Adicionar</button>'+
        '</div>')
    });
});

