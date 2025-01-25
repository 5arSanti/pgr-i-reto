import { AppProvider } from "../../Context";
import { Header } from "../Components/Header";
import { TitleButtonContainer } from "../Components/TitleButtonContainer";

import "./App.css"

const App = () => {

    return (
        <AppProvider>
			<Header/>

			<TitleButtonContainer/>
		</AppProvider>
    );
}

export default App
