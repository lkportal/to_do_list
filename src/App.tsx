import Layout from "./components/Layout";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ListTask from "./components/ListTask";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}/>
        <Route path="/tarefas" element={<ListTask></ListTask>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
