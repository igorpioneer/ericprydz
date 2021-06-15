$(document).ready(function(){
    ispisNav();
    ispisFooterNav();
    ispisFooterIco();

    if(url.indexOf("index.html") != -1){
        
        ispisAlbum();
        slajder();
    }

    if(url.indexOf("about.html") != -1){
        
        slajderAbout();
    }

    if(url.indexOf("author.html") != -1){
        
    }

    $('#showcase').slick({
        autoplay:true,
    })
    $('#slider').slick({
        autoplay:true,
    })
});

var url = window.location.href;
var path = window.location.pathname;

var nizMeni = [
    ["index.html", "Home"],
    ["about.html", "About"],
    ["author.html", "Author"]
];

// Dinamicki ispis header-a
function ispisNav(){
    let kontejnjer = document.createElement("div");
    kontejnjer.setAttribute("class", "container");

    let divLogo = document.createElement("div");
    divLogo.setAttribute("id", "logo");

    let aTag = document.createElement("a");
    aTag.setAttribute("href", "index.html");

    let imgTag = document.createElement("img");
    imgTag.setAttribute("src", "assets/img/logo.png");
    imgTag.setAttribute("alt", "logo");

    let navTag = document.createElement("nav");
    let ulTag = document.createElement("ul");

    for(let i = 0; i < nizMeni.length; i++){
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.setAttribute("href", nizMeni[i][0]);
        a.textContent = nizMeni[i][1];
        li.appendChild(a);

        ulTag.appendChild(li);
    }
    navTag.appendChild(ulTag);

    aTag.appendChild(imgTag);
    divLogo.appendChild(aTag);
    kontejnjer.appendChild(divLogo);
    kontejnjer.appendChild(navTag);

    let headerTag = document.querySelector(".header");
    headerTag.appendChild(kontejnjer);

}


