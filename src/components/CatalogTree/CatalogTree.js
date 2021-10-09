import React from 'react';
import { Tree } from 'antd';

const CatalogTree = ({treeData}) => {

  return (
    <div>
      <Tree
        showLine={true}
        showIcon={true}
        defaultExpandedKeys={['0-0-0']}
        treeData={treeData}
        onSelect={null}
        />
    </div>
  );
};

export default CatalogTree;
