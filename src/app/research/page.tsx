"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, Download, BookOpen, FlaskConical, Microscope, Brain, Leaf, Activity, Users, FileText, BookMarked, Globe } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true },
};

const publicationsRaw = [
  { sr: 1, title: "Emerging role of Exosomes in parkinson's disease: Pathogenesis, diagnostics and therapeutic perspectives", authors: "Swikriti, Sukhmanjot Kaur, Diksha Soni", journal: "Research Journal of Chemistry and Environment (RJCE)", year: 2025, issn: "0972-0626" },
  { sr: 2, title: "Banana peel: A Nutritional Power House with many uses", authors: " Manni Rohilla , Diksha Soni, Swikriti", journal: "Journal of Carcinogenesis", year: 2025, issn: "1477-3163" },
  { sr: 3, title: "Influence Of Mannitol-Induced Drought Stress On Capsaicin, Antioxidants, And Oil Content Of Capsicum Annum Genotypes", authors: "Eshna Bhatt", journal: "Journal of Applied Bioanalysis", year: 2025, issn: "E-ISSN: 2405-710X" },
  { sr: 4, title: "Advancements in Cardiovascular Imaging Modalities: Integrating Artificial Intelligence and Multi-modal Imaging for Enhanced Diagnosis, Risk Stratification, and Treatment Monitoring", authors: "Dr. A. Pandurangan", journal: "Journal of Cardiovascular Disease Research", year: 2025, issn: "0975-3583" },
  { sr: 5, title: "Extraction, Isolation, and Phytochemical Profiling of Bioactive Compounds from a Polyherbal Formulation for Antidiabetic Potential", authors: "Saurabh Sharma", journal: "Journal of Rare Cardiovascular Diseases", year: 2025, issn: "2299-3711 (Print) | e-ISSN: 2300-5505 (Online)" },
  { sr: 6, title: "Transforming Dentistry with machine learning Cutting Edge Applications & Innovations", authors: "Satbir Kaur", journal: "Journal of Technology", year: 2025, issn: "1012-3407" },
  { sr: 7, title: "Development and Optimization of Boswellic Acid-Loaded Mucoadhesive Chitosan Nanoparticles for Targeted Synovial Delivery and Enhanced Therapeutic Management of Rheumatoid Arthritis", authors: "Damit Kumar", journal: "European Journal of Clinical Pharmacy", year: 2025, issn: "Print: 2385-409X | Online: 3105-0409" },
  { sr: 8, title: "COVID-19 and the Hidden Legacy: Unravelling Its Surprising Impact on Male Fertility and Future Generations", authors: "Swikriti", journal: "European Journal of Clinical Pharmacy", year: 2025, issn: "Print: 2385-409X | Online: 3105-0409" },
  { sr: 9, title: "Nanomedicines: an update of diagnostic and therapeutic applications in multiple cancers", authors: "Tamanna Dhiman", journal: "Journal of Drug Targeting", year: 2026, issn: "1061-186X (Print) | 1029-2330 (Online)" },
  { sr: 10, title: "Molecular Pathways of Microbiota-derived Neuromodulation: An Integrative View", authors: "Manni Rohilla", journal: "Current Neurovascular Research", year: 2026, issn: "1567-2026" },
  { sr: 11, title: "Pearl Millet Starch: A Natural Excipient With Potential for Industrial Pharmaceutical Use", authors: "Nikita Khera", journal: "Research Square", year: 2026, issn: "2693-5015" },
  { sr: 12, title: "A novel Domain Adoption framework for wearable human activity recognition using multi sensor feature alignment", authors: "Mimansa", journal: "Biochemistry and Applied Biochemistry", year: 2025, issn: "" },
  { sr: 13, title: "Exploring the therapeutic potential pyrazole based scaffolds in parkinssons Disease", authors: "Ritam Mondal", journal: "Bentham Science", year: 2025, issn: "" },
  { sr: 14, title: "Quinoline Derivatives as potential Acetylcholinestrase inhibitors in alzimer", authors: "Ritam Mondal", journal: "IOSR Journal", year: 2025, issn: "" },
  { sr: 15, title: "Comparative Evaluation of Capsaicin content, antioxidant activity & oil % in Capsicum annum Genotypes Pusa Jwala & Pusa Sadabahar", authors: "Eshna Bhatt", journal: "Journal of Applied Bioanalysis", year: 2025, issn: "E-ISSN: 2405-710X" },
  { sr: 16, title: "A Systemic Education Of Therapeutic Approaches Using Native Herbs To Treat Rheumatoid Joint Dysfunction", authors: "Swikriti", journal: "Educational Administration: Theory and Practice", year: 2024, issn: "2148-2403" },
  { sr: 17, title: "Design and Development of Rebanipide Solid Dispersion-Loaded Floating Beads for Ameliorated Therapeutics", authors: "Shweta Aggarwal", journal: "", year: 2024, issn: "" },
  { sr: 18, title: "Recent advancements in xanthan gum-based gastroretentive floating formulations: Chemical modification, production and applications", authors: "Shweta Aggarwal", journal: "Carbohydrate Polymers", year: 2024, issn: "Print: 0144-8617 | Online: 1879-1344" },
  { sr: 19, title: "Mechanistic insights and therapeutic potential of astilbin and apigenin in diabetic cardiomyopathy", authors: "Manni Rohilla", journal: "Heliyon", year: 2024, issn: "2405-8440 (online)" },
  { sr: 20, title: "Etiology and conduct of Stroke: Current status and Impending Prospectives", authors: "Swikriti", journal: "African Journal of Biological Sciences", year: 2024, issn: "2663-2187" },
  { sr: 21, title: "Synthesis and molecular docking studies of 1,2 disubstituted benzimidazole analogues with 4KFG and 3MDV as target proteins", authors: "Swikriti", journal: "AIP Conf. Proc. 3209, 030001 (2024)", year: 2024, issn: "" },
  { sr: 22, title: "Iron oxide nanoparticles: a versatile nanoplatform for the treatment and diagnosis of ovarian cancer", authors: "Vipan Kumar", journal: "Therapeutic Delivery", year: 2024, issn: "" },
  { sr: 23, title: "Unfurling the potential of antiviral agents aimed for RNA virus ailment", authors: "Swikriti", journal: "Current Drug Targets", year: 2025, issn: "Print: 1389-4501 | Online: 1873-5592" },
  { sr: 24, title: "Are Proton Pump Inhibitors Contributing in Emerging New Hypertensive Population?", authors: "Monika Saini", journal: "Pharmaceuticals", year: 2023, issn: "" },
  { sr: 25, title: "The pandemic's unseen wounds: COVID-19's profound effects on mental health", authors: "Manni Rohilla", journal: "Annals of Medicine and Surgery", year: 2023, issn: "2049-0801" },
  { sr: 26, title: "Annona Muricata: Unveiling its Potential as a Complementary and Alternative Cancer Therapy", authors: "Shinam Bakshi", journal: "Journal of Pharmaceutical Technology, Research and Management by Chitkara University Publications", year: 2023, issn: "2321-2217, 2321-2225" },
  { sr: 27, title: "Discussing pathologic mechanisms of Diabetic retinopathy & therapeutic potentials of curcumin and β-glucogalin in the management of Diabetic retinopathy", authors: "Manni Rohilla, Monika Saini", journal: "Biomedicine & Pharmacotherapy", year: 2023, issn: "0753-3322" },
  { sr: 28, title: "Corrigendum to 'Discussing pathologic mechanisms of Diabetic retinopathy & therapeutic potentials of curcumin and β-glucogalin in the management of Diabetic retinopathy' Biomed. Pharmacother. 169 (2023) 115881", authors: "Manni Rohilla, Monika Saini", journal: "Biomedicine & Pharmacotherapy", year: 2024, issn: "" },
  { sr: 29, title: "Gestational diabetes mellitus: A Systemic review", authors: "Swikriti", journal: "YMER", year: 2024, issn: "0044-0477" },
  { sr: 30, title: "A Comparative Review: The Correlation Between Rheumatoid Arthritis and the Accelerated Progression & Incidence of Atherogenesis", authors: "Manni Rohilla", journal: "International Journal for Multidimensional Research Perspectives", year: 2024, issn: "2584-0029 (Online)" },
  { sr: 31, title: "Exploring the Comprehensive Neuroprotective and Anticancer Potential of Afzelin", authors: "Monika Saini", journal: "Pharmaceuticals", year: 2024, issn: "" },
  { sr: 32, title: "Therapeutic Potential of Plant-Derived Compounds and Plant Extracts in Rheumatoid Arthritis—Comprehensive Review", authors: "Manni Rohilla, Monika Saini", journal: "Antioxidants", year: 2024, issn: "2076-3921" },
  { sr: 33, title: "Comprehensive review on the structure and phytochemical exploration of diosmetin: A promising moiety", authors: "Prerna Sarup", journal: "", year: 2022, issn: "" },
  { sr: 34, title: "Compendious Review on Bioactive Constituents and Pharmacotherapeutic Profile of Heliotropium indicum Linn", authors: "Sonia Pahuja, Prerna Sarup", journal: "The Natural Products Journal", year: 2022, issn: "2210-3155" },
  { sr: 35, title: "Evaluation of early menopause symptoms in post-hysterectomy and premature ovarian insufficiency in women of reproductive age group", authors: "Prerna Sarup", journal: "Research Journal of Pharmacy and Technology", year: 2022, issn: "" },
];

