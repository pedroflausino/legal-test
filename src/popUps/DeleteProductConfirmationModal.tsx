import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

interface Props {
  productName: string;
  onConfirmDelete: () => void;
}

const DeleteProductConfirmationModal: React.FC<Props> = ({ productName, onConfirmDelete }) => {
  confirmAlert({
    title: 'Confirmar exclusão',
    message: `Tem certeza de que deseja excluir o produto "${productName}"?`,
    buttons: [
      {
        label: 'Sim',
        onClick: onConfirmDelete
      },
      {
        label: 'Cancelar'
      }
    ]
  });
  
  return null;
};

export default DeleteProductConfirmationModal;
