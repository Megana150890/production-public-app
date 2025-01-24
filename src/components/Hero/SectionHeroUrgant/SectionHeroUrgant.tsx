import clsx from "clsx";
import { useTranslation } from 'react-i18next';
import { Layout, Title, Text, Image } from '@charitypro/ui-kit';

import styles from './SectionHeroUrgant.module.scss';
import imageUrgant from '@/assets/urgant.png'
import logoSrc from '@/assets/icon_logo_friends_main.svg'


export type SectionHeroUrgantProps = {
	className?: string;
	onPlay: () => void;
};

const playIcon = <svg
	width="30"
	height="36"
	viewBox="0 0 30 36"
	fill="currentColor"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		fillRule="evenodd"
		clipRule="evenodd"
		d="M30 18L0 0V36L30 18Z"
	/>
</svg>;

export function SectionHeroUrgant({ className, onPlay }: SectionHeroUrgantProps) {
	const { t } = useTranslation();

	return (
		<Layout.Section
			className={clsx(styles.container, className)}
			pt={{ content: styles.content }}
		>
			<div className={styles.text}>
				<Title Tag="h1">{t('main.title')}</Title>
				<Text Tag="p">{t('main.description')}</Text>

				<button className={styles.button} type="button" onClick={onPlay}>
					{playIcon}
				</button>
				<div className={styles.owner}>
					<div className={styles.ownerContent}>
						<Text>{t("main.projectCreator")}</Text>
						<Image src={logoSrc} alt={t("main.friendsFund")} />
					</div>
				</div>
			</div>

			<div className={styles.hero}>
				<Image src={imageUrgant} alt={t("main.ambassador")} className={styles.image} />
				<div className={styles.label}>
					<Title Tag="h2">{t("main.ambassador")}</Title>
					<Text Tag="p">{t("main.ambassadorAbout")}</Text>
				</div>
			</div>
		</Layout.Section>
	);
}