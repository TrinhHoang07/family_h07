import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routers } from '~h07/router';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {routers.map((item) => {
                    const Layout = item.layout as any;
                    const Page = item.component as any;

                    return (
                        <Route
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                            path={item.path}
                            key={item.id}
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
