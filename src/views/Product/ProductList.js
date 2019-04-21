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

const data = [{
    key: 1, sku: '123213', name: 'lót chuột'
}, {
    key: 2, sku: '123216', name: 'chuột'
}, {
    key: 3, sku: '123215', name: 'bàn phím cơ'
}, {
    key: 4, sku: '123214', name: 'màn hình'
}]

function ProductList(props) {
    const { setSelectedProducts } = props;
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
        onRow={(record, rowIndex) => {
            return {
                onDoubleClick: (event) => { console.log(`Click on row ${rowIndex}`) }
            }
        }}
    />;
}

export default ProductList;
