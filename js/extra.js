var songs = [
    "My Adidas -Run-DMC",
    "Air Force Ones (feat. Murphy Lee, Ali & Kyjuan) -Nelly",
    "Facts (Charlie Heat Version) -Kanye West",
    "High Top Versace (feat. Young Thug) -2 Chainz",
    "Nikes -Frank Ocean",
    "Wing$ -Macklemore & Ryan Lewis",
    "23 (feat. Miley Cyrus, Wiz Khalifa & Juicy J) -Mike WiLL Made-It",
    "Nikes on My Feet -Mac Miller",
];

var urls = new Map([
    ['My Adidas -Run-DMC', 'https://www.youtube.com/watch?v=Qx0huz6TiLo'],
    ['Air Force Ones (feat. Murphy Lee, Ali & Kyjuan) -Nelly', 'https://www.youtube.com/watch?v=BfzsMQGqrt0'],
    ['Facts (Charlie Heat Version) -Kanye West', 'https://www.youtube.com/watch?v=yiwDWKg9AMA'],
    ['High Top Versace (feat. Young Thug) -2 Chainz', 'https://www.youtube.com/watch?v=7m5vmEAyVTc'],
    ['Nikes -Frank Ocean', 'https://www.youtube.com/watch?v=diIFhc_Kzng'],
    ['Wing$ -Macklemore & Ryan Lewis', 'https://www.youtube.com/watch?v=KP4tmbzrCEc'],
    ['23 (feat. Miley Cyrus, Wiz Khalifa & Juicy J) -Mike WiLL Made-It', 'https://www.youtube.com/watch?v=I9vhx3rQLfw'],
    ['Nikes on My Feet -Mac Miller', 'https://www.youtube.com/watch?v=a-rqu-hjobc']
]);

var button = document.querySelector(".select");

button.addEventListener('click', function () {
    var random = Math.floor(Math.random() * songs.length);
    var song = songs[random];
    console.log(song);
    var url = urls.get(song);
    console.log(url);
    if (confirm('Play ' + song + '?')) {
        window.open(url);
    };
});