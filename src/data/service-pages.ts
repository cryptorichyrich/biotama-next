import { servicePagesA, type ServicePage } from "./service-pages-a";
import { servicePagesB } from "./service-pages-b";

export type { ServicePage };

export const servicePages: ServicePage[] = [...servicePagesA, ...servicePagesB];

export const variantMeta = [
  {
    id: "v1",
    label: "Editorial",
    angle: "Tenang, rapi, cocok untuk presentasi ke manajemen.",
    color: "#0E6B5C",
  },
  {
    id: "v2",
    label: "Poster",
    angle: "Berani, langsung, cocok untuk kampanye dan media sosial.",
    color: "#E8450C",
  },
  {
    id: "v3",
    label: "Terminal",
    angle: "Teknis, padat, cocok untuk tim engineering dan procurement.",
    color: "#35D0C6",
  },
] as const;

export type VariantId = (typeof variantMeta)[number]["id"];

export const getService = (slug: string) =>
  servicePages.find((service) => service.slug === slug);

export const getVariant = (id: string) =>
  variantMeta.find((variant) => variant.id === id);
