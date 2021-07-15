let users = document.querySelector("#usersCounter");
let exercises = document.querySelector("#exercisesCounter");
let repeats = document.querySelector("#repeatsCounter");

usersSplitted = users.textContent.split(" ");
exercisesSplitted = exercises.textContent.split(" ");
repeatsSplitted = repeats.textContent.split(" ");

setInterval(() => {
    users.textContent = `${usersSplitted[0]} ${+ usersSplitted[1]++}`;
}, 10000)

setInterval(() => {
    exercises.textContent = `${exercisesSplitted[0]} ${+ exercisesSplitted[1]} ${+ exercisesSplitted[2] + 3}`;
}, 15000)

setInterval(() => {
    repeats.textContent = `${repeatsSplitted[0]} ${+ repeatsSplitted[1]} ${ + repeatsSplitted[2]} ${ + repeatsSplitted[3] + 2}`;
}, 20000)

