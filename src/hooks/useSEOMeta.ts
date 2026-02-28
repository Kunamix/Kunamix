import { useEffect } from "react";

interface MetaTagsProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
}

export const useSEOMeta = ({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard = "summary_large_image",
}: MetaTagsProps) => {
  useEffect(() => {
    // Set page title
    if (title) {
      document.title = title;
    }

    // Set or update meta tags
    const updateMetaTag = (
      name: string,
      content: string,
      property?: boolean,
    ) => {
      const attribute = property ? "property" : "name";
      let element = document.querySelector(
        `meta[${attribute}="${name}"]`,
      ) as HTMLMetaElement;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.content = content;
    };

    // Update standard meta tags
    if (description) updateMetaTag("description", description);

    // Update Open Graph meta tags
    if (ogTitle) updateMetaTag("og:title", ogTitle, true);
    if (ogDescription) updateMetaTag("og:description", ogDescription, true);
    if (ogImage) updateMetaTag("og:image", ogImage, true);
    if (ogUrl) updateMetaTag("og:url", ogUrl, true);
    updateMetaTag("og:type", "article", true);

    // Update Twitter meta tags
    updateMetaTag("twitter:card", twitterCard);
    if (ogTitle) updateMetaTag("twitter:title", ogTitle);
    if (ogDescription) updateMetaTag("twitter:description", ogDescription);
    if (ogImage) updateMetaTag("twitter:image", ogImage);

    // Set canonical URL
    let canonicalElement = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement;
    if (canonical) {
      if (!canonicalElement) {
        canonicalElement = document.createElement("link");
        canonicalElement.rel = "canonical";
        document.head.appendChild(canonicalElement);
      }
      canonicalElement.href = canonical;
    } else if (canonicalElement) {
      canonicalElement.remove();
    }

    return () => {
      // Cleanup if needed
    };
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, ogUrl]);
};

export default useSEOMeta;
