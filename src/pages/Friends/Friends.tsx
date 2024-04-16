import { useEffect } from 'react';

export const Friends = () => {
    useEffect(() => {
        document.title = 'Bạn bè! Family h07';
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
    }, []);
    return (
        <div>
            <h1>FRIENDS PAGE</h1>
        </div>
    );
};
