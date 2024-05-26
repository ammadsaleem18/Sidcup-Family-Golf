// scroll navbar effect
gsap.to(".nav", {
    backgroundColor: "#000",
    duration: 1,
    height: "94px",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers: true,
        start: "top -4%",
        end: "top -7%",
        scrub: 1.2,
    },
});

// scroll main bg effect
gsap.to(".main", {
    backgroundColor: "#000",
    duration: 1,
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        start: "top -35%",
        end: "top -80%",
        scrub: 1,
    },
});

// Mouse effect
let cursor = document.querySelector(".cursor");
let cursorBG = document.querySelector(".cursor-bg");

document.addEventListener("mousemove", (event) => {
    let { x, y } = event;
    cursor.style.left = x - 10 + "px";
    cursor.style.top = y - 10 + "px";
    cursorBG.style.left = x - 225 + "px";
    cursorBG.style.top = y - 225 + "px";
});

// scroll bar effect
let [frontH4List, backH4List] = [
    document.querySelectorAll(".front h4"),
    document.querySelectorAll(".back h4"),
];

frontH4List.forEach((h4, i) => {
    h4.addEventListener("mouseover", () => {
        h4.style.color = "#95c11e";
        backH4List[i].style.webkitTextStrokeColor = "#95c11e";
    });
    h4.addEventListener("mouseout", () => {
        h4.style.color = "";
        backH4List[i].style.webkitTextStroke = "";
    });
});

// Big Circle Effect
let bigCircles = document.querySelectorAll(".big-circles");

bigCircles.forEach((bc) => {
    bc.addEventListener("mouseover", (e) => {
        cursor.style.backgroundColor = 'transparent';
        cursor.style.transform = 'scale(3.8)';
        cursor.style.border = '1px solid #fff'
    });
    bc.addEventListener("mouseout", (e) => {
        cursor.style.backgroundColor = '';
        cursor.style.transform = 'scale(1)';
        cursor.style.border = '';
    });
});

// Colon Effect
gsap.from(".quote-left", {
    x: -25,
    y: -25,
    scrollTrigger: {
        trigger: ".quote-left",
        scroller: "body",
        // markers: true,
        start: "top 30%",
        end: "top 15%",
        scrub: 1,
    }
})
gsap.from(".quote-right", {
    x: 25,
    y: 25,
    scrollTrigger: {
        trigger: ".quote-right",
        scroller: "body",
        // markers: true,
        start: "top 85%",
        end: "top 70%",
        scrub: 1,
    }
})

// Bottom Text Effect
gsap.from(".btm-text", {
    y: 40,
    scrollTrigger: {
        trigger: ".btm-text",
        scroller: "body",
        start: "top 98%",
        end: "top 96%",
        scrub: 2,
    }
})

// scrollcards generator
let cardBox = document.querySelector(".scroll-cards .container");
for (let i = 1; i < 20; i++) {
    cardBox.innerHTML += `
    <div class="card" style="background-image: url(./img/scrl-cards/01.avif);"></div>
    <div class="card" style="background-image: url(./img/scrl-cards/02.avif);"></div>
    <div class="card" style="background-image: url(./img/scrl-cards/03.avif);"></div>
    <div class="card" style="background-image: url(./img/scrl-cards/04.avif);"></div>
    <div class="card" style="background-image: url(./img/scrl-cards/05.avif);"></div>
    <div class="card" style="background-image: url(./img/scrl-cards/06.avif);"></div>
    <div class="card" style="background-image: url(./img/scrl-cards/07.avif);"></div>
    <div class="card" style="background-image: url(./img/scrl-cards/08.avif);"></div>
    <div class="card" style="background-image: url(./img/scrl-cards/09.avif);"></div>
    <div class="card" style="background-image: url(./img/scrl-cards/10.avif);"></div>`;
}