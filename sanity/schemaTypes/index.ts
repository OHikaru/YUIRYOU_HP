import { defineArrayMember, defineField, defineType } from "sanity";

const faqItem = defineType({
  name: "faqItem",
  title: "FAQ Item",
  type: "object",
  fields: [
    defineField({ name: "question", title: "Question", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "answer", title: "Answer", type: "text", rows: 4, validation: (rule) => rule.required() }),
  ],
});

const pricingPlan = defineType({
  name: "pricingPlan",
  title: "Pricing Plan",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "price", title: "Price", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "note", title: "Note", type: "string" }),
    defineField({ name: "features", title: "Features", type: "array", of: [defineArrayMember({ type: "string" })] }),
  ],
});

const articleSource = defineType({
  name: "articleSource",
  title: "Article Source",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "href", title: "URL", type: "url", validation: (rule) => rule.required() }),
  ],
});

const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "brandName", title: "Brand Name", type: "string" }),
    defineField({ name: "defaultTitle", title: "Default Title", type: "string" }),
    defineField({ name: "defaultDescription", title: "Default Description", type: "text", rows: 4 }),
    defineField({ name: "phoneLabel", title: "Phone Label", type: "string" }),
    defineField({ name: "contactEmail", title: "Contact Email", type: "string" }),
    defineField({ name: "trustChips", title: "Trust Chips", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "issueCards", title: "Issue Cards", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "globalFaq", title: "Global FAQ", type: "array", of: [defineArrayMember({ type: "faqItem" })] }),
    defineField({ name: "pricingPlans", title: "Pricing Plans", type: "array", of: [defineArrayMember({ type: "pricingPlan" })] }),
  ],
});

const teamMember = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({ name: "id", title: "ID", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "sortOrder", title: "Sort Order", type: "number" }),
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "role", title: "Role", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "shortRole", title: "Short Role", type: "string" }),
    defineField({ name: "bio", title: "Bio", type: "text", rows: 5 }),
    defineField({ name: "specialties", title: "Specialties", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "researchHighlights", title: "Research Highlights", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "supportThemes", title: "Support Themes", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "selectedPublications", title: "Selected Publications", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "imageAlt", title: "Image Alt", type: "string" }),
  ],
});

const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "navLabel", title: "Nav Label", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "summary", title: "Summary", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "understandingPoints", title: "Understanding Points", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "pains", title: "Pains", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "support", title: "Support", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "deliverables", title: "Deliverables", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "idealClients", title: "Ideal Clients", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "process", title: "Process", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "faq", title: "FAQ", type: "array", of: [defineArrayMember({ type: "faqItem" })] }),
    defineField({ name: "metadataTitle", title: "Metadata Title", type: "string" }),
    defineField({ name: "metadataDescription", title: "Metadata Description", type: "text", rows: 3 }),
  ],
});

const article = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "category", title: "Category", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "publishedAt", title: "Published At", type: "date", validation: (rule) => rule.required() }),
    defineField({ name: "author", title: "Author", type: "reference", to: [{ type: "teamMember" }], validation: (rule) => rule.required() }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "tldr", title: "TL;DR", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "learnings", title: "Learnings", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "conclusion", title: "Conclusion", type: "text", rows: 4 }),
    defineField({ name: "background", title: "Background", type: "array", of: [defineArrayMember({ type: "text" })] }),
    defineField({ name: "actions", title: "Actions", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "sources", title: "Sources", type: "array", of: [defineArrayMember({ type: "articleSource" })] }),
    defineField({ name: "faq", title: "FAQ", type: "array", of: [defineArrayMember({ type: "faqItem" })] }),
  ],
});

export const schemaTypes = [faqItem, pricingPlan, articleSource, siteSettings, teamMember, service, article];
