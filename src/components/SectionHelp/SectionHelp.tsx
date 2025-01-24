// import clsx from "clsx";
import styles from './SectionHelp.module.scss';
import { Title } from '@charitypro/ui-kit';
import { Tabs } from '@charitypro/ui-kit';


export enum HelpTabs {
	RULES = 'ПРАВИЛА',
	NKO = 'НКО',
	VOLONTEERS = 'ВОЛОНТЕРАМ',
	COMPANIES = 'КОМПАНИЯМ',
}

export type SectionHelpProps = {
	value: HelpTabs;
	onChange: (value: HelpTabs) => void;
};

const tabsData = Object.values(HelpTabs);

export function SectionHelp({ value, onChange }: SectionHelpProps) {
	const onSetTab = (index: number) => onChange(tabsData[index]);

		return <div className={styles.container} data-testid="SectionHelp">
			<div className={styles.wrapper}>
				<Title className={styles.title} Tag={'h2'}>Справочная ProCharity</Title>
				<p className={styles['content-block-text']}>
					Здесь собраны все материалы о том, как работает площадка. Выбрать
					раздел (пользователя) или воспользоваться поиском в шапке
					сайта/добавить строку поиска сюда?
				</p>
				<Tabs
					options={tabsData}
					value={tabsData.indexOf(value)}
					onChange={onSetTab}
				/>
			</div>
		</div>
}
