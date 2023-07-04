import { ColumnsType } from "antd/es/table"

export   const columns: ColumnsType<any> = [
    {
      title: 'addr',
      width: 350,
      dataIndex: 'addr',
      key: 'addr',
    },
    {
      title: 'name',
      width: 200,
      dataIndex: 'name',
      key: 'name',
    },
    // {
    //   title: 'alias',
    //   dataIndex: 'alias',
    //   key: 'alias',
    //   width: 300,
    //   render: (_, record) => {
    //     return record?.alias?.map((item: string) => {
    //       return <div>{item}</div>
    //     })
    //   },
    // },
    {
      title: '标签',
      dataIndex: 'tag',
      key: 'tag',
      render: (_, record) => {
        return record?.tag?.split(' ')?.map((item: string) => {
          return item+ '、'
        })
      },
    },
  ]