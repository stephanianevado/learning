function App() {
    const audioClips = [
        {
            keyCode: 81,
            keyTrigger: "Q",
            id: "Heater-1",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        },
        {
            keyCode: 87,
            keyTrigger: "W",
            id: "Heater-2",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        },
        {
            keyCode: 69,
            keyTrigger: "E",
            id: "Heater-3",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        },
        {
            keyCode: 65,
            keyTrigger: "A",
            id: "Heater-4",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        },
        {
            keyCode: 83,
            keyTrigger: "S",
            id: "Clap",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        },
        {
            keyCode: 68,
            keyTrigger: "D",
            id: "Open-HH",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        },
        {
            keyCode: 90,
            keyTrigger: "Z",
            id: "Kick-n'-Hat",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        },
        {
            keyCode: 88,
            keyTrigger: "X",
            id: "Kick",
            url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        },
        {
            keyCode: 67,
            keyTrigger: "C",
            id: "Closed-HH",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        }
    ];

    const [displayName, setDisplayName] = React.useState("Play Sound");

    function handleDisplay(soundName) {
        setDisplayName(soundName);
    }
    return (
        <div id="drum-machine">
            <div id="display">
                <span id="displayName">{displayName}</span>
            </div>
            <div className="key-pad">
                {audioClips.map((clip) => (
                    <Pad key={clip.id} clip={clip} setDisplay={handleDisplay} />
                ))}
            </div>
        </div>
    );
}

function Pad({ clip, setDisplay }) {
    React.useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    function handleKeyPress(e) {
        if (e.keyCode === clip.keyCode) {
            playSound();
        }
    }

    function handleName() {
        setDisplay(clip.id);
    }

    function playSound() {
        const audioTag = document.getElementById(clip.keyTrigger);
        audioTag.currentTime = 0;
        audioTag.play();
        handleName();
    }

    return (
        <div onClick={playSound} id={clip.id} className="drum-pad">
            <audio className="clip" id={clip.keyTrigger} src={clip.url} />
            <span id="keyName">{clip.keyTrigger}</span>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
