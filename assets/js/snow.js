// quantity of snowflakes to display
let nb_snowflakes = 140;

/**
 * Function to set style for each snowflake 
 * to the head
 */
function add_css(rule) {
    let css = document.createElement('style');
    css.type = 'text/css';
    css.appendChild(document.createTextNode(rule)); // Support for the rest
    document.getElementsByTagName("head")[0].appendChild(css);
}

/**
 * Math function to have random int between
 * 0 and 100
 */
function random_int(value = 100){
    return Math.floor(Math.random() * value) + 1;
}

/**
 * Math function to take random value between
 * two others values which define the range for 
 * snowflake
 */
function random_range(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * Function to create animation for snowflakes
 */
function create_snow(snow_quantity = 200){
    let snowflake_name = "snowflake";
    let rule = ``;
    if (typeof base_css !== 'undefined'){
        rule = base_css;
    }
    
    for(let i = 1; i < snow_quantity; i++){
        let random_x = Math.random() * 100; // vw
        let random_offset = random_range(-100000, 100000) * 0.0001; // vw;
        let random_x_end = random_x + random_offset;
        let random_x_end_yoyo = random_x + (random_offset / 2);
        let random_yoyo_time = random_range(30000, 80000) / 100000;
        let random_yoyo_y = random_yoyo_time * 100; // vh
        let random_scale = Math.random();
        let fall_duration = random_range(10, 30) * 1; // s
        let fall_delay = random_int(30) * -1; // s
        let opacity_ = Math.random();

        rule += `
        .${snowflake_name}:nth-child(${i}) {
            opacity: ${opacity_};
            transform: translate(${random_x}vw, -10px) scale(${random_scale});
            animation: fall-${i} ${fall_duration}s ${fall_delay}s linear infinite;
        }

        @keyframes fall-${i} {
            ${random_yoyo_time*100}% {
                transform: translate(${random_x_end}vw, ${random_yoyo_y}vh) scale(${random_scale});
            }

            to {
                transform: translate(${random_x_end_yoyo}vw, 100vh) scale(${random_scale});
            }
            
        }
        `
    }

    add_css(rule);
}

/**
 * Function used to create snowflakes
 */
function create_snowflakes(snow_quantity = 200) {
    snow_quantity -= 1;

    for (let x = 0; x < snow_quantity; x++) {
        let board = document.createElement('div');
        board.className = "snowflake";

        document.getElementById('snow').appendChild(board);
    }
}

/**
 * Function to turn on and off the snowtime process
 * as you wish (usually for settings buttons)
 */
function toggle_snow() {
    let check_box = document.getElementById("toggle_snow");
    if (check_box.checked == true) {
        document.getElementById('snow').style.display = "block";
    }
    else {
        document.getElementById('snow').style.display = "none";
    }
}

/**
 * Function to launch the snow time after
 * configuration
 */
window.onload = function() {
    create_snow(nb_snowflakes);
    create_snowflakes(nb_snowflakes);
};
