import { AppProvider } from "../../Context";

import "./App.css"

const App = () => {

    return (
        <AppProvider>
			<div>
				<h1>App</h1>
			</div>
		</AppProvider>
    );
}

export default App
