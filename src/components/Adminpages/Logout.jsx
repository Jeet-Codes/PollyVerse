import { Button, Modal } from 'antd';
import React, {  useState } from 'react';
import Layout from './Layout';
import Manager from './Manger';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Models = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const navigate=useNavigate();
  const handleOk = () => {
    navigate('/');
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
useEffect(()=>{
  showModal(true)
},[])
  return (
    <Layout>
      <Manager>
     {
      showModal?
      <Modal   open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <h1 className='text-black text-2xl font-semibold'>Are you sure want to logout???</h1>
      </Modal>:null
}
</Manager>
    </Layout>
  );
};
export default Models;