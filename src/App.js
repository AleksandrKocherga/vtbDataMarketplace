import './App.css';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd'

import CatalogPage from './CatalogPage/CatalogPage';
import MainPage from './MainPage/MainPage';
import CatalogTree from './components/CatalogTree/CatalogTree';
import CatigoryesView from './components/CatigoryesView/CatigoryesView';
import DataSetView from './components/DataSetView/DataSetView';
import { treeData } from './common/const';

function App() {
  const [view, setView] = useState(true);
  const [catigory, setCatigory] = useState({title: 'Clients'});
  const [dataSet, setDataSet] = useState();

  const { Content, Sider } = Layout;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>
        <Route path="/partner/:name">
          <Layout>
            <Sider style={{height: "100vh"}}> 
              <CatalogTree 
                setView={setView} 
                setCatigory={setCatigory} 
                setDataSet={setDataSet} 
                treeData={treeData} 
              />
            </Sider>
            <Layout>
              <Content>
                {view ? <CatigoryesView catigory={catigory}/> : <DataSetView dataSet={dataSet} />}
              </Content>
            <CatalogPage/>
            </Layout>
          </Layout>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
