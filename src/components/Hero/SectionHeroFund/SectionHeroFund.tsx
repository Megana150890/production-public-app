import clsx from "clsx";
import styles from './SectionHeroFund.module.scss';
import { Button } from "@charitypro/ui-kit";
import imageBoat from '@/assets/img_boat_color_with_background.png'

export type SectionHeroFundProps = {
  className?: string;
  onClick: () => void;
};

export function SectionHeroFund({ className, onClick }: SectionHeroFundProps) {
  return <div className={clsx(styles.container, className)} data-testid="SectionHeroFund">
    <div className={styles.content}>
      <h1 className={styles.title}>Безвозмездная профессиональная помощь</h1>
      <div className={styles.description}>
      <p className={styles.text}>
      Наши волонтеры — частные лица и целые организации, чьи сотрудники 
        делятся экспертизой: VK, Тинькофф, Яндекс.Практикум и другие. Перед 
        тем как начать выполнять задания, все волонтеры проходят проверку — 
        модераторы изучают их анкеты, резюме и примеры работ.
      </p>
      <p className={styles.text}>
      После каждого задания мы просим заказчика оставить отклик об 
          исполнителе. Отзывы отражаются в профиле волонтера — это позволяет 
          другим НКО оценить качество работы специалиста и выбрать того, с кем 
          будет комфортно сотрудничать.
      </p>
      </div>
      <Button onClick={onClick}>
        Присоединиться
      </Button>
    </div>
    <img className={styles.image} src={imageBoat} alt='imageBoat' />
  </div>;
}
