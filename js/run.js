const ruleset = {
    "q1": {
        "a": ["q1", "a", "R"],
        "b": ["q1", "a", "R"],
        "ß": ["q2", "ß", "L"]
    },
    "q2": {
        "a": ["q2", "a", "L"],
        "ß": ["q3", "ß", "R"]
    },
    "q3": {
        "ß": ["q3", "ß", "R"]
    }

}

const estadoInicial = "q1 0";
let temporal = document.querySelector(".temporal");
let tabla = document.querySelector(".tb");

function initialize() {
    form = document.querySelector("form")

    form.addEventListener("submit", function(event) {
        Printer.clear()
               
        let tape = new Tape(form.elements['tape'].value)
        let head = new Head(estadoInicial)
        
        m = new Machine(ruleset, tape, head)
        m.run()

        event.preventDefault()
    })
}


initialize()
