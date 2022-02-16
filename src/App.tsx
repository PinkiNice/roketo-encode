import { HashRouter, Route, Routes } from "react-router-dom";
import { AppContextProvider } from "./app/app-context";
import { Slides } from "./slides";

function App() {
  return (
    <div className="App p-10 pt-20 pb-20 flex flex-col min-h-screen">
      <AppContextProvider>
        <HashRouter>
          <Routes>
            <Route index element={<Slides />} />
            <Route path=":slide" element={<Slides />} />
          </Routes>
        </HashRouter>
      </AppContextProvider>
    </div>
  );
}

export default App;
