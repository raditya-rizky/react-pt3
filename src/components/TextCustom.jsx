import {useState} from "react"
import { Container, Form } from "react-bootstrap"
import cn from "classnames"

function TextCustom() {
    const [text, setText] = useState("")

    function handleTextChange(event) {
        const value = event.target.value
        setText(value)
    }

    const [isBold, setIsBold] = useState(false)
    const [isItalic, setIsItalic] = useState(false)
    const [isUnderline, setIsUnderline] = useState(false)

    const [alignment, setAlignment] = useState("start")

    const [size, setSize] = useState(16)

    function handleSizeChange(event) {
        const value = event.target.valueAsNumber
        setSize(value)
    }

    return <Container className="pt-4">
        <Form.Group className="mb-3">
            <Form.Label>Masukkan text</Form.Label>
            <Form.Control value={text} onChange={(event) => handleTextChange(event)} />
            {/* <Form.Control value={text} onChange={handleTextChange} />
            <Form.Control value={text} onChange={(event) => setText(event.target.value)} /> */}
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Style :</Form.Label>
            <br />
            <Form.Check inline label="Bold" id="bold" type="checkbox" checked={isBold} onChange={() => setIsBold(!isBold)} />
            <Form.Check inline label="Italic" id="italic" type="checkbox" checked={isItalic} onChange={() => setIsItalic(!isItalic)} />
            <Form.Check inline label="Underline" id="underline" type="checkbox" checked={isUnderline} onChange={() => setIsUnderline(!isUnderline)}/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Alignment :</Form.Label>
            <br />
            <Form.Check inline label="Start" id="alignment-start" type="radio" checked={alignment === "start"} onChange={() => setAlignment("start")} />
            <Form.Check inline label="Center" id="alignment-center" type="radio"  checked={alignment === "center"} onChange={() => setAlignment("center")}/>
            <Form.Check inline label="End" id="alignment-end" type="radio" checked={alignment === "end"} onChange={() => setAlignment("end")}/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Size :</Form.Label>
            <Form.Control type="number" size="sm" min={8} style={{width: 60}} value={size} onChange={handleSizeChange} />
        </Form.Group>

        <p 
        className={cn(isBold && "fw-bold", isItalic && "fst-italic", isUnderline && "text-decoration-underline", `text-${alignment}`)} style={{fontSize: size}}
        >{text}</p>
    </Container>
}

export default TextCustom;