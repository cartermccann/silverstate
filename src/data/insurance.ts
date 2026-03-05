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
    slug: 'bcbs',
    name: 'Blue Cross Blue Shield',
    logo: '/assets/insurance/bcbs.png',
    coverageDescription:
      'Blue Cross Blue Shield (BCBS) is the largest health insurance network in the United States, with independent member companies operating across all 50 states. Most BCBS plans provide coverage for adolescent behavioral health treatment, including residential, PHP, and IOP programs. Under the Mental Health Parity and Addiction Equity Act, BCBS plans must cover mental health services comparably to medical and surgical benefits.\n\nBecause BCBS operates through independent regional companies, coverage details can vary. However, most BCBS plans cover inpatient and outpatient mental health treatment for adolescents when medically necessary. Depending on your plan, Silver State may be in-network or out-of-network — both options typically provide coverage, though your cost-sharing may differ.\n\nSilver State works with BCBS plans from across the country. Our admissions team can verify your specific BCBS benefits regardless of which state your plan originates from.',
    preAuthorization:
      "Most BCBS plans require pre-authorization for residential and PHP-level treatment. The process varies slightly by regional BCBS company, but generally involves submitting clinical documentation of medical necessity. Silver State handles pre-authorization with all BCBS member companies, managing the paperwork and coordination so families can focus on their teen's well-being. Call our admissions team to start the process.",
    faqs: [
      {
        q: 'Does Blue Cross Blue Shield cover residential treatment for teens?',
        a: 'Most BCBS plans cover residential treatment for adolescents when determined to be medically necessary. Since BCBS operates through regional companies, coverage details vary by plan. Silver State can verify your specific BCBS benefits and explain your coverage in detail.',
      },
      {
        q: 'Does it matter which state my BCBS plan is from?',
        a: "Silver State works with BCBS plans from all states. While coverage details vary by regional company and plan type, our admissions team has experience navigating BCBS benefits nationwide. Call us to verify your specific plan's coverage.",
      },
      {
        q: 'Is Silver State in-network with BCBS?',
        a: "Network status depends on your specific BCBS plan and regional company. Whether in-network or out-of-network, most BCBS plans provide coverage for adolescent behavioral health treatment. Call Silver State to check your plan's network status and coverage levels.",
      },
      {
        q: 'How long does BCBS authorization take?',
        a: 'BCBS authorization timelines vary by regional company, but most decisions are made within a few business days. Silver State begins the authorization process immediately and keeps families informed throughout. Call us to start your benefits verification.',
      },
    ],
    metaDescription:
      'Blue Cross Blue Shield adolescent treatment coverage at Silver State in Las Vegas for residential, PHP, and IOP. Verify teen behavioral health benefits.',
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
    slug: 'humana',
    name: 'Humana',
    logo: '/assets/insurance/humana.svg',
    coverageDescription:
      "Humana offers behavioral health coverage through its commercial plans and is one of the nation's leading health insurance providers. Under the Mental Health Parity and Addiction Equity Act, Humana plans are required to provide mental health and substance use disorder benefits that are comparable to medical and surgical benefits.\n\nMost Humana plans cover adolescent behavioral health treatment at the residential, PHP, and IOP levels when determined to be medically necessary. Humana manages behavioral health benefits through its integrated behavioral health program, and coverage specifics — including network status, copays, and deductibles — depend on your particular plan.\n\nSilver State works with Humana to verify benefits and secure authorizations for adolescent treatment. Our admissions team can clarify your specific Humana coverage and help your family understand the expected costs.",
    preAuthorization:
      "Humana generally requires pre-authorization for adolescent residential and PHP treatment. The process involves a clinical review to confirm medical necessity based on the teen's assessment and recommended level of care. Silver State coordinates directly with Humana to manage the pre-authorization process, handling all required documentation so families can focus on getting their teen help. Call us to start the verification process.",
    faqs: [
      {
        q: 'Does Humana cover residential treatment for teens?',
        a: 'Most Humana commercial plans cover adolescent residential treatment when medically necessary. Coverage details depend on your plan type and benefits structure. Call Silver State to verify your specific Humana benefits — we can typically provide answers within 10 minutes.',
      },
      {
        q: 'Does Humana require pre-authorization for adolescent treatment?',
        a: 'Yes, Humana typically requires pre-authorization for residential and PHP-level adolescent treatment. Silver State handles the entire pre-authorization process, coordinating with Humana to secure approval before your teen begins treatment.',
      },
      {
        q: 'How do I verify my Humana benefits for teen treatment?',
        a: "The easiest way to verify your Humana benefits is to call Silver State's admissions team. We contact Humana directly, review your plan details, and provide a clear explanation of your coverage for adolescent behavioral health treatment.",
      },
    ],
    metaDescription:
      'Humana adolescent treatment coverage at Silver State in Las Vegas for residential, PHP, and IOP. Verify teen behavioral health benefits and authorization.',
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
    slug: 'tricare',
    name: 'TRICARE',
    logo: '/assets/insurance/tricare.svg',
    coverageDescription:
      "TRICARE is the health care program for uniformed service members, retirees, and their families. TRICARE provides comprehensive behavioral health coverage for dependents, including adolescent children of active-duty and retired military personnel. TRICARE typically covers residential treatment, PHP, and IOP programs for behavioral health conditions in adolescents. While TRICARE follows military health regulations, parity principles still guide access to adolescent behavioral health care.\n\nTRICARE operates differently from commercial insurance. It does not require pre-authorization from the insurer but does require referrals and authorizations through the military health system. Active-duty family members often have no out-of-pocket costs or very low cost-sharing for authorized behavioral health treatment. TRICARE also provides coverage under the Extended Care Health Option (ECHO) for qualifying conditions.\n\nSilver State has experience working with military families and understands TRICARE's unique requirements. Our admissions team can guide you through the TRICARE authorization process and help your family access the behavioral health benefits your teen is entitled to.",
    preAuthorization:
      "TRICARE authorization for adolescent residential treatment works differently than commercial insurance. A referral from the teen's primary care manager (PCM) is typically required, along with authorization through the regional TRICARE contractor. Silver State helps military families navigate this process, coordinating with your PCM and the TRICARE contractor to secure proper authorization. The process may take slightly longer than commercial insurance due to the military referral system, but Silver State manages the timeline and keeps families informed. Call our admissions team to start the process.",
    faqs: [
      {
        q: 'Does TRICARE cover residential treatment for teens?',
        a: "Yes, TRICARE covers residential behavioral health treatment for eligible dependents, including adolescents. Coverage includes residential treatment centers, PHP, and IOP programs when medically necessary. Call Silver State to discuss your family's TRICARE benefits.",
      },
      {
        q: 'Do I need pre-authorization for TRICARE adolescent treatment?',
        a: "TRICARE requires a referral from your teen's primary care manager (PCM) and authorization through the regional TRICARE contractor. Silver State helps military families navigate this unique process and coordinates with your PCM on your behalf.",
      },
      {
        q: 'What will I pay out of pocket with TRICARE?',
        a: 'Active-duty family members often have no or minimal out-of-pocket costs for authorized behavioral health treatment under TRICARE. Retiree family costs depend on your specific TRICARE plan. Silver State can help you understand your expected costs.',
      },
      {
        q: 'Does Silver State have experience with military families?',
        a: "Yes, Silver State regularly works with military families and understands TRICARE's unique authorization requirements. Our admissions team is experienced in navigating the military health system referral process.",
      },
    ],
    metaDescription:
      'TRICARE adolescent treatment coverage at Silver State in Las Vegas for residential, PHP, and IOP. Verify military family behavioral health benefits today.',
  },
  {
    slug: 'medicaid',
    name: 'Medicaid',
    logo: '/assets/insurance/medicaid.svg',
    coverageDescription:
      'Medicaid provides health coverage for eligible low-income individuals and families, including children and adolescents. In Nevada, Medicaid is administered through the Nevada Department of Health and Human Services, with managed care provided through plans like Anthem Blue Cross Blue Shield of Nevada (now Elevance Health), Molina Healthcare, and Health Plan of Nevada (HPN). Although Medicaid rules differ from commercial plans, parity principles and federal protections still support adolescent behavioral health access.\n\nNevada Medicaid covers behavioral health treatment for adolescents, including residential, PHP, and IOP programs when medically necessary. Under the Early and Periodic Screening, Diagnostic, and Treatment (EPSDT) benefit, Medicaid must cover all medically necessary services for individuals under 21 — this is a strong protection that ensures adolescents can access the level of treatment they need.\n\nSilver State works with Nevada Medicaid managed care plans to help families access behavioral health treatment for their teens. Our admissions team can verify your Medicaid coverage and guide you through the authorization process.',
    preAuthorization:
      'Nevada Medicaid managed care plans require pre-authorization for residential and PHP-level adolescent behavioral health treatment. The authorization process involves a clinical assessment and documentation of medical necessity. Silver State coordinates with your specific Medicaid managed care plan to handle the authorization process. If your teen qualifies under the EPSDT benefit, additional protections ensure access to necessary treatment. Contact Silver State to begin the verification process.',
    faqs: [
      {
        q: 'Does Nevada Medicaid cover residential treatment for teens?',
        a: "Yes, Nevada Medicaid covers residential behavioral health treatment for adolescents when medically necessary. Under the EPSDT benefit, Medicaid must cover all medically necessary services for individuals under 21. Call Silver State to verify your specific Medicaid plan's coverage.",
      },
      {
        q: 'Which Medicaid managed care plans does Silver State accept?',
        a: 'Silver State works with Nevada Medicaid managed care plans to help families access adolescent treatment. Contact our admissions team to verify whether your specific Medicaid managed care plan provides coverage at our facility.',
      },
      {
        q: 'Will I have out-of-pocket costs with Medicaid?',
        a: 'Medicaid typically has minimal or no out-of-pocket costs for covered behavioral health services for children and adolescents. Specific cost-sharing rules vary by managed care plan. Silver State can help clarify your expected costs.',
      },
      {
        q: 'What is the EPSDT benefit for teens?',
        a: 'The Early and Periodic Screening, Diagnostic, and Treatment (EPSDT) benefit requires Medicaid to cover all medically necessary services for individuals under 21. This is a strong protection that helps ensure adolescents can access the behavioral health treatment they need, including residential care.',
      },
    ],
    metaDescription:
      'Medicaid adolescent mental health treatment center in Las Vegas. Silver State accepts Nevada Medicaid for residential, PHP & IOP. Verify EPSDT benefits today.',
  },
  {
    slug: 'anthem',
    name: 'Anthem',
    logo: '/assets/insurance/anthem.svg',
    coverageDescription:
      "Anthem is one of the largest health insurance companies in the United States and operates as a licensee of the Blue Cross Blue Shield Association in multiple states, including Nevada. Anthem plans typically provide comprehensive behavioral health coverage for adolescents, including residential treatment, PHP, and IOP programs. Under the Mental Health Parity and Addiction Equity Act, Anthem must cover mental health services comparably to medical and surgical services.\n\nAnthem offers a variety of plan types, and behavioral health benefits are generally managed through Anthem's behavioral health network. Most Anthem plans cover adolescent inpatient and outpatient mental health treatment when determined to be medically necessary, subject to standard cost-sharing provisions like deductibles, copays, and coinsurance.\n\nSilver State works with Anthem plans to verify benefits and secure treatment authorizations for teens. Our admissions team can quickly check your Anthem coverage and explain what to expect financially.",
    preAuthorization:
      'Anthem generally requires pre-authorization for residential and PHP-level adolescent behavioral health treatment. The process involves a clinical review where Anthem evaluates the medical necessity of the recommended level of care. Silver State manages the entire pre-authorization process with Anthem on behalf of families, submitting clinical documentation and coordinating approval. Call our admissions team to verify your benefits and start the authorization process.',
    faqs: [
      {
        q: 'Does Anthem cover residential treatment for teens?',
        a: 'Most Anthem plans cover adolescent residential treatment when medically necessary. Coverage specifics depend on your plan type, network status, and benefit design. Call Silver State to verify your Anthem benefits — our team can provide answers quickly.',
      },
      {
        q: 'Is Anthem the same as Blue Cross Blue Shield?',
        a: "Anthem is a Blue Cross Blue Shield licensee that operates in several states, including Nevada. While Anthem uses the BCBS brand, its plans and network may differ from other BCBS regional companies. Silver State can verify your specific Anthem plan's coverage.",
      },
      {
        q: 'Does Anthem require pre-authorization for teen treatment?',
        a: "Yes, Anthem typically requires pre-authorization for residential and PHP-level treatment. Silver State handles the authorization process with Anthem, managing all clinical documentation and coordination on your family's behalf.",
      },
      {
        q: 'How do I check my Anthem benefits for adolescent treatment?',
        a: "The fastest way to check your Anthem benefits is to call Silver State's admissions team. We verify your coverage directly with Anthem and provide a clear summary of your behavioral health benefits for adolescent treatment.",
      },
    ],
    metaDescription:
      'Anthem adolescent treatment coverage at Silver State in Las Vegas for residential, PHP, and IOP. Verify teen behavioral health benefits and authorization.',
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
]

// Legacy export for homepage compatibility
export const insurance: InsuranceEntry[] = insuranceProviders.map((p) => ({
  name: p.name,
  logo: p.logo,
}))

export function getInsuranceBySlug(slug: string): InsurancePageData | undefined {
  return insuranceProviders.find((p) => p.slug === slug)
}
