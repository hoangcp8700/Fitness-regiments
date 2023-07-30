type ContentType = string;

export const breakpoints = {
  // ---------------- customs ------------------
  breakMax: (pixel: string, content: ContentType) => `@media (max-width: ${pixel}) {${content}}`,

  break: (pixel: string, pixel2: string, content: ContentType) =>
    `@media (min-width: ${pixel}) and (max-width: ${pixel2}) {${content}}`,

  // ------------------- HD -------------
  maxHdPlus: (content: ContentType) => `@media (max-width: 1601px) {${content}}`,
  minHdPlus: (content: ContentType) => `@media (min-width: 1600px) {${content}}`,

  // ---------------- desktop ------------------
  maxDesktopDown: (content: ContentType) => `@media (max-width: 1441px) {${content}}`,
  maxDesktopUp: (content: ContentType) => `@media (min-width: 1440px) {${content}}`,

  // ---------------- tablet ------------------
  tablet: (content: ContentType) => `@media (min-width: 768px) and (max-width: 1201px) {${content}}`,
  tabletDown: (content: ContentType) => `@media (max-width: 1201px) {${content}}`,
  tabletUp: (content: ContentType) => `@media (min-width: 1200px) {${content}}`,

  // ---------------- mobile ------------------
  mobile: (content: ContentType) => `@media  (min-width: 320px) and (max-width: 769px) {${content}}`,
  mobileDown: (content: ContentType) => `@media (max-width: 769px) {${content}}`,
  mobileUp: (content: ContentType) => `@media (min-width: 768px) {${content}}`,
  smallMobileDown: (content: ContentType) => `@media (max-width: 577px) {${content}}`,
  smallMobileUp: (content: ContentType) => `@media (min-width: 576px) {${content}}`,
};
