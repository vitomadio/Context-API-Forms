import { useEffect, useState } from 'react';

const useValidate = (
    ref: { current: HTMLElement | null },
    validations: Array<Function> | undefined
): boolean => {
    const [error, setError] = useState<boolean>(false);
    useEffect(() => {
        if (validations) {
            const current = ref.current;
            const validateInput = (event: Event): any => {
                const target = event.target as HTMLInputElement;
                validations.map((validation) => {
                    if (target.checked) {
                        return setError(validation(target.checked));
                    }
                    return setError(validation(target.value));
                });
            };
            if (ref.current)
                ref.current.addEventListener('focusout', validateInput);
            return () => {
                if (current)
                    current.removeEventListener('focusout', validateInput);
            };
        }
    }, [ref, validations]);
    return error;
};

export default useValidate;
