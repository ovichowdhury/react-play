import React from 'react'


function Cart(props) {
    return (
        <>
            <div
                style={{ margin: "10px", border: "1px solid red" }}
                id={Math.random() * 100}
                draggable
                onDragStart={(e) => props.dragStart(e)}
            >
                {props.text}
                <br></br>
                <input type="text"/>
                <br></br>
                <button>Submit</button>
            </div>
        </>
    )
}

function DragDrop() {
    
    const dragStart = (e) => {
        console.log(e.target.id);
        e.dataTransfer.setData("id", e.target.id);
    }

    const onDragOver = (e) => {
        e.preventDefault();
    }

    const onDrop = (e, elementId) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("id");
        document.getElementById(elementId).appendChild(document.getElementById(id));
    }

    const onDropCopy = (e, elementId) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("id");
        console.log("from drop:", id);
        const elem = document.getElementById(id);
        const clone = elem.cloneNode(true);
        clone.id = Math.random() * 100;
        console.log("from Drop clone: ", clone.id);
        document.getElementById(elementId).appendChild(clone);
    }


    return (
        <>
            <div className="row" style={styles.div}>
                <div className="col-sm-4" style={styles.div} onDragOver={onDragOver} onDrop={(e) => onDrop(e, "todo")} id="todo">
                    <h2>To Do</h2>
                    <Cart dragStart={dragStart} text="Order1"></Cart>
                    <Cart dragStart={dragStart} text="Order2"></Cart>
                    <Cart dragStart={dragStart} text="Order3"></Cart>
                </div>
                <div className="col-sm-4" style={styles.div} onDragOver={onDragOver} onDrop={(e) => onDrop(e, "doing")} id="doing">
                    <h2>Doing</h2>
                </div>
                <div className="col-sm-4" style={styles.div} onDragOver={onDragOver} onDrop={(e) => onDrop(e, "done")} id="done">
                    <h2>Done</h2>
                </div>
            </div>


            <div className="row" style={styles.div}>
                <div className="col-sm-4" style={styles.div} onDragOver={onDragOver} onDrop={(e) => onDropCopy(e, "todo1")} id="todo1">
                    <h2>To Do</h2>
                    <Cart dragStart={dragStart} text="Order11"></Cart>
                    <Cart dragStart={dragStart} text="Order22"></Cart>
                    <Cart dragStart={dragStart} text="Order33"></Cart>
                </div>
                <div className="col-sm-4" style={styles.div} onDragOver={onDragOver} onDrop={(e) => onDropCopy(e, "doing1")} id="doing1">
                    <h2>Doing</h2>
                </div>
                <div className="col-sm-4" style={styles.div} onDragOver={onDragOver} onDrop={(e) => onDropCopy(e, "done1")} id="done1">
                    <h2>Done</h2>
                </div>
            </div>
        </>
    )
}

const styles = {
    div: {
        border: "1px solid black",
        padding: "20px"
    }
}

export default DragDrop
