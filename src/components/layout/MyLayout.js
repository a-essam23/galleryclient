import { Layout } from "antd";
import { Header, Content, Footer } from "antd/lib/layout/layout";
import FooterContent from "./FooterContent";
import "./Layout.css";
import NavigationBar from "./NavigationBar";
function MyLayout(props) {
    return (
        <Layout>
            <Header className="header">
                <NavigationBar />
            </Header>
            <Content className="content">{props.children}</Content>
            <Footer className="footer">
                <FooterContent />
            </Footer>
        </Layout>
    );
}
export default MyLayout;
