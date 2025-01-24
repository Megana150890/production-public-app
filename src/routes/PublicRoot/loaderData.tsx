import type { Stats } from '@/api/getHomePageStats.ts';
import type { TaskCategory } from '@/api/getTaskCategories.ts';
import type { PartnersResponse } from '@/api/getPartners.ts';

export type LoaderData = {
	stats: Stats;
	taskCategories: TaskCategory[];
	partners: PartnersResponse;
};
