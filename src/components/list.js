import React from 'react';
import { List} from 'antd';
const data = [
  {title:'Hello: A Geo-index and Image Recognition Based Social Network',
   link:'./article1',
  },
  {title:'8 Steps to solve system design problems',
   link:'./article2',
  },
];

export class list extends React.Component {
 render() {
   return (
    <List size="large"
      bordered
      dataSource={data}
      renderItem={item => (<List.Item><List.Item.Meta
      title={<a href={item.link}>{item.title}</a>}
      /></List.Item>)}
    />
    );
 }
}