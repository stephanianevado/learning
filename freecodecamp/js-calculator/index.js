function App() {
    const [expression, setExpression] = React.useState("");
    const [answer, setAnswer] = React.useState(0);

    const display = (symbol) => {
        setExpression((prevValue) => {
            if (
                /[+*-/]/.test(symbol) &&
                /[+*-/]/.test(prevValue[prevValue.length - 1])
            ) {
                let newValue;
                if (/[-]/.test(symbol)) {
                    newValue = prevValue.slice(0, prevValue.length) + symbol;
                } else {
                    let count = 0;
                    for (let i = 0; i < prevValue.length; i++) {
                        if (isNaN(+prevValue[i])) {
                            count++;
                        } else {
                            count = 0;
                        }
                    }
                    newValue = prevValue.slice(0, prevValue.length - count) + symbol;
                }

                setExpression(newValue);
            } else {
                if (prevValue) {
                    prevValue = prevValue + "";
                    let valArr = prevValue.split(/[+/*-]/g);
                    console.log("valArr " + JSON.stringify(valArr));
                    let lastNumber = valArr[valArr.length - 1];
                    if (!isNaN(lastNumber) && /[.]/.test(lastNumber) && symbol === ".") {
                        console.log("symbol = empty ");
                        symbol = "";
                    }
                }

                setExpression(
                    (prevValue + symbol).replace(/^0/g, "").replace(/\.+/g, ".")
                );
            }
        });

        setAnswer((prevValue) =>
            (prevValue + symbol).replace(/^0/g, "").replace(/\.+/g, ".")
        );
    };

    function calculate() {
        setAnswer(eval(expression));
        setExpression(eval(expression));
    }
    function allClear() {
        setExpression("");
        setAnswer(0);
    }
    function clear() {
        setExpression((prev) => {
            setAnswer(0);
            console.log(prev);
            prev = prev + "";
            return prev
                .split("")
                .slice(0, prev.length - 1)
                .join("");
        });
    }

    return (
        <div className="container">
            <div className="grid">
                <div onClick={display} className="dis">
                    <input className="expression" value={expression} placeholder="0" disabled />
                    <input id="display" className="answer" value={answer} />
                </div>
                <div onClick={allClear} id="clear" className="padButton AC pink">AC</div>
                <div onClick={clear} id="oneClear" className="padButton C pink">C</div>
                <div onClick={() => display("/")} id="divide" className="padButton div">/</div>
                <div onClick={() => display("*")} id="multiply" className="padButton times">x</div>
                <div onClick={() => display("7")} id="seven" className="padButton seven dark-gray">
                    7
            </div>
                <div onClick={() => display("8")} id="eight" className="padButton eight dark-gray">8</div>
                <div onClick={() => display("9")} id="nine" className="padButton nine dark-gray">9</div>
                <div onClick={() => display("-")} id="subtract" className="padButton minus">-</div>
                <div onClick={() => display("4")} id="four" className="padButton four dark-gray">4</div>
                <div onClick={() => display("5")} id="five" className="padButton five dark-gray">5</div>
                <div onClick={() => display("6")} id="six" className="padButton six dark-gray">6</div>
                <div onClick={() => display("+")} id="add" className="padButton plus">+</div>
                <div onClick={() => display("1")} id="one" className="padButton one dark-gray">1</div>
                <div onClick={() => display("2")} id="two" className="padButton two dark-gray">2</div>
                <div onClick={() => display("3")} id="three" className="padButton three dark-gray">3</div>
                <div onClick={calculate} id="equals" className="padButton equal">=</div>
                <div onClick={() => display("0")} id="zero" className="padButton zero dark-gray">0</div>
                <div onClick={() => display(".")} id="decimal" className="padButton dot dark-gray">.</div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))