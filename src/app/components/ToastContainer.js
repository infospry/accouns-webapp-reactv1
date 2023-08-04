import { ToastContainer as ToastifyContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContainer = () => {
  return <ToastifyContainer position="top-right" />;
};

export { toast, ToastContainer };