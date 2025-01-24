import clsx from "clsx";
import { useTranslation } from 'react-i18next';
import { Anchor, Layout, Title, Text } from '@charitypro/ui-kit';

import styles from './SectionApply.module.scss';
import volunteerCardImage from "@/assets/img_lighthouse_color.png";
import fundCardImage from "@/assets/img_sailboat.png";

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
  const { t } = useTranslation();
  return <div className={clsx(styles.card, className, {
    [ styles.reverse ]: isReverse
  })}>
    <img src={image} alt={title} />
    <div className={styles.cardContent}>
      <Title Tag="h3">{title}</Title>
      <Text Tag="p">{description}</Text>
      <Anchor className={styles.link} href={link}>{t("common.more")}</Anchor>
    </div>
  </div>;
}

export function SectionApply({ className, links }: SectionApplyProps) {
  const { t } = useTranslation();

  return <Layout.Section
    className={clsx(styles.container, className)}
    pt={{ content: styles.content }}
  >
    <ApplyCard
      image={volunteerCardImage}
      title={t("main.applyVolunteer")}
      description={t("main.volunteerMotivation")}
      link={links.volunteer.reg}
    />
    <ApplyCard
      image={fundCardImage}
      title={t("main.applyFund")}
      description={t("main.fundMotivation")}
      link={links.fund.reg}
      isReverse={true}
    />
  </Layout.Section>;
}
