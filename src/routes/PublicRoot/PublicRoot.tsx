import clsx from 'clsx';
import styles from './PublicRoot.module.scss';
import { LoaderData } from './loaderData.tsx';
import { SectionHeroUrgant } from '@/components/Hero/SectionHeroUrgant/SectionHeroUrgant.tsx';
import { SectionApply } from '@/components/SectionApply/SectionApply.tsx';
import { APPLY_PROPS } from '@/settings.tsx';

export type PublicRootProps = {
	className?: string;
	data: LoaderData
};

export function PublicRoot({ className, data }: PublicRootProps) {
	console.log(data);

	return (<main className={clsx(className, styles.container)} data-testid="PublicRoot">
		<SectionHeroUrgant onPlay={() => {}} />
		<SectionApply links={APPLY_PROPS} />
	</main>);
}
