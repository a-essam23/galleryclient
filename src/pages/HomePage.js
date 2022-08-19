import GroupList from "../components/groups/GroupList";
const groupData = [
    {
        key: "1",
        title: "Molds",
        image: "https://images.prismic.io/oddbox/c3e87e0d-d6aa-4b27-ab93-4b9b67cb57cc_pierpaolo-riondato-s7r4xjKXo0s-unsplash.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max",
    },
    {
        key: "2",
        title: "Models",
        image: "https://zulushoppy.com/wp-content/uploads/2021/10/potato.jpeg",
    },
    {
        key: "3",
        title: "Projects",
        image: "https://assets.epicurious.com/photos/5787d8ff1edb4f17303e3ee1/4:6/w_888,h_1332,c_limit/chocolate-mint-18072016.jpg",
    },
];
function HomePage(props) {
    return (
        <section>
            <GroupList groups={groupData} />
        </section>
    );
}

export default HomePage;
