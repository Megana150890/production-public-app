// Тип для авторизации
export type AuthRequest = {
	email: string;
	password: string;
};

export async function postAuthRequest(payload: AuthRequest): Promise<void> {
	console.log('Sending auth data to API with payload: ', payload);

	// Имитируем успешную авторизацию
	if (
		payload.email === 'test@example.com' &&
		payload.password === 'password123'
	) {
		return Promise.resolve();
	} else {
		// Имитируем ошибку авторизации
		return Promise.reject(new Error('Invalid email or password'));
	}
}
