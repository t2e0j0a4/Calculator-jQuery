// JavaScript Starts Here

const input = $('#value-input');
const enter = (quantity) => {
    input.val(`${input.val()+quantity}`)
    var audio = {};
    audio["walk"] = new Audio();
    audio["walk"].src = "../Utilities/Click.wav";
    audio["walk"].play();
}

const equal = () => {
    let result = eval(input.val());
    input.val(result)
    var audio = {};
    audio["walk"] = new Audio();
    audio["walk"].src = "../Utilities/Click.wav";
    audio["walk"].play();
}

const allclear = () => {
    input.val('');
    var audio = {};
    audio["walk"] = new Audio();
    audio["walk"].src = "../Utilities/Click.wav";
    audio["walk"].play();
}

// JavaScript Ends Here