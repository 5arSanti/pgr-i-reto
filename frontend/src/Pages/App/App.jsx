import { AppProvider } from "../../Context";
import { Header } from "../Components/Header";

import "./App.css"

const App = () => {

    return (
        <AppProvider>
			<Header/>
		</AppProvider>
    );
}

export default App
