import React from 'react';
import { Table } from 'antd';

const columns = [{
    title: 'sku',
    dataIndex: 'sku',
    width: '100px'
}, {
    title: 'Name',
    dataIndex: 'name'
}]

function ProductList(props) {
    const { data, setSelectedProducts } = props;
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setSelectedProducts(selectedRows);
        }
    }

    return <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        bordered={true}
        pagination={false}
        scroll={{ x: false, y: 800 }}
        loading={data.length === 0}
        onRow={(record, rowIndex) => {
            return {
                onDoubleClick: (event) => { console.log(`Click on row ${rowIndex}`) }
            }
        }}
    />;
}

export default ProductList;
