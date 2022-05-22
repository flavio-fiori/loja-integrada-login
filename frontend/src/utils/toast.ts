import { toast as ReactToastif } from 'react-toastify';

interface ToastProps {
	message: string;
	type: 'success' | 'error' | 'info';
}

export default function toast({ type, message }: ToastProps) {
	if (type === 'error') {
		return ReactToastif.error(message, { position: 'bottom-center' });
	}

	if (type === 'success') {
		return ReactToastif.success(message, { position: 'bottom-center' });
	}

	return ReactToastif.info(message, { position: 'bottom-center' });
}
