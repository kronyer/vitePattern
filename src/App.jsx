import { createRoot } from "react-dom/client";

const App = () =>
{
    return(
        <div>
            <h2>Template</h2>
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App></App>)