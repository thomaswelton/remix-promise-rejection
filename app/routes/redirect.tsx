import { redirect } from '@remix-run/react';

export const loader = () => {
    const random = Math.random();
    if (random < 0.5) {
        console.log('issuing redirect to /');
        return redirect('/');
    }

    return null;
};
