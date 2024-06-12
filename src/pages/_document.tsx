import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class IQDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
  }

  render(): JSX.Element {
    return (
      <Html data-theme='dark'>
        <Head>
          <meta property='theme-color' content='#5294E2' />

          <meta name='Classification' content='Portfolio' />
          <meta
            name='subject'
            content='Marvin Washinton Full-Stack Developer & Blockchain Developer'
          />
          <meta
            name='description'
            content='Marvin Washington Full-Stack Developer & Blockchain Developer. Marvin Washingtonfocuses on JavaScript-related technologies like Typescript, NodeJS and React. Marvin Washingtonis also an experienced Blockchain Developer and proficient in Smart Contract, Web3'
          />
          <meta
            name='keywords'
            content='Marvin Washington, Marvin Washington Portfolio, Full-Stack Developer, Developer, JavaScript, TypeScript, Blockchain'
          />
          <meta name='author' content='Marvin Washington' />

          <meta property='og:type' content='website' />
          <meta property='og:title' content='Marvin Washington' />
          <meta
            property='og:description'
            content='Marvin Washington Full-Stack Developer & Blockchain Developer'
          />

          <link rel='icon' href='/favicon.png' />

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            // crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
            rel='stylesheet'
          />

          <script
            id='schema-structured-data'
            type='application/ld+json'
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org/',
                '@type': 'Person',
                name: 'Marvin Washington',
                author: {
                  '@type': 'Person',
                  name: 'Marvin Washington',
                },
                email: 'mailto:Marvin Washington@protonmail.com',
                jobTitle: 'Full-Stack Developer',
              }),
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default IQDocument;
