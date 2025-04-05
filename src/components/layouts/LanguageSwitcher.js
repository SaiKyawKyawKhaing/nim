import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import styles from '@/styles/LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const toggleLanguage = () => {
    const newLocale = router.locale === 'en' ? 'my' : 'en';
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <div className={styles.switcherContainer}>
      <button
        onClick={toggleLanguage}
        className={styles.switcherButton}
        aria-label={`Switch to ${router.locale === 'en' ? 'Myanmar' : 'English'} language`}
      >
        <span className={`${styles.languageText} ${router.locale === 'my' ? styles.active : ''}`}>မြန်မာ</span>
        <div className={styles.toggleSwitch}>
          <div className={`${styles.toggleKnob} ${router.locale === 'en' ? styles.right : ''}`} />
        </div>
        <span className={`${styles.languageText} ${router.locale === 'en' ? styles.active : ''}`}>ENG</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;