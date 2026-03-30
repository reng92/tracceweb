export const projectsQuery = `*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  coverImage,
  category,
  description,
  url,
  publishedAt
}`

export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  title,
  slug,
  icon,
  shortDesc,
  order
}`

export const teamQuery = `*[_type == "teamMember"] {
  _id,
  name,
  role,
  photo,
  bio,
  linkedin
}`

export const siteConfigQuery = `*[_type == "siteConfig"][0] {
  siteTitle,
  description,
  email,
  phone,
  socialLinks,
  logo
}`
