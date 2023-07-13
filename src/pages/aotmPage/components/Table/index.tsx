import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useMemo } from 'react';
import { useFormAtoms } from '@/pages/aotmPage/atom/core/Table';


export default function() {
  const { tableList } = useFormAtoms();

  const formatColumnRecordConfig = (field, render: ColumnsType<any>[number]) => {

    return {
      ...render
    }
  }
  
  const columns = useMemo(() => {
    return [
      formatColumnRecordConfig('name', {
        title: '名字',
        width: 120,
        render(_, row) {
          return '2'
        }
      })
    ]
  }, [])
  return (
    <Table dataSource={tableList} columns={columns} />
  )
}
