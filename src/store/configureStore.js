import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';

export default function configureStoreFn() {
    return configureStore({ reducer, middleware: [...getDefaultMiddleware()] });
}
