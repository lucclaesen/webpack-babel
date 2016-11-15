

const myFunc = (state = {}) => {
    return {...state, name : "Luc"};
};

const el = document.getElementById("main");
el.innerHTML = myFunc().name;




