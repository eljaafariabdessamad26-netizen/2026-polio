export type Language = 'FR' | 'EN';

export type PageId = 'home' | 'about' | 'cv' | 'portfolio' | 'contact';

export interface Category {
  id: string;
  number: string;
  titleEn: string;
  titleFr: string;
  descEn: string;
  descFr: string;
  taglineEn: string;
  taglineFr: string;
  iconName: string;
  projectCount: number;
  highlightStat: string;
}

export interface Project {
  id: string;
  categoryId: string;
  title: string;
  year: string;
  typeEn: string;
  typeFr: string;
  summaryEn: string;
  summaryFr: string;
  client: string;
  roleEn: string;
  roleFr: string;
  tools: string[];
  coverImage: string;
  galleryImages: string[];
  briefEn: string;
  briefFr: string;
  conceptEn: string;
  conceptFr: string;
  processEn: string;
  processFr: string;
  resultEn: string;
  resultFr: string;
  infographicMetrics?: {
    labelEn: string;
    labelFr: string;
    value: string;
  }[];
}

export interface ExperienceItem {
  period: string;
  roleEn: string;
  roleFr: string;
  company: string;
  location: string;
  descEn: string;
  descFr: string;
  achievementsEn: string[];
  achievementsFr: string[];
}

export interface EducationItem {
  period: string;
  degreeEn: string;
  degreeFr: string;
  institution: string;
  location: string;
  honorsEn?: string;
  honorsFr?: string;
}

export interface SkillItem {
  nameEn: string;
  nameFr: string;
  level: number; // 0 to 100
  category: 'core' | 'technical' | 'strategic';
  descriptorEn: string;
  descriptorFr: string;
}

export interface SoftwareTool {
  name: string;
  category: string;
  proficiency: number;
}
