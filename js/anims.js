
$("#btn-downloads").click(function() {
    console.log("animate");
    $('html,body').animate({
        scrollTop: $("#downloads").offset().top},
        '1000');
});

$("#top").click(function() {
    console.log("animate");
    $('html,body').animate({
        scrollTop: $("#logo").offset().top},
        '1000');
});

function callbackAnimate(entries, observer)
{
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            addClass(document.getElementById(entry.target.id), getAnim(entry.target.id));
        }
    });

}

function addClass(el, classNameToAdd){
    if (!el.className.includes(classNameToAdd))
        el.className += ' ' + classNameToAdd;   
}

function getAnim(id)
{
    if (id == 'dragon') return 'fadeInRight'; 
    if (id == 'diamond') return 'fadeInUp'; 
    if (id == 'whatIs') return 'fadeInUp'; 
    if (id == 'contents') return 'fadeIn'; 
    if (id == 'downloads') return 'fadeIn'; 
    if (id == 'ragnarok') return 'fadeInLeft'; 
    if (id == 'howItWorks') return 'fadeInRight'; 
    if (id == 'portal') return 'fadeInUp'; 
    return 'fadeIn';
}