import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.min.css";
import "./components/layout/Layout.css";
import GroupPage from "./pages/GroupPage";
import ColletionPage from "./pages/CollectionPage";
import AlbumPage from "./pages/AlbumPage";
import NavigationBar from "./components/layout/NavigationBar";
const { Header, Content, Footer } = Layout;

//SIGNUP

// MOLDS
// MODELS
// PROJECTS

function App() {
    return (
        <Router>
            <Layout>
                <Header className="header">
                    <NavigationBar />
                </Header>
                <Content className="content">
                    <Routes>
                        <Route path="/" element={<GroupPage />} />
                        <Route
                            path="/:collection"
                            element={<ColletionPage />}
                        ></Route>
                        <Route
                            path="/:collection/:album"
                            element={<AlbumPage />}
                        />
                    </Routes>
                </Content>

                <Footer className="footer">Footer</Footer>
            </Layout>
        </Router>
    );
}

export default App;
