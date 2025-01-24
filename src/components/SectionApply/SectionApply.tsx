import clsx from "clsx";
import styles from './SectionApply.module.scss';
import { Anchor, Layout } from '@charitypro/ui-kit';

import volunteerCardImage from "@/assets/img_lighthouse_color.png";
import fundCardImage from "@/assets/img_sailboat.png";
import { useTranslation } from 'react-i18next';

export type SectionApplyProps = {
  className?: string;
  links: {
    volunteer: { rules: string, reg: string },
    fund: { rules: string, reg: string }
  };
}

export type ApplyCardProps = {
  className?: string;
  image: string;
  title: string;
  description: string;
  link: string;
  isReverse?: boolean;
}

export function ApplyCard({ className, image, title, description, link, isReverse }: ApplyCardProps) {
  return <div className={clsx(styles.card, className, {
    [ styles.reverse ]: isReverse
  })}>
    <img src={image} alt={title} />
    <div className={styles.cardContent}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Anchor className={styles.link} href={link}>Подробнее</Anchor>
    </div>
  </div>;
}

export function SectionApply({ className, links }: SectionApplyProps) {
  const { t } = useTranslation();
  return <Layout.Section
    className={clsx(styles.container, className)}
    pt={{ content: styles.content }}
    data-testid="SectionApply"
  >
    <ApplyCard
      image={volunteerCardImage}
      title={t("main.applyVolunteer")}
      description={t("main.volunteerMotivation")}
      link={'/volunteers'}
    />
    <ApplyCard
      image={fundCardImage}
      title={t("main.applyFund")}
      description={t("main.fundMotivation")}
      link={'/foundations'}
      isReverse={true}
    />
  </Layout.Section>;
}
