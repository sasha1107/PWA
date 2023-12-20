import { RouterProvider } from 'react-router-dom';
import { router } from 'router';
import { Provider, Layout } from 'components';
import Loading from 'pages/loading';

function App() {
  return (
    <Provider>
      <Layout>
        <RouterProvider router={router} fallbackElement={<Loading />} />
      </Layout>
    </Provider>
  );
}

export default App;
