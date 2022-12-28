/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react';
import { AlertProps } from '../../models/AlertModel';

const Alert: FC<AlertProps> = ({ type, message, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={`alert alert-${type}`}>{message}</p>;
};

export default Alert;
