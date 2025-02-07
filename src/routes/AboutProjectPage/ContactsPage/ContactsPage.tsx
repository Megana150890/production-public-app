import clsx from 'clsx';
import style from './ContactsPage.module.scss';
import { loaderData } from './loaderData';

export type ContactsPageProps = {
	className?: string;
	data: loaderData;
};

export function ContactsPage({ className, data }: ContactsPageProps) {
	console.log(data);
	return (
		<div
			className={clsx(style.container, className)}
			data-testid="ContactsPage"
		>
			<h2 className={style.title}>Контакты</h2>
			<ul className={style.items}>
				{data.contacts.map((contact, index) => (
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
