export type CompanyRequest = {
	name: string;
	company: string;
	email?: string;
	question: string;
};

export async function postCompanyRequest(
	payload: CompanyRequest
): Promise<void> {
	console.log('send data to api with payload ', payload);
	return Promise.resolve();
}