// Sort by year descending and regenerate sequential sr numbers.
const publications = publicationsRaw
  .slice()
  .sort((a, b) => b.year - a.year)
  .map((p, i) => ({ ...p, sr: i + 1 }));

// ── IPR / Patents / Designs Data ──
// Sorted by year descending (2026 → 2024 → 2023). Sr. No. is auto-generated in the render.
const iprRecordsRaw = [
  // 2026 records
  { year: 2026, type: "Design",  status: "Registered", appNo: "476678-001",     inventors: "Dr. Swikriti",                                                                                                                      title: "Transportable Analytical Device for The Measurement of Absorbance of Drug",                                                        pubNo: "476678-001" },
  { year: 2026, type: "Design",  status: "Registered", appNo: "486473-001",     inventors: "Mr. Manni Rohilla",                                                                                                                   title: "Microemulsifier Device for Formulation of Nanoparticles",                                                                           pubNo: "486473-001" },
  { year: 2026, type: "Design",  status: "Registered", appNo: "479313-001",     inventors: "Dr. Meenakshi Rana",                                                                                                                  title: "Naninvasive Laser Therapy Device to Suppress Inflammation and Pain in Osteoarthritis",                                              pubNo: "479313-001" },
  { year: 2026, type: "Patent",  status: "Published",  appNo: "202511112919",   inventors: "Dr. Nikita Khera, Sukhmanjot Kaur, Md Asif Khalid Ansari",                                                                           title: "Green Synthesis and Characterization of Silver nanoparticles Using Azadirachta indica for Antibacterial Applications",              pubNo: "202511112919" },
  { year: 2026, type: "Patent",  status: "Published",  appNo: "202611022450",   inventors: "Ms. Diksha Soni, Dr. Swikriti",                                                                                                       title: "3-Thiazolyl-Linked Quinolone Compounds Exhibiting Enhanced Bactericidal Activity Against Rifampicin and Isoniazid-Resistant Mycobacterium tuberculosis", pubNo: "202611022450" },
  { year: 2026, type: "Design",  status: "Registered", appNo: "489619-001",     inventors: "Dr. Satbir Kaur",                                                                                                                     title: "Laboratory Device for Analytical Study of Drugs",                                                                                   pubNo: "489619-001" },
  { year: 2026, type: "Design",  status: "Registered", appNo: "493646-001",     inventors: "Dr. Nikita Khera, Ms. Vaishali Mahajan",                                                                                             title: "Blood Glucose Assessment During Pregnancy-Related Diabetes",                                                                        pubNo: "493646-001" },
  { year: 2026, type: "Design",  status: "Registered", appNo: "500915-001",     inventors: "Ms. Sakshi Sharma",                                                                                                                   title: "Smart Device for Monitoring Neuropsychological Behavioral Activity in Rodents",                                                     pubNo: "500915-001" },
  { year: 2026, type: "Design",  status: "Registered", appNo: "506210-001",     inventors: "Dr. Meenakshi Rana, Ms. Himani Dhiman, Mr. Ritam Mondal, Dr. Sunidhi Chauhan, Dr. Prince Manta",                                     title: "Dual-Nozzle Nasal Spray Device",                                                                                                    pubNo: "506210-001" },
  { year: 2026, type: "Design",  status: "Registered", appNo: "506207-001",     inventors: "Dr. Swikriti, Dr. Damit Kumar, Ms. Swati Gupta, Mr. Naveen Kumar",                                                                   title: "Test Tube Holder",                                                                                                                  pubNo: "506207-001" },
  { year: 2026, type: "Patent",  status: "Published",  appNo: "202611079886 A", inventors: "Dr. Ashok Kumar Tiwari, Dr. Damit Kumar, Dr. Gaurav Sharma",                                                                         title: "A logic-gated multi-layer microencapsulation system for controlled and conditional drug release",                                    pubNo: "202611079886 A" },
  { year: 2026, type: "Patent",  status: "Published",  appNo: "202611076864 A", inventors: "Dr. Manish Goswami, Mr. Rahul kumar, Dr. Nikita, Ms. Diksha Soni, Dr. Kunal Kaul",                                                   title: "A Dual-Surface Dental Bioadhesive For Selective Enamel Retention",                                                                  pubNo: "202611076864 A" },
  { year: 2026, type: "Patent",  status: "Published",  appNo: "202611076846 A", inventors: "Dr. Meenakshi Rana, Mr. Manni Rohilla, Mr. Naveen Kumar",                                                                             title: "Ph-responsive bioadhesive composition for localized drug delivery with controlled release",                                         pubNo: "202611076846 A" },
  { year: 2026, type: "Patent",  status: "Published",  appNo: "202611079811 A", inventors: "Mr. Almaz Kamran, Dr. Albab Kamran",                                                                                                  title: "A position-controlled dissolution sampling device and Method thereof",                                                              pubNo: "202611079811 A" },
  { year: 2026, type: "Patent",  status: "Published",  appNo: "202611079066 A", inventors: "Ms. Eshna Bhatt, Dr. Prince Manta",                                                                                                   title: "Adaptive Bulk Material Distribution System For Freeze-Dryer Loading",                                                               pubNo: "202611079066 A" },
  { year: 2026, type: "Patent",  status: "Published",  appNo: "202611076219 A", inventors: "Dr. Swikriti, Ms. Chandni Singla",                                                                                                    title: "An Adaptive Dosing Device And Method For Environentally Compensated Mass-Based Dispensing",                                        pubNo: "202611076219 A" },
  { year: 2026, type: "Patent",  status: "Published",  appNo: "202611078836 A", inventors: "Mr. Anshu Gupta, Dr. Sunidhi Chauhan, Mr. Shabir Ahmad dar",                                                                         title: "A Threshold-Triggered Multi-Stage Solvent Recovery System And Method Thereof",                                                      pubNo: "202611078836 A" },
  { year: 2026, type: "Patent",  status: "Published",  appNo: "202611076847 A", inventors: "Ms. Tamanna Dhiman, Ms. Priyanka Kumari",                                                                                             title: "A Stimuli-Responsive Dual-Layer Biodegradable Pharmaceutical Packaging Film And Method of Preparation Thereof",                    pubNo: "202611076847 A" },
  { year: 2026, type: "Patent",  status: "Published",  appNo: "202611078835 A", inventors: "Mr. Ritam Mondal, Ms. Vasvi",                                                                                                         title: "A Multi-Chamber Glucose Dosing Device With Pressure-Activated Sequential Dispensing And A Method Thereof",                         pubNo: "202611078835 A" },
  { year: 2026, type: "Patent",  status: "Published",  appNo: "202611078281 A", inventors: "Ms. Himani Dhiman, Mr. Tarun Sharma, Mr. Harmeet Singh",                                                                              title: "A Solid Nasal Insert With a Cyclodextrin-Drug Inclusion Complex in a Polymer Matrix",                                               pubNo: "202611078281 A" },
  // 2024 records
  { year: 2024, type: "Design",  status: "Registered", appNo: "400008-001",     inventors: "Dr. Puneet Sudan",                                                                                                                    title: "Oral Film Tensile Strength Tester",                                                                                                 pubNo: "400008-001" },
  { year: 2024, type: "Design",  status: "Registered", appNo: "400006-001",     inventors: "Dr. Puneet Sudan",                                                                                                                    title: "Dissolution Apparatus for Gummies",                                                                                                 pubNo: "400006-001" },
  { year: 2024, type: "Design",  status: "Registered", appNo: "400007-001",     inventors: "Dr. Puneet Sudan",                                                                                                                    title: "Rat Restrainer Device",                                                                                                             pubNo: "400007-001" },
  { year: 2024, type: "Design",  status: "Registered", appNo: "410912-001",     inventors: "Dr. Vikas Bansal, Dr. Puneet Sudan, Kumar Prateek Gaurav, Abhishek Yadav, Prashant Kumar, Tanmay Mishra, Aakash Kumar",              title: "Dual-Nostril Dropper Bottle",                                                                                                       pubNo: "410912-001" },
  { year: 2024, type: "Design",  status: "Registered", appNo: "414595-001",     inventors: "Dr. Vikas Bansal, Dr. Puneet Sudan, Ms. Khushboo rani, Ms. Diksha Soni, Dr. Navdeep Goel, Ms. Sukhmanjot Kaur",                     title: "Digital Tablet Hardness Tester With Diameter Measurement",                                                                         pubNo: "414595-001" },
  { year: 2024, type: "Patent",  status: "Granted",    appNo: "202311076236",   inventors: "Dr. Prerna Sarup, Mr. Anshu Gupta, Ms. Sonia Pahuja, Mr. Khalid Amin Bhat",                                                          title: "Composition For Intranasal Application Comprising an Oil-in-Water Nanoemulsion",                                                    pubNo: "556980" },
  // 2023 records
  { year: 2023, type: "Design",  status: "Registered", appNo: "390130-001",     inventors: "Swikriti Sharma",                                                                                                                     title: "Device for Detection of Sugar Level",                                                                                               pubNo: "390130-001" },
];

