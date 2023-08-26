import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Header } from '@ui';
import { ToastContainer } from 'react-toastify';

import Card from './Components/Card';
import { MainContext } from '@src/Providers/MainProvider';
import Error from '@src/Pages/Error';

import { GlobalStyles, ToastGlobal } from './styles.js';
import './fonts.css';
import 'react-toastify/dist/ReactToastify.css';

import CONFIG from './config';

const StyledHeader = styled(Header)`
  margin-top: 20%;
  text-align: center;
  width: 100%;
`;

const App = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { currentPage, setFormData, formData } = useContext(MainContext);

  useEffect(() => {
    if (!location?.pathname) return;
    (async () => {
      const queryParams = new URLSearchParams(location.search);
      const paramValue = queryParams.get('uid');

      if (!paramValue) setError(true);

      try {
        const res = await fetch(`${CONFIG.scriptUrl}?id=${paramValue}`)
        const data = await res.json();
        setError(data.result !== 'success');
        if (data.result === 'success')
          setFormData({ ...formData, [currentPage]: { ...formData[currentPage], id: paramValue }});
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })()
  }, [location?.pathname]);

  const { component: Page }  = CONFIG.pages[currentPage];

  if (loading) return (
    <>
      <GlobalStyles />
      <Card>
        <StyledHeader>
          Загрузка данных...
        </StyledHeader>
      </Card>
    </>
  );

  return (
    <>
      <GlobalStyles />
      <ToastGlobal />
      <ToastContainer />
      <Card>
        {error && <Error />}
        {Page && !error ? <Page /> : <></>}
      </Card>
    </>
  );
};

export default App;
