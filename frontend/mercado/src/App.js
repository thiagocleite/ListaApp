import './App.css';
import { Layout, Menu } from 'antd';
import { PlusOutlined, UnorderedListOutlined,UserAddOutlined,HomeOutlined } from '@ant-design/icons';
import Routes from "./routes";
import { useNavigate } from 'react-router-dom';
import Logo from './pages/assets/logo.png'

const { Header, Footer, Sider, Content } = Layout;

function App() {
  let navigate = useNavigate();
  function navigateTo(url){
    navigate(url);
  }

  return (
    <div className="main animate__animated animate__jackInTheBox">
      <Layout className='main__content'>
        <Header className='header'><a onClick={()=>navigateTo('./')}><img src={Logo} /></a></Header>
        <Layout className='layout'>
          <Sider className='menu'>
            <Menu className='menu__section'>
            <Menu.Item key={0} icon={<HomeOutlined />} onClick={()=>navigateTo('/')}>
                Home
              </Menu.Item>
              <Menu.Item key={1} icon={<PlusOutlined />} onClick={()=>navigateTo('./adicionar')}>
                Adicionar Produto
              </Menu.Item>
              <Menu.Item key={2} icon={<UnorderedListOutlined />} onClick={()=>navigateTo('./produtos')}>
                Listar Produtos
              </Menu.Item>
              <Menu.Item key={3} icon={<UserAddOutlined />} onClick={()=>navigateTo('./login')}>
                Login
              </Menu.Item>
            </Menu>
          </Sider>
          <Content className='content'>
            <Routes />
          </Content>
        </Layout>
        <Footer className='footer'>Todos os direitos reservados</Footer>
      </Layout>
    </div>
  );
}


export default App;
