const events = require("events");
const emitter = new events.EventEmitter();
const stdin = process.openStdin();

const handleInput = function (input) {
    console.log("Input is: ", input);
}
emitter.addListener("input", handleInput);

stdin.addListener('data', d => {
    emitter.emit("input", d.toString());
});

<div id="root">
    <ul>
        <li>
            <span>Oranges</span> - <span>votes: 1</span><button>+</button> <button>-</button>
        </li>
        <li>
            <span>Bananas</span> - <span>votes: 0</span><button>+</button> <button>-</button>
        </li>
    </ul>
</div>
