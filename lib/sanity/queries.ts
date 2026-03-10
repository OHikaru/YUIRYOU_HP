import { groq } from "next-sanity";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  brandName,
  defaultTitle,
  defaultDescription,
  phoneLabel,
  contactEmail,
  trustChips,
  issueCards,
  globalFaq,
  pricingPlans
}`;

export const teamMembersQuery = groq`*[_type == "teamMember"] | order(sortOrder asc, name asc){
  id,
  sortOrder,
  name,
  role,
  shortRole,
  bio,
  specialties,
  researchHighlights,
  supportThemes,
  selectedPublications,
  imageAlt,
  "image": image.asset->url
}`;

export const servicesQuery = groq`*[_type == "service"]{
  "slug": slug.current,
  navLabel,
  title,
  summary,
  understandingPoints,
  pains,
  support,
  deliverables,
  idealClients,
  process,
  faq,
  metadataTitle,
  metadataDescription
}`;

export const articlesQuery = groq`*[_type == "article"] | order(publishedAt desc){
  title,
  category,
  publishedAt,
  summary,
  tldr,
  learnings,
  conclusion,
  background,
  actions,
  tags,
  sources,
  faq,
  "slug": slug.current,
  "authorId": author->id,
  "authorName": author->name
}`;
