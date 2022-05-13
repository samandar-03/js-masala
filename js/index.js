// var sentengiz = prompt('soz kiriting')
// var array = sentengiz.split(' ')
// var katta = ''
// for ( i = 0; i < array.length; i++) {
//     if (array[i].length > katta.length) {
//         katta = array[i]
//     }
    
// }
// console.log(katta);

                            //textlarni ichida eng katta gapni topadi






// var elcontend = document.querySelector('.contend')
// var elinput = document.querySelector('.input')
// var elselect = document.querySelector('#select')
// var eloptiont = document.querySelector('.option')
// var elbutton = document.querySelector('.button')
// var eltext = document.querySelector('.textt')

// elbutton.addEventListener('click', function () {
//     var umum  = elinput.value * select.value
//     eltext.textContent = umum
// })
                                                    //  7-dars mashq



var elcontend = document.querySelector('.contend')
var elinput = document.querySelector('.input')
var elbutton = document.querySelector('.button')
var elpiyoda = document.querySelector('.piyoda')
var elvelosiped = document.querySelector('.velosiped')
var elmoshina = document.querySelector('.moshina')
var elsomolyot = document.querySelector('.somolyot')

elbutton.addEventListener('click', function  () {
    var piyoda  = elinput.value / 3.6
    var velosiped  = elinput.value / 20.1
    var moshina  = elinput.value / 70
    var somolyot  = (elinput.value / 800)
    elpiyoda.textContent = piyoda.toFixed(2)
    elvelosiped.textContent = velosiped.toFixed(2)
    elmoshina.textContent = moshina.toFixed(2)
    elsomolyot.textContent = somolyot.toFixed(4)
})
                                                    //  7-dars mashq