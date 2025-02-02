import clsx from 'clsx';
import style from './ContactsPage.module.scss';
// import { Title } from '@charitypro/ui-kit';

export type ContactsPageProps = {
	className?: string;
	contacts: {
		title: string;
		description?: string;
		email?: string;
	}[];
};

export function ContactsPage({ className, contacts }: ContactsPageProps) {
	return (
		<div
			className={clsx(style.container, className)}
			data-testid="ContactsPage"
		>
			{/* <Title Tag="h2" className={style.title}>
		  Контакты
		</Title> */}
			<h2 className={style.title}>Контакты</h2>
			<ul className={style.items}>
				{contacts.map((contact, index) => (
					<li key={index} className={style.item}>
						<h3 className={style.subtitle}>{contact.title}</h3>
						{contact.description && (
							<p className={style.text}>{contact.description}</p>
						)}
						{contact.email && (
							<a
								className={clsx(style.link, style.text)}
								href={`mailto:${contact.email}`}
							>
								{contact.email}
							</a>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}
