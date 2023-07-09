import Head from 'next/head';

const SEOMeta = (props) => {
  const { title, description, slug, imgUrl } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://saasblog.ai/`} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://saasblog.ai/`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={imgUrl || 'https://saasblog.ai/cover.png'}
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`https://saasblog.ai/`} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={'https://saasblog.ai/cover.png'}
      />
      <link rel="icon" href="https://saasblog.ai/favicon.png" />

      <meta name="google-site-verification" content="YmzAD6iWWE1wG1xLu3KQzCiAZg84XoMEOD8Om-0B9xQ" />

    </Head>
  );
};

export default SEOMeta;
