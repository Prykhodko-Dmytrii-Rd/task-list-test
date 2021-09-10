import React from 'react';
import useRoutes from "./Routes";

const App = () => {
    const page = useRoutes()

    return (
        <div className={"customWrapper"}>
            <div className={"customContainer"}>
                {page}
            </div>
        </div>
    );
}

export default App;
