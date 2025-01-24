import clsx from "clsx";
import styles from './SectionVolunteerMotivation.module.scss';
import award from '@/assets/award.png';
import imgDiamond from '@/assets/icon_diamond_white.svg';

export type SectionVolunteerMotivationProps = {
  className?: string;
  bonusCardProps: TBonusCardProps[];
};

type TBonusCardProps = {
  logo: string;
  caption: string;
  category: string;
  points?: number;
  onClickCard: () => void;
};

function BonusCard(props: TBonusCardProps) {
  const {
    logo,
    caption,
    category,
    points = 1,
    onClickCard,
  } = props;
  return (
    <article className={styles.card} onClick={onClickCard}>
      <div className={styles.cardTop}>
        <p className={styles.category}>{category}</p>
        <div className={styles.diamond}>
            <p className={styles.titleDiamond}>{points}</p>
            <img src={imgDiamond} className={styles.imgDiamond} alt="diamond" />
        </div>
      </div>
      <img className={styles.logo} src={logo} alt="Логотип" />
      <p className={styles.caption}>{caption}</p>
    </article>
  );
};


export function SectionVolunteerMotivation({ className, bonusCardProps }: SectionVolunteerMotivationProps) {
  return <div className={clsx(styles.container, className)} data-testid="SectionVolunteerMotivation">
    <h2 className={styles.title}>Быть волонтером приятно</h2>
    <p className={styles.description}>
        За каждое выполненное задание ты получишь баллы, число которых зависит
        от сложности и объема задачи. Баллы можно потратить на бонусы от
        партнеров — книги, билеты в музей, подписки на образовательные платформы
    </p>
    <div className={styles.bonusCards}>
      { bonusCardProps?.map((prop, index) => (
        <BonusCard {...prop} key={index} />
      ))
      }
    </div>
    <div className={styles.about}>
      <img className={styles.placeholder} src={award} alt="Быть волонтером приятно"/>
      <div className={styles.bottomDescription}>
        <h2 className={styles.title}>... и почётно!</h2>
        <p className={styles.description}>
          Волонтеры, которые выполнили больше всего заданий, выдвигаются на
          ежегодную премию ProCharity. Церемония проводится с 2018 года. Самые
          активные волонтеры в каждой категории получают звание супергероев
          ProCharity, а также статуэтку и диплом из рук телеведущего и
          амбассадора ProCharity Ивана Урганта.
        </p>
      </div>
    </div>
  </div>;
}
