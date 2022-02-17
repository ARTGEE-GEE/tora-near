import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Loader = () => {
  return (
    <div className="loader">
      <Spin indicator={<LoadingOutlined style={{fontSize: 60, color: '#9f353a'}}></LoadingOutlined>} />
    </div>
  )
}

export default Loader