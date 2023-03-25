let mill = document.querySelector('.mill')

let price = document.querySelector('.price')

let spead = document.querySelector('.spead')

let up_spead = document.querySelector('.up_spead')

let down_spead = document.querySelector('.down_spead')

let up_deg = document.querySelector('.up_deg')

let down_deg = document.querySelector('.down_deg')

let disks = document.querySelector('.disks')

let up_whele = document.querySelector('.up_whele')

let down_whele = document.querySelector('.down_whele')

let temp = document.querySelector('.temp')

let cool = document.querySelector('.cool')

let long = document.querySelector('#change span')

let model = document.querySelector('.model') 

let burger = document.querySelector('.burger')

let close = document.querySelector('.close')

let model_window = document.querySelector('.model_window')


let km = 750

let cost = 89990

let speadx = 60

let minsp = 60

let maxsp = 120

let deg = 20

let razmerMin = 19

let razmerMax = 21

up_spead.onclick = () => {
    speadx += 5
    spead.innerText = speadx + ' км/ч'
    if (speadx > 120) {
        spead.innerText = maxsp + ' км/ч'
        speadx = 120
    }
    mill.innerHTML = Math.round(km / speadx * 60) + 'км'
}

down_spead.onclick = () => {
    speadx -= 5
    spead.innerText = speadx + ' км/ч'
    if (speadx < 60) {
        spead.innerText = minsp + ' км/ч'
        speadx = 60
    }
    mill.innerHTML = Math.round(km / speadx * 60) + 'км'
}

up_deg.onclick = () => {
    deg += 1
    temp.innerHTML = deg + '°'
    if (deg > 19) {
        cool.innerHTML = 'Кондиционер'
    }
}

down_deg.onclick = () => {
    deg -= 1
    temp.innerHTML = deg + '°'
    if (deg < 11) {
        cool.innerHTML = 'печка'
    }
}

up_whele.onclick = () => {
    disks.innerHTML = razmerMax
    price.innerHTML = '$' + addCommas(cost + 1000)
}

down_whele.onclick = () => {
    disks.innerHTML = razmerMin
    price.innerHTML = '$' + addCommas(cost)
}

long.onclick = () => {
    if (long.classList.contains('active')) {
        long.classList.remove('active')
        cost = cost - 10000
        price.innerHTML = '$' + addCommas(cost)
    } else {
        long.classList.add('active')
        cost = cost + 10000
        price.innerHTML = '$' + addCommas(cost)
    }
}

burger.onclick = () => {
    model.style.display = 'contents'
    setTimeout(() => {
        model_window.style.opacity = '1'
    }, 300)
}

close.onclick = () => {
    model_window.style.opacity = '0'
    setTimeout(() => {
        model.style.display = 'none'
    }, 400)
}

function addCommas(nStr) {
    // console.log(nStr);

    nStr += '';
    // console.log(nStr);

    var x = nStr.split('.');
    // console.log(x);

    var x1 = x[0];
    // console.log(x1);

    var x2 = x.length > 1 ? '.' + x[1] : '';
    // console.log(x2);

    var rgx = /(\d+)(\d{3})/;
    // console.log(rgx);

    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}