import React from 'react';
import { createStore } from 'redux';
import { reducer } from './reducer';

export let store =  createStore(reducer);


