let char_list = [

    {id: "laurna", name: "Laurna Hase", flavor: "Bewildered Butcher", img: "images/Test_Full_2.png", desc: ""},
    {id: "laputa", name: "Laputa Lanhki", flavor: "The Scheming Snake", img: "images/Test_Full.png", desc: ""},
    //{id: 2, name: "", flavor: "", img: "", desc: ""},

]

let buttons = document.getElementsByClassName("head");
let image = document.getElementById("fullbody");
let info = document.getElementById("text");
let children = info.children;

let char = null;

let index = 0;

function highlight(character) {

    char = document.getElementById(character);


    for (let i = 0; i < buttons.length; i++) {

        if (buttons[i].id === character) {

            char.style.opacity = 1;
            index = i;
            image.src = char_list[i].img;
            children[0].textContent = char_list[i].name;
            children[1].textContent = char_list[i].flavor;
            continue;

        }
        
        buttons[i].style.opacity = 0.5;

    }

}

function arrowClick(direction) {

    if (direction === "left") {

        index--;

    } else {

        index++;

    }

    
    if (index > char_list.length - 1) {

        index = 0;

    }
    if (index < 0) {

        index = char_list.length - 1;

    }


    highlight(char_list[index].id);

}