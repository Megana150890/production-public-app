import clsx from "clsx";
import styles from './SectionHeroUrgant.module.scss';
import imageUrgant from '@/assets/urgant.png'
import logoSrc from '@/assets/icon_logo_friends_main.svg'
import { Layout } from '@charitypro/ui-kit';
import { useTranslation } from 'react-i18next';

export type SectionHeroUrgantProps = {
  className?: string;
  onPlay: () => void;
};

export function SectionHeroUrgant({ className, onPlay }: SectionHeroUrgantProps) {
	const { t } = useTranslation();

	return (
		<Layout.Section
			className={clsx(styles.container, className)}
			pt={{ content: styles.content }}
			data-testid="SectionHeroUrgant"
		>
			<div className={styles.text}>
				<h1>{t('main.title')}</h1>
				<p>{t('main.description')}</p>
				<button className={styles.button} type="button" onClick={onPlay}>
					<svg
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
					</svg>
				</button>
				<div className={styles.owner}>
					<div className={styles.ownerContent}>
						<span>Создатель проекта</span>
						<img src={logoSrc} alt="Фонд Друзья" />
					</div>
				</div>
			</div>
			<div className={styles.hero}>
				<img src={imageUrgant} alt="Иван Ургант" className={styles.image} />
				<div className={styles.label}>
					<h2>Иван Ургант</h2>
					<p>актер, шоумен, телеведущий, амбассадор ProCharity</p>
				</div>
			</div>
		</Layout.Section>
	);
}

/*export function SectionHeroUrgant({ className, onPlay }: SectionHeroUrgantProps) {
  return <div className={clsx(styles.container, className)} data-testid="SectionHeroUrgant">
    <img src={pattern} alt="" className={styles.backgroundUrgant} />
    <div className={styles.projectAuthorWrapper}>
      <div	className={styles.logo}>
        <span className={styles.logoText}>Создатель проекта</span>
        <img className={styles.logoImg} src={logoSrc} alt="логотип «Фонд Друзья»" />
      </div>
    </div> 
    <img src={bgFriends} alt="" className={styles.backgroundFriendsTitle} />
    <div className={styles.imageWrapper}>
      <img src={imageUrgant} alt="Иван Ургант" className={styles.image} />
      <div className={styles.containerUrgant}>
        <h3>Иван Ургант</h3>
        <p>актер, шоумен, телеведущий, амбассадор ProCharity</p>
      </div>
    </div>
    <div className={styles.containerSection}>
      <h1 className={styles.title}>Скорая интеллектуальная помощь</h1>
      <p className={styles.description}>
        Мы даем возможность некоммерческим организациям бесплатно получить
         помощь специалистов из разных сфер, а волонтерам — применить свои знания
          и навыки ради доброго дела
      </p>
    </div>
    <button className={styles.button} type="button" onClick={onPlay} />
  </div>
}*/
