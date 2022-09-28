

// $('button').click(()=>{

//     $('div').load('header.html');
// })

// $('.footer').load('footer.html');
// $('.header').load('header.html');

// $('body_page').load('body.html',function(responseTxt,statusTxt,xhr){

//     if(statusTxt == "success"){
//         console.log('data loaded successfully')
//     }
//     else if (statusTxt == "erorr"){
//         console.log('samething went warnin' + xhr.status +xhr)
//     }
// })

// $.get('body.html',function(data){
//     // console.log(data)

//     $('.body_page').html(data)
// })
var plc = $('.body_pagge');
var out = '';

// $.get('products.json',(data)=>{
//     // console.log(data)
//     for(i in data){
//         console.log(data[i].name +"price"+data[i].price);
//         // document.write(data[i].name  +"price"+data[i].price);
//         out +=`${data[i].name}, price: ${data[i].price} <br>`

//         plc.html(out)


//     }
    

// })

// $.getJSON('products.json',data =>{
//     console.log(data)
//             $.each(data,(i,pro)=>{
//                 $('.body_page').append(pro.name + '<br>');
//             })
// })


$.ajax({
    method: "GET",
    url:"http://jsonplaceholder.typicode.com/posts",
    dataType: 'json' 

})

.done((data)=>{
    // console.log(data)

    $.each(data,(i, val)=>{

        $('.body_page').append(`<b>${val.title}</b><br><p> ${val.body}</p><br><hr>`)

    })
})

$('#postform').submit((e)=>{

    e.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var url = $(this).attr('acction')

    $.POST(url,{title:title,body:body})
    console.log(title,body +"saved to the api server")

    $.done((data)=>{
        console.log(data)
    })

})