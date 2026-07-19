export interface BreedPage {
  slug: string;
  name: string;
  title: string;
  description: string;
  coatType: string;
  coatDescription: string;
  recommendedBlades: { blade: string; length: string; use: string }[];
  groomingTips: string[];
  groomingFrequency: string;
  keywords: string[];
}

export const breeds: BreedPage[] = [
  {
    slug: "poodle",
    name: "Poodle",
    title: "Best Clipper Blades for Poodles: Size Guide & Grooming Tips",
    description:
      "Complete guide to choosing A5 clipper blades for Poodle grooming — blade sizes for body clips, face, feet, and teddy bear cuts. Compatible with Andis, Wahl, Oster.",
    coatType: "Single-coat, curly, continuously growing",
    coatDescription:
      "Poodles have a dense, curly single coat that grows continuously and does not shed. This means regular grooming every 4-6 weeks is essential. Their coat is highly versatile — capable of being styled into everything from tight continental clips to fluffy teddy bear trims.",
    recommendedBlades: [
      { blade: "#10", length: "1.5mm", use: "Face, feet, tail base (clean-shaven areas in poodle patterns)" },
      { blade: "#15", length: "1.2mm", use: "Very close body work, sanitary clip" },
      { blade: "#30", length: "0.5mm", use: "Face for competition clips (extremely close)" },
      { blade: "#7F", length: "3.2mm", use: "Kennel cut / short all-over body trim" },
      { blade: "#5F", length: "6.4mm", use: "Medium teddy bear body" },
      { blade: "#4F", length: "9.5mm", use: "Longer teddy bear / puppy clip body" },
      { blade: "#3F", length: "13mm", use: "Maximum length — fluffy teddy bear look" },
    ],
    groomingTips: [
      "Always bathe and fully dry before clipping — wet poodle coat tangles in blades",
      "Clip in the direction of hair growth for an even finish",
      "Use a #10 blade for face, feet, and tail base in standard poodle patterns",
      "For teddy bear cuts, use #5F or #4F on the body, blending with scissors on legs",
      "Change blades when they feel warm — poodle grooming sessions are long",
    ],
    groomingFrequency: "Every 4-6 weeks for full clips; touch-ups on face/feet every 2-3 weeks",
    keywords: ["poodle clipper blades", "poodle grooming blades", "best blades for poodle", "poodle grooming supplies", "poodle body clip blade"],
  },
  {
    slug: "shih-tzu",
    name: "Shih Tzu",
    title: "Best Clipper Blades for Shih Tzu: Grooming Guide & Blade Sizes",
    description:
      "Choosing the right A5 clipper blades for Shih Tzu grooming — puppy cut, teddy bear trim, and summer clip blade recommendations. Fits Andis, Wahl, Oster clippers.",
    coatType: "Double-coat, long, silky, continuously growing",
    coatDescription:
      "Shih Tzus have a luxurious double coat that grows long and requires regular grooming to prevent matting. Most pet owners choose a shorter maintenance cut rather than the full show coat. Their fine, silky texture means blades must be sharp and well-oiled to avoid pulling.",
    recommendedBlades: [
      { blade: "#7F", length: "3.2mm", use: "Standard body clip — neat and low-maintenance" },
      { blade: "#5F", length: "6.4mm", use: "Teddy bear body — leaves soft, touchable coat" },
      { blade: "#4F", length: "9.5mm", use: "Longer puppy cut body" },
      { blade: "#10", length: "1.5mm", use: "Sanitary areas, paw pads, under ears" },
      { blade: "#3F", length: "13mm", use: "Maximum blade length — very fluffy look" },
    ],
    groomingTips: [
      "Brush thoroughly before clipping to remove all mats — blades cannot cut through tangles",
      "Use a #7F for a practical everyday cut that stays neat for 4-6 weeks",
      "Leave the face longer and blend with scissors for the classic Shih Tzu round face",
      "Pay special attention to sanitary areas and between paw pads (#10 blade)",
      "Oil blades every 5-10 minutes — Shih Tzu coat is fine and creates more friction",
    ],
    groomingFrequency: "Every 4-6 weeks for maintained clips; daily brushing between grooms",
    keywords: ["shih tzu clipper blades", "shih tzu grooming tools", "best blades for shih tzu", "shih tzu grooming kit", "shih tzu puppy cut blade"],
  },
  {
    slug: "labradoodle",
    name: "Labradoodle",
    title: "Best Clipper Blades for Labradoodles: Complete Grooming Guide",
    description:
      "Labradoodle grooming blade guide — which A5 blade sizes for fleece vs wool coats, teddy bear trims, and summer clips. Compatible with all A5-standard clippers.",
    coatType: "Single or double-coat (varies: wool, fleece, or hair type)",
    coatDescription:
      "Labradoodles have one of three coat types — wool (tight curls like a poodle), fleece (loose waves, most common), or hair (straighter, sheds more). Wool and fleece coats need regular professional grooming. The coat is typically dense and can matt quickly if not maintained.",
    recommendedBlades: [
      { blade: "#5F", length: "6.4mm", use: "Most popular — natural teddy bear look" },
      { blade: "#7F", length: "3.2mm", use: "Shorter summer clip, low maintenance" },
      { blade: "#4F", length: "9.5mm", use: "Longer teddy bear, more coat left" },
      { blade: "#3F", length: "13mm", use: "Maximum length — for well-maintained coats only" },
      { blade: "#10", length: "1.5mm", use: "Sanitary trim, paw pads, matted areas" },
    ],
    groomingTips: [
      "Identify coat type first: wool coats need shorter clips, fleece coats hold longer lengths better",
      "A #5F gives the classic labradoodle teddy bear look most owners want",
      "For heavily matted coats, start with a #7F to remove mats safely before switching to longer blade",
      "Clip against the grain on the body for an even finish with curly coats",
      "Face, ears, and tail often need scissor finishing after clipper work",
    ],
    groomingFrequency: "Every 6-8 weeks; more frequent for wool-coat types (every 4-5 weeks)",
    keywords: ["labradoodle clipper blades", "labradoodle grooming", "best clippers for labradoodle", "labradoodle grooming supplies", "labradoodle teddy bear cut blade"],
  },
  {
    slug: "cockapoo",
    name: "Cockapoo",
    title: "Best Clipper Blades for Cockapoos: Sizes, Styles & Tips",
    description:
      "Guide to choosing A5 clipper blades for Cockapoo grooming — teddy bear cuts, summer clips, and maintenance trims. All blades fit Andis, Wahl, Oster clippers.",
    coatType: "Single or double-coat, curly to wavy",
    coatDescription:
      "Cockapoos inherit their coat from both Cocker Spaniel and Poodle parents — resulting in anything from loose waves to tight curls. Most have a soft, medium-density coat that matts easily around ears, armpits, and groin. Regular grooming is essential regardless of coat type.",
    recommendedBlades: [
      { blade: "#5F", length: "6.4mm", use: "Classic cockapoo teddy bear trim" },
      { blade: "#7F", length: "3.2mm", use: "Short summer clip — easy maintenance" },
      { blade: "#4F", length: "9.5mm", use: "Longer teddy bear for winter" },
      { blade: "#10", length: "1.5mm", use: "Sanitary areas, paw pads" },
      { blade: "#3F", length: "13mm", use: "Very long — only for tangle-free coats" },
    ],
    groomingTips: [
      "Cockapoo ears matt quickly — clip behind and under ears with a #7F regularly",
      "The #5F blade gives the best teddy bear result for most Cockapoo coat textures",
      "If the coat is matted, don't force a longer blade through — use #7F first to safely de-matt",
      "Face shape: leave longer, scissor into a round teddy bear shape after clipping body",
      "Clip chest and belly shorter than back — these areas matt fastest",
    ],
    groomingFrequency: "Every 6-8 weeks; ears and sanitary every 3-4 weeks",
    keywords: ["cockapoo clipper blades", "cockapoo grooming", "best clippers for cockapoo", "cockapoo teddy bear cut", "shaving cockapoo"],
  },
  {
    slug: "cocker-spaniel",
    name: "Cocker Spaniel",
    title: "Best Clipper Blades for Cocker Spaniels: Grooming & Trim Guide",
    description:
      "Cocker Spaniel grooming blade guide — blade sizes for body clips, head, ears, and the classic cocker trim. A5 blades compatible with Andis, Wahl, Oster.",
    coatType: "Double-coat, silky with feathering",
    coatDescription:
      "Cocker Spaniels have a flat or slightly wavy silky coat on the body with longer feathering on ears, chest, belly, and legs. The breed requires regular trimming of the head, ears, and body while maintaining appropriate feathering length. Both English and American types need consistent grooming.",
    recommendedBlades: [
      { blade: "#10", length: "1.5mm", use: "Head (skull), cheeks, muzzle — the classic cocker head trim" },
      { blade: "#7F", length: "3.2mm", use: "Body — back and sides above the feathering line" },
      { blade: "#15", length: "1.2mm", use: "Close head work, inner ears, throat" },
      { blade: "#5F", length: "6.4mm", use: "Natural-looking body for pet/lamb trims" },
      { blade: "#4F", length: "9.5mm", use: "Longer body for a less trimmed appearance" },
    ],
    groomingTips: [
      "Classic cocker pattern: #10 on head/skull, #7F on body, scissors on feathering",
      "Clip ears on the upper 1/3 with #10, leave the lower 2/3 long and silky",
      "Blend between clipped and scissored areas using thinning shears",
      "Inner ear flap: use #10 or #15 to reduce air flow problems and ear infections",
      "Feet: clip between paw pads with #10, scissor the tops round and neat",
    ],
    groomingFrequency: "Every 6-8 weeks for full groom; ear checks weekly (prone to infections)",
    keywords: ["cocker spaniel clipper blades", "cocker spaniel grooming tools", "cocker spaniel grooming cut", "english cocker spaniel grooming", "cocker spaniel trim"],
  },
  {
    slug: "goldendoodle",
    name: "Goldendoodle",
    title: "Best Clipper Blades for Goldendoodles: Sizes & Grooming Guide",
    description:
      "Complete Goldendoodle grooming blade guide — A5 blade sizes for teddy bear cuts, summer trims, and face/paw work. Compatible with Andis, Wahl, Oster clippers.",
    coatType: "Single or double-coat, wavy to curly (varies by generation)",
    coatDescription:
      "Goldendoodles range from flat/wavy (more Golden Retriever influence) to tight curly (more Poodle influence). F1B and multigenerational Goldendoodles tend toward curlier, non-shedding coats that need more frequent grooming. Their large size means grooming sessions are longer — blade quality and heat management matter more.",
    recommendedBlades: [
      { blade: "#5F", length: "6.4mm", use: "Classic teddy bear body — most popular choice" },
      { blade: "#7F", length: "3.2mm", use: "Summer cut — short and cool for hot weather" },
      { blade: "#4F", length: "9.5mm", use: "Longer natural look (well-maintained coats only)" },
      { blade: "#10", length: "1.5mm", use: "Sanitary areas, paw pads, around eyes" },
      { blade: "#3F", length: "13mm", use: "Maximum — only for daily-brushed, mat-free coats" },
    ],
    groomingTips: [
      "Goldendoodles are large — have multiple blades ready as they heat up during long sessions",
      "Oil blades every 10 minutes; consider DLC-coated blades for reduced heat on large dogs",
      "A #5F on the body with scissored legs gives the classic 'doodle' look",
      "Start with ears and face while the dog is calm, save body for after",
      "If heavily matted, humanely shave with #7F rather than causing pain pulling through mats",
    ],
    groomingFrequency: "Every 6-8 weeks; daily brushing between grooms for curly types",
    keywords: ["goldendoodle clipper blades", "best dog clippers for goldendoodles", "goldendoodle grooming", "goldendoodle teddy bear cut", "goldendoodle summer cut"],
  },
  {
    slug: "maltese",
    name: "Maltese",
    title: "Best Clipper Blades for Maltese Dogs: Grooming & Cut Guide",
    description:
      "Maltese grooming blade guide — A5 blade sizes for puppy cuts, short trims, and face work. Gentle cutting for fine, silky Maltese coat. Fits all A5-standard clippers.",
    coatType: "Single-coat, long, silky, continuously growing",
    coatDescription:
      "The Maltese has a single layer of fine, straight, silky white hair that grows long like human hair. It does not have an undercoat. This fine texture requires extremely sharp blades — dull blades will pull and cause discomfort. The white coat also shows any unevenness in the cut immediately.",
    recommendedBlades: [
      { blade: "#7F", length: "3.2mm", use: "Neat puppy cut — most popular for pet Maltese" },
      { blade: "#5F", length: "6.4mm", use: "Soft, slightly longer puppy cut" },
      { blade: "#10", length: "1.5mm", use: "Sanitary areas, paw pads, belly" },
      { blade: "#4F", length: "9.5mm", use: "Longer look with more flow" },
      { blade: "#3F", length: "13mm", use: "Near-show-coat length — requires expert handling" },
    ],
    groomingTips: [
      "Maltese coat is extremely fine — blades MUST be sharp and well-oiled or they will pull",
      "Always clip on dry, freshly brushed coat — any tangle will cause snagging",
      "Use light pressure; let the blade do the work. Pressing hard on fine coat causes lines",
      "Face: scissor the round Maltese head shape rather than clipping for a softer look",
      "DLC-coated blades are ideal for Maltese — lower friction on fine hair means no pulling",
    ],
    groomingFrequency: "Every 4-6 weeks for maintained puppy cuts; daily brushing essential",
    keywords: ["maltese clipper blades", "maltese grooming supplies", "best blades for maltese", "maltese puppy cut", "maltese grooming tools"],
  },
  {
    slug: "schnauzer",
    name: "Miniature Schnauzer",
    title: "Best Clipper Blades for Schnauzers: Trim Styles & Blade Guide",
    description:
      "Schnauzer grooming blade guide — A5 blade sizes for the classic schnauzer pattern, pet trims, and hand-stripping alternatives. Compatible with Andis, Wahl, Oster.",
    coatType: "Double-coat, wiry topcoat with soft undercoat",
    coatDescription:
      "Schnauzers have a distinctive harsh, wiry topcoat over a soft undercoat. The classic schnauzer look features a clipped body with longer furnishings (beard, eyebrows, legs). While hand-stripping maintains the wire texture best, most pet owners opt for clipper trims which soften the coat over time.",
    recommendedBlades: [
      { blade: "#10", length: "1.5mm", use: "Body (back, sides, head top) in the classic schnauzer pattern" },
      { blade: "#7F", length: "3.2mm", use: "Slightly longer body for a less severe look" },
      { blade: "#15", length: "1.2mm", use: "Ears, cheeks, throat — close work areas" },
      { blade: "#5F", length: "6.4mm", use: "Softer all-over pet trim (non-traditional)" },
      { blade: "#40", length: "0.25mm", use: "Inner ear cleaning (optional)" },
    ],
    groomingTips: [
      "Classic schnauzer pattern: #10 on body/head, leave beard, eyebrows, and legs long",
      "Clip the body WITH the grain for a smooth finish on wiry coat",
      "Ears: #15 on the outer ear flap, front and back, for a clean look",
      "Blending: use thinning shears where clipped body meets longer leg furnishings",
      "If transitioning from hand-stripping to clipping, know the coat will soften permanently",
    ],
    groomingFrequency: "Every 5-6 weeks for maintained schnauzer clips",
    keywords: ["schnauzer clipper blades", "miniature schnauzer grooming clippers", "schnauzer grooming", "dog clippers for schnauzer", "schnauzer trim"],
  },
];

export function getBreedBySlug(slug: string): BreedPage | undefined {
  return breeds.find((b) => b.slug === slug);
}
