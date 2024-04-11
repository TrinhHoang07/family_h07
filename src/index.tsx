import React from 'react';
import ReactDOM from 'react-dom/client';
import '~h07/index.css';
import App from '~h07/App';
import reportWebVitals from '~h07/reportWebVitals';
import { Provider } from 'react-redux';
import { store } from '~h07/pages/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
