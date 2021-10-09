import React from 'react';
import { Tree } from 'antd';

const CatalogTree = ({treeData, setView}) => {
  const onSelect = (_, info) => {
    if(info.node.children) {
      return setView(true);
    }else {
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
        />
    </div>
  );
};

export default CatalogTree;
