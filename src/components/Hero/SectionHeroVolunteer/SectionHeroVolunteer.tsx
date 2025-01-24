import clsx from "clsx";
import styles from './SectionHeroVolunteer.module.scss';
import { Button } from "@charitypro/ui-kit";
import imageLightHouse from '@/assets/img_lighthouse_color_with_background.png'

export type SectionHeroVolunteerProps = {
  className?: string;
  onClick: () => void;
};

export function SectionHeroVolunteer({ className, onClick }: SectionHeroVolunteerProps) {
  return <div className={clsx(styles.container, className)} data-testid="SectionHeroVolunteer">
    <div className={styles.content}>
      <h1 className={styles.title}>Проявляй себя как профи и&nbsp;меняй мир к лучшему</h1>
      <p className={styles.description}>
        ProCharity объединяет благотворительные фонды и талантливых 
          волонтеров для совместной работы, благодаря которой общество 
          меняется к лучшему. Начни помогать сегодня&nbsp;—&nbsp;и ты увидишь, 
          как&nbsp;это&nbsp;вдохновляет
      </p>
      <Button onClick={onClick}>
        Присоединиться
      </Button>
    </div>
    <img className={styles.image} src={imageLightHouse} alt='imageLightHouse' />
  </div>
}
