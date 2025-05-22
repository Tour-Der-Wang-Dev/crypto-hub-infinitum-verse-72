
import { Helmet } from "react-helmet";

interface SeoHelmetProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  schemas?: Array<Record<string, any>>;
}

const SeoHelmet = ({
  title = "InfiWorld Crypto Hub",
  description = "The Future of Crypto Payments InfiWorld connects cryptocurrency with real-world services in one seamless ecosystem. From marketplace to travel, experience the limitless possibilities.",
  canonicalUrl = "https://infiworld.com",
  schemas = [],
}: SeoHelmetProps) => {
  return (
    <Helmet>
      {/* Standard meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="InfiWorld" />
      <meta property="og:image" content="https://i.postimg.cc/85qRTLd9/2025-05-22-195358.png" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://i.postimg.cc/85qRTLd9/2025-05-22-195358.png" />
      
      {/* JSON-LD Schemas */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SeoHelmet;
