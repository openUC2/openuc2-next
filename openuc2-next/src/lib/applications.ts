import type { ReactNode } from "react";

export interface ApplicationData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  heroColor: string;
  specs: [string, string][];
  features: { title: string; description: string }[];
  roadmapItems: string[];
  imagesrc?: string; // Optional image source for the hero image
}

export const applicationData: ApplicationData[] = [
  {
    slug: "fluorescence",
    title: "Fluorescence Imaging",
    subtitle: "Multi-channel epi-fluorescence with LED or laser excitation",
    description:
      "openUC2 enables affordable, modular fluorescence microscopy. Use LED or laser excitation sources, user-swappable dichroic mirror cubes, and emission filters — all in the standardized UC2 cube format. Capture multi-channel images with GFP, DAPI, RFP, and custom filter sets. The FRAME microscope supports automated multi-tile fluorescence scanning with stitching.",
    category: "Imaging Modalities",
    heroColor: "bg-emerald-950/50",
    imagesrc: "/immunostaining.jpg", 
    specs: [
      ["Excitation sources", "LED (405/470/530/590/630 nm) or diode laser"],
      ["Filter cubes", "Modular UC2 cubes, user-swappable"],
      ["Emission filters", "Standard 25 mm diameter, mounted"],
      ["Channels", "Up to 5 simultaneous (with motorized filter wheel)"],
      ["Objectives", "4x to 100x, infinity-corrected (RMS/M25)"],
      ["Camera", "USB3 or CSI (CMOS)"],
    ],
    features: [
      { title: "Multi-channel acquisition", description: "Switch between fluorescence channels with motorized filter wheels or manual cube swaps." },
      { title: "Automated tile scanning", description: "Scan large areas with FRAME's motorized stage and stitch tiles into high-resolution mosaics." },
      { title: "LED & laser excitation", description: "Choose LED for safety and broad illumination, or laser for higher intensity and structured illumination." },
      { title: "Open filter design", description: "Use standard 25 mm filters. No proprietary filter cubes — buy from Chroma, Thorlabs, or any supplier." },
    ],
    roadmapItems: [
      "Structured illumination (SIM) module",
      "Confocal spinning disk add-on",
      "Spectral unmixing in ImSwitch",
    ],
  },
  {
    slug: "flim",
    title: "FLIM & Advanced Fluorescence",
    subtitle: "Fluorescence lifetime imaging and advanced fluorescence techniques",
    description:
      "Go beyond intensity-based fluorescence with FLIM (Fluorescence Lifetime Imaging Microscopy) on the openUC2 platform. Measure fluorophore lifetimes to distinguish molecular environments, detect FRET, and separate overlapping emission spectra. The modular architecture lets you add pulsed laser excitation and time-correlated detection to any existing UC2 setup.",
    category: "Imaging Modalities",
    heroColor: "bg-violet-950/50",
    imagesrc: "/flim.jpeg", 
    specs: [
      ["Excitation", "Pulsed laser diode (405/470/640 nm)"],
      ["Detection", "SPAD or hybrid PMT module (UC2 cube)"],
      ["Timing electronics", "TCSPC module (PicoQuant compatible)"],
      ["Lifetime range", "100 ps to 100 ns"],
      ["Spatial resolution", "Diffraction-limited"],
      ["Software", "ImSwitch + FLIM analysis plugin"],
    ],
    features: [
      { title: "Modular FLIM upgrade", description: "Add pulsed laser and TCSPC detection to your existing UC2 fluorescence setup." },
      { title: "FRET detection", description: "Measure donor-acceptor distances via fluorescence lifetime changes." },
      { title: "Environmental sensing", description: "Map pH, viscosity, and ion concentrations via lifetime-sensitive probes." },
      { title: "Open data format", description: "Export lifetime data in standard formats for analysis in FLIMfit, LLSpy, or custom scripts." },
    ],
    roadmapItems: [
      "Phasor-based FLIM analysis in ImSwitch",
      "Multi-frequency FLIM module",
      "Integrated FLIM-FRET workflow",
    ],
  },
  {
    slug: "histology",
    title: "Histology & Slide Scanning",
    subtitle: "Automated whole-slide scanning with stitching",
    description:
      "Turn your openUC2 FRAME into a digital pathology slide scanner. Automated XYZ stage movement captures overlapping tiles across the full 130x90 mm travel range, then stitches them into a seamless whole-slide image. Process H&E, IHC, or special stains at 10x-40x magnification with consistent Koehler illumination. Postprocessing will be available soon. Raw Images e.g. as OME.TIF or OME.Zarr or simply individual Tif images can be exported immediately. ",
    category: "Life Science Workflows",
    heroColor: "bg-amber-950/50",
    imagesrc: "/histo.jpeg",
    specs: [
      ["Scan area", "Up to 130 x 90 mm (full stage travel)"],
      ["Resolution", "10x to 40x objectives"],
      ["Illumination", "Transmitted white LED, Koehler-capable"],
      ["Stitching", "Automated overlap and alignment in ImSwitch"],
      ["Focus", "Software autofocus per tile"],
      ["Output", "Tiled TIFF, OME-ZARR, or pyramidal formats"],
    ],
    features: [
      { title: "Full-slide coverage", description: "Scan up to 130x90 mm — enough for standard glass slides and multiple sections." },
      { title: "Automated tile stitching", description: "ImSwitch captures overlapping tiles and assembles them into a seamless image." },
      { title: "Software autofocus", description: "Contrast-based autofocus runs per tile, maintaining sharpness across uneven sections." },
      { title: "Digital pathology output", description: "Export in standard formats (OME-ZARR, pyramidal TIFF) for use in QuPath, OMERO, or custom viewers." },
    ],
    roadmapItems: [
      "AI-based tissue detection for smart scanning",
      "Integration with QuPath export pipeline",
      "Darkfield and polarization imaging modules",
    ],
  },
  {
    slug: "livecell",
    title: "Live-Cell & Time-Lapse",
    subtitle: "Long-term imaging with incubator compatibility",
    description:
      "Monitor living cells over hours or days with openUC2. The compact form factor allows placement inside standard CO2 incubators. ESP32-based WiFi control means no cables through the incubator door. Automated focus maintenance and multi-position acquisition enable unattended experiments.",
    category: "Life Science Workflows",
    heroColor: "bg-sky-950/50",
    imagesrc: "/livecell.gif",
    specs: [
      ["Environment", "CO2 incubator compatible (fits inside standard incubator)"],
      ["Control", "WiFi (ESP32), no cable feedthrough required"],
      ["Imaging modes", "Phase contrast, DPC, brightfield, fluorescence"],
      ["Time resolution", "Configurable intervals (seconds to hours)"],
      ["Multi-position", "Up to 96 positions per experiment"],
      ["Focus maintenance", "Software autofocus per time point"],
    ],
    features: [
      { title: "Incubator-ready", description: "Small footprint fits inside standard CO2 incubators. WiFi control — no cables through the door." },
      { title: "Multi-position acquisition", description: "Define up to 96 positions and image them in sequence at each time point." },
      { title: "Phase contrast & DPC", description: "LED matrix illumination enables label-free phase contrast and differential phase contrast imaging." },
      { title: "Automated focus", description: "Software autofocus compensates for thermal drift and maintains sharpness over days-long experiments." },
    ],
    roadmapItems: [
      "AI-based cell tracking integration",
      "Environmental sensor logging (T, CO2, humidity)",
      "Integration with liquid handling robots",
    ],
  },
  {
    slug: "organoid",
    title: "Organoid QC (In-Incubator)",
    subtitle: "Non-invasive organoid quality control inside the incubator",
    description:
      "Monitor organoid growth, morphology, and viability without removing plates from the incubator. The UC2 microscope sits inside the incubator, imaging organoids in multi-well plates at regular intervals. AI-based analysis detects organoid size, circularity, and growth rate in real time.",
    category: "Life Science Workflows",
    heroColor: "bg-teal-950/50",
    specs: [
      ["Sample format", "6, 12, 24, 48, 96-well plates"],
      ["Imaging mode", "Brightfield, phase contrast, optional fluorescence"],
      ["Analysis", "Organoid size, circularity, growth rate (AI-based)"],
      ["Environment", "In-incubator (37C, 5% CO2, >90% humidity)"],
      ["Throughput", "Full plate scan in < 15 min"],
      ["Output", "Time-series data, growth curves, QC reports"],
    ],
    features: [
      { title: "Non-invasive monitoring", description: "Image organoids without removing them from the incubator — eliminates a source of variability." },
      { title: "AI morphology analysis", description: "Automated detection and measurement of organoid size, shape, and growth rate." },
      { title: "Multi-well support", description: "Scan 6-well to 96-well plates — adapting to your culture format." },
      { title: "Time-series tracking", description: "Follow individual organoids over days and generate growth curves automatically." },
    ],
    roadmapItems: [
      "Fluorescence-based viability scoring",
      "LIMS integration for automated QC reports",
      "Support for Matrigel dome detection",
    ],
  },
  {
    slug: "multiwell",
    title: "Multiwell Screening (96/384-well)",
    subtitle: "Automated high-content screening on standard microplates",
    description:
      "Use FRAME as an affordable high-content screening platform. Automated XYZ stage scans standard 96-well or 384-well microplates, capturing brightfield or fluorescence images at each well. ImSwitch scripting enables custom acquisition patterns, multi-channel imaging, and on-the-fly analysis.",
    category: "Life Science Workflows",
    heroColor: "bg-indigo-950/50",
    imagesrc: "/multiwell.jpg",
    specs: [
      ["Plate formats", "96-well, 384-well (adapter-dependent)"],
      ["Imaging modes", "Brightfield, fluorescence (multi-channel)"],
      ["Throughput", "96-well plate: ~10 min (single site/well, 10x)"],
      ["Autofocus", "Software-based, per-well"],
      ["Z-stacks", "Configurable step size and range"],
      ["Scripting", "Python / REST API for custom workflows"],
    ],
    features: [
      { title: "Standard microplate support", description: "Use off-the-shelf 96-well and 384-well plates with the included adapter." },
      { title: "Multi-site per well", description: "Capture multiple fields of view per well for better statistical sampling." },
      { title: "Script-driven workflows", description: "Program custom plate scanning patterns, channel sequences, and analysis pipelines in Python." },
      { title: "Integration-ready", description: "REST API and SiLA2 enable integration with liquid handlers and robotic plate loaders." },
    ],
    roadmapItems: [
      "On-the-fly cell counting and confluence measurement",
      "Integration with CellProfiler analysis pipelines",
      "384-well high-density scanning optimization",
    ],
  },
  {
    slug: "dnafish",
    title: "DNA-FISH & Genomic Imaging",
    subtitle: "Fluorescence in situ hybridization with multi-channel detection",
    description:
      "Perform DNA-FISH experiments on the openUC2 platform. Multi-channel fluorescence imaging with automated tile scanning enables detection of specific genomic loci, chromosomal aberrations, and gene copy number variations. The open software stack integrates with existing FISH analysis tools.",
    category: "Life Science Workflows",
    heroColor: "bg-pink-950/50",
    imagesrc: "/dnafish.png",
    specs: [
      ["Excitation", "Multi-channel LED (405/470/530/590/630 nm)"],
      ["Detection", "Up to 5 fluorescence channels"],
      ["Objectives", "40x-100x oil immersion recommended"],
      ["Z-stacks", "0.2-1 um step size for 3D FISH analysis"],
      ["Tile scanning", "Automated multi-position acquisition"],
      ["Analysis", "Compatible with FISH analysis tools (FISHquant, BigFISH)"],
    ],
    features: [
      { title: "Multi-channel detection", description: "Image up to 5 fluorescence channels for multi-probe FISH experiments." },
      { title: "Z-stack acquisition", description: "Capture 3D volumes for accurate spot detection and localization." },
      { title: "Automated scanning", description: "Scan multiple fields of view and hundreds of cells automatically." },
      { title: "Open analysis pipeline", description: "Export data for analysis in FISHquant, BigFISH, or custom Python scripts." },
    ],
    roadmapItems: [
      "Integrated spot detection in ImSwitch",
      "Sequential FISH (seqFISH) protocol support",
      "Automated cell segmentation and spot assignment",
    ],
  },
  {
    slug: "remotebsl",
    title: "Remote & BSL Microscopy",
    subtitle: "Operate your microscope remotely — including BSL-3/4 environments",
    description:
      "Control openUC2 microscopes from anywhere via web browser. Docker-based deployment, REST API, and WiFi connectivity make FRAME ideal for remote operation — including BSL-3 and BSL-4 containment labs where physical access is restricted. No cable feedthroughs required.",
    category: "Specialist Applications",
    heroColor: "bg-red-950/50",
    imagesrc: "/remote.gif",
    specs: [
      ["Remote access", "Web browser (any device), REST API, Python SDK"],
      ["Deployment", "Docker container on Jetson/RPi"],
      ["Connectivity", "WiFi (ESP32), Ethernet (Jetson/RPi)"],
      ["BSL compatibility", "No cable feedthrough — WiFi only"],
      ["Latency", "Real-time preview (<100 ms on local network)"],
      ["Security", "HTTPS, token-based authentication"],
    ],
    features: [
      { title: "Zero-cable operation", description: "WiFi-connected ESP32 and compute module — no cables through containment barriers." },
      { title: "Browser-based control", description: "Full microscope operation from any web browser — no software installation required." },
      { title: "Docker deployment", description: "Update software remotely via Docker. Rollback to any previous version instantly." },
      { title: "Secure access", description: "HTTPS with token-based authentication. Define user roles and permissions." },
    ],
    roadmapItems: [
      "VPN tunnel setup guide for BSL networks",
      "Automated sample loading integration",
      "Remote diagnostics and health monitoring",
    ],
  },
  {
    slug: "labautomation",
    title: "Lab Automation & Robotics",
    subtitle: "Integrate with liquid handlers, robotic arms, and LIMS",
    description:
      "Integrate openUC2 microscopes into automated lab workflows. REST API and SiLA2 compatibility enable control from liquid handling robots, robotic arms, and LIMS software. Use the microscope as an on-deck imaging station for real-time QC during sample prep, or as a remote-controlled instrument in fully automated workflows.",
    category: "Specialist Applications",
    imagesrc: "/labautomation.png",
    heroColor: "bg-orange-950/50",
    specs: [
      ["Integration interfaces", "REST API, SiLA2, Python SDK"],
      ["Robotic compatibility", "Liquid handlers (Opentrons, potentially others), robotic arms (fairino, potentially others)"],
      ["LIMS integration", "Custom API scripts for UniteLabs, Arkitekt, etc."],
      ["On-deck operation", "Compact footprint fits on liquid handler decks"],
      ["Real-time feedback", "Use microscope data for conditional workflow branching"],
    ],
    features: [
      { title: "API-driven control", description: "Full microscope control via REST API and Python SDK — ideal for integration into automated workflows." },
      { title: "Robotic compatibility", description: "Integrate with popular liquid handlers and robotic arms for sample handling and imaging." },
      { title: "On-deck imaging", description: "Compact design allows placement on liquid handler decks for real-time QC during sample prep." },
      { title: "LIMS integration", description: "Custom scripts enable integration with LIMS software for automated data logging and workflow management." },
    ],
    roadmapItems: [
      "Pre-built integration modules for popular liquid handlers",
      "Automated sample loading/unloading protocols",
      "Real-time image-based workflow branching",
    ],
  },
  {
    slug: "education",
    title: "Teaching & Workshops",
    subtitle: "Hands-on optics education from geometric optics to fluorescence",
    description:
      "openUC2 was born in the classroom. The modular cube system is the ideal platform for teaching optics, microscopy, and imaging at every level — from high school physics to graduate biophotonics courses. Students build real instruments, experiment with optical principles, and develop an intuition for how light works.",
    category: "Learning & Community",
    heroColor: "bg-green-950/50",
    specs: [
      ["Age range", "14+ (high school through graduate)"],
      ["Subjects", "Geometric optics, wave optics, microscopy, fluorescence, image processing"],
      ["Kit options", "CoreBox, QBox, Electronics Add-On, Infinity Add-On"],
      ["Manuals", "Printed and digital, curriculum-aligned"],
      ["Workshop duration", "2 hours to 3 days"],
      ["Languages", "English, German (more on request)"],
    ],
    features: [
      { title: "Build real instruments", description: "Students assemble actual microscopes — not simulations. They understand optics by doing." },
      { title: "Scaffolded curriculum", description: "Learning path from analog optics through electronics to digital fluorescence microscopy." },
      { title: "Reusable and durable", description: "Injection-molded cubes and magnetic connections survive classroom use. No glue, no alignment." },
      { title: "Global workshop network", description: "50+ workshops run worldwide. On-site and virtual teacher training available." },
    ],
    roadmapItems: [
      "Interactive online simulation tools",
      "Augmented reality assembly guides",
      "Student certification program",
    ],
  },
];

export function getApplicationBySlug(slug: string): ApplicationData | undefined {
  return applicationData.find((a) => a.slug === slug);
}
