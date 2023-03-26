$(function () {
    'use strick';
    // Adjast Height header
    let winH    = $(window).height(),
        navH    = $(".navigation").innerHeight(),
        upperH  = $(".upper-bar");


    $(".header, .img-box").height(winH - navH);
})


const sliceDescription = (text, length) => {
    if (text.length > length) {
        return text.split(" ").slice(0, length).join(" ") + "...";
    } else {
        return text;
    }
};

const cardDescription = document.querySelector(".card-description p");
const fullText = cardDescription.textContent;

const button = document.querySelector(".button");

button.addEventListener("click", () => {
    if (cardDescription.textContent === sliceDescription(fullText, 50)) {
        cardDescription.textContent = fullText;
        button.textContent = "Show Less";
    } else {
        cardDescription.textContent = sliceDescription(fullText, 50);
        button.textContent = "Learn More";
    }
});


const cardDescription1 = document.querySelector(".card-description1 p");
const fullText1 = cardDescription1.textContent;
sliceDescription (fullText1, 50);

const button1 = document.querySelector(".button1");

button1.addEventListener("click", () => {
    if (cardDescription1.textContent === sliceDescription(fullText1, 50)) {
        cardDescription1.textContent = fullText1;
        button1.textContent = "Learn More";
    } else {
        cardDescription1.textContent = sliceDescription(fullText1, 50);
        button1.textContent = "Show Less";
    }
});
const cardDescription2 = document.querySelector(".card-description2 p");
const fullText2 = cardDescription2.textContent;

const button2 = document.querySelector(".button2");

button2.addEventListener("click", () => {
    if (cardDescription2.textContent === sliceDescription(fullText2, 50)) {
        cardDescription2.textContent = fullText2;
        button2.textContent = "Show Less";
    } else {
        cardDescription2.textContent = sliceDescription(fullText2, 50);
        button2.textContent = "Learn More";
    }
});
const cardDescription3 = document.querySelector(".card-description3 p");
const fullText3 = cardDescription3.textContent;

const button3 = document.querySelector(".button3");

button3.addEventListener("click", () => {
    if (cardDescription3.textContent === sliceDescription(fullText3, 50)) {
        cardDescription3.textContent = fullText3;
        button3.textContent = "Show Less";
    } else {
        cardDescription3.textContent = sliceDescription(fullText3, 50);
        button3.textContent = "Learn More";
    }
});
const cardDescription4 = document.querySelector(".card-description4 p");
const fullText4 = cardDescription4.textContent;

const button4 = document.querySelector(".button4");

button4.addEventListener("click", () => {
    if (cardDescription4.textContent === sliceDescription(fullText4, 50)) {
        cardDescription4.textContent = fullText4;
        button4.textContent = "Show Less";
    } else {
        cardDescription4.textContent = sliceDescription(fullText4, 50);
        button4.textContent = "Learn More";
    }
});
const cardDescription5 = document.querySelector(".card-description5 p");
const fullText5 = cardDescription5.textContent;

const button5 = document.querySelector(".button5");

button5.addEventListener("click", () => {
    if (cardDescription5.textContent === sliceDescription(fullText5, 50)) {
        cardDescription5.textContent = fullText5;
        button5.textContent = "Show Less";
    } else {
        cardDescription5.textContent = sliceDescription(fullText5, 50);
        button5.textContent = "Learn More";
    }
});
const cardDescription6 = document.querySelector(".card-description6 p");
const fullText6 = cardDescription6.textContent;

const button6 = document.querySelector(".button6");

button6.addEventListener("click", () => {
    if (cardDescription6.textContent === sliceDescription(fullText6, 50)) {
        cardDescription6.textContent = fullText6;
        button6.textContent = "Show Less";
    } else {
        cardDescription6.textContent = sliceDescription(fullText6, 50);
        button6.textContent = "Learn More";
    }
});
const cardDescription7 = document.querySelector(".card-description7 p");
const fullText7 = cardDescription7.textContent;

const button7 = document.querySelector(".button7");

button7.addEventListener("click", () => {
    if (cardDescription7.textContent === sliceDescription(fullText7, 50)) {
        cardDescription7.textContent = fullText7;
        button7.textContent = "Show Less";
    } else {
        cardDescription7.textContent = sliceDescription(fullText7, 50);
        button7.textContent = "Learn More";
    }
});
const cardDescription8 = document.querySelector(".card-description8 p");
const fullText8 = cardDescription8.textContent;

const button8 = document.querySelector(".button8");

button8.addEventListener("click", () => {
    if (cardDescription8.textContent === sliceDescription(fullText8, 50)) {
        cardDescription8.textContent = fullText8;
        button8.textContent = "Show Less";
    } else {
        cardDescription8.textContent = sliceDescription(fullText8, 50);
        button8.textContent = "Learn More";
    }
});
const cardDescription9 = document.querySelector(".card-description9 p");
const fullText9 = cardDescription9.textContent;

const button9 = document.querySelector(".button9");

button9.addEventListener("click", () => {
    if (cardDescription9.textContent === sliceDescription(fullText9, 50)) {
        cardDescription9.textContent = fullText9;
        button9.textContent = "Show Less";
    } else {
        cardDescription9.textContent = sliceDescription(fullText9, 50);
        button9.textContent = "Learn More";
    }
});
const cardDescription10 = document.querySelector(".card-description10 p");
const fullText10 = cardDescription10.textContent;

const button10 = document.querySelector(".button10");

