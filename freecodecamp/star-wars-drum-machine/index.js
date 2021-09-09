function App() {
    const audioClips = [
        {
            keyCode: 81,
            keyTrigger: "Q",
            id: "Intro",
            url: "./clip/Q Intro.mp3"
        },
        {
            keyCode: 87,
            keyTrigger: "W",
            id: "Imperial March",
            url: "./clip/W The Imperial March.mp3"
        },
        {
            keyCode: 69,
            keyTrigger: "E",
            id: "The Force",
            url: "./clip/E The Force Suite.mp3"
        },
        {
            keyCode: 65,
            keyTrigger: "A",
            id: "Clone Army",
            url: "./clip/A Clone Army March.mp3"
        },
        {
            keyCode: 83,
            keyTrigger: "S",
            id: "Battle",
            url: "./clip/S Battle over Coruscant.mp3"
        },
        {
            keyCode: 68,
            keyTrigger: "D",
            id: "Across the Stars",
            url: "./clip/D Across The Stars.mp3"
        },
        {
            keyCode: 90,
            keyTrigger: "Z",
            id: "The First Order",
            url: "./clip/Z The First Order March.mp3"
        },
        {
            keyCode: 88,
            keyTrigger: "X",
            id: "Rogue One",
            url: "./clip/X Rogue One.mp3"
        },
        {
            keyCode: 67,
            keyTrigger: "C",
            id: "The Great Duel",
            url: "./clip/C The Great Duel.mp3"
        }
    ];

    const [displayName, setDisplayName] = React.useState("Join me...");

    function handleDisplay(soundName) {
        setDisplayName(soundName);
    }
    return (
        <div id="drum-machine">
            <div id="display">
                <span id="displayName">{displayName}</span>
                <h5 id="message">and together we can rule the galaxy !!!</h5>
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
