export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
  content: string;
  faqs: { q: string; a: string }[];
}

export const posts: BlogPost[] = [
  {
    slug: "clipper-blade-size-chart",
    title: "Clipper Blade Size Chart: Complete Guide with MM Measurements",
    description:
      "Complete clipper blade size chart with blade numbers (#40 to #3), millimeter measurements, and recommended hair/fur lengths. Covers A5, Wahl, Andis, and Oster systems.",
    date: "2026-07-15",
    readTime: "8 min",
    category: "Guides",
    keywords: [
      "clipper blade sizes",
      "clipper blade size chart",
      "dog clipper blade sizes chart in mm",
      "clipper blade numbers",
      "a5 blade sizes",
    ],
    content: `
## Understanding Clipper Blade Numbers

Clipper blade sizes follow a numbering system where **higher numbers mean shorter cuts**. A #40 blade cuts to 0.25mm (surgical close), while a #3F leaves 13mm of hair or fur. This is counterintuitive for beginners, but once you learn the system it becomes second nature.

The most widely used system is the **A5 detachable blade standard**, originally developed by Oster and now universal across Andis, Wahl KM series, and most professional pet clippers. SUMTHIN manufactures A5 blades in all standard sizes using MIM (Metal Injection Molding) powder metallurgy for superior consistency and edge retention.

## Complete Blade Size Reference Table

| Blade # | Cut Length (mm) | Cut Length (inch) | Best For |
|---------|----------------|-------------------|----------|
| #50 | 0.2mm | 1/125" | Surgical prep, very close work |
| #40 | 0.25mm | 1/100" | Surgical prep, paw pads |
| #30 | 0.5mm | 1/50" | Close clipping, medical prep |
| #15 | 1.2mm | 3/64" | Close body work |
| #10 | 1.5mm | 1/16" | Most common grooming blade — body clips, sanitary areas |
| #9 | 2.0mm | 5/64" | Medium close body work |
| #8½ | 2.8mm | 7/64" | Medium body clips |
| #7F | 3.2mm | 1/8" | Full-tooth body clips, all-purpose |
| #7 | 3.2mm | 1/8" | Skip-tooth version — faster but rougher |
| #5F | 6.3mm | 1/4" | Leaves visible coat, popular for pets |
| #5 | 6.3mm | 1/4" | Skip-tooth version |
| #4F | 9.5mm | 3/8" | Longer pet trims |
| #4 | 9.5mm | 3/8" | Skip-tooth version |
| #3F | 13mm | 1/2" | Longest standard blade — teddy bear cuts |
| #3 | 13mm | 1/2" | Skip-tooth version |

### F vs Skip-Tooth: What's the Difference?

Blades marked with **"F" (Full-tooth/Finish)** have closely spaced teeth that produce a smooth, even cut. **Skip-tooth** blades have wider-spaced teeth — they cut faster and handle matted or thick coats better, but leave a rougher finish. For most grooming work, F (finish) blades are preferred.

## Hair Clipper Blade Sizes (Human / Barber)

For human hair clippers (barber/salon use), blade sizing works differently. Most professional clippers use adjustable taper blades or fixed blade sets:

| Type | Cut Length | Use |
|------|-----------|-----|
| #000 (Triple Zero) | 0.5mm | Skin fades, bald fades |
| #00000 (5-Zero) | 0.2mm | Closest cut without shaving |
| #1 | 2.4mm | Short tapers |
| #1A | 1.2mm | Blending |
| #2 | 6.4mm | Medium tapers |
| Standard taper | 0.5–2.5mm | Adjustable range |

T-blades and U-blades used in trimmers typically cut at 0mm (zero-gap) for sharp outlines and detail work. SUMTHIN manufactures both T-blade and U-blade configurations for professional trimmers.

## How to Choose the Right Blade Size

**For pet grooming:**
- Summer clips / cool-down: #7F or #5F
- Poodle body clips: #10 or #15
- Teddy bear / puppy cuts: #3F or #4F with comb attachments
- Paw pads and sanitary areas: #10 or #40
- Matted coats: Skip-tooth #7 or #5 first, then finish with F blade

**For barber/salon:**
- Skin fades: #000 or #00000 blade, or zero-gap T-blade
- Bulk removal: Standard taper blade fully open
- Blending: Adjustable taper blade at various settings
- Outlines and detail: Zero-gap T-blade

## Blade Material Matters

The material your blade is made from directly affects performance, longevity, and heat:

**Stainless Steel (440C):** The industry standard. Hardness HRC 58-62, excellent edge retention, affordable. Works for most applications.

**Ceramic Moving Blades:** Stay cool during extended use — up to 75% less heat generation than steel. Edge life is approximately 5× longer than steel. Ideal for all-day grooming sessions. SUMTHIN produces 19 ceramic moving blade models.

**MIM Powder Metallurgy:** Allows complex blade geometries impossible with traditional machining. Superior consistency and density. SUMTHIN's A5 and D-series blades are all MIM-manufactured.

## Compatibility Note

SUMTHIN blades are manufactured to the same dimensional specifications as the original equipment blades. Our A5 series fits all standard A5-compatible clippers including Andis (AGC, UltraEdge), Oster (Golden A5, Turbo A5), Wahl (KM2, KM5, KM10), LAUBE, Heiniger, and more.

For human clipper blades, SUMTHIN produces replacement blades compatible with Wahl, Andis, VGR, KEMEI, and Wmark clippers.
    `,
    faqs: [
      {
        q: "What clipper blade leaves 1 inch of hair?",
        a: "No standard detachable blade leaves a full inch (25mm). The longest standard blade is #3F at 13mm (½ inch). For longer lengths, use a guide comb attachment over a #10 or #30 blade.",
      },
      {
        q: "What is the most common dog grooming blade size?",
        a: "The #10 blade (1.5mm) is the most commonly used blade in professional dog grooming. It's the standard for body clips, sanitary trims, and as the base blade under comb attachments.",
      },
      {
        q: "What is the difference between #7 and #7F clipper blades?",
        a: "Both cut to 3.2mm, but the #7F (finish) has closely spaced teeth for a smooth finish, while the #7 (skip-tooth) has wider-spaced teeth for faster cutting through thick or matted coats. Use #7F for the final pass.",
      },
      {
        q: "Are A5 clipper blades universal?",
        a: "Yes, the A5 detachable blade system is an industry standard. A5 blades fit most professional pet clippers including Andis AGC, Oster A5, Wahl KM series, LAUBE, and Heiniger. SUMTHIN A5 blades are manufactured to the same dimensional specifications.",
      },
      {
        q: "How often should clipper blades be replaced?",
        a: "With proper maintenance (cleaning, oiling, and occasional sharpening), quality steel blades last 3-6 months of daily professional use. Ceramic blades last up to 5× longer. Signs to replace: pulling hair, uneven cuts, excessive heat, or visible nicks in the blade edge.",
      },
    ],
  },
  {
    slug: "how-to-sharpen-clipper-blades",
    title: "How to Sharpen Clipper Blades (And When to Replace Them)",
    description:
      "Step-by-step guide to sharpening clipper blades at home and professionally. Learn when sharpening won't help and it's time for replacement blades.",
    date: "2026-07-15",
    readTime: "7 min",
    category: "Maintenance",
    keywords: [
      "how to sharpen clipper blades",
      "clipper blade sharpening",
      "sharpen dog clipper blades",
      "clipper blade maintenance",
    ],
    content: `
## Why Clipper Blades Get Dull

Every clipper blade dulls over time. The cutting edges of the top (moving) and bottom (stationary) blades gradually wear down through friction, contact with hair/fur, and exposure to moisture and grooming products. A dull blade pulls hair instead of cutting it cleanly, generates excessive heat, and leaves uneven results.

Understanding the difference between a blade that needs sharpening and one that needs replacing will save you money and frustration.

## Signs Your Blades Need Attention

**Needs sharpening:**
- Blade pulls or snags on hair instead of cutting smoothly
- Cuts are uneven or leave lines
- You need more passes to achieve the same result
- Blade runs hotter than when it was new

**Needs replacing (sharpening won't fix these):**
- Visible chips, nicks, or broken teeth
- Teeth are worn down unevenly
- Blade no longer sits flat (warped from heat or impact)
- Rust or deep corrosion pitting
- Blade has been sharpened multiple times and the teeth are visibly shorter

## Method 1: Professional Sharpening

Professional blade sharpening is the gold standard. A trained sharpener uses a flat-honing system (like a Wolff or Twice as Sharp machine) with precision grinding plates to restore both blade surfaces to factory specifications.

**What a professional sharpener does:**
1. Inspects both blades for damage, warping, and tooth condition
2. Flat-laps the cutting surfaces on progressively finer grinding plates
3. Ensures the blade set achieves proper "hollow" (the slight concavity that creates the cutting action)
4. Tests the blade for smooth cutting and proper tension
5. Oils and packages the sharpened set

**Cost:** Typically $5-10 per blade set in the US and Europe.

**How often:** Every 4-8 weeks for daily professional use; every 3-6 months for home use.

## Method 2: Sharpening at Home

For minor touch-ups between professional sharpenings, you can hone blades at home using a sharpening stone.

**What you'll need:**
- A flat honing stone (4000+ grit, fine ceramic or Arkansas stone)
- Blade wash / cleaning solution
- Clipper oil
- A clean, lint-free cloth

**Steps:**
1. Remove the blade from the clipper and separate the top and bottom blades
2. Clean both blades thoroughly with blade wash to remove hair, oil, and debris
3. Place the honing stone on a flat, stable surface
4. Hold the blade flat against the stone — the cutting surface must sit perfectly flush
5. Push the blade forward along the stone in one direction only (not back and forth) — 5 to 10 strokes
6. Check the edge under good light — you should see a consistent shine along the cutting edge
7. Repeat with the other blade
8. Clean off all metal filings, reassemble, oil the blade, and test

**Important:** Home honing is a touch-up, not a replacement for professional sharpening. If the blade needs more than 10-15 light strokes, send it to a professional.

## Method 3: The Aluminum Foil Quick Fix

In a pinch, you can use aluminum foil for a very light hone. Fold a sheet of foil 4-5 times, then run the clipper blade through it for 10-15 seconds. This removes minor burrs and debris but does not truly sharpen the blade. It's a temporary fix only.

## Daily Maintenance to Extend Blade Life

The best way to keep blades sharp longer is proper daily care:

**Before each use:** Apply 2-3 drops of clipper oil to the blade teeth and run the clipper for 10 seconds to distribute.

**During use:** Brush hair/fur from the blade every few minutes. For heavy grooming sessions, spray blade coolant to reduce heat and friction.

**After each use:**
1. Brush out all remaining hair
2. Spray with blade wash or disinfectant
3. Apply 2-3 drops of clipper oil
4. Run for 5 seconds, then turn off
5. Store in a protective case or pouch

## When to Stop Sharpening and Buy New Blades

Every blade has a finite number of sharpenings. Each sharpening removes a thin layer of metal, and after 5-8 professional sharpenings (depending on the blade), the teeth become too short to cut effectively.

**Replace your blades when:**
- A professional sharpener tells you they're past their useful life
- Teeth are visibly shorter than a new blade
- The blade won't hold a sharp edge for more than a few days
- The blade is damaged, warped, or corroded

Quality replacement blades don't have to be expensive. SUMTHIN manufactures factory-direct replacement blades at a fraction of brand-name prices, using the same materials (440C steel, ceramic, MIM powder metallurgy) and dimensional specifications as the original equipment.
    `,
    faqs: [
      {
        q: "Can you sharpen clipper blades with sandpaper?",
        a: "It's not recommended. Sandpaper doesn't provide a flat enough surface for precision blade sharpening, and the grit can embed in the blade surface, accelerating wear. Use a proper honing stone (4000+ grit) or send blades to a professional sharpener.",
      },
      {
        q: "How much does it cost to sharpen clipper blades?",
        a: "Professional sharpening typically costs $5-10 per blade set in the US. Most sharpeners offer mail-in service with turnaround of 3-7 days. For high-volume groomers, some sharpeners offer on-site service.",
      },
      {
        q: "How often should I oil my clipper blades?",
        a: "Apply 2-3 drops of clipper oil before each use and again after cleaning at the end of the day. During heavy grooming sessions, oil every 15-20 minutes. Proper oiling reduces heat, friction, and wear — it's the single most important thing you can do to extend blade life.",
      },
      {
        q: "Can ceramic clipper blades be sharpened?",
        a: "Ceramic blades are extremely hard and generally cannot be sharpened with conventional methods. However, they last approximately 5× longer than steel blades before needing replacement. When a ceramic blade finally dulls, replace it rather than attempting to sharpen it.",
      },
      {
        q: "Why do my clipper blades get hot so fast?",
        a: "Common causes: insufficient oiling, dirty blades (hair buildup creates friction), dull blades (more friction needed to cut), or improper blade tension. Clean and oil your blades first. If heat persists, the blade may need sharpening or replacement. Consider upgrading to ceramic moving blades, which generate up to 75% less heat.",
      },
    ],
  },
  {
    slug: "ceramic-vs-steel-clipper-blades",
    title: "Ceramic vs Steel Clipper Blades: Which Lasts Longer?",
    description:
      "Head-to-head comparison of ceramic and steel clipper blades — heat, durability, sharpness, price, and real-world performance. Data-backed guide for barbers and groomers.",
    date: "2026-07-15",
    readTime: "6 min",
    category: "Comparison",
    keywords: [
      "ceramic clipper blades",
      "ceramic vs steel blades",
      "ceramic blade benefits",
      "best clipper blade material",
    ],
    content: `
## The Short Answer

Ceramic blades last approximately **5× longer** than steel blades and run up to **75% cooler**. They cost more upfront but save money over time through fewer replacements and sharpenings. For professionals who clip all day, ceramic is almost always worth the investment.

## How Ceramic and Steel Blades Are Made

**Steel blades (440C stainless steel)** are the industry standard. They're stamped or machined from steel sheet, heat-treated to HRC 58-62, then precision-ground to create the cutting edge. The manufacturing process involves 30-42 separate operations.

**Ceramic blades** are made from zirconia (zirconium oxide) — one of the hardest materials available for consumer cutting tools. The ceramic powder is pressed into shape, then sintered at extremely high temperatures to create a dense, hard blade. SUMTHIN manufactures 19 ceramic moving blade models in-house.

In most clipper systems, the ceramic blade is the **moving blade** (top blade), while the stationary blade remains steel. This hybrid approach gives you the heat and wear benefits of ceramic where it matters most — at the cutting interface.

## Head-to-Head Comparison

| Property | Steel (440C) | Ceramic (Zirconia) |
|----------|-------------|-------------------|
| Hardness | HRC 58-62 | HV 1200+ (much harder) |
| Heat generation | Baseline | Up to 75% less |
| Edge life | 3-6 months (daily pro use) | 12-30 months |
| Sharpenable | Yes (5-8 times) | No (replace when dull) |
| Weight | Heavier | ~40% lighter |
| Corrosion resistance | Good (stainless) | Excellent (non-metallic) |
| Brittleness | Bends before breaking | Can chip if dropped |
| Price per blade | Lower | 1.5-2.5× higher |
| Cost per month of use | Higher (frequent replacement) | Lower (lasts longer) |

## Heat: The #1 Reason Professionals Switch

Heat is the biggest complaint among professional barbers and groomers. A hot blade causes discomfort to clients (human or animal), forces breaks during grooming sessions, and can even cause clipper burn.

Steel-on-steel friction generates significant heat during extended cutting. In a typical 8-hour grooming day, blade temperatures can reach 60-70°C — hot enough to be uncomfortable on skin.

Ceramic moving blades dramatically reduce this heat for two reasons: ceramic has lower thermal conductivity than steel (it doesn't transfer heat as readily), and the ceramic-on-steel interface generates less friction than steel-on-steel.

**Real-world result:** Groomers who switch to ceramic blades report being able to clip for longer sessions without blade coolant spray, and fewer complaints from dogs about heat sensitivity.

## Durability: The Total Cost Calculation

A quality steel blade costs less upfront but needs sharpening every 4-8 weeks ($5-10 per sharpening) and replacement after 5-8 sharpenings. A ceramic blade costs more initially but lasts 3-5× longer before needing replacement and doesn't require sharpening.

**Example for a busy groomer (5+ dogs/day):**

Steel blade lifecycle: Buy ($15) → sharpen 6× ($60) → replace after ~6 months = $75/year × 2 = **$150/year**

Ceramic blade lifecycle: Buy ($30) → use for 12-18 months → replace = **$20-30/year**

The ceramic blade pays for itself within the first year.

## When Steel Is the Better Choice

Ceramic isn't always the answer:

- **Budget-conscious home users** who clip occasionally — steel is plenty durable for light use
- **Rough coats and heavy matting** — ceramic can chip on severely matted fur; use a steel skip-tooth blade for the initial pass
- **Livestock shearing** — the extreme forces involved in sheep/cattle shearing favor steel or MIM powder metallurgy blades
- **Blades that get dropped frequently** — ceramic is hard but brittle; a drop on a hard floor can chip a tooth

## The Third Option: MIM Powder Metallurgy

SUMTHIN also manufactures blades using MIM (Metal Injection Molding) powder metallurgy — a process that creates blades with properties between traditional steel and ceramic. MIM blades offer superior density and consistency compared to conventionally machined steel, with better wear resistance.

MIM is particularly well-suited for complex blade geometries like A5 detachable blades and guard comb blades, where consistent tooth spacing and depth are critical for cutting performance.

## Which Should You Choose?

**Choose ceramic if:** You're a professional barber or groomer, you clip for extended sessions, heat is a concern, and you want the lowest long-term cost per blade.

**Choose steel if:** You're a home user, you need the lowest upfront cost, or you work with heavy matting where a chip-resistant blade is essential.

**Choose MIM if:** You need an A5 detachable blade or guard comb blade with maximum consistency and edge retention.

SUMTHIN manufactures all three — steel, ceramic, and MIM — in our own facility. Contact us for samples to test each material in your workflow.
    `,
    faqs: [
      {
        q: "Do ceramic clipper blades need to be oiled?",
        a: "Yes. While ceramic generates less friction than steel, the blade system still has a steel stationary blade and metal guide rails that need lubrication. Oil your ceramic blade before each use, the same as a steel blade.",
      },
      {
        q: "Can you sharpen ceramic clipper blades?",
        a: "No. Ceramic is too hard for conventional sharpening methods. When a ceramic blade dulls (typically after 12-30 months of professional use), replace it. The extended lifespan more than compensates for the inability to sharpen.",
      },
      {
        q: "Will ceramic blades fit my clipper?",
        a: "Ceramic moving blades are designed as drop-in replacements for standard steel moving blades. If your clipper uses a standard blade set, you can upgrade just the moving (top) blade to ceramic while keeping the steel stationary blade. SUMTHIN produces 19 ceramic blade models covering most major clipper systems.",
      },
      {
        q: "Are ceramic blades safe for pet grooming?",
        a: "Yes, and they're actually preferred by many professional pet groomers because they run cooler. Less heat means less risk of clipper burn, especially on sensitive areas. The lower operating temperature also keeps pets calmer during grooming.",
      },
      {
        q: "How can I tell if my ceramic blade is dull?",
        a: "Signs of a dull ceramic blade are the same as steel: pulling or snagging hair, uneven cuts, and needing more passes. However, because ceramic dulls much more gradually than steel, the decline is less noticeable. If performance has dropped compared to when the blade was new, it's time to replace.",
      },
    ],
  },
  {
    slug: "clipper-blade-compatibility-guide",
    title: "Clipper Blade Compatibility Guide: Which Blades Fit Which Clippers",
    description:
      "Complete cross-reference guide for clipper blade compatibility. Find replacement blades for Wahl, Andis, Oster, LAUBE, Codos, and more by clipper model.",
    date: "2026-07-15",
    readTime: "9 min",
    category: "Guides",
    keywords: [
      "clipper blade compatibility",
      "wahl replacement blades",
      "andis replacement blades",
      "oster clipper blades",
      "replacement clipper blades",
    ],
    content: `
## The Three Main Blade Systems

Not all clipper blades are interchangeable. Before buying replacement blades, you need to know which blade system your clipper uses. There are three main systems in the professional market:

### 1. A5 Detachable Blade System (Universal Standard)

The A5 system is the closest thing to a universal standard in professional clippers. Developed originally by Oster for their A5 clipper line, the snap-on design has been adopted by virtually every professional clipper manufacturer worldwide.

**A5 blades fit these clipper brands:**
- **Andis:** AGC, AGC2, AGC Super 2, AGC Pro, AGP, AGRC, UltraEdge, Excel, ProClip
- **Oster:** Golden A5, Turbo A5, A5 Turbo 2, A6, PowerPro
- **Wahl:** KM2, KM5, KM10, KM Cordless, Bravura
- **LAUBE:** All A5-compatible models (322, 208, 620, 630)
- **Heiniger:** Saphir, Opal, Xplorer
- **Moser:** Max 45/50, Arco
- **Geib:** Gator series

If your clipper accepts snap-on/snap-off detachable blades, it almost certainly uses the A5 standard.

### 2. Adjustable Blade System (Barber Clippers)

Most barber-style clippers use a fixed, adjustable blade that moves via a taper lever on the side of the clipper. The blade is attached with screws and adjusted for different cut lengths rather than swapped out.

**Clippers with adjustable blades:**
- Wahl Senior, Magic Clip, Designer, Legend
- Andis Master, Fade Master, US-1
- Most consumer-grade clippers

Replacement blades for these clippers are model-specific. You need a blade designed specifically for your clipper model.

### 3. Proprietary Snap-On Systems

Some clipper brands use their own proprietary snap-on systems that are not A5 compatible:

**128-type system (common in Asian brands):**
- Codos: CP-6800, CP-7800, CP-8000, CP-9200, CP-9600 and more
- AUX: C1, C2, C3, C5, C6 series
- KONKA: KLFQ/KZ series
- CHIGO: ZG-F series
- YOS: LB series

**D-series system:**
- LAUBE: 322, 208, 318, 320, 304, 306, 329
- Wahl: 8260
- Shernbao: 878
- TAA: T1, T2

SUMTHIN manufactures blades for all three systems — A5, 128-type, and D-series.

## How to Identify Your Blade System

**Step 1:** Check if your blade snaps on and off. If yes, it's likely A5 (most common) or a proprietary system (128-type or D-series).

**Step 2:** Measure the blade width. A5 blades are approximately 49mm wide. 128-type blades are approximately 45mm wide. D-series blades are approximately 49mm wide but with a different mounting system.

**Step 3:** Check the mounting mechanism. A5 blades have a spring-loaded snap mechanism with a central guide rail. 128-type blades use a different snap pattern. If in doubt, contact us with your clipper model and we'll confirm compatibility.

## Brand-by-Brand Compatibility Reference

### Wahl Clippers
| Clipper Model | Blade System | SUMTHIN Compatible Series |
|--------------|-------------|-------------------------|
| KM2, KM5, KM10, KM Cordless | A5 Universal | A5 series (all sizes) |
| 8260 | D-series | D-series (all sizes) |
| Senior, Magic Clip, Designer | Adjustable | Model-specific blades |
| Sterling, Show Pro | A5 Universal | A5 series |

### Andis Clippers
| Clipper Model | Blade System | SUMTHIN Compatible Series |
|--------------|-------------|-------------------------|
| AGC, AGC2, AGC Super 2, AGC Pro | A5 Universal | A5 series |
| AGP, AGRC, UltraEdge | A5 Universal | A5 series |
| Master, Fade Master | Adjustable | Model-specific blades |

### Oster Clippers
| Clipper Model | Blade System | SUMTHIN Compatible Series |
|--------------|-------------|-------------------------|
| Golden A5, Turbo A5, A5 Turbo 2 | A5 Universal | A5 series |
| A6, PowerPro | A5 Universal | A5 series |
| Classic 76 | Detachable (Oster-specific) | Contact us |

## Livestock Clipper Compatibility

For sheep shearing and livestock clipping, the blade systems are different from pet and barber clippers:

- **Lister Star, Lister Legend:** Standard shearing combs and cutters — SUMTHIN MIM powder metallurgy combs and cutters are compatible
- **Heiniger Xtra, Heiniger Icon:** Standard shearing system — compatible with SUMTHIN shearing blades
- **Oster Shearmaster:** Uses Oster-specific combs — contact us for compatibility

## Why Aftermarket Blades Work Just as Well

Major clipper brands sell replacement blades at premium prices because they're sold as "genuine" parts. However, the blades themselves are manufactured to standard dimensional specifications — the same materials, the same tolerances.

SUMTHIN has been manufacturing precision clipper blades for over 20 years, including as an OEM supplier to leading professional clipper brands. The blades we sell under our own brand use the same tooling, materials, and quality processes. The only difference is the name on the packaging and the price.
    `,
    faqs: [
      {
        q: "Are aftermarket clipper blades as good as original brand blades?",
        a: "Quality aftermarket blades manufactured to the same specifications perform identically to brand-name blades. SUMTHIN has 20+ years of experience manufacturing blades for professional clipper brands and uses the same materials (440C steel, ceramic, MIM) and dimensional tolerances.",
      },
      {
        q: "Can I use Oster blades on my Andis clipper?",
        a: "If both clippers use the A5 detachable blade system, yes. A5 is a universal standard — any A5 blade fits any A5-compatible clipper regardless of brand. This includes most Andis AGC, Oster A5, and Wahl KM series clippers.",
      },
      {
        q: "Why don't clipper blades fit my clipper?",
        a: "The most common reason is a blade system mismatch. Check whether your clipper uses A5, adjustable, or a proprietary system. Also check that the blade is oriented correctly — A5 blades snap on in one direction only. If unsure, send us your clipper model and we'll confirm which blade series you need.",
      },
      {
        q: "How do I know when to replace my clipper blades?",
        a: "Replace when blades pull hair despite sharpening, have visible chips or uneven teeth, won't hold a sharp edge, or have been sharpened 5-8 times. Quality blades last 3-6 months with daily professional use, longer for home users.",
      },
      {
        q: "Do you sell blades for Codos and other Chinese brand clippers?",
        a: "Yes. SUMTHIN manufactures 128-type guard comb blades compatible with Codos (CP-6800/7800/8000/9200/9600 and more), AUX, KONKA, CHIGO, and YOS clippers. We also make D-series blades for LAUBE, Shernbao, and other professional brands.",
      },
    ],
  },
  {
    slug: "how-clipper-blades-are-made-mim-powder-metallurgy",
    title: "How Clipper Blades Are Made: MIM Powder Metallurgy Explained",
    description:
      "Inside look at how professional clipper blades are manufactured using MIM (Metal Injection Molding) powder metallurgy. From metal powder to finished blade in 20 steps.",
    date: "2026-07-15",
    readTime: "10 min",
    category: "Technology",
    keywords: [
      "powder metallurgy parts",
      "mim parts manufacturer",
      "how clipper blades are made",
      "metal injection molding",
      "clipper blade manufacturing",
    ],
    content: `
## Two Ways to Make a Clipper Blade

There are two fundamentally different approaches to manufacturing clipper blades: **traditional machining** and **MIM (Metal Injection Molding) powder metallurgy**. Understanding the difference explains why some blades are more consistent, more durable, and more precise than others.

### Traditional Machining: The Old Way

Traditional clipper blade manufacturing starts with flat steel stock (typically 440C stainless steel) and removes material through a series of cutting, stamping, and grinding operations until the blade reaches its final shape.

A typical traditionally-machined blade goes through **30-42 separate operations**: blanking, punching, rough grinding, heat treatment, fine grinding, lapping, deburring, surface finishing, and more. Each operation introduces potential for variation, and maintaining tight tolerances across 30+ steps requires careful process control.

Traditional machining works well for simple blade geometries (flat blades with straight teeth), but struggles with complex shapes, deep channels, and intricate tooth patterns.

### MIM Powder Metallurgy: The Modern Method

MIM (Metal Injection Molding) is a fundamentally different approach. Instead of removing material from a solid block, MIM **builds** the blade from metal powder — achieving complex shapes in a single forming step that would require dozens of machining operations.

**The MIM process in ~20 steps:**

**Stage 1: Feedstock Preparation**
Fine metal powder (typically 17-4PH stainless steel or 440C, particle size 5-20 microns) is mixed with a polymer binder to create a "feedstock" — a material that flows like plastic but contains over 60% metal by volume.

**Stage 2: Injection Molding**
The feedstock is heated and injected into a precision mold under high pressure — exactly like plastic injection molding. The mold can produce multiple blades per shot (multi-cavity tooling), and the near-net-shape forming means the blade comes out of the mold already in its final shape, including teeth, mounting holes, and channels.

This is where MIM's advantage is clearest: geometries that would require 15-20 machining operations can be formed in a single injection cycle.

**Stage 3: Debinding**
The molded "green part" contains approximately 40% polymer binder by volume. Debinding removes this binder through a combination of solvent extraction and thermal processing. The result is a fragile "brown part" — a metal skeleton with approximately 40% porosity.

**Stage 4: Sintering**
The brown part is placed in a high-temperature furnace (1,000-1,400°C depending on the alloy) under controlled atmosphere. During sintering, the metal particles fuse together and the part shrinks by approximately 15-20% in all dimensions, reaching near-full density (96-99% theoretical density).

The sintered part has mechanical properties comparable to wrought metal — similar hardness, tensile strength, and wear resistance.

**Stage 5: Finishing**
After sintering, the blade undergoes final operations: precision grinding of cutting edges, surface finishing (polishing, plating, or coating), and quality inspection.

## Why MIM Produces Better Clipper Blades

**Consistency:** Every blade from a MIM mold is dimensionally identical. Traditional machining introduces variation at each of 30+ steps; MIM achieves final geometry in one forming step.

**Complex geometries:** MIM can produce blade shapes impossible with traditional machining — deep channels, undercuts, complex tooth patterns, and thin-wall sections. This is especially important for A5 detachable blades and guard comb blades, where precise tooth spacing directly affects cutting performance.

**Material properties:** Sintered MIM parts achieve 96-99% theoretical density — comparable to wrought metal. The fine, uniform microstructure of sintered metal often provides better wear resistance than conventionally machined parts.

**Efficiency:** MIM requires approximately 20 process steps versus 30-42 for traditional machining — a 40-50% reduction in manufacturing complexity. Less complexity means lower cost at scale and fewer opportunities for defects.

## SUMTHIN's MIM Manufacturing

SUMTHIN operates its own MIM production line with dedicated powder metallurgy workshop. Our MIM capabilities include:

- **Multi-cavity injection molds** designed and fabricated in-house
- **Debinding and sintering furnaces** with controlled atmosphere
- **In-house mold design:** Tooling cost ¥30,000-60,000 depending on complexity, with first samples in 15-20 days
- **Daily capacity:** Over 250,000 blades across all production lines

Products manufactured using MIM at SUMTHIN include:
- A5 detachable blades (all sizes from #50 to #3F)
- D-series pet clipper blades
- 128-type guard comb blades
- Sheep shearing combs and cutters
- Horse clipping blades
- Professional clipper blade sets (M-series)

## Beyond Blades: MIM for Custom Parts

MIM isn't limited to clipper blades. The same technology can produce any small, complex metal part — gears, brackets, medical instruments, firearm components, watch parts, and automotive components.

If you have a metal part that currently requires multiple machining operations, MIM may offer a more consistent, cost-effective alternative. SUMTHIN has independent mold design capability and can evaluate your part for MIM feasibility. Contact us with your drawings or samples for a free assessment.
    `,
    faqs: [
      {
        q: "What is MIM (Metal Injection Molding)?",
        a: "MIM is a manufacturing process that combines metal powder with a polymer binder, injects it into a mold like plastic, then removes the binder and sinters the part at high temperature. The result is a dense metal part with complex geometry in fewer steps than traditional machining.",
      },
      {
        q: "Are MIM clipper blades as strong as machined blades?",
        a: "Yes. Sintered MIM parts reach 96-99% of theoretical density with mechanical properties comparable to wrought metal. The fine, uniform microstructure of sintered metal often provides better wear resistance than conventionally machined parts.",
      },
      {
        q: "How much does a MIM mold cost?",
        a: "At SUMTHIN, clipper blade molds typically cost ¥30,000-40,000 (approximately $4,000-5,500 USD). Larger or more complex parts can run ¥50,000-60,000. First samples are available in 15-20 days after mold completion.",
      },
      {
        q: "What is the MOQ for MIM clipper blades?",
        a: "For existing mold products, MOQ is typically 1,000-2,000 pieces per SKU. For custom-tooled MIM parts, MOQ is negotiable and depends on the tooling investment and part complexity.",
      },
      {
        q: "Can MIM be used for parts other than clipper blades?",
        a: "Absolutely. MIM is used across industries for small, complex metal parts — medical devices, automotive components, electronics hardware, firearm parts, watch components, and more. If your part weighs under 100g and has complex geometry, MIM is worth evaluating.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
