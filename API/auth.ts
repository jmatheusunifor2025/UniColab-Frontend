import { http } from './http';
import { LoginRequestDTO, LoginResponseDTO } from '../types/api';

export const authApi = {
  login: async (credentials: LoginRequestDTO): Promise<LoginResponseDTO> => {
    return http<LoginResponseDTO>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  logout: async (): Promise<void> => {
    return http<void>('/auth/logout', {
      method: 'POST',
    });
  },
};