async function loadGalery()
{
    for (var i = 1; i < 83; i++) {
        var name = String(i).padStart(3, '0');
        $('#galery-row').append("<div class='fadeInUp col-sm-12 col-md-4 col-lg-2 m-auto'><img alt='" + name + "' class='zoom' style='width: 100%; margin: 1rem 0 1rem 0;' src='files/cards/" + name + ".png'/></div>");
        //await sleep(50)
    }
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

loadGalery();
