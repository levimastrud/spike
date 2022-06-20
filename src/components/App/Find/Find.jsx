import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import homeblue from '../homeicon_blue.svg'


function Find() {

    const [toggle, setToggle] = useState('hide-hint');
    const [toggleWin, setToggleWin] = useState('hide-hint');
    const history = useHistory()

    // Supports tabbing inside code block

    var textareas = document.getElementsByTagName('textarea');
    var count = textareas.length;
    for (var i = 0; i < count; i++) {
        textareas[i].onkeydown = function (e) {
            if (e.keyCode == 9 || e.which == 9) {
                e.preventDefault();
                var s = this.selectionStart;
                this.value = this.value.substring(0, this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
                this.selectionEnd = s + 1.5;
            }
        }
    }

    let [answerResult, setAnswerResult] = useState('');

    const checkAnswer = () => {

        let parsedExpanded = parsed.lastChild.lastChild.childNodes;

        try {
            if (parsedExpanded.length < 2) {
                setAnswerResult('incorrect!');
            }
            if (parsedExpanded[1].nodeName === 'HEADER' && parsedExpanded[1].firstElementChild.nodeName === 'H1') {
                setAnswerResult('correct!')
            } else {
                setAnswerResult('incorrect!');
            }
        } catch {
            setAnswerResult('incorrect!');
        }
    }

    // let toggleDisplay = 'hide-hint';

    let defaultAnswer = `
    <html>
        <head>
        </head>
        <body>
        </body>
    </html>
    `;

    let viewSolution = `
    <html>
        <head>
        </head>
        <body>
            <header>
                <h1> Pizza </h1>
            </header>
        </body>
    </html>
    `;

    const [codeBlock, setCodeBlock] = useState(defaultAnswer)

    // ORIGNAL METHOD

    const parser = new DOMParser();

    const parsed = parser.parseFromString(codeBlock, "text/html");

    return (
        <div className="blue">
            <div className="wrapper">
                <h1>{answerResult}</h1>
                <h2 className="task">Add a header element between the body tags containing an h1 element with your favorite food!</h2>
            </div>
            <textarea value={codeBlock} onChange={(e) => setCodeBlock(e.target.value)}></textarea>
            <h3 className={toggle}>Does header have an opening and closing tag?</h3>
            <div className="pageButtons">
                <button onClick={() => toggle ? setToggle('') : setToggle('hide-hint')}>Hint</button>
                <button onClick={() => setCodeBlock(viewSolution)}>View Solution</button>
                <button onClick={() => {
                    setCodeBlock(defaultAnswer);
                    setAnswerResult('');
                }
                }>Reset</button>
                <button onClick={() => checkAnswer()}>Submit</button>
            </div>
            <img src={homeblue} className='home' onClick={() => history.push('/')}></img>
        </div>
    )
}

export default Find;