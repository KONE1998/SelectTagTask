import { Select, Divider, Input, Typography,PageHeader, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
// import React,{Component} from 'react';
// import React from 'react';
import 'antd/dist/antd.css';
import {
   
    SettingOutlined,
    CloseOutlined ,
    
  } from '@ant-design/icons';
import React,{useEffect,useState,Component} from 'react';
const { Option } = Select;
const { Title } = Typography;


let index = 0;

class App extends Component {
    
  state = {
    items: ['Java','Css','C','C++','Kotlin','C#','Css3','HTML','Flask','Mongodb','Matlab'],
    name: '',
  };

  onNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

  hello() {
         <h3>Saved!</h3>
  }

  addItem = () => {
    console.log('addItem');
    const { items, name } = this.state;
    this.setState({
      items: [...items, name || `New item ${index++}`],
      name: '',
    });
  };

  render() {
    const { items, name } = this.state;

    return (
      <div>
      <PageHeader
    style={{backgroundColor:'grey'}}
    
    className="site-page-header"
    title={ <Button style={{fontSize:18}} key="3">Publish</Button> }
    
   subTitle={<Button key="1" type="primary">

   {<div> <h3>Saved!</h3> </div>}
 </Button>
 
}
extra={[
    <SettingOutlined />,
    <CloseOutlined />
]}

  >
  </PageHeader>
   <div  style={{width:'30%',marginLeft:'35%',marginTop:'1%'}}>
      <Select
      mode="multiple"
        style={{ width: 320 }}
        placeholder="Start Typing, And We Shall Make Suggestions!"
        dropdownRender={menu => (
          <div>
            {menu}
            <Divider style={{ margin: '4px 0' }} />
            <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
              <Input style={{ flex: 'auto' }} value={name} onChange={this.onNameChange}  />
              <a
                style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                onClick={this.addItem}
              >
                <PlusOutlined /> Add item
              </a>
            </div>
          </div>
        )}
      >
        {items.map(item => (
          <Option key={item}>{item}</Option>
        ))}
      </Select>
      </div>
      </div>
    );
    
  }
}

export default App;

