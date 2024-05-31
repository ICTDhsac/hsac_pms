// Importing SweetAlert2 and the React wrapper
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default function SweetAlertComponent( { show, title, text, icon, showCancelButton, onConfirm, onCancel }) {

    if (show) {
        MySwal.fire({
            title,
            text,
            icon,
            showCancelButton,
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                if (onConfirm) onConfirm();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                if (onCancel) onCancel();
            }
        });
    }
    
    return null;

}
