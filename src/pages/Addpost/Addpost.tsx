import { useEffect } from 'react';

export const Addpost = () => {
    useEffect(() => {
        document.title = 'Đăng bài! Family h07';
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
    }, []);

    return (
        <div>
            <h1>ADDPOST PAGE</h1>
        </div>
    );
};
