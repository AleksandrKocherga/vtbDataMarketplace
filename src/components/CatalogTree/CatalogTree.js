import React from 'react';
import { Tree } from 'antd';

const CatalogTree = ({treeData, setView, setCatigory, setDataSet}) => {
  const onSelect = (_, info) => {
    if(info.node.children) {
      console.log(info)
      setCatigory(info.node)
      return setView(true);
    }else {
      console.log(info)
      setDataSet(info.node)
      return setView(false);
    }
  };

  return (
    <div>
      <Tree
        showLine={true}
        showIcon={true}
        treeData={treeData}
        onSelect={onSelect}
        defaultSelectedKeys={['0-1']}
        />
    </div>
  );
};

export default CatalogTree;
