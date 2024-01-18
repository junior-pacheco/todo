import React, { useContext, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Modal from 'react-modal';
import { TodoContext } from '../context/TodoContext';
import Table from '../../ui/components/table';

Modal.setAppElement('#root');

const CreateTodo = () => {
  const { createTodo } = useContext(TodoContext);
  const { handleSubmit, control, reset } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertType, setAlertType] = useState(null);

  const onSubmit = (data) => {
    if (data.name === '' || data.description === '') {
      
      setAlertType('warning');
      return;
    }

    const newData = { ...data, state: false };
    createTodo(newData);
    setIsModalOpen(false);
    reset();
    setAlertType('success');
  };

  const openModal = () => {
    setIsModalOpen(true);
    setAlertType(null); // Limpiar el tipo de alerta al abrir el modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    reset();
    setAlertType(null); // Limpiar el tipo de alerta al cerrar el modal
  };
  useEffect(() => {
    console.log('alertType:', alertType);
  }, [alertType]);
  
  return (
    <div className="flex w-full h-[90%] justify-center items-center">
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Create Todo Modal"
        className="modal"
        overlayClassName="overlay"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Create Todo</h2>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <input
                  className="mb-4 p-2 border border-gray-300 rounded w-full"
                  type="text"
                  onChange={onChange}
                  value={value}
                  placeholder="Name"
                />
              )}
            />
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <input
                  className="mb-4 p-2 border border-gray-300 rounded w-full"
                  type="text"
                  onChange={onChange}
                  value={value}
                  placeholder="Description"
                />
              )}
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-teal-500  text-white px-4 py-2 rounded hover:bg-teal-500 "
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <Table openModal={openModal} />
    </div>
  );
};

export default CreateTodo;
