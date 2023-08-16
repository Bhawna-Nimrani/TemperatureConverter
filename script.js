
//for celsius
let cel = () => {
    let Celsius = document.getElementById("Celsius").value;

    // for converting Celsius to fahrenheit
    let c_f = (Celsius * 9 / 5) + 32;
    if (Number.isInteger(c_f)) {
        document.getElementById("Fahrenheit").value = c_f;
    } else {
        c_f = c_f.toFixed(2);
        document.getElementById("Fahrenheit").value = c_f;
    }

    // for converting Celsius to Kelvin
    let c_k = Number(Celsius) + 273.15;
    if (Number.isInteger(c_k)) {
        document.getElementById("Kelvin").value = c_k;
    } else {
        c_k = c_k.toFixed(2);
        document.getElementById("Kelvin").value = c_k;
    }
}

// for fahrenheit
let fah = () => {
    let Fahrenheit = document.getElementById("Fahrenheit").value;

    // for converting fahrenheit to celsius
    let f_c = (Fahrenheit - 32) * 5 / 9;
    if (Number.isInteger(f_c)) {
        document.getElementById("Celsius").value = f_c;
    } else {
        f_c = f_c.toFixed(2);
        document.getElementById("Celsius").value = f_c;
    }

    // for converting fahrenheit to kelvin
    let f_k = Number(Fahrenheit - 32) * 5 / 9 + 273.15;
    if (Number.isInteger(f_k)) {
        document.getElementById("Kelvin").value = f_k;
    } else {
        f_k = f_k.toFixed(2);
        document.getElementById("Kelvin").value = f_k;
    }
}

// for kelvin
let kel = () => {
    let Kelvin = document.getElementById("Kelvin").value;

    // for converting kelvin to celsius
    let k_c = Kelvin - 273.15;
    if (Number.isInteger(k_c)) {
        document.getElementById("Celsius").value = k_c;
    } else {
        k_c = k_c.toFixed(2);
        document.getElementById("Celsius").value = k_c;
    }

    //for converting  kelvin to fahrenheit
    let k_f = Number(Kelvin - 273.15) * 9 / 5 + 32;
    if (Number.isInteger(k_f)) {
        document.getElementById("Fahrenheit").value = k_f;
    } else {
        k_f = k_f.toFixed(2);
        document.getElementById("Fahrenheit").value = k_f;
    }
}

//for our  reset button
let res = () => {
    document.getElementById("Celsius").value = "  ";
    document.getElementById("Fahrenheit").value = "  ";
    document.getElementById("Kelvin").value = "  ";
}