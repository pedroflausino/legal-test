import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function DeleteConfirmationModal(onConfirm: () => void) {
    confirmAlert({
        title: 'Confirmar exclusão',
        message: 'Tem certeza de que deseja remover todos os produtos do carrinho?',
        buttons: [
            {
                label: 'Sim',
                onClick: onConfirm
            },
            {
                label: 'Cancelar'
            }
        ]
    });
}

export default DeleteConfirmationModal;
