var trufas = {}
var myBag = [];

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
            '<button class="btn btn-primary add" data-id="'+item.uniqueId+'">Adicionar</button>'+
        '</div>')
    });

    addTrufa()
});

function addTrufa() {
    $('.add').click(function () {
        let item = trufas[$(this).data('id')]
        myBag.push(item)
        var ids = Object.keys(myBag);
        var id = ids[ids.length - 1];
        $('#my-bag').append('<li>'+item.name+'<span class="float-end">R$ '+item.sellingPrice+'<button data-id="'+id+'" type="button" class="btn-close rm"></button></span></li>')
        countTotal()
        rmTrufa()
    })
}

function rmTrufa() {
    $('.rm').click(function () {
        let id = $(this).data('id')
        $(this).parent().parent().remove()
        myBag = myBag.filter(function(v, i) {
            return i != id
        })
        countTotal()
    })
}

function countTotal() {
    let total = 0
    $.each(myBag, function(i, item) {
        total += item.sellingPrice
    });
    
    total.toFixed(2)
    if (total >= 10) {
        $('#alerta-frete').removeClass('d-none')
    } else {
        $('#alerta-frete').addClass('d-none')
    }

    $('#valor-trufa').html(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total))
}

addTrufa()
