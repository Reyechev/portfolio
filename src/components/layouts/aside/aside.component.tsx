import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import classnames from 'classnames';

import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import {
  toggleAside,
  toggleFilter,
} from '../../../redux/features/header/header-slice';

import aside from '../../../data/aside.data.json';

import { FaEllipsisV } from 'react-icons/fa';
import {
  BsEnvelope,
  BsCheck,
  BsDribbble,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsTelegram,
} from 'react-icons/bs';
import { CgSoftwareDownload } from 'react-icons/cg';

import styles from './aside.module.scss';

const Aside = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const asideOpen = useAppSelector((state) => state.header.asideOpen);
  const dispatch = useAppDispatch();

  const handleToggleClick = () => {
    dispatch(toggleAside());
    dispatch(toggleFilter());
  };

  return (
    <aside
      className={classnames(styles.aside, { [styles.asideActive]: asideOpen })}
    >
      <span className={styles.asideToggleUi} onClick={handleToggleClick}>
        <FaEllipsisV />
      </span>
      <div className={styles.asideUser}>
        <span className={styles.asideUserImageContainer}>
          <Image
            className={styles.asideUserImage}
            src='/images/Marvin_Washington.jpg'
            alt='Marvin'
            layout='intrinsic'
            width={100}
            height={100}
          />
          <span className={styles.asideUserImageContainerStatus} />
        </span>

        <div className={styles.asideUserInfoContainer}>
          <Link href='/'>
            <div className={styles.asideUserName}>Marvin Washington</div>
          </Link>
          <span className={styles.asideUserTitle}>Frontend Developer</span>
          <span className={styles.asideUserTitle}>Backend Developer</span>
          <span className={styles.asideUserTitle}>Full Stack Developer</span>
        </div>
      </div>

      <div className={styles.asideInformation}>
        {/* <div className={styles.asideInformationWebLanguages}>
                    {router.locales?.map((locale) => {
                        return (
                            <Link key={locale} href={router.asPath} locale={locale}>
                                <div className={classnames([styles.asideInformationWebLanguagesOption, [`${locale === router.locale ? styles.asideInformationWebLanguagesOptionActive : null}`]])}>
                                    {locale.toUpperCase()}
                                </div>
                            </Link>
                        );
                    })}
                </div> */}

        <div className={styles.aside__divider} />

        <ul className={styles.asideInformationPersonalList}>
          <li className={styles.asideInformationPersonalListItem}>
            <span>Residence:</span>
            <span>United States</span>
          </li>
          <li className={styles.asideInformationPersonalListItem}>
            <span>City:</span>
            <span>Los Angeles</span>
          </li>
          <li className={styles.asideInformationPersonalListItem}>
            <span>Age:</span>
            <span>{new Date().getFullYear() - 1994}</span>
          </li>
        </ul>

        <div className={styles.aside__divider} />

        <div className={styles.asideInformationPersonalLanguages}>
          <div className={styles.asideInformationPersonalLanguagesContent}>
            <svg viewBox='0 0 36 36'>
              <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831' />
              <path
                d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831'
                strokeDasharray='100, 100'
              />
              <text x='18' y='20.35'>
                100%
              </text>
            </svg>
            <span>English</span>
          </div>
{/*          
          <div className={styles.asideInformationPersonalLanguagesContent}>
            <svg viewBox='0 0 36 36'>
              <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831' />
              <path
                d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831'
                strokeDasharray='30, 100'
              />
              <text x='18' y='20.35'>
                30%
              </text>
            </svg>
            <span>Mandrian</span>
          </div> */}
        </div>

        <div className={styles.aside__divider} />

        <div className={styles.asideInformationSkills}>
          {aside.skills.map((skill) => {
            return (
              <div className={styles.asideInformationSkillsBar} key={skill.id}>
                <div className={styles.asideInformationSkillsBarInfo}>
                  <span>{skill.name}</span>
                  <span>{skill.progress}</span>
                </div>
                <div className={styles.asideInformationSkillsBarProgress}>
                  <span
                    className={styles.asideInformationSkillsBarProgressActive}
                    style={{ width: skill.progressActive }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.aside__divider} />

        <ul className={styles.asideInformationLibrariesList}>
          {aside.libraries.map((library) => {
            return (
              <li
                className={styles.asideInformationLibrariesListItems}
                key={library.id}
              >
                <BsCheck />
                <span>{library.names}</span>
              </li>
            );
          })}
        </ul>

        <div className={styles.aside__divider} />
        
        <Link
          href='https://drive.google.com/file/d/1TwNkEaXdMOZFYzk3ZPD1x9xpjwGCBTEG/view?usp=sharing'
          className={styles.asideInformationCV}
        >
          <CgSoftwareDownload />
          <span>DOWNLOAD CV</span>
        </Link>
      </div>

      <div className={styles.asideFooter}>
        <Link href='https://t.me/say0618'>
          <BsTelegram />
        </Link>
        <Link href='mailto:marvinwashington424@gmail.com'>
          <BsEnvelope />
        </Link>
        <Link href='https://github.com/perseus8'>
          <BsGithub />
        </Link>
        <Link href='www.linkedin.com/in/Marvin-washington-413472a1/'>
          <BsLinkedin />
        </Link>
      </div>
    </aside>
  );   
};

export default Aside;
