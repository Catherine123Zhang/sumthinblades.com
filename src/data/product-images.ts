/**
 * Product image mapping — maps category slugs to their image files.
 * Images are 3D renders from the factory catalog, stored in /public/images/products/.
 * First image in each array is used as the category thumbnail / hero.
 */

const P = "/images/products";

export const categoryImages: Record<string, string[]> = {
  "hair-clipper-blades": [
    `${P}/1667884791109649.png`,   // standard blade pair
    `${P}/1667884860576373.png`,   // blade pair alternate angle
    `${P}/1667884917113455.png`,   // fine-tooth blade pair with crosshatch
    `${P}/1667884939402023.png`,   // wide blade pair
    `${P}/1668391178205952.png`,   // blade pair with tabs
    `${P}/1669042676606935.png`,   // large blade set with side view
    `${P}/1669042716102017.png`,   // blade set variation
    `${P}/1669042749744970.png`,   // blade pair heavy-duty
    `${P}/1667884876210963.png`,
    `${P}/1667884887162805.png`,
    `${P}/1667884901124021.png`,
    `${P}/1667884910142040.png`,
    `${P}/1667884952797808.png`,
    `${P}/1667884961913260.png`,
    `${P}/1667884969881561.png`,
    `${P}/1667884978112086.png`,
    `${P}/1667884986162603.png`,
    `${P}/1667884119574599.png`,
    `${P}/1667884129104203.png`,
    `${P}/1667884147200235.png`,
    `${P}/1667884156198323.png`,
    `${P}/1667884165192676.png`,
    `${P}/1667884179211645.png`,
    `${P}/1667884190184863.png`,
    `${P}/1667884806191480.png`,
    `${P}/1667884824946163.png`,
    `${P}/1667884849835084.png`,
    `${P}/1667885379955406.png`,
    `${P}/1667885431163607.png`,
    `${P}/1667885448676050.png`,
    `${P}/1668391192417705.png`,
    `${P}/1668391208814124.png`,
    `${P}/1668391324786194.png`,
    `${P}/1668391984211786.png`,
    `${P}/1668391999151878.png`,
    `${P}/1668392031561020.png`,
    `${P}/1668392048886354.png`,
    `${P}/1669042696100291.png`,
    `${P}/1669042731209979.png`,
  ],

  "t-blades": [
    `${P}/1668390465127568.png`,   // classic T-blade pair
    `${P}/1667885264203783.png`,   // T-blade pair, clean
    `${P}/1668392937948912.png`,   // ceramic T-blade (white top)
    `${P}/1668394376613752.png`,   // single T-blade, curved
    `${P}/1667885023163303.png`,
    `${P}/1667885033134462.png`,
    `${P}/1667885040201257.png`,
    `${P}/1667885058199451.png`,
    `${P}/1667885068107367.png`,
    `${P}/1667885076179115.png`,
    `${P}/1667885083648115.png`,
    `${P}/1667885272176014.png`,
    `${P}/1667885281981123.png`,
    `${P}/1667885294135798.png`,
    `${P}/1667885301378451.png`,
    `${P}/1667885308403320.png`,
    `${P}/1668390493142652.png`,
    `${P}/1668392947115575.png`,
    `${P}/1668392956102359.png`,
    `${P}/1668392964872570.png`,
    `${P}/1668393364509002.png`,
    `${P}/1668393392146549.png`,
    `${P}/1668393400158239.png`,
    `${P}/1668394384146908.png`,
    `${P}/1668394394960760.png`,
    `${P}/1668394423124728.png`,
  ],

  "ceramic-blades": [
    `${P}/1667886227120405.png`,   // ceramic blade, single piece
    `${P}/1667886328965737.png`,   // ceramic blade with slot
    `${P}/1667886236907327.png`,
    `${P}/1667886270213523.png`,
    `${P}/1667886279156479.png`,
    `${P}/1667886299100374.png`,
    `${P}/1667886338105768.png`,
    `${P}/1667886345135549.png`,
  ],

  "sheep-shearing-blades": [
    `${P}/1667884563151830.png`,   // 13-tooth shearing comb
    `${P}/1667884595195153.png`,   // 9-tooth comb
    `${P}/1667884607191173.png`,
    `${P}/1667884621113336.png`,
    `${P}/1667884632141562.png`,
    `${P}/1667884642170412.png`,
    `${P}/1667884654855254.png`,
  ],

  "nose-hair-trimmer-heads": [
    `${P}/1667884070705019.png`,   // rotary trimmer head
    `${P}/1667884082133301.png`,   // taller trimmer head
    `${P}/1667884095194803.png`,
    `${P}/1667884109166586.png`,   // slotted trimmer head
  ],

  "eyebrow-trimmer-blades": [
    `${P}/1667885190183862.png`,   // rounded eyebrow blade pair
    `${P}/1667885208123516.png`,
  ],

  "pet-grooming-blades": [
    `${P}/1668564537164379.png`,   // snap-on pet blade, front+side view
    `${P}/1668564572169143.png`,   // wider pet blade
    `${P}/1668564902107057.png`,   // pet blade with latch detail
    `${P}/1668393572565641.png`,   // pet trimmer blade pair
    `${P}/1668564551132807.png`,
    `${P}/1668564561189348.png`,
    `${P}/1668564585124391.png`,
    `${P}/1668564597254608.png`,
    `${P}/1668564607136560.png`,
    `${P}/1668393582145879.png`,
  ],

  "detachable-a5-blades": [
    // A5 blades share the same snap-on form as pet blades
    `${P}/1668564537164379.png`,
    `${P}/1668564572169143.png`,
    `${P}/1668564902107057.png`,
    `${P}/1668564551132807.png`,
    `${P}/1668564585124391.png`,
    `${P}/1668564597254608.png`,
  ],
};

/** Get the hero/thumbnail image for a category */
export function getCategoryHeroImage(slug: string): string | undefined {
  return categoryImages[slug]?.[0];
}

/** Get all images for a category */
export function getCategoryImages(slug: string): string[] {
  return categoryImages[slug] ?? [];
}

/** Factory images for the About page */
export const factoryImages = [
  "/images/about/factory/1668398664122913.png",
  "/images/about/factory/1668398691107996.png",
  "/images/about/factory/1668398702158215.png",
  "/images/about/factory/1668398717324712.png",
  "/images/about/factory/1668398787146586.png",
  "/images/about/factory/1668398828968416.png",
  "/images/about/factory/1668398893561741.png",
  "/images/about/factory/1668398946488242.png",
];

/** Logo images */
export const logoImages = {
  logo: "/images/about/logo/sumthin-logo.jpg",
  banner: "/images/about/logo/sumthin-banner.jpg",
};
