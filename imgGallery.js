$(document).ready(function() {
    $('#gallery li a').click(function() {
        var galleryHref = $(this).attr('href');
        var galleryAlt = $(this).attr('title');
        var galleryValue= $(this).attr('value');
        $('figcaption').html(galleryAlt);
        $('figure img').attr({ src: galleryHref, alt: galleryAlt });
        $('figure a').attr({href: galleryValue});
        return false;
    });
});