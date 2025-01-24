import clsx from "clsx";
import styles from './SectionStats.module.scss';

export type SectionStatsProps = {
  className?: string;
  values: CardKPI[];
};

type CardKPI = {
  counter: number,
  description: string,
}

export function SectionStats({ className, values }: SectionStatsProps) {
  return <div className={clsx(styles.container, className)} data-testid="SectionStats">
    {values.map((value, index) => (
      <div className={styles.element} key={index}>
        <h1 className={styles.title}>{value.counter}</h1>
        <p className={styles.description}>{value.description}</p>
      </div>
    ))}
  </div>;
}
