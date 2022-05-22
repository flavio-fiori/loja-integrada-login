import { useEffect, useState } from 'react';
import toast from 'utils/toast';

export default function useCounter() {
	const [counter, setCounter] = useState<number>(0);

	useEffect(() => {
		if (counter >= 5) {
			toast({
				message: 'Você excedeu o número de tentativas',
				type: 'error',
			});
		}
	}, [counter]);

	const sumCounter = () => setCounter(counter + 1);

	return {
		counter,
		sumCounter,
	};
}
