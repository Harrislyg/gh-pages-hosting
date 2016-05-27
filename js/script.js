$(function () {
    var body = $('.toggleImage');
    var backgrounds = [
      'url(file:///Users/harrisleow/instagram/images/nature.jpeg)',
      'url(http://designyoutrust.com/wp-content/uploads/2012/05/Michael-Greene8-200x200.jpg)'];
    var current = 0;

    function nextBackground() {
        body.css(
            'background',
        backgrounds[current = ++current % backgrounds.length]);

        setTimeout(nextBackground, 5000);
    }
    setTimeout(nextBackground, 5000);
    body.css('background', backgrounds[0]);
});
