export type SearchCategory = 'fund' | 'volunteer' | 'task' | 'help' | 'news';
export type SearchResultItem = {
	id: string;
	title: string;
	description: string;
	link: string;
};

export type SearchResults = {
	items: SearchResultItem[];
	total: number;
};

export async function getSearchResults(
	category: SearchCategory,
	q?: string
): Promise<SearchResults> {
	const url = new URL('/api/search', window.location.href);
	const query = new URLSearchParams();
	query.set('in', category);
	if (q) query.set('q', q);
	url.search = query.toString();

	console.log(`getSearchResults: ${category}, ${q} by ${url.href}`);

	return Promise.resolve({
		items: [],
		total: 0,
	});
}
