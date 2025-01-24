import clsx from "clsx";
import styles from './SectionHeroCompany.module.scss';
import { Button } from "@charitypro/ui-kit";
import imageBoatCompany from '@/assets/img_boat_company_with_background.png'

export type SectionHeroCompanyProps = {
  className?: string;
  onClick: () => void;
};

export function SectionHeroCompany({ className, onClick }: SectionHeroCompanyProps) {
  return <div className={clsx(styles.container, className)} data-testid="SectionHeroCompany">
    <div className={styles.content}>
      <h1 className={styles.title}>
        <p className={styles.titleText}>Укрепляйте бренд</p>
        <p className={styles.titleText}>развивайте команду</p>
        <p className={styles.titleText}>помогайте</p>
      </h1>
      <div className={styles.description}>
      <p className={styles.text}>
        ProCharity позволяет бизнесу поддерживать только проверенные НКО 
        любой направленности со всех уголков страны реальными действиями, 
        а также поощрять своими продуктами или услугами развитие 
        волонтерского движения.
      </p>
      <p className={styles.text}>
        Взамен ваша команда получит уникальные возможности 
        для профессионального и личностного роста без серьезных финансовых 
        затрат со стороны компании. Совместная работа с НКО также укрепляет 
        репутацию компании, делая ваш бренд социально ответственным
        и&nbsp;близким клиентам
      </p>
      </div>
      <Button onClick={onClick}>
        Стать партнером
      </Button>
    </div>
    <img className={styles.image} src={imageBoatCompany} alt='imageBoat' />	</div>;
}
