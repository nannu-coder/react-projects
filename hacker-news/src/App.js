import Button from "./Components/Button";
import SearchForm from "./Components/SearchForm";
import Stories from "./Components/Stories";
import { AppProvider } from "./Context/AppProvider";

function App() {
  return (
    <AppProvider>
      <SearchForm />
      <Button />
      <Stories />
    </AppProvider>
  );
}

export default App;
