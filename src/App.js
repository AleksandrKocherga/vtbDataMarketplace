import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd'

import CatalogPage from './CatalogPage/CatalogPage';
import MainPage from './MainPage/MainPage';
import SinglePage from './SinglePage/SinglePage';
import CatalogTree from './components/CatalogTree/CatalogTree';
import CatigoryesView from './components/CatigoryesView/CatigoryesView';
import { treeData } from './common/const';

function App() {
  const { Content, Sider } = Layout;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>
          <Route path="/single">
            <Layout>
              <Sider style={{height: "100vh"}}> 
                <CatalogTree treeData={treeData} />
              </Sider>
              <Layout>
                <Content>Content</Content>
              <SinglePage/>
              </Layout>
            </Layout>
          </Route>
        <Route path="/catalog">
          <Layout>
            <Sider style={{height: "100vh"}}> 
              <CatalogTree treeData={treeData} />
            </Sider>
            <Layout>
              <Content><CatigoryesView/></Content>
            <CatalogPage/>
            </Layout>
          </Layout>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