const books = [
  {
    title: "Textbook of Biochemistry",
    authors: "Dr. Swikriti",
    isbn: "979-8893630442",
    pdf: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhizqrCXoDX9oCEJ5eNzMc3t4BSZxbduIQWKOT",
  },
  {
    title: "A Text Book on Pharmaceutical Formulation Development in Industrial Pharmacy",
    authors: "Dr. Swikriti",
    isbn: "97815-43248-88-0",
    pdf: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhJ7tyzZOymi2th8Iu3GUzrRV70wBqXWOvsblk",
  },
  {
    title: "Medicinal Biochemistry For Pharm D ",
    authors: "Dr. Swikriti , Ms. Diksha Soni , Ms. Sukhmanjot Kaur ,",
    isbn: " 978-93-7185-932-5 ",
    pdf: " https://doi.org/10.70593/978-93-7185-932-5  ",
  },
  {
    title: "Book of Pharmacotherapeutics-III (Pharm.D) ",
    authors: "Dr. Nikita Khera , Ms. Himani Dhiman ",
    isbn: "978-93-7185-742-0 ",
    pdf: "https://doi.org/10.70593/978-93-7185-742-0",
  },
  {
    title: "Emerging Advances in Molecular Modelling, Docking, and Dynamics",
    authors: "Dr. Meenakshi Rana , Mr. Ritam Mondal , Ms. Priya ",
    isbn: " 978-81-688386-7-3 ",
    pdf: "https://mantrapublicationservices.com/wp-content/uploads/2026/07/Mantra-Publication-1002.pdf"
  },
  {
    title: "Cosmetics and Cosmeceuticals Theory (BP702T)",
    authors: "Dr. Damit Kumar , Mr. Almaz Kamran" ,
    isbn: "978-81-689152-3-7" ,
    pdf: "https://mantrapublicationservices.com/wp-content/uploads/2026/07/MPS-26-F-9236371090.pdf",
  },
  {
    title: "Pharmacognosy and Phytochemistry - II",
    authors: "Ms.Tamanna Dhiman , Ms. Priyanka Kumari , Mr. Rahul Kumar ",
    isbn: "978-93-7185-624-9" ,
    pdf: "https://doi.org/10.70593/978-93-7185-624-9",
  }
];

