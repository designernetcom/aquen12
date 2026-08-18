import "server-only"; import { cache } from "react"; import { db } from "@/lib/db";
export const getPublishedSolution=cache(async(categorySlug:string,pageSlug:string)=>db.solutionPage.findFirst({where:{slug:pageSlug,status:"PUBLISHED",deletedAt:null,subcategory:{category:{slug:categorySlug,status:"PUBLISHED",isEnabled:true,deletedAt:null},isEnabled:true,deletedAt:null}},include:{sections:{where:{isEnabled:true},orderBy:{sortOrder:"asc"}},subcategory:{include:{category:true}},ogImage:true,relatedFrom:{orderBy:{sortOrder:"asc"},include:{relatedPage:{include:{subcategory:{include:{category:true}}}}}}}}));
const solutionAliases:Record<string,string>={
  "clarifier-systems":"clarifier-system",
  "sewage-treatment-plant":"sewage-treatment-plants",
  "effluent-treatment-plant":"effluent-treatment-plants",
  "reverse-osmosis-plant":"reverse-osmosis-systems",
  "ro-plant":"reverse-osmosis-systems",
  "dm-plant":"demineralization-plants",
  "softener-plant":"softener-plants",
  "ultrafiltration-system":"ultra-filtration-systems",
};
export const getPublishedSolutionBySlug=cache(async(slug:string)=>db.solutionPage.findFirst({where:{slug:solutionAliases[slug]||slug,status:"PUBLISHED",deletedAt:null,subcategory:{status:"PUBLISHED",isEnabled:true,deletedAt:null,category:{status:"PUBLISHED",isEnabled:true,deletedAt:null}}},include:{sections:{orderBy:{sortOrder:"asc"}},subcategory:{include:{category:true}},ogImage:true}}));
