import logo from './logo.svg';
import './App.css';
import { FloatButton } from "antd";
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Anchor } from "antd";

function App() {
  return(
  <>
  <div className="App">
    <FloatButton icon={<QuestionCircleOutlined />} type="primary" style={{ right: 24 }} />
  </div>
  <div style={{ padding: '40px' }}>
      <Anchor
        direction="horizontal"
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'A',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'B',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'C',
          },
        ]}
      />
    </div>
    <div>
      <div
        id="part-1"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,255,0,0.02)',
        }}
      />
      <div
        id="part-2"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,0,255,0.02)',
        }}
      >
        <h1>HELLO</h1>
      </div>
      <div
        id="part-3"
        style={{ width: '100vw', height: '100vh', textAlign: 'center', background: '#FFFBE9' }}
      />
    </div>
  </>
  );
}

export default App;