const domains = [
  { icon: FlaskConical, label: "Pharmaceutical Sciences" },
  { icon: Microscope, label: "Drug Discovery" },
  { icon: Activity, label: "Nanomedicine" },
  { icon: Users, label: "Clinical Research" },
  { icon: Brain, label: "AI in Healthcare" },
  { icon: Leaf, label: "Herbal Therapeutics" },
];

const stats = [
  { label: "Research Publications", value: "20+", icon: FileText },
  { label: "Journals Indexed", value: "15+", icon: BookMarked },
  { label: "Faculty Researchers", value: "10+", icon: Users },
  { label: "Research Domains", value: "6+", icon: Globe },
];

export default function ResearchPage() {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);
  const [page, setPage] = useState(1);

  // IPR table state
  const [iprSearch, setIprSearch] = useState("");
  const [iprEntries, setIprEntries] = useState(10);
  const [iprPage, setIprPage] = useState(1);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return publications.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.authors.toLowerCase().includes(q) ||
        p.journal.toLowerCase().includes(q) ||
        String(p.year).includes(q)
    );
  }, [search]);

  const totalPages = entries === -1 ? 1 : Math.ceil(filtered.length / entries);
  const paginated = entries === -1 ? filtered : filtered.slice((page - 1) * entries, page * entries);

  // IPR — auto-number after sort (already sorted by year desc in iprRecordsRaw)
  const iprRecords = iprRecordsRaw.map((r, i) => ({ ...r, sr: i + 1 }));

  const filteredIpr = useMemo(() => {
    const q = iprSearch.toLowerCase();
    if (!q) return iprRecords;
    return iprRecords.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.inventors.toLowerCase().includes(q) ||
        r.type.toLowerCase().includes(q) ||
        r.status.toLowerCase().includes(q) ||
        r.appNo.toLowerCase().includes(q) ||
        r.pubNo.toLowerCase().includes(q) ||
        String(r.year).includes(q)
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iprSearch]);

  const iprTotalPages = iprEntries === -1 ? 1 : Math.ceil(filteredIpr.length / iprEntries);
  const iprPaginated = iprEntries === -1 ? filteredIpr : filteredIpr.slice((iprPage - 1) * iprEntries, iprPage * iprEntries);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── HERO ── */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1600"
            alt="Research"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81]/85 via-[#0F4C81]/70 to-black/60" />
          {/* Floating blur blobs */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#F59E0B]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            <span className="text-[#F59E0B]">Research</span> &amp; Publications
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-medium">
            Advancing Pharmaceutical Innovation Through Research, Publications &amp; Academic Excellence.
          </p>
        </motion.div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <span className="inline-block px-4 py-1.5 bg-[#F59E0B]/10 text-[#F59E0B] font-bold text-sm uppercase tracking-widest rounded-full mb-4">
              Research Publications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F4C81] mb-6">
              Our Commitment to <span className="text-[#F59E0B]">Academic Excellence</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#F59E0B] rounded-full mx-auto mb-6" />
            <p className="text-gray-600 text-lg leading-relaxed">
              Swami Vivekanand College of Pharmacy fosters a culture of scientific inquiry and interdisciplinary collaboration. Our faculty and researchers actively contribute to peer-reviewed journals, advancing knowledge in pharmaceutical sciences, drug discovery, nanotechnology, clinical research, and herbal therapeutics. Through rigorous research and publication, we uphold our commitment to pharmaceutical innovation and academic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.04, y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center group"
              >
                <div className="w-14 h-14 bg-[#0F4C81]/5 group-hover:bg-[#F59E0B]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <s.icon className="w-7 h-7 text-[#0F4C81] group-hover:text-[#F59E0B] transition-colors" />
                </div>
                <p className="text-3xl font-extrabold text-[#F59E0B]">{s.value}</p>
                <p className="text-sm font-semibold text-[#0F4C81] mt-1">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PUBLICATIONS TABLE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F4C81] mb-4">
              Research <span className="text-[#F59E0B]">Publications</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mx-auto" />
          </motion.div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by title, author, journal, year..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] text-sm text-gray-700 bg-white shadow-sm"
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Show</span>
              <select
                value={entries}
                onChange={(e) => { setEntries(Number(e.target.value)); setPage(1); }}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] bg-white text-sm"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={-1}>All</option>
              </select>
              <span>entries</span>
            </div>
          </div>

          {/* Table */}
          <motion.div {...fadeInUp} className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-[#0F4C81] text-white">
                  <th className="px-4 py-4 text-left font-semibold whitespace-nowrap">Sr.</th>
                  <th className="px-4 py-4 text-left font-semibold">Publication Title</th>
                  <th className="px-4 py-4 text-left font-semibold whitespace-nowrap">Author(s)</th>
                  <th className="px-4 py-4 text-left font-semibold">Journal</th>
                  <th className="px-4 py-4 text-left font-semibold whitespace-nowrap">Year</th>
                  <th className="px-4 py-4 text-left font-semibold whitespace-nowrap">ISSN</th>
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-10 text-gray-400">No publications found.</td>
                  </tr>
                ) : (
                  paginated.map((pub, idx) => (
                    <tr
                      key={pub.sr}
                      className={`transition-colors duration-150 hover:bg-[#FFF7ED] ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}
                    >
                      <td className="px-4 py-3 font-bold text-[#0F4C81]">{pub.sr}</td>
                      <td className="px-4 py-3 text-gray-800 font-medium max-w-xs">{pub.title}</td>
                      <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{pub.authors}</td>
                      <td className="px-4 py-3 text-gray-600 italic">{pub.journal}</td>
                      <td className="px-4 py-3 text-gray-700 font-semibold">{pub.year}</td>
                      <td className="px-4 py-3 text-gray-500 font-mono">{pub.issn}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </motion.div>

          {/* Pagination */}
          {entries !== -1 && totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-9 h-9 rounded-lg text-sm font-bold transition-colors ${
                    p === page ? "bg-[#0F4C81] text-white shadow" : "bg-white border border-gray-300 text-gray-600 hover:bg-[#F59E0B]/10 hover:border-[#F59E0B]"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
          <p className="text-center text-xs text-gray-400 mt-3">
            Showing {paginated.length} of {filtered.length} entries
          </p>
        </div>
      </section>

      {/* ── IPR / PATENTS / DESIGNS TABLE ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#F59E0B]/10 text-[#F59E0B] font-bold text-sm uppercase tracking-widest rounded-full mb-4">
              Intellectual Property Rights
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F4C81] mb-4">
              IPR — <span className="text-[#F59E0B]">Patents, Copyrights &amp; Designs</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mx-auto" />
          </motion.div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by title, inventor, type, year, app no…"
                value={iprSearch}
                onChange={(e) => { setIprSearch(e.target.value); setIprPage(1); }}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] text-sm text-gray-700 bg-white shadow-sm"
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Show</span>
              <select
                value={iprEntries}
                onChange={(e) => { setIprEntries(Number(e.target.value)); setIprPage(1); }}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] bg-white text-sm"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={-1}>All</option>
              </select>
              <span>entries</span>
            </div>
          </div>

          {/* Table */}
          <motion.div {...fadeInUp} className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-[#0F4C81] text-white">
                  <th className="px-4 py-4 text-left font-semibold whitespace-nowrap">Sr.</th>
                  <th className="px-4 py-4 text-left font-semibold whitespace-nowrap">Year</th>
                  <th className="px-4 py-4 text-left font-semibold whitespace-nowrap">Type of IPR</th>
                  <th className="px-4 py-4 text-left font-semibold whitespace-nowrap">Status</th>
                  <th className="px-4 py-4 text-left font-semibold whitespace-nowrap">Application No.</th>
                  <th className="px-4 py-4 text-left font-semibold">Inventor(s) Name</th>
                  <th className="px-4 py-4 text-left font-semibold">Title of the IPR</th>
                  <th className="px-4 py-4 text-left font-semibold whitespace-nowrap">Publication / Granted No.</th>
                </tr>
              </thead>
              <tbody>
                {iprPaginated.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="text-center py-10 text-gray-400">No IPR records found.</td>
                  </tr>
                ) : (
                  iprPaginated.map((rec, idx) => (
                    <tr
                      key={rec.appNo}
                      className={`transition-colors duration-150 hover:bg-[#FFF7ED] ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}
                    >
                      <td className="px-4 py-3 font-bold text-[#0F4C81]">{rec.sr}</td>
                      <td className="px-4 py-3 text-gray-700 font-semibold">{rec.year}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-bold ${
                          rec.type === "Patent"
                            ? "bg-blue-100 text-blue-700"
                            : rec.type === "Design"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-green-100 text-green-700"
                        }`}>
                          {rec.type}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-bold ${
                          rec.status === "Granted"
                            ? "bg-green-100 text-green-700"
                            : rec.status === "Published"
                            ? "bg-sky-100 text-sky-700"
                            : "bg-purple-100 text-purple-700"
                        }`}>
                          {rec.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-600 font-mono text-xs whitespace-nowrap">{rec.appNo}</td>
                      <td className="px-4 py-3 text-gray-600 max-w-xs">{rec.inventors}</td>
                      <td className="px-4 py-3 text-gray-800 font-medium max-w-sm">{rec.title}</td>
                      <td className="px-4 py-3 text-gray-600 font-mono text-xs whitespace-nowrap">{rec.pubNo}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </motion.div>

          {/* IPR Pagination */}
          {iprEntries !== -1 && iprTotalPages > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: iprTotalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setIprPage(p)}
                  className={`w-9 h-9 rounded-lg text-sm font-bold transition-colors ${
                    p === iprPage ? "bg-[#0F4C81] text-white shadow" : "bg-white border border-gray-300 text-gray-600 hover:bg-[#F59E0B]/10 hover:border-[#F59E0B]"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
          <p className="text-center text-xs text-gray-400 mt-3">
            Showing {iprPaginated.length} of {filteredIpr.length} IPR records
          </p>
        </div>
      </section>

      {/* ── BOOKS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F4C81] mb-4">
              Books <span className="text-[#F59E0B]">Published</span>
            </h2>
            <p className="text-gray-500 text-lg">Academic contributions by faculty members and researchers.</p>
            <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mx-auto mt-6" />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {books.map((book, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col group transition-all duration-300 hover:shadow-xl hover:border-[#F59E0B]/40"
              >
                <div className="w-14 h-14 bg-[#0F4C81]/5 group-hover:bg-[#F59E0B]/10 rounded-2xl flex items-center justify-center mb-5 transition-colors">
                  <BookOpen className="w-7 h-7 text-[#0F4C81] group-hover:text-[#F59E0B] transition-colors" />
                </div>
                <h3 className="text-base font-bold text-[#0F4C81] leading-snug mb-3 flex-grow"
                  dangerouslySetInnerHTML={{ __html: book.title }}
                />
                <p className="text-sm text-gray-500 mb-1"><span className="font-semibold text-gray-700">Author(s):</span> {book.authors}</p>
                <p className="text-sm text-gray-500 mb-5 font-mono"><span className="font-semibold text-gray-700">ISBN:</span> {book.isbn}</p>
                {book.pdf ? (
                  <a
                    href={book.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold py-2.5 rounded-xl transition-all duration-200 shadow hover:shadow-lg text-sm"
                  >
                    <Download className="w-4 h-4" /> Download PDF
                  </a>
                ) : (
                  <span className="mt-auto text-center text-xs text-gray-400 italic py-2">PDF coming soon</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── RESEARCH DOMAINS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F4C81] mb-4">
              Research <span className="text-[#F59E0B]">Domains</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mx-auto" />
          </motion.div>
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"
          >
            {domains.map((d, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.06, y: -4 }}
                className="bg-gradient-to-br from-[#0F4C81]/5 to-[#F59E0B]/5 border border-gray-100 rounded-2xl p-6 text-center group cursor-default hover:border-[#F59E0B]/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#0F4C81]/10 group-hover:bg-[#F59E0B] rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <d.icon className="w-6 h-6 text-[#0F4C81] group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-sm font-bold text-[#0F4C81]">{d.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81] to-[#0c3c66]" />
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#F59E0B]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Driving Innovation Through{" "}
              <span className="text-[#F59E0B]">Research &amp; Collaboration</span>
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Join our growing community of researchers, faculty, and scholars dedicated to advancing pharmaceutical sciences.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300"
            >
              <FlaskConical className="w-5 h-5" /> Explore More Research
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
