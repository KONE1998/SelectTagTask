
import { Select, Typography,PageHeader, Button } from 'antd';
// import React from 'react';
import 'antd/dist/antd.css';
import {
   
    SettingOutlined,
    CloseOutlined ,
    
  } from '@ant-design/icons';
import React,{useEffect,useState} from 'react';
const { Option } = Select;
const { Title } = Typography;

function Me(){
    
    const isLoggedIn =true;
    let [result1, setResult1] = useState(isLoggedIn)

    let hello = (e) => {
        setResult1(<div>
            
            {isLoggedIn
            ? <h3>Saved!</h3>
            : <h3>Removed</h3>
          }</div>);
      }


return(
    <div >
        
    <PageHeader
    style={{backgroundColor:'grey'}}
    
    className="site-page-header"
    title={ <Button style={{fontSize:18}} key="3">Publish</Button> }
    
   subTitle={<Button key="1" type="primary">

   {result1}
 </Button>
 
}
extra={[
    <SettingOutlined />,
    <CloseOutlined />
]}

  >
  </PageHeader>
  <div >
    <div  style={{width:'30%',marginLeft:'35%',marginTop:'1%'}}>
    <h3 style={{marginRight:'100%'}}>
  TAGS
  <span style={{fontStyle:'italic'}} >(Optional)</span>
  
</h3>
  <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Start Typing, And We Shall Make Suggestions!"
    defaultValue={['Java']}
    onChange={hello}
    // onClick={handlePrompt}
    optionLabelProp="label"
  >
    <Option value="Css" label="Css">
      <div className="demo-option-label-item">
        
        Css
      </div>
    </Option>
    <Option value="Java" label="Java">
      <div className="demo-option-label-item">
        
        Java
      </div>
    </Option>
    <Option value="Reactjs" label="Reactjs">
      <div className="demo-option-label-item">
        
        Reactjs
      </div>
    </Option>
    <Option value="JavaScript" label="JavaScript">
      <div className="demo-option-label-item">
        
        JavaScript
      </div>
    </Option>
    <Option value="Kotlin" label="Kotlin">
      <div className="demo-option-label-item">
        
        Kotlin
      </div>
    </Option>
    <Option value="C" label="C">
      <div className="demo-option-label-item">
        
        C
      </div>
    </Option>
    <Option value="Cplus" label="C++">
      <div className="demo-option-label-item">
        
        C++
      </div>
    </Option>
  </Select>
  </div>
  </div>
  </div>

)
}

export default Me;

