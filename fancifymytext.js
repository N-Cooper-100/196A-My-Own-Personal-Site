function makeBigger() {
    alert("Hello, world!");

    document.getElementById("textArea").style.fontSize = "24pt";
}

function setFanciness() {

    const text = document.getElementById("textArea");
    const fancy = document.getElementById("fancy").checked;

    if (fancy) {
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    } else {
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}

function moo() {
    const textArea = document.getElementById("textArea");

    let str = textArea.value.toUpperCase();

    const sentences = str.split(".");
    for (let i = 0; i < sentences.length; i++) {
        const s = sentences[i].trim();
        if (s.length === 0) continue;

        const words = s.split(" ");
        words[words.length - 1] = words[words.length - 1] + "-Moo";
        sentences[i] = words.join(" ");
    }

    textArea.value = sentences.join(". ");
}