/// active page link ///
$(document).ready(function() {
    $("[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
});


// Dinamicki ispis sekcije id="boxes"
function ispisAlbum(){

    let nizImg = ["assets/img/vol1.jpg", "assets/img/vol2.jpg", "assets/img/vol3.jpg"];
    let nizAlt = ["album1", "album2", "album3"];
    let nizH3 = ["Pryda 15 VOL I", "Pryda 15 VOL II", "Pryda 15 VOL III"];
    let nizPTagova = ["Release Date: 2015-07-06",
                    "Release Date: 2015-08-10",
                    "Release Date: 2015-09-21"
                    ];

    var kontejnjer = document.createElement("div");
    kontejnjer.setAttribute("class", "container");

    for(let i = 0; i < nizImg.length; i++){
        let album = document.createElement("div");
        album.setAttribute("class", "box");
        
        let tagImg = document.createElement("img");
        tagImg.setAttribute("src", nizImg[i]);
        tagImg.setAttribute("alt", nizAlt[i]);

        let h3Tag = document.createElement("h3");
        let h3Sadrzaj = document.createTextNode(nizH3[i]);
        h3Tag.appendChild(h3Sadrzaj);

        let pTag = document.createElement("p");
        let pSadrzaj = document.createTextNode(nizPTagova[i]);
        pTag.appendChild(pSadrzaj);

        album.appendChild(tagImg);
        album.appendChild(h3Tag);
        album.appendChild(pTag);

        kontejnjer.appendChild(album);
    }
        var sekcija = document.querySelector(".boxes");
        
        sekcija.appendChild(kontejnjer);  
}

// Dinamicki ispis navigacije u footer-u
function ispisFooterNav(){
    let nizNav = ["Home", "About", "Author", "Documentation"];
    let nizHref = ["index.html", "about.html", "author.html", "dokumentacija.pdf"];
 
    let quickNav = document.querySelector("#footer-nav");

    for(let i = 0; i < nizNav.length; i++){
        let aTag1 = document.createElement("a");
        aTag1.setAttribute("href", nizHref[i]);
        let sadrzajATaga = document.createTextNode(nizNav[i]);
        aTag1.appendChild(sadrzajATaga);

        quickNav.appendChild(aTag1);
    }
}

// Dinamicki ispis liste ikonica u footer-u

let socNetwork = document.querySelector("#footer-social");
function ispisFooterIco(){
    let nizLinkovi = ["https://www.youtube.com/channel/UCOjTxt7xBAjh1NraToYYlog", 
                         "https://open.spotify.com/artist/5sm0jQ1mq0dusiLtDJ2b4R", 
                         "https://soundcloud.com/eric-prydz", 
                         "https://www.facebook.com/EricPrydzOfficial", 
                         "https://www.instagram.com/ericprydz", 
                         "https://twitter.com/ericprydz"
                    ];

    let nizIkonice = ["fab fa-youtube", 
                        "fab fa-spotify", 
                        "fab fa-soundcloud", 
                        "fab fa-facebook", 
                        "fab fa-instagram", 
                        "fab fa-twitter"
                    ];
    
    for(let i = 0; i < nizLinkovi.length; i++){
        let link = document.createElement("a");
        link.setAttribute("href", nizLinkovi[i]);

        let ikonica = document.createElement("i");
        ikonica.setAttribute("class", nizIkonice[i]);

        link.appendChild(ikonica);
        socNetwork.appendChild(link);
    }          
}

// Back to top
$("#backToTop").hide();
$(window).scroll(function(){
    let top = $(this)[0].scrollY;

    if(top > 300){
        $("#backToTop").show();
    }
    else{
        $("#backToTop").hide();
    }
});

$("#backToTop").click(function(){

    $("html").animate({
        scrollTop: 0
    }, 1500);
})  

// hide
$(document).ready(function(){
    $("#toggle").hide();
    $("#toggleButton").click(function(){
      $("#toggle").slideToggle(2000);

      if($('#toggleButton').val() == "Read more") {
        $(this).val('Read less');
      } else {
        $(this).val('Read more');
      }
    });
  });


// Slider na strani "Home"
function slajder(){
    var posteri = [
        ["Eric Prydz - Exit 2021.", "Closing of mts Dance Arena will go down with an exclusive b2b performance featuring Eric Prydz and Four Tet.", "slider1"],
        ["Track ID", "The new song is ready for our playlists! It will be released in July 2021.", "slider2"],
        ["Holo 2020.", "The lastest album triggered some amazing reactions. The song stands out as the biggest hit is called Nopus", "slider3"],
        ["What after Corona virus?", "Eric Prydz prepares even better visual effects for the post-pandemic tour", "slider4"]
    ];
    
        var sekPosteri = document.getElementById("showcase");
        var ispis = "";
        for (let i = 0; i < posteri.length; i++) {
            ispis = "";
            let artikal = document.createElement("article");
            artikal.classList.add("poster");
            artikal.style.backgroundImage = "url('assets/img/" + posteri[i][2] + ".jpg')";
            ispis += "<div><h3>" + posteri[i][0] + "</h3><p>" + posteri[i][1] + "</p></div>";
            artikal.innerHTML = ispis;
            sekPosteri.appendChild(artikal);
        }
}

// Slider na strani "About"
function slajderAbout(){
    var slike = ["ericprydz2", "indmix", "album", "holo"];
    
        var sekSlike = document.getElementById("slider");
        var ispis = "";
        for (let i = 0; i < slike.length; i++) {
            ispis = "";
            let artikal = document.createElement("article");
            artikal.classList.add("poster");
            artikal.style.backgroundImage = "url('assets/img/" + slike[i] + ".jpg')";
            artikal.innerHTML = ispis;
            sekSlike.appendChild(artikal);
        }
}

// Regularni izrazi
let podaciIzForme = [];

let submit = $(':button');
submit.click(function() {
	let imePrezime = $('#tbFullName');
	let email = $('#tbEmail');
    let poruka = $('#taMessage');
    let subscribe = $('#btnSubscribe');
    let textInput = $('#emailSubscribe');

	let reImePrezime = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,14}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,19})+$/
    let reEmail = /^[a-z][\w\.]*\@[a-z0-9]{3,20}(\.[a-z]{3,5})?(\.[a-z]{2,3})$/

	if(imePrezime.val() == '') {
		imePrezime.css({
			'border': '#e99547 solid 3px',
		});

		imePrezime.val('')
		imePrezime.attr('placeholder', 'First name can not be empty');

	} else if(!reImePrezime.test(imePrezime.val())) {
		imePrezime.css({
			'border': '#e99547 solid 3px',
		});

		imePrezime.val("");
		imePrezime.attr("placeholder", "Igor Rankovic");
	} else {
		imePrezime.css({
			'border': '#70d0f6 solid 3px'
		});
		podaciIzForme.push(imePrezime.val());

		imePrezime.val("");
		imePrezime.attr('placeholder', 'Igor Rankovic');
	}
	
	if(email.val() == '') {
		email.css({
			'border': '#e99547 solid 3px',
		});

		email.val('')
		email.attr('placeholder', 'Email can not be empty');
	} else if(!reEmail.test(email.val())) {
		email.css({
			'border': '#e99547 solid 3px',
		});

		email.val('')
		email.attr('placeholder', 'igor.rankovic.50.14@ict.edu.rs');
	} else {
		email.css({
			'border': '#70d0f6 solid 3px'
		});
		podaciIzForme.push(email.val());

		email.val("");
		email.attr('placeholder', 'igor.rankovic.50.14@ict.edu.rs');
    }
    
    if(subscribe.val() == '') {
		textInput.css({
			'border': '#e99547 solid 3px',
		});

		textInput.val('')
		textInput.attr('placeholder', 'Email can not be empty');
	} else if(!reEmail.test(textInput.val())) {
		textInput.css({
			'border': '#e99547 solid 3px',
		});

		textInput.val('')
		textInput.attr('placeholder', 'igor.rankovic.50.14@ict.edu.rs');
	} else {
        alert("You are subscribed!");
		textInput.css({
			'border': '#70d0f6 solid 3px'
		});

		textInput.val("");
		textInput.attr('placeholder', 'igor.rankovic.50.14@ict.edu.rs');
	}

	if(poruka.val() == '' || poruka.val() == "Massage can not be empty") {
		poruka.css({
			'border': '#e99547 solid 3px',
		});

		poruka.val('')
		poruka.attr('placeholder', 'Message can not be empty');
	} else {
		poruka.css({
			'border': '3px solid #e6e6e6'
		});
		podaciIzForme.push(poruka.val());

		poruka.val("");
		poruka.attr('placeholder', 'Write your message.');
    }
    
    if(podaciIzForme.length == 3){
        alert("You sent a message to Igor");
    }
});

