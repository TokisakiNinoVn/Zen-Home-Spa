// services/information.service.ts

import api from '@/app/services/axios';

const information = async () => api.get(`/public/web/information`);

export {
    information
};
