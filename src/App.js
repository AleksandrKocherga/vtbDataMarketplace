import './App.css';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import CatalogPage from './CatalogPage/CatalogPage';
import MainPage from './MainPage/MainPage';
import CatalogTree from './components/CatalogTree/CatalogTree';
import CatigoryesView from './components/CatigoryesView/CatigoryesView';
import DataSetView from './components/DataSetView/DataSetView';
import { treeData } from './common/const';
import GetDatasets from './GetDatasets';

function App() {
  const [view, setView] = useState(false);
  const [title, setTitle] = useState();

  const { Content, Sider } = Layout;

  return (
    <>
      <GetDatasets />
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <MainPage />
          </Route>
          <Route path='/partner/:name'>
            <Layout>
              <Sider style={{ height: '100vh' }}>
                <CatalogTree setView={setView} treeData={treeData} />
              </Sider>
              <Layout>
                <Content>{view ? <CatigoryesView /> : <DataSetView />}</Content>
                <CatalogPage />
              </Layout>
            </Layout>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
