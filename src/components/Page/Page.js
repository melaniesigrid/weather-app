import React from 'react';
import Header from '../Header';
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';
import useForecast from '../../hooks/useForecast';
import styles from './Page.module.css';

const Page = () => {
  const {
    isError, isLoading, forecast, submitRequest,
  } = useForecast();
  const onSubmit = (value) => {
    submitRequest(value);
  };

  return (
    <>
      <Header />
      {!forecast && (
        <div className={`${styles.box} position-relative`}>
          {!isLoading && <Form submitSearch={onSubmit} />}
          {isError && <Error message={isError} />}
          {isLoading && <Loader />}
        </div>
      )}
      {forecast && <Forecast forecast={forecast} />}
    </>
  );
};

export default Page;
