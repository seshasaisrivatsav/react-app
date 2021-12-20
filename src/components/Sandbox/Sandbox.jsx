import React from 'react';
import RenderList from './RenderList';
import RenderBigList from './RenderList';
import Think from "./ThinkingInReact/Think";

const Sandbox = () => {
    const [view, setView] = React.useState("");
    const onConsole = (e) => {
        setView(e.target.value);
    }
    return (
        <div>
            <select onChange={onConsole} value={view? view: "Select View"} name="view" id="select-view">
                <option value="renderList">RenderList</option>
                <option value="renderBigList">Render Big List</option>
                <option value="thinkReact">Thinking in react</option>
            </select>
            <div>
                {view === "renderList" ? <RenderList />: null}
            </div>
            <div>
                {view === "renderBigList" ? <RenderBigList />: null}
            </div>
            <div>
                {view === "thinkReact" ? <Think />: null}
            </div>
        </div>
    );
}

export default Sandbox;
