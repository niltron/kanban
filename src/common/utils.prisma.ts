import { v4 } from 'uuid';

export const indentify = () => v4().replace(/-/g, '');
