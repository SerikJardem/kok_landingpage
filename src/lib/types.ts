export type LocationStatus = "occupied" | "construction" | "available";

export type ExperienceLevel = "yes" | "no" | "partial";

export type BudgetBand = "under25" | "25to50" | "50to80" | "over80";

export type LocationSource = "sheet" | "fallback";

export interface FranchiseLocation {
  city: string;
  region: string;
  status: LocationStatus;
  launch: string;
  note: string;
}

export interface LocationsPayload {
  locations: FranchiseLocation[];
  source: LocationSource;
  fetchedAt: string;
}

export interface FranchiseApplication {
  city: string;
  experience: ExperienceLevel;
  budget: BudgetBand;
  name: string;
  contact: string;
}

export interface ApplyRequestBody {
  city: string;
  experience: ExperienceLevel;
  budget: BudgetBand;
  name: string;
  contact: string;
  company?: string;
}

export type CateringNeed = "food" | "drinks" | "both";

export type CateringHeadcount = "50" | "100" | "200plus";

export interface CateringRequestBody {
  need: CateringNeed;
  headcount: CateringHeadcount;
  eventDate: string;
  eventTime: string;
  city: string;
  venue: string;
  organization: string;
  name: string;
  contact: string;
  notes: string;
  company?: string;
}
