import clsx from "clsx";
import styles from './SectionHeroAboutProject.module.scss';
import url from '@/assets/about-project.png'

export type SectionHeroAboutProjectProps = {
  className?: string;
};

export function SectionHeroAboutProject({ className }: SectionHeroAboutProjectProps) {
  return <div className={clsx(styles.container, className)} data-testid="SectionHeroAboutProject">
    <div className={styles.content}>
      <h1 className={styles.title}>О проекте</h1>
      <div className={styles.description}>
        <p className={styles.text}>
          ProCharity — платформа интеллектуального волонтерства,
           созданная фондом «Друзья» в 2017 году.
        </p>
        <p className={styles.text}>
        Наша миссия — дать возможность благотворительным некоммерческим
         организациям (НКО) получить экспертизу, знания и опыт 
         профессионалов. Так мы достигаем главную цель — сделать жизнь
         нашего общества лучше.
        </p>
        <p className={styles.text}>ProCharity дает возможность:</p>
        <ul className={styles.text}>
          <li>
            НКО — получить помощь в вопросах, которые требуют специальных
             знаний и опыта;
          </li>
          <li>
            волонтерам — приносить пользу своими знаниями, умениями
             и навыками;
          </li>
          <li>
            компаниям-партнерам — повысить лояльность сотрудников
             и внедрить благотворительность в свои процессы.
          </li>
        </ul>
      </div>
    </div>
    <img className={styles.img} src={url} alt="Картинка о проекте" />
  </div>;
}
