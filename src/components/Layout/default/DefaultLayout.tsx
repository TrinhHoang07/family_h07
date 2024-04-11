import React from 'react';
import { Footer } from '~h07/components/Footer/Footer';
import './DefaultLayout.scss';

type _T_Props = {
    children: React.ReactNode;
};

export const DefaultLayout = (props: _T_Props) => {
    return (
        <div className="default-layout">
            <div className="contents">{props.children}</div>
            <Footer />
        </div>
    );
};
