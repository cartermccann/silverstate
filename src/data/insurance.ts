import type { InsurancePageData, InsuranceEntry } from '../types'

export const insuranceProviders: InsurancePageData[] = [
  {
    slug: 'aetna',
    name: 'Aetna',
    logo: '/assets/insurance/aetna.png',
    coverageDescription:
      'Aetna is one of the largest health insurance providers in the United States and typically covers adolescent behavioral health treatment, including residential, partial hospitalization (PHP), and intensive outpatient (IOP) programs. Under the Mental Health Parity and Addiction Equity Act, Aetna plans are generally required to provide mental health and substance use disorder benefits comparable to medical and surgical benefits.\n\nMost Aetna plans cover inpatient and outpatient mental health services for adolescents when deemed medically necessary. Coverage details — including copays, deductibles, and out-of-pocket maximums — vary by specific plan. Aetna typically requires a clinical assessment and documentation of medical necessity before authorizing residential treatment for teens.\n\nSilver State works directly with Aetna to verify your specific benefits and handle the authorization process. We recommend calling our admissions team to confirm your coverage — most families get answers within 10 minutes.',
    preAuthorization:
      'Aetna generally requires pre-authorization for residential and PHP-level adolescent behavioral health treatment. The process involves submitting clinical documentation that demonstrates medical necessity, including a comprehensive assessment and treatment plan. Silver State handles the entire pre-authorization process on behalf of families, coordinating directly with Aetna to secure approval before your teen begins treatment. Call our admissions team to start the verification process today.',
    faqs: [
      {
        q: 'Does Aetna cover residential treatment for teens?',
        a: 'Most Aetna plans cover residential treatment for adolescents when it is determined to be medically necessary. Coverage varies by plan, so we recommend calling Silver State to verify your specific Aetna benefits. Our team handles the verification process and can typically provide answers within 10 minutes.',
      },
      {
        q: 'How much will I pay out of pocket with Aetna?',
        a: 'Out-of-pocket costs with Aetna depend on your specific plan, including your deductible, copay or coinsurance rates, and out-of-pocket maximum. Silver State can provide a detailed benefits breakdown when you call to verify your coverage.',
      },
      {
        q: 'Does Aetna require pre-authorization for adolescent treatment?',
        a: 'Yes, Aetna typically requires pre-authorization for residential and PHP-level treatment. Silver State manages the entire pre-authorization process for families, submitting clinical documentation and coordinating directly with Aetna on your behalf.',
      },
      {
        q: 'How long does insurance verification take with Aetna?',
        a: 'Silver State can usually verify Aetna benefits within 10 minutes over the phone. We check your specific plan details, including coverage levels for residential, PHP, and IOP treatment, so you know what to expect before beginning the admissions process.',
      },
    ],
    metaDescription:
      'Aetna adolescent treatment coverage at Silver State in Las Vegas for residential, PHP, and IOP. Verify teen behavioral health benefits and authorization.',
  },
  {
    slug: 'cigna',
    name: 'Cigna',
    logo: '/assets/insurance/cigna.png',
    coverageDescription:
      'Cigna provides comprehensive behavioral health coverage for adolescents through most of its plan options. Under the Mental Health Parity and Addiction Equity Act, Cigna is required to cover mental health and substance use disorder services at levels comparable to medical and surgical benefits, making adolescent treatment more accessible for families.\n\nCigna plans typically cover residential treatment, partial hospitalization programs (PHP), and intensive outpatient programs (IOP) for adolescents when clinical necessity is documented. Cigna utilizes Evernorth Behavioral Health (formerly Cigna Behavioral Health) to manage its mental health benefits, and coverage specifics depend on your individual plan.\n\nSilver State has experience working with Cigna and Evernorth to secure treatment authorization. Our admissions team can verify your Cigna benefits and walk you through what your plan covers for adolescent behavioral health treatment.',
    preAuthorization:
      'Cigna typically requires pre-authorization through Evernorth Behavioral Health for residential and PHP-level adolescent treatment. The process involves submitting a clinical assessment and treatment recommendation demonstrating medical necessity. Silver State coordinates the entire authorization process with Cigna on behalf of families, ensuring all clinical documentation is properly submitted. Contact our admissions team to begin verification.',
    faqs: [
      {
        q: 'Does Cigna cover residential treatment for teens?',
        a: 'Most Cigna plans provide coverage for adolescent residential treatment when deemed medically necessary. Your specific benefits depend on your plan type and network status. Call Silver State to verify your Cigna coverage — we can typically confirm your benefits within 10 minutes.',
      },
      {
        q: 'How much does Cigna cover for adolescent PHP?',
        a: 'Cigna coverage for adolescent partial hospitalization programs varies by plan. Most plans cover a significant portion of PHP costs when medically necessary, subject to your deductible and coinsurance. Silver State can provide a detailed breakdown of your specific Cigna PHP benefits when you call.',
      },
      {
        q: 'Does Cigna use a separate company for mental health benefits?',
        a: 'Yes, Cigna manages behavioral health benefits through Evernorth Behavioral Health (formerly Cigna Behavioral Health). Silver State works directly with Evernorth to handle pre-authorizations and benefit verifications for families.',
      },
      {
        q: "What if Cigna denies coverage for my teen's treatment?",
        a: "If Cigna initially denies authorization, Silver State can assist with the appeals process. We submit additional clinical documentation and advocate on your family's behalf. Many initial denials are overturned on appeal with proper clinical justification.",
      },
    ],
    metaDescription:
      'Cigna adolescent treatment coverage at Silver State in Las Vegas for residential, PHP, and IOP. Verify teen behavioral health benefits and authorization.',
  },
  {
    slug: 'ambetter',
    name: 'Ambetter',
    logo: '/assets/insurance/ambetter.png',
    coverageDescription:
      'Ambetter is a Marketplace health insurance plan offered by Centene Corporation through the Affordable Care Act (ACA) exchanges. As an ACA-compliant plan, Ambetter is required to cover mental health and substance use disorder services as one of the ten essential health benefits. Ambetter plans are also subject to federal parity protections under the Mental Health Parity and Addiction Equity Act. This includes coverage for adolescent behavioral health treatment.\n\nAmbetter plans typically cover residential treatment, PHP, and IOP for adolescents when clinically necessary. Since Ambetter is available in Nevada through the state exchange, many local families carry this coverage. Costs vary by plan metal tier (Bronze, Silver, Gold, Platinum), with higher tiers generally providing lower out-of-pocket costs for treatment.\n\nSilver State works with Ambetter to help families access their behavioral health benefits. Our team can verify your plan details and explain what your specific Ambetter coverage includes for adolescent treatment.',
    preAuthorization:
      'Ambetter typically requires pre-authorization for residential and PHP-level behavioral health treatment. As a Marketplace plan, the authorization process involves demonstrating that treatment meets medical necessity criteria. Silver State manages the authorization process with Ambetter for families, submitting all required clinical documentation. Call our admissions team to verify your Ambetter benefits and begin the authorization process.',
    faqs: [
      {
        q: 'Does Ambetter cover residential treatment for teens?',
        a: "Yes, as an ACA-compliant plan, Ambetter is required to cover mental health services including adolescent residential treatment when medically necessary. Coverage levels depend on your plan's metal tier. Call Silver State to verify your specific benefits.",
      },
      {
        q: 'How much will I pay out of pocket with Ambetter?',
        a: "Out-of-pocket costs with Ambetter depend on your plan's metal tier (Bronze, Silver, Gold, or Platinum), deductible, and coinsurance rates. Silver State can review your specific Ambetter plan and provide a clear picture of your expected costs.",
      },
      {
        q: 'Is Ambetter accepted at Silver State?',
        a: 'Silver State works with Ambetter plans for adolescent behavioral health coverage. Contact our admissions team to verify your specific plan details and coverage levels for residential, PHP, and IOP treatment.',
      },
    ],
    metaDescription:
      'Ambetter adolescent treatment coverage at Silver State in Las Vegas for residential, PHP, and IOP. Verify Marketplace behavioral health benefits for your teen.',
  },
  {
    slug: 'uhc',
    name: 'United Healthcare',
    logo: '/assets/insurance/uhc.svg',
    coverageDescription:
      "United Healthcare (UHC) is the largest health insurance company in the United States, serving millions of members nationwide. UHC provides behavioral health benefits through Optum Behavioral Health and typically covers adolescent treatment at the residential, PHP, and IOP levels. Under the Mental Health Parity and Addiction Equity Act, UHC plans must cover mental health services comparably to medical and surgical benefits.\n\nUHC plans generally cover a range of adolescent behavioral health services when deemed medically necessary, including 24-hour residential care, structured day programs, and outpatient treatment. As with all insurers, specific coverage depends on your plan type, network status, and benefit design. UHC is one of the most commonly accepted insurance providers at treatment centers nationwide.\n\nSilver State regularly works with United Healthcare and Optum to secure treatment authorizations for teens. Our team is experienced in navigating UHC's behavioral health benefits process and can verify your coverage quickly.",
    preAuthorization:
      'United Healthcare requires pre-authorization through Optum Behavioral Health for residential and PHP-level adolescent treatment. The process involves submitting clinical documentation including a biopsychosocial assessment and treatment recommendation. Silver State manages the entire UHC pre-authorization process on behalf of families, working directly with Optum to secure approval. Contact our admissions team to begin verification — most families receive a preliminary answer within one business day.',
    faqs: [
      {
        q: 'Does United Healthcare cover residential treatment for teens?',
        a: 'Most UHC plans cover residential treatment for adolescents when medically necessary. Coverage is managed through Optum Behavioral Health. Silver State can verify your specific UHC benefits and explain your coverage in detail — call our admissions team to get started.',
      },
      {
        q: 'Does UHC use a separate company for behavioral health?',
        a: "Yes, United Healthcare manages behavioral health benefits through Optum Behavioral Health. Silver State works directly with Optum to handle pre-authorizations and benefit verifications, so families don't have to navigate the process alone.",
      },
      {
        q: 'How much does UHC cover for adolescent IOP?',
        a: 'UHC coverage for adolescent intensive outpatient programs varies by plan type and network status. Most plans cover IOP when medically necessary, subject to your deductible and coinsurance. Call Silver State for a specific benefits breakdown.',
      },
      {
        q: "What if UHC denies my teen's treatment authorization?",
        a: "If UHC denies initial authorization, Silver State assists families with the appeals process. We provide additional clinical documentation and work with Optum to advocate for your teen's access to necessary treatment.",
      },
    ],
    metaDescription:
      'United Healthcare adolescent treatment coverage at Silver State in Las Vegas for residential, PHP, and IOP. Verify behavioral health benefits and authorization.',
  },
  {
    slug: 'hpn',
    name: 'Health Plan of Nevada',
    logo: '/assets/insurance/hpn.svg',
    coverageDescription:
      'Health Plan of Nevada (HPN) is one of the largest managed care organizations in Nevada, serving hundreds of thousands of members across the state. HPN offers commercial, Medicare, and Medicaid managed care plans, and is a subsidiary of UnitedHealth Group. Under the Mental Health Parity and Addiction Equity Act, HPN plans are required to provide behavioral health benefits comparable to medical and surgical benefits.\n\nHPN plans typically cover adolescent behavioral health treatment at the residential, PHP, and IOP levels when determined to be medically necessary. As a Nevada-based plan, HPN is one of the most commonly held insurance options for local families seeking adolescent treatment services.\n\nSilver State works directly with Health Plan of Nevada to verify benefits and secure treatment authorizations for teens. Our admissions team is experienced in navigating HPN coverage and can help your family understand the expected costs and authorization requirements.',
    preAuthorization:
      'Health Plan of Nevada generally requires pre-authorization for residential and PHP-level adolescent behavioral health treatment. The authorization process involves submitting clinical documentation demonstrating medical necessity, including a comprehensive assessment and treatment plan. Silver State manages the entire pre-authorization process with HPN on behalf of families, coordinating directly with the plan to secure approval before your teen begins treatment. Call our admissions team to start the verification process.',
    faqs: [
      {
        q: 'Does Health Plan of Nevada cover residential treatment for teens?',
        a: 'Most HPN plans cover adolescent residential treatment when medically necessary. Coverage details depend on your specific plan type. Call Silver State to verify your HPN benefits — our team can typically provide answers within 10 minutes.',
      },
      {
        q: 'Does HPN require pre-authorization for adolescent treatment?',
        a: 'Yes, HPN typically requires pre-authorization for residential and PHP-level treatment. Silver State handles the entire authorization process, coordinating with HPN to secure approval before your teen begins treatment.',
      },
      {
        q: 'How much will I pay out of pocket with HPN?',
        a: 'Out-of-pocket costs with HPN depend on your specific plan, including your deductible, copay or coinsurance rates, and out-of-pocket maximum. Silver State can provide a detailed benefits breakdown when you call to verify your coverage.',
      },
      {
        q: 'Is Silver State in-network with Health Plan of Nevada?',
        a: "Silver State works with Health Plan of Nevada for adolescent behavioral health coverage. Contact our admissions team to verify your specific plan's network status and coverage levels for residential, PHP, and IOP treatment.",
      },
    ],
    metaDescription:
      'Health Plan of Nevada adolescent treatment coverage at Silver State in Las Vegas for residential, PHP, and IOP. Verify teen behavioral health benefits.',
  },
  {
    slug: 'medicaid-ffs',
    name: 'Medicaid Fee for Service',
    logo: '/assets/insurance/medicaid.svg',
    coverageDescription:
      'Silver State accepts Nevada Medicaid Fee for Service (FFS) for adolescent behavioral health treatment. Unlike Medicaid managed care plans, Fee for Service Medicaid is administered directly by the Nevada Department of Health and Human Services without a managed care intermediary. Under Medicaid FFS, the state pays providers directly for each covered service rendered.\n\nNevada Medicaid Fee for Service covers behavioral health treatment for adolescents, including residential, PHP, and IOP programs when medically necessary. Under the Early and Periodic Screening, Diagnostic, and Treatment (EPSDT) benefit, Medicaid must cover all medically necessary services for individuals under 21 — this is a strong federal protection ensuring adolescents can access the level of care they need.\n\nSilver State works with Nevada Medicaid Fee for Service to help families access behavioral health treatment for their teens. Our admissions team can verify your Medicaid FFS coverage and guide you through the authorization process.',
    preAuthorization:
      'Nevada Medicaid Fee for Service requires prior authorization for residential and PHP-level adolescent behavioral health treatment. The authorization process involves a clinical assessment and documentation of medical necessity submitted directly to the state Medicaid office. Silver State coordinates the authorization process on behalf of families, handling all required documentation. If your teen qualifies under the EPSDT benefit, additional protections ensure access to necessary treatment. Contact Silver State to begin the verification process.',
    faqs: [
      {
        q: 'Does Silver State accept Medicaid Fee for Service?',
        a: 'Yes, Silver State accepts Nevada Medicaid Fee for Service (FFS) for adolescent behavioral health treatment including residential, PHP, and IOP programs when medically necessary.',
      },
      {
        q: 'What is Medicaid Fee for Service?',
        a: 'Medicaid Fee for Service (FFS) is the traditional Medicaid program where the state pays providers directly for covered services, rather than routing coverage through a managed care organization. Silver State accepts Medicaid FFS for adolescent treatment.',
      },
      {
        q: 'Will I have out-of-pocket costs with Medicaid FFS?',
        a: 'Medicaid Fee for Service typically has minimal or no out-of-pocket costs for covered behavioral health services for children and adolescents. Silver State can help clarify your expected costs when you call to verify coverage.',
      },
      {
        q: 'What is the EPSDT benefit for teens on Medicaid?',
        a: 'The Early and Periodic Screening, Diagnostic, and Treatment (EPSDT) benefit requires Medicaid to cover all medically necessary services for individuals under 21. This federal protection helps ensure adolescents can access the behavioral health treatment they need, including residential care.',
      },
    ],
    metaDescription:
      'Medicaid Fee for Service adolescent treatment at Silver State in Las Vegas. We accept Nevada Medicaid FFS for residential, PHP & IOP. Verify benefits today.',
  },
  {
    slug: 'geha',
    name: 'GEHA',
    logo: '/assets/insurance/geha.png',
    coverageDescription:
      'GEHA (Government Employees Health Association) is one of the largest medical and dental insurance providers for federal employees and their families, serving over two million members nationwide. GEHA plans are available through the Federal Employees Health Benefits (FEHB) Program and are known for comprehensive coverage and competitive benefits.\n\nGEHA plans typically provide robust behavioral health coverage for dependents, including adolescent children of federal employees. Under the Mental Health Parity and Addiction Equity Act, GEHA is required to cover mental health and substance use disorder services at levels comparable to medical and surgical benefits. GEHA plans generally cover residential treatment, PHP, and IOP for adolescents when deemed medically necessary.\n\nAs a high-end, priority payer, GEHA plans often feature strong behavioral health benefits with favorable coverage terms. Silver State works directly with GEHA to verify benefits and secure treatment authorizations for teens. Our admissions team can quickly confirm your GEHA coverage and walk you through expected costs.',
    preAuthorization:
      'GEHA generally requires pre-authorization for residential and PHP-level adolescent behavioral health treatment. The process involves submitting clinical documentation demonstrating medical necessity, including a comprehensive assessment and treatment plan. Silver State manages the entire pre-authorization process with GEHA on behalf of families, coordinating directly with the plan to secure approval. Call our admissions team to start the verification process.',
    faqs: [
      {
        q: 'Does GEHA cover residential treatment for teens?',
        a: 'Yes, most GEHA plans cover adolescent residential treatment when medically necessary. As a Federal Employees Health Benefits plan, GEHA typically provides strong behavioral health coverage. Call Silver State to verify your specific benefits.',
      },
      {
        q: 'What is GEHA insurance?',
        a: 'GEHA (Government Employees Health Association) is a health insurance provider available to federal employees and their families through the Federal Employees Health Benefits (FEHB) Program. GEHA serves over two million members and is known for comprehensive coverage.',
      },
      {
        q: 'Does GEHA require pre-authorization for adolescent treatment?',
        a: 'Yes, GEHA typically requires pre-authorization for residential and PHP-level treatment. Silver State handles the entire authorization process, coordinating with GEHA to secure approval before your teen begins treatment.',
      },
      {
        q: 'How do I verify my GEHA benefits for teen treatment?',
        a: "The fastest way to verify your GEHA benefits is to call Silver State's admissions team. We contact GEHA directly, review your plan details, and provide a clear explanation of your coverage for adolescent behavioral health treatment.",
      },
    ],
    metaDescription:
      'GEHA adolescent treatment coverage at Silver State in Las Vegas for residential, PHP, and IOP. Verify federal employee behavioral health benefits for your teen.',
  },
  {
    slug: 'umr',
    name: 'UMR',
    logo: '/assets/insurance/umr.png',
    coverageDescription:
      'UMR is a third-party administrator (TPA) and a subsidiary of UnitedHealth Group that manages self-funded employer health plans. UMR administers benefits for employers who choose to self-insure rather than purchasing traditional group health insurance. Because UMR plans are employer-designed, coverage details vary significantly between plans.\n\nMost UMR-administered plans include behavioral health coverage for dependents, including adolescent mental health and substance use disorder treatment. Under the Mental Health Parity and Addiction Equity Act, self-funded plans administered by UMR are generally required to provide mental health benefits comparable to medical and surgical benefits.\n\nSilver State accepts UMR-administered plans on an out-of-network basis for adolescent behavioral health treatment. Our admissions team can verify your specific UMR plan benefits and explain the out-of-network coverage levels, including any differences in cost-sharing compared to in-network providers.',
    preAuthorization:
      'UMR-administered plans typically require pre-authorization for residential and PHP-level adolescent behavioral health treatment. The authorization process involves submitting clinical documentation demonstrating medical necessity. Silver State manages the pre-authorization process with UMR on behalf of families, coordinating all required documentation. Contact our admissions team to verify your benefits and begin the authorization process.',
    faqs: [
      {
        q: 'Does Silver State accept UMR insurance?',
        a: 'Yes, Silver State accepts UMR-administered plans on an out-of-network basis for adolescent behavioral health treatment. Call our admissions team to verify your specific UMR plan benefits and coverage levels.',
      },
      {
        q: 'What is UMR insurance?',
        a: 'UMR is a third-party administrator (TPA) that manages self-funded employer health plans. It is a subsidiary of UnitedHealth Group. Because plans are employer-designed, coverage details vary. Silver State can verify your specific UMR plan benefits.',
      },
      {
        q: 'Is Silver State in-network with UMR?',
        a: 'Silver State accepts UMR plans on an out-of-network basis. Out-of-network coverage still provides benefits for adolescent behavioral health treatment, though cost-sharing may differ from in-network rates. Call us to understand your specific out-of-network benefits.',
      },
      {
        q: 'How much will I pay out of pocket with UMR?',
        a: 'Out-of-pocket costs with UMR depend on your specific employer plan, including your out-of-network deductible, coinsurance rates, and out-of-pocket maximum. Silver State can provide a detailed benefits breakdown when you call to verify your coverage.',
      },
    ],
    metaDescription:
      'UMR insurance coverage for adolescent treatment at Silver State in Las Vegas. Verify your employer-sponsored UMR behavioral health benefits for your teen.',
  },
]

// Legacy export for homepage compatibility
export const insurance: InsuranceEntry[] = insuranceProviders.map((p) => ({
  name: p.name,
  logo: p.logo,
}))

export function getInsuranceBySlug(slug: string): InsurancePageData | undefined {
  return insuranceProviders.find((p) => p.slug === slug)
}
