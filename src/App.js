import logo from "./logo.svg";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { TableContent } from "./components/TableContent";
import { useState } from "react";
function App() {
    const [name, setName] = useState("");
    const [mark, setMark] = useState("");
    const [id, setId] = useState(1);
    const [btnlabel, setbtnlabel] = useState("ADD");
    const rows = [];
    const [arr, setarr] = useState(rows);
    const [id_update, setId_update] = useState(0);
    const update = (name, mark) => {
        // setMark(mark);
        // setName(name);
        const data = arr.map((up) => {
            console.log(id);
            if (up.id === id_update) {
                return { ...up, name: name, mark: mark, id: id_update };
            }
        });
        setarr(data);
        setName("");
        setMark("");
        setbtnlabel("ADD");
    };
    return (
        <div className="App">
            <SearchBar
                row={arr}
                sa={setarr}
                name={name}
                mark={mark}
                id={id}
                setName={setName}
                setMark={setMark}
                setId={setId}
                btnlabel={btnlabel}
                update={update}
            />
            <TableContent
                row={arr}
                sa={setarr}
                name={name}
                mark={mark}
                id={id}
                setName={setName}
                setMark={setMark}
                setId={setId}
                setbtnlabel={setbtnlabel}
                setId_update={setId_update}
            />
        </div>
    );
}

export default App;
