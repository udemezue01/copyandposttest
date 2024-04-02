import React, { useState } from 'react';
import axios from 'axios';

export const useNewsLetterSubscription = () => {
  enum States {
    IDLE = 'IDLE',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    SUCCESS = 'SUCCESS',
  }

  const [state, setState] = useState(States.IDLE);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const subscribe = async () => {
    setState(States.LOADING);
    setErrorMessage(null);
    try {
      const response = await axios.post('/api/newsletter', { email, name });
      setState(States.SUCCESS);
      setEmail('');
      setName('');
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState(States.ERROR);
    }
  };

  return {
    States,
    state,
    setState,
    email,
    setEmail,
    name,
    setName,
    errorMessage,
    setErrorMessage,
    validateEmail,
    subscribe,
  };
};