button10.addEventListener("click", () => {
    if (cardDescription10.textContent === sliceDescription(fullText10, 50)) {
        cardDescription10.textContent = fullText10;
        button10.textContent = "Show Less";
    } else {
        cardDescription10.textContent = sliceDescription(fullText10, 50);
        button10.textContent = "Learn More";
    }
});
const cardDescription11 = document.querySelector(".card-description11 p");
const fullText11 = cardDescription11.textContent;

const button11 = document.querySelector(".button11");

button11.addEventListener("click", () => {
    if (cardDescription11.textContent === sliceDescription(fullText11, 50)) {
        cardDescription11.textContent = fullText11;
        button11.textContent = "Show Less";
    } else {
        cardDescription11.textContent = sliceDescription(fullText11, 50);
        button11.textContent = "Learn More";
    }
});
const cardDescription12 = document.querySelector(".card-description12 p");
const fullText12 = cardDescription12.textContent;

const button12 = document.querySelector(".button12");

button12.addEventListener("click", () => {
    if (cardDescription12.textContent === sliceDescription(fullText12, 50)) {
        cardDescription12.textContent = fullText12;
        button12.textContent = "Show Less";
    } else {
        cardDescription12.textContent = sliceDescription(fullText12, 50);
        button12.textContent = "Learn More";
    }
});
const cardDescription13 = document.querySelector(".card-description13 p");
const fullText13 = cardDescription13.textContent;

const button13 = document.querySelector(".button13");

button13.addEventListener("click", () => {
    if (cardDescription13.textContent === sliceDescription(fullText13, 50)) {
        cardDescription13.textContent = fullText13;
        button13.textContent = "Show Less";
    } else {
        cardDescription13.textContent = sliceDescription(fullText13, 50);
        button13.textContent = "Learn More";
    }
});
const cardDescription14 = document.querySelector(".card-description14 p");
const fullText14 = cardDescription14.textContent;

const button14 = document.querySelector(".button14");

button14.addEventListener("click", () => {
    if (cardDescription14.textContent === sliceDescription(fullText14, 100)) {
        cardDescription14.textContent = fullText14;
        button14.textContent = "Show Less";
    } else {
        cardDescription14.textContent = sliceDescription(fullText14, 100);
        button14.textContent = "Learn More";
    }
});

const cardDescription15 = document.querySelector(".card-description15 p");
const fullText15 = cardDescription15.textContent;

const button15 = document.querySelector(".button15");

button15.addEventListener("click", () => {
    if (cardDescription15.textContent === sliceDescription(fullText15, 100)) {
        cardDescription15.textContent = fullText15;
        button15.textContent = "Show Less";
    } else {
        cardDescription15.textContent = sliceDescription(fullText15, 100);
        button15.textContent = "Learn More";
    }
});
const cardDescription16 = document.querySelector(".card-description16 p");
const fullText16 = cardDescription16.textContent;

const button16 = document.querySelector(".button16");

button16.addEventListener("click", () => {
    if (cardDescription16.textContent === sliceDescription(fullText16, 100)) {
        cardDescription16.textContent = fullText16;
        button16.textContent = "Show Less";
    } else {
        cardDescription16.textContent = sliceDescription(fullText16, 100);
        button16.textContent = "Learn More";
    }
});
const cardDescription17 = document.querySelector(".card-description17 p");
const fullText17 = cardDescription17.textContent;

const button17 = document.querySelector(".button17");

button17.addEventListener("click", () => {
    if (cardDescription17.textContent === sliceDescription(fullText17, 100)) {
        cardDescription17.textContent = fullText17;
        button17.textContent = "Show Less";
    } else {
        cardDescription17.textContent = sliceDescription(fullText17, 100);
        button17.textContent = "Learn More";
    }
});
const cardDescription18 = document.querySelector(".card-description18 p");
const fullText18 = cardDescription18.textContent;

const button18 = document.querySelector(".button18");

button18.addEventListener("click", () => {
    if (cardDescription18.textContent === sliceDescription(fullText18, 100)) {
        cardDescription18.textContent = fullText18;
        button18.textContent = "Show Less";
    } else {
        cardDescription18.textContent = sliceDescription(fullText18, 100);
        button18.textContent = "Learn More";
    }
});
const cardDescription19 = document.querySelector(".card-description19 p");
const fullText19 = cardDescription19.textContent;

const button19 = document.querySelector(".button19");

button19.addEventListener("click", () => {
    if (cardDescription19.textContent === sliceDescription(fullText19, 100)) {
        cardDescription19.textContent = fullText19;
        button19.textContent = "Show Less";
    } else {
        cardDescription19.textContent = sliceDescription(fullText19, 100);
        button19.textContent = "Learn More";
    }
});
const cardDescription20 = document.querySelector(".card-description20 p");
const fullText20 = cardDescription20.textContent;

const button20 = document.querySelector(".button20");

button20.addEventListener("click", () => {
    if (cardDescription20.textContent === sliceDescription(fullText20, 100)) {
        cardDescription20.textContent = fullText20;
        button20.textContent = "Show Less";
    } else {
        cardDescription20.textContent = sliceDescription(fullText20, 100);
        button20.textContent = "Learn More";
    }
});
const cardDescription21 = document.querySelector(".card-description21 p");
const fullText21 = cardDescription21.textContent;

const button21 = document.querySelector(".button21");

button21.addEventListener("click", () => {
    if (cardDescription21.textContent === sliceDescription(fullText21, 100)) {
        cardDescription21.textContent = fullText21;
        button21.textContent = "Show Less";
    } else {
        cardDescription21.textContent = sliceDescription(fullText21, 100);
        button21.textContent = "Learn More";
    }
});







