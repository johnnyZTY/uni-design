import  React from "react";
import { storiesOf } from "@storybook/react";
import Icon from '../src/components/icon'
import Button from '../src/components/button'

const types = ['check-circle', 'close-circle', 'left-circle', 'down-circle', 'minus-circle', 'plus-circle', 'right-circle', 
'time-circle', 'up-circle', 'warning-circle', 'sync', 'undo', 'redo', 'reload', 'message', 'setting', 'adduser', 'heart', 'error', 'star',
'link', 'tag', 'tags', 'right', 'left', 'up', 'down', 'arrowright', 'arrowup', 'arrowleft', 'arrowdown', 'upload', 'download', 'check', 'close',
'check-circle-fill', 'left-circle-fill', 'down-circle-fill', 'minus-circle-fill', 'close-circle-fill', 'info-circle-fill', 'up-circle-fill', 'right-circle-fill',
'plus-circle-fill', 'question-circle-fill', 'warning-circle-fill', 'heart-fill', 'message-fill', 'check-square-fill', 'down-square-fill', 'minus-square-fill', 'close-square-fill',
'left-square-fill', 'up-square-fill', 'right-square-fill', 'plus-square-fill', 'camera-fill', 'apple', 'android', 'apple-fill', 'QQ', 'chrome-fill', 'alipay-circle-fill',
'zoomout', 'zoomin', 'caret-down', 'caret-up', 'caret-right', 'caret-left', 'search'
]

storiesOf('data show', module)
.add('Icon', () => {
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', color: '#999' }}>
        {
          types.map(type => {
            return (
              <div style={{ width: 100, textAlign: 'center', padding: 10 }} className="icon-hover" key={type}>
                <div><Icon type={type}/></div>
                <div style={{ marginTop: 10 }}>{type}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )  
})
.add('Button', () => {
  return (
    <div>
      <div className="mr-20">
        <Button>初始按钮</Button>
      </div>
      <div className="mr-20">
        <Button type="warning">警告按钮</Button>
      </div>
      <div className="mr-20">
        <Button type="ghost">幽灵按钮</Button>
      </div>
      <div className="mr-20">
        <Button size="large">大号按钮</Button>
      </div>
      <div className="mr-20">
        <Button size="small">小号按钮</Button>
      </div>
      <div className="mr-20">
        <Button disabled>不可用按钮</Button>
      </div>
      <div className="mr-20">
        <Button loading>加载...</Button>
      </div>
      <div style={{ marginTop: 20 }}>
        <Button icon={<Icon type="check-circle" />}>带有icon</Button>
      </div>
      <div style={{ marginTop: 20 }}>
        <Button  onClick={() => alert('😂😂嘿嘿嘿😂😂')}>点击我，快！快！快！</Button>
      </div>
    </div>
  )
})