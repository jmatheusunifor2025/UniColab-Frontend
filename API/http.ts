const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

export class ApiError extends Error {
  status: number;
  
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = 'ApiError';
  }
}

function getAuthToken(): string | null {
  return localStorage.getItem('@unicolab:token');
}

export function clearSession(): void {
  localStorage.removeItem('@unicolab:token');
  localStorage.removeItem('@unicolab:user');
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    let errorMsg = 'Ocorreu um erro inesperado na requisição.';
    
    try {
      const errorData = await response.json();
      errorMsg = errorData.message || errorData.error || errorMsg;
    } catch {
      errorMsg = response.statusText || errorMsg;
    }

    if (response.status === 401) {
      clearSession();
      window.location.href = '/login';
      throw new ApiError(401, 'Sessão expirada. Redirecionando para o login.');
    }

    if (response.status === 403) {
      throw new ApiError(403, 'Acesso negado: você não possui permissão para esta ação.');
    }

    if (response.status === 404 || response.status === 422) {
      throw new ApiError(response.status, errorMsg);
    }

    throw new ApiError(response.status, errorMsg);
  }

  if (response.status === 204) {
    return {} as T;
  }

  return response.json() as Promise<T>;
}

export async function http<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = getAuthToken();

  const headers = new Headers(options.headers || {});
  headers.set('Content-Type', 'application/json');

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const config: RequestInit = {
    ...options,
    headers,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  return handleResponse<T>(response);
}