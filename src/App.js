import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "antd/dist/antd.min.css";
import "./components/layout/Layout.css";
import AdminDashboard from "./pages/AdminDashboard";
import GroupPage from "./pages/GroupPage";
import ColletionPage from "./pages/CollectionPage";
import AlbumPage from "./pages/AlbumPage";

//SIGNUP

// MOLDS
// MODELS
// PROJECTS

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/" element={<GroupPage />} />
                <Route path="/:collection" element={<ColletionPage />} />
                <Route path="/:collection/:album" element={<AlbumPage />} />
            </Routes>
        </Router>
    );
}

export default App;
