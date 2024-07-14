import { Layout, Menu, MenuProps } from "antd";
const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Home",
  },
  {
    key: "2",
    label: "Classes",
  },
  {
    key: "3",
    label: "Academic",

    children: [
      {
        key: "31",
        label: "Routine",
      },
      {
        key: "32",
        label: "Result",
      },
      {
        key: "33",
        label: "Thisics",
      },
    ],
  },
  {
    key: "4",
    label: "Profile",
  },
];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{ padding: "20px 0px" }}>
          <p
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            ABC UNIVERSITY
          </p>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            content
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
