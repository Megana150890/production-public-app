export type DocumentItem = {
	id: string; // Уникальный идентификатор документа
	title: string; // Название документа
	size: string; // Размер документа в Кб
	fileUrl: string; // URL для скачивания документа
};

export type DocumentResponse = DocumentItem[];

export async function getDocuments(): Promise<DocumentResponse> {
	console.log('Fetching documents...');
	return Promise.resolve([
		{
			id: 'statute',
			title: 'Устав фонда «Друзья»',
			size: '135 Кб',
			fileUrl: '/documents/statute.pdf',
		},
		{
			id: 'registration-certificate',
			title: 'Свидетельство о государственной регистрации НКО',
			size: '135 Кб',
			fileUrl: '/documents/registration-certificate.pdf',
		},
		{
			id: 'tax-registration-certificate',
			title: 'Свидетельство о постановке на налоговый учет',
			size: '135 Кб',
			fileUrl: '/documents/tax-registration-certificate.pdf',
		},
	]);
}
