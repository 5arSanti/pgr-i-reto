import { AppProvider } from "../../Context";
import { Header } from "../Components/Header";
import { NewTaskForm } from "../Components/NewTaskForm";
import { TitleButtonContainer } from "../Components/TitleButtonContainer";

import "./App.css"
import { Wrapper } from "../Components/Wrapper";

const App = () => {

    return (
        <AppProvider>
			<Header/>

			<TitleButtonContainer/>

			<Wrapper/>

			<NewTaskForm/>
		</AppProvider>
    );
}

export default App
