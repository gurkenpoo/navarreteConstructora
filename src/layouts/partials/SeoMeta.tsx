"use client";

import config from "@/config/config.json";
import { plainify } from "@/lib/utils/textConverter";
import { usePathname } from "next/navigation";

const SeoMeta = ({
  title,
  meta_title,
  image,
  description,
  canonical,
  noindex,
}: {
  title?: string;
  meta_title?: string;
  image?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
}) => {
  const { meta_image, meta_author, meta_description } = config.metadata;
  const { base_url } = config.site;
  const pathname = usePathname();

  return (
    <>
      {/* title */}
      <title>
        {plainify(meta_title ? meta_title : title ? title : config.site.title)}
      </title>

      {/* canonical url */}
      {canonical && <link rel="canonical" href={canonical} itemProp="url" />}

      {/* noindex robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* meta-description */}
      <meta
        name="description"
        content="Diseño y ejecución de obras con altos estándares de calidad, seguridad y eficiencia. Un equipo profesional altamente calificado y comprometido con sus clientes."
      />

      {/* author from config.json */}
      <meta name="author" content={meta_author} />

      {/* og-title */}
      <meta
        property="og:title"
        content={plainify(
          meta_title ? meta_title : title ? title : config.site.title,
        )}
      />

      {/* og-description */}
      <meta
        property="og:description"
        content="Diseño y ejecución de obras con altos estándares de calidad, seguridad y eficiencia. Un equipo profesional altamente calificado y comprometido con sus clientes."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${base_url}/${pathname.replace("/", "")}`}
      />

      {/* twitter-title */}
      <meta
        name="twitter:title"
        content={plainify(
          meta_title ? meta_title : title ? title : config.site.title,
        )}
      />

      {/* twitter-description */}
      <meta
        name="twitter:description"
        content="Diseño y ejecución de obras con altos estándares de calidad, seguridad y eficiencia. Un equipo profesional altamente calificado y comprometido con sus clientes."
      />

      {/* og-image */}
      <meta
        property="og:image"
        content="/image/landing.png"
      />

      {/* twitter-image */}
      <meta
        name="twitter:image"
        content="/image/landing.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};

export default SeoMeta;
