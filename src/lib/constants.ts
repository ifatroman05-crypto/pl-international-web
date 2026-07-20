export const BASE_PATH = "/pl-international-web"

export function assetPath(path: string) {
  return `${BASE_PATH}${path}`
}

export const BRAND = {
  primary: "#0B3EA9",
  secondary: "#1E5BFF",
  accent: "#F4C400",
  dark: "#0F172A",
  light: "#F8FAFC",
} as const

export const WHATSAPP_NUMBER = "+8801950217088"
export const WHATSAPP_MESSAGE = "Hello! I'm interested in studying abroad. Can you help me?"

export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0!2d90.4125!3d23.7333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8e0c8e8e8e8%3A0x0!2s99%20Karim%20Chamber%2C%20Motijheel%2C%20Dhaka%201000!5e0!3m2!1sen!2sbd!4v1"

export const COUNTRIES = ["Malaysia", "Australia"] as const

export const PROGRAMS = [
  "Foundation",
  "Diploma",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
  "English Language Course",
] as const

export const ACADEMIC_QUALIFICATIONS = [
  "SSC / O-Levels",
  "HSC / A-Levels",
  "Bachelor's Degree",
  "Master's Degree",
  "Other",
] as const

export const PASSPORT_STATUSES = [
  "I have a valid passport",
  "I am applying for a passport",
  "I don't have a passport",
] as const

export const ENGLISH_PROFICIENCY = [
  "IELTS",
  "TOEFL",
  "PTE Academic",
  "None of the above",
] as const
