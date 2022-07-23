var images = [
    "https://c4.wallpaperflare.com/wallpaper/502/419/818/the-dark-knight-batman-movies-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/996/743/625/pascal-blanche-dune-movie-dune-series-artwork-science-fiction-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/123/991/646/avatar-blue-skin-james-cameron-s-movie-avatar-movie-poster-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/846/216/1006/godzilla-movies-movie-poster-godzilla-king-of-the-monsters-wallpaper-preview.jpg"
]
var x;
var slideshowcontainer=document.getElementById("slideshow");

function startslide(e){
    slideshowcontainer.innerText = "";
    var slideimage = document.createElement("img");

    var i=0;

    x=setInterval(function(){
        if(i===images.length){
            i=0;
        }
        slideimage.src = images[i];
        slideimage.className = "slideshow-img";
        i=i+1;
    }, 1000);
    slideshowcontainer.append(slideimage);
}
startslide(slideshowcontainer);

var movies_1 = [
    {
        id:1,
      image_url:
        "https://c4.wallpaperflare.com/wallpaper/819/656/45/face-keanu-reeves-actor-looking-at-viewer-wallpaper-preview.jpg",
      name: "JOKER ",
      releasedate: "Release: 22-07-2022",
      imdb: "IMDb: 8",
    },
    {
        id:2,
      image_url:
        "https://c4.wallpaperflare.com/wallpaper/579/921/292/amazing-spider-man-new-marvel-s-the-amazing-spider-man-movie-poster-wallpaper-preview.jpg",
        name: "Spiderman ",
        releasedate: "Release: 24-07-2022",
        imdb: "Imdb: 9.0",
    },
    {
        id:3,
      image_url:
        "https://c4.wallpaperflare.com/wallpaper/361/823/829/avengers-endgame-iron-man-robert-downey-jr-captain-america-chris-evans-hd-wallpaper-preview.jpg",
        name: "Endgame ",
        releasedate: "24-07-2022",
        imdb: "IMDb: 9.8",
    },
    {
        id:4,
      image_url:
        "https://c4.wallpaperflare.com/wallpaper/71/805/151/movie-cap-pikachu-poster-pokemon-hd-wallpaper-preview.jpg",
        name: "Pikachu ",
        releasedate: "Release: 24-07-2022",
        imdb: "IMDb: 7.9",
    },
    {
        id:5,
      image_url:
        "https://c4.wallpaperflare.com/wallpaper/624/721/234/movie-poster-aliens-sigourney-weaver-h-r-giger-wallpaper-preview.jpg ",
        name: "Godzilla ",
        releasedate: "Release: 24-07-2022",
        imdb: "IMDb: 9.9",
    },
    {
        id:6,
      image_url:
        "https://c4.wallpaperflare.com/wallpaper/125/985/100/venom-movie-venom-2018-movies-movies-wallpaper-preview.jpg",
      name: "Venom ",
      releasedate: "Release: 24-07-2022",
      imdb: " IMDb: 8.9",
    },
    {
        id:7,
      image_url:
        "https://c4.wallpaperflare.com/wallpaper/507/830/385/captain-america-captain-america-civil-war-captain-america-the-first-avenger-captain-america-the-winter-soldier-movies-hd-wallpaper-preview.jpg ",
        name: "Captain America ",
        releasedate: "Release: 24-07-2022",
        imdb: "IMDb: 8.9",
    },
    {
        id:8,
      image_url:
        "https://c4.wallpaperflare.com/wallpaper/156/167/750/movies-thor-chris-hemsworth-black-background-wallpaper-preview.jpg",
        name: "Thor ",
        releasedate: "Release: 24-07-2022",
        imdb: "IMDb: 6.9",
    },
    {
        id:9,
      image_url:
        "https://c4.wallpaperflare.com/wallpaper/153/860/948/movie-poster-star-wars-star-wars-the-rise-of-skywalker-2019-year-movies-hd-wallpaper-preview.jpg ",
        name: "StarWars",
        releasedate: "Release:26-07-2022",
        imdb: "IMdb: 8.9",
    },
]
displaymovies(movies_1);
function displaymovies(data){
    data.map(function(elem){
        var div=document.createElement("div");
        var image=document.createElement("img");
        image.setAttribute("src",elem.image_url);
        image.setAttribute("alt", elem.name);
        var name=document.createElement("h5");
        name.innerText=elem.name;
        var pricebox=document.createElement("div");
        var releasedate=document.createElement("p");
        releasedate.innerText=elem.releasedate;
        var imdb=document.createElement("p");
        imdb.innerText=elem.imdb;
        pricebox.append(releasedate,imdb);
        div.append(image,name,pricebox);
        document.getElementById("movies").append(div);
    });
     var movie = JSON.stringify(movies);
     localStorage.setItem(movies, movies_1)
}