import { Fragment, FormEvent, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';

import { BsPerson, BsEnvelope, BsTextParagraph } from 'react-icons/bs';

import styles from '../styles/contact.module.scss';

const Contact: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const sendMessageHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccess(false);
    const response = await axios.post(
      '/api/contact',
      { name, email, message },
      { headers: { 'Content-Type': 'application/json' } }
    );

    if (response.status === 200) {
      setName('');
      setEmail('');
      setMessage('');
      setSuccess(true);
    }
  };

  return (
    <Fragment>
      <Head>
        <meta name='Classification' content='Contact' />
        <meta name='subject' content='Contact' />
        <meta name='description' content='Marvin Washington Contact' />
        <meta
          name='keywords'
          content='Marvin Washington, Intelligent, Contact'
        />
        <meta name='author' content='Marvin Washington' />

        <meta property='og:type' content='website' />
        <meta property='og:title' content='Marvin Washington' />
        <meta property='og:description' content='Marvin Washington Contact' />

        <title>Marvin Washington&mdash; Contact with me</title>
      </Head>

      <section className={styles.contact}>
        <h4 className={styles.contactHeading}>Contact Information</h4>
        <div className={styles.contactCards}>
          <div className={styles.contactCardsCard}>
            <ul className={styles.contactCardsCardList}>
              <li className={styles.contactCardsCardListItem}>
                <span>Residence:</span>
                <span>United States</span>
              </li>
              <li className={styles.contactCardsCardListItem}>
                <span>City:</span>
                <span>Los Angeles</span>
              </li>
              <li className={styles.contactCardsCardListItem}>
                <span>Age:</span>
                <span>{new Date().getFullYear() - 1994}</span>
              </li>
            </ul>
          </div>
          <div className={styles.contactCardsCard}>
            <ul className={styles.contactCardsCardList}>
              <li className={styles.contactCardsCardListItem}>
                <span>Gmail:</span>
                <a href='mailto:Marvinwashington424@gmail.com'>devMarvinl93@gmail.com</a>
              </li>
              <li className={styles.contactCardsCardListItem}>
                <span>Github:</span>
                <a href='https://github.com/perseus8'>github.com/perseus8</a>
              </li>
              <li className={styles.contactCardsCardListItem}>
                <span>Discord:</span>
                <span>eivor0618_78190</span>
              </li>
            </ul>
          </div>
          <div className={styles.contactCardsCard}>
            <ul className={styles.contactCardsCardList}>
              <li className={styles.contactCardsCardListItem}>
                <span>Linkedin:</span>
                <a href='www.linkedin.com/in/Marvin-washington-413472a1' target='_blank' rel="noreferrer">/in/Marvin-washington-413472a1/</a>
              </li>
              <li className={styles.contactCardsCardListItem}>
                <span>Twitter:</span>
                <a href='https://twitter.com/@perseus06269' target='_blank' rel="noreferrer"> @perseus06269</a>
              </li>
              <li className={styles.contactCardsCardListItem}>
                <span>Telegram:</span>
                <a href='https://t.me/say0618' target='_blank' rel="noreferrer">say0618</a>
              </li>
            </ul>
          </div>
        </div>

        <h4 className={styles.contactHeading}>Get in Touch</h4>
        <div className={styles.contactForm}>
          <form onSubmit={sendMessageHandler}>
            <div className={styles.contactFormGroup}>
              <label htmlFor='name'>
                <BsPerson />
              </label>
              <input
                id='name'
                name='name'
                type='text'
                placeholder='Name'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.contactFormGroup}>
              <label htmlFor='email'>
                <BsEnvelope />
              </label>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='Email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.contactFormGroup}>
              <label htmlFor='message'>
                <BsTextParagraph />
              </label>
              <textarea
                id='message'
                name='message'
                placeholder='Message'
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className={styles.contactFormGroup}>
              <button>Send Message</button>
              {success && (
                <div className={styles.contactFormGroupSuccess}>
                  The message was sent successfully.
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
