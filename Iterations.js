console.log("Tutorial of loops!")

let a= 1;
for (let i = 0; i < 100; i++) {
    console.log(i)
}

obj={
    name: "Goku",
    role: "AI Scripter",
    age: 45,
}
for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
}

for (const R of "Kanha") {
    console.log(R)    
}

let w = 0;
while (w < 6) {
    console.log(w)
    w++;
}

d = 100
do {
    console.log(d)
    d++;
} while (d < 106);