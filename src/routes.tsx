import { lazy, Suspense } from 'react'
import type { RouteObject } from 'react-router'

// --- Pages: lazy-loaded for code splitting ---

// Homepage
const Home = lazy(() => import('./pages/Home'))

// Programs
const ProgramsIndex = lazy(() => import('./pages/programs/Index'))
const Residential = lazy(() => import('./pages/programs/Residential'))
const PHP = lazy(() => import('./pages/programs/PHP'))
const IOP = lazy(() => import('./pages/programs/IOP'))
const CPI = lazy(() => import('./pages/programs/CPI'))
const TherapiesIndex = lazy(() => import('./pages/programs/TherapiesIndex'))
const CBTPage = lazy(() => import('./pages/programs/CBTPage'))
const DBTPage = lazy(() => import('./pages/programs/DBTPage'))
const EMDRPage = lazy(() => import('./pages/programs/EMDRPage'))
const TFCBTPage = lazy(() => import('./pages/programs/TFCBTPage'))
const SomaticExperiencing = lazy(() => import('./pages/programs/SomaticExperiencing'))
const MotivationalInterviewing = lazy(() => import('./pages/programs/MotivationalInterviewing'))
const FamilyTherapy = lazy(() => import('./pages/programs/FamilyTherapy'))
const GroupTherapy = lazy(() => import('./pages/programs/GroupTherapy'))
const IndividualTherapy = lazy(() => import('./pages/programs/IndividualTherapy'))
const ArtMusicTherapy = lazy(() => import('./pages/programs/ArtMusicTherapy'))
const AdventureTherapy = lazy(() => import('./pages/programs/AdventureTherapy'))
const MeditationTherapy = lazy(() => import('./pages/programs/MeditationTherapy'))
const MedicationManagement = lazy(() => import('./pages/programs/MedicationManagement'))
const LGBTQIACare = lazy(() => import('./pages/programs/LGBTQIACare'))
const HolisticTreatment = lazy(() => import('./pages/programs/HolisticTreatment'))
const TraumaInformedCare = lazy(() => import('./pages/programs/TraumaInformedCare'))

// Conditions
const ConditionsIndex = lazy(() => import('./pages/conditions/Index'))
const Anxiety = lazy(() => import('./pages/conditions/Anxiety'))
const Depression = lazy(() => import('./pages/conditions/Depression'))
const TraumaPTSD = lazy(() => import('./pages/conditions/TraumaPTSD'))
const SubstanceAbuse = lazy(() => import('./pages/conditions/SubstanceAbuse'))
const SuicidalIdeation = lazy(() => import('./pages/conditions/SuicidalIdeation'))
const OCD = lazy(() => import('./pages/conditions/OCD'))
const BipolarDisorder = lazy(() => import('./pages/conditions/BipolarDisorder'))
const AutismSpectrum = lazy(() => import('./pages/conditions/AutismSpectrum'))
const OppositionalDefiant = lazy(() => import('./pages/conditions/OppositionalDefiant'))
const ConductDisorder = lazy(() => import('./pages/conditions/ConductDisorder'))
const DMDD = lazy(() => import('./pages/conditions/DMDD'))
const BPD = lazy(() => import('./pages/conditions/BPD'))
const AdjustmentDisorder = lazy(() => import('./pages/conditions/AdjustmentDisorder'))
const DualDiagnosis = lazy(() => import('./pages/conditions/DualDiagnosis'))
const AlcoholAbuse = lazy(() => import('./pages/conditions/AlcoholAbuse'))
const OpioidAbuse = lazy(() => import('./pages/conditions/OpioidAbuse'))
const BenzodiazepineAbuse = lazy(() => import('./pages/conditions/BenzodiazepineAbuse'))
const CocaineAbuse = lazy(() => import('./pages/conditions/CocaineAbuse'))
const MethAbuse = lazy(() => import('./pages/conditions/MethAbuse'))
const CannabisAbuse = lazy(() => import('./pages/conditions/CannabisAbuse'))
const AnorexiaNervosa = lazy(() => import('./pages/conditions/AnorexiaNervosa'))
const BulimiaNervosa = lazy(() => import('./pages/conditions/BulimiaNervosa'))
const BingeEating = lazy(() => import('./pages/conditions/BingeEating'))
const ARFID = lazy(() => import('./pages/conditions/ARFID'))
const OSFED = lazy(() => import('./pages/conditions/OSFED'))
const SchoolRefusal = lazy(() => import('./pages/conditions/SchoolRefusal'))
const CompulsiveEating = lazy(() => import('./pages/conditions/CompulsiveEating'))

// Insurance
const InsuranceIndex = lazy(() => import('./pages/insurance/Index'))
const Aetna = lazy(() => import('./pages/insurance/Aetna'))
const Cigna = lazy(() => import('./pages/insurance/Cigna'))
const Ambetter = lazy(() => import('./pages/insurance/Ambetter'))
const UHC = lazy(() => import('./pages/insurance/UHC'))
const HPN = lazy(() => import('./pages/insurance/HPN'))
const MedicaidFFS = lazy(() => import('./pages/insurance/MedicaidFFS'))
const GEHA = lazy(() => import('./pages/insurance/GEHA'))
const UMR = lazy(() => import('./pages/insurance/UMR'))

// Locations
const LocationsIndex = lazy(() => import('./pages/locations/Index'))
const LasVegas = lazy(() => import('./pages/locations/LasVegas'))
const Henderson = lazy(() => import('./pages/locations/Henderson'))
const NorthLasVegas = lazy(() => import('./pages/locations/NorthLasVegas'))
const Summerlin = lazy(() => import('./pages/locations/Summerlin'))
const ClarkCounty = lazy(() => import('./pages/locations/ClarkCounty'))

// About
const Team = lazy(() => import('./pages/about/Team'))
const Facility = lazy(() => import('./pages/about/Facility'))
const YouthAcademy = lazy(() => import('./pages/about/YouthAcademy'))

// Admissions & Contact
const Process = lazy(() => import('./pages/admissions/Process'))
const Contact = lazy(() => import('./pages/Contact'))

// Resources
const ResourcesIndex = lazy(() => import('./pages/resources/Index'))
const CPIArticle = lazy(() => import('./pages/resources/CPIArticle'))
const DefiantTeenArticle = lazy(() => import('./pages/resources/DefiantTeenArticle'))
const SchoolBurnoutArticle = lazy(() => import('./pages/resources/SchoolBurnoutArticle'))

// Comparisons
const ComparisonsIndex = lazy(() => import('./pages/comparisons/Index'))
const CbtVsDbt = lazy(() => import('./pages/comparisons/CbtVsDbt'))
const ResidentialVsPhp = lazy(() => import('./pages/comparisons/ResidentialVsPhp'))
const ResidentialVsIop = lazy(() => import('./pages/comparisons/ResidentialVsIop'))
const AnxietyVsDepression = lazy(() => import('./pages/comparisons/AnxietyVsDepression'))
const PtsdVsAnxiety = lazy(() => import('./pages/comparisons/PtsdVsAnxiety'))
const AnorexiaVsBulimia = lazy(() => import('./pages/comparisons/AnorexiaVsBulimia'))

// Standalone
const OurApproach = lazy(() => import('./pages/OurApproach'))
const FAQ = lazy(() => import('./pages/FAQ'))
const HIPAA = lazy(() => import('./pages/HIPAA'))

// Legal & Utility
const Privacy = lazy(() => import('./pages/Privacy'))
const NotFound = lazy(() => import('./pages/NotFound'))

// --- Suspense wrapper ---
function S({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={null}>{children}</Suspense>
}

// --- Route manifest ---
export const routes: RouteObject[] = [
  // Homepage
  {
    path: '/',
    element: (
      <S>
        <Home />
      </S>
    ),
  },

  // Programs
  {
    path: '/programs',
    element: (
      <S>
        <ProgramsIndex />
      </S>
    ),
  },
  {
    path: '/programs/residential-treatment',
    element: (
      <S>
        <Residential />
      </S>
    ),
  },
  {
    path: '/programs/php',
    element: (
      <S>
        <PHP />
      </S>
    ),
  },
  {
    path: '/programs/iop',
    element: (
      <S>
        <IOP />
      </S>
    ),
  },
  {
    path: '/programs/crisis-prevention-intervention',
    element: (
      <S>
        <CPI />
      </S>
    ),
  },

  // Therapy Programs
  {
    path: '/programs/therapy-programs',
    element: (
      <S>
        <TherapiesIndex />
      </S>
    ),
  },
  {
    path: '/programs/cbt',
    element: (
      <S>
        <CBTPage />
      </S>
    ),
  },
  {
    path: '/programs/dbt',
    element: (
      <S>
        <DBTPage />
      </S>
    ),
  },
  {
    path: '/programs/emdr',
    element: (
      <S>
        <EMDRPage />
      </S>
    ),
  },
  {
    path: '/programs/tf-cbt',
    element: (
      <S>
        <TFCBTPage />
      </S>
    ),
  },
  {
    path: '/programs/somatic-experiencing',
    element: (
      <S>
        <SomaticExperiencing />
      </S>
    ),
  },
  {
    path: '/programs/motivational-interviewing',
    element: (
      <S>
        <MotivationalInterviewing />
      </S>
    ),
  },
  {
    path: '/programs/family-therapy',
    element: (
      <S>
        <FamilyTherapy />
      </S>
    ),
  },
  {
    path: '/programs/group-therapy',
    element: (
      <S>
        <GroupTherapy />
      </S>
    ),
  },
  {
    path: '/programs/individual-therapy',
    element: (
      <S>
        <IndividualTherapy />
      </S>
    ),
  },
  {
    path: '/programs/art-music-therapy',
    element: (
      <S>
        <ArtMusicTherapy />
      </S>
    ),
  },
  {
    path: '/programs/adventure-therapy',
    element: (
      <S>
        <AdventureTherapy />
      </S>
    ),
  },
  {
    path: '/programs/meditation-mindfulness',
    element: (
      <S>
        <MeditationTherapy />
      </S>
    ),
  },
  {
    path: '/programs/medication-management',
    element: (
      <S>
        <MedicationManagement />
      </S>
    ),
  },
  {
    path: '/programs/lgbtqia-affirming-care',
    element: (
      <S>
        <LGBTQIACare />
      </S>
    ),
  },
  {
    path: '/programs/holistic-treatment',
    element: (
      <S>
        <HolisticTreatment />
      </S>
    ),
  },
  {
    path: '/programs/trauma-informed-care',
    element: (
      <S>
        <TraumaInformedCare />
      </S>
    ),
  },

  // Conditions — Mental Health
  {
    path: '/conditions',
    element: (
      <S>
        <ConditionsIndex />
      </S>
    ),
  },
  {
    path: '/conditions/anxiety-treatment',
    element: (
      <S>
        <Anxiety />
      </S>
    ),
  },
  {
    path: '/conditions/depression-treatment',
    element: (
      <S>
        <Depression />
      </S>
    ),
  },
  {
    path: '/conditions/trauma-ptsd-treatment',
    element: (
      <S>
        <TraumaPTSD />
      </S>
    ),
  },
  {
    path: '/conditions/suicidal-ideation-treatment',
    element: (
      <S>
        <SuicidalIdeation />
      </S>
    ),
  },
  {
    path: '/conditions/ocd-treatment',
    element: (
      <S>
        <OCD />
      </S>
    ),
  },
  {
    path: '/conditions/bipolar-disorder-treatment',
    element: (
      <S>
        <BipolarDisorder />
      </S>
    ),
  },
  {
    path: '/conditions/autism-spectrum-treatment',
    element: (
      <S>
        <AutismSpectrum />
      </S>
    ),
  },
  {
    path: '/conditions/oppositional-defiant-disorder-treatment',
    element: (
      <S>
        <OppositionalDefiant />
      </S>
    ),
  },
  {
    path: '/conditions/conduct-disorder-treatment',
    element: (
      <S>
        <ConductDisorder />
      </S>
    ),
  },
  {
    path: '/conditions/dmdd-treatment',
    element: (
      <S>
        <DMDD />
      </S>
    ),
  },
  {
    path: '/conditions/bpd-treatment',
    element: (
      <S>
        <BPD />
      </S>
    ),
  },
  {
    path: '/conditions/adjustment-disorder-treatment',
    element: (
      <S>
        <AdjustmentDisorder />
      </S>
    ),
  },
  {
    path: '/conditions/dual-diagnosis-treatment',
    element: (
      <S>
        <DualDiagnosis />
      </S>
    ),
  },

  // Conditions — Substance Abuse
  {
    path: '/conditions/substance-abuse-treatment',
    element: (
      <S>
        <SubstanceAbuse />
      </S>
    ),
  },
  {
    path: '/conditions/alcohol-abuse-treatment',
    element: (
      <S>
        <AlcoholAbuse />
      </S>
    ),
  },
  {
    path: '/conditions/opioid-abuse-treatment',
    element: (
      <S>
        <OpioidAbuse />
      </S>
    ),
  },
  {
    path: '/conditions/benzodiazepine-abuse-treatment',
    element: (
      <S>
        <BenzodiazepineAbuse />
      </S>
    ),
  },
  {
    path: '/conditions/cocaine-abuse-treatment',
    element: (
      <S>
        <CocaineAbuse />
      </S>
    ),
  },
  {
    path: '/conditions/meth-abuse-treatment',
    element: (
      <S>
        <MethAbuse />
      </S>
    ),
  },
  {
    path: '/conditions/cannabis-abuse-treatment',
    element: (
      <S>
        <CannabisAbuse />
      </S>
    ),
  },

  // Conditions — Eating Disorders
  {
    path: '/conditions/anorexia-nervosa-treatment',
    element: (
      <S>
        <AnorexiaNervosa />
      </S>
    ),
  },
  {
    path: '/conditions/bulimia-nervosa-treatment',
    element: (
      <S>
        <BulimiaNervosa />
      </S>
    ),
  },
  {
    path: '/conditions/binge-eating-disorder-treatment',
    element: (
      <S>
        <BingeEating />
      </S>
    ),
  },
  {
    path: '/conditions/arfid-treatment',
    element: (
      <S>
        <ARFID />
      </S>
    ),
  },
  {
    path: '/conditions/osfed-treatment',
    element: (
      <S>
        <OSFED />
      </S>
    ),
  },
  {
    path: '/conditions/school-refusal-treatment',
    element: (
      <S>
        <SchoolRefusal />
      </S>
    ),
  },
  {
    path: '/conditions/compulsive-eating-treatment',
    element: (
      <S>
        <CompulsiveEating />
      </S>
    ),
  },

  // Insurance
  {
    path: '/insurance',
    element: (
      <S>
        <InsuranceIndex />
      </S>
    ),
  },
  {
    path: '/insurance/aetna',
    element: (
      <S>
        <Aetna />
      </S>
    ),
  },
  {
    path: '/insurance/cigna',
    element: (
      <S>
        <Cigna />
      </S>
    ),
  },
  {
    path: '/insurance/ambetter',
    element: (
      <S>
        <Ambetter />
      </S>
    ),
  },
  {
    path: '/insurance/uhc',
    element: (
      <S>
        <UHC />
      </S>
    ),
  },
  {
    path: '/insurance/hpn',
    element: (
      <S>
        <HPN />
      </S>
    ),
  },
  {
    path: '/insurance/medicaid-ffs',
    element: (
      <S>
        <MedicaidFFS />
      </S>
    ),
  },
  {
    path: '/insurance/geha',
    element: (
      <S>
        <GEHA />
      </S>
    ),
  },
  {
    path: '/insurance/umr',
    element: (
      <S>
        <UMR />
      </S>
    ),
  },

  // Locations
  {
    path: '/locations',
    element: (
      <S>
        <LocationsIndex />
      </S>
    ),
  },
  {
    path: '/locations/las-vegas',
    element: (
      <S>
        <LasVegas />
      </S>
    ),
  },
  {
    path: '/locations/henderson',
    element: (
      <S>
        <Henderson />
      </S>
    ),
  },
  {
    path: '/locations/north-las-vegas',
    element: (
      <S>
        <NorthLasVegas />
      </S>
    ),
  },
  {
    path: '/locations/summerlin',
    element: (
      <S>
        <Summerlin />
      </S>
    ),
  },
  {
    path: '/locations/clark-county',
    element: (
      <S>
        <ClarkCounty />
      </S>
    ),
  },

  // About
  {
    path: '/about/our-team',
    element: (
      <S>
        <Team />
      </S>
    ),
  },
  {
    path: '/about/facility',
    element: (
      <S>
        <Facility />
      </S>
    ),
  },
  {
    path: '/about/youth-academy',
    element: (
      <S>
        <YouthAcademy />
      </S>
    ),
  },

  // Admissions & Contact
  {
    path: '/admissions',
    element: (
      <S>
        <Process />
      </S>
    ),
  },
  {
    path: '/contact',
    element: (
      <S>
        <Contact />
      </S>
    ),
  },

  // Resources
  {
    path: '/resources',
    element: (
      <S>
        <ResourcesIndex />
      </S>
    ),
  },
  {
    path: '/resources/crisis-prevention-intervention',
    element: (
      <S>
        <CPIArticle />
      </S>
    ),
  },
  {
    path: '/resources/defiant-teenager-treatment',
    element: (
      <S>
        <DefiantTeenArticle />
      </S>
    ),
  },
  {
    path: '/resources/school-burnout-signs',
    element: (
      <S>
        <SchoolBurnoutArticle />
      </S>
    ),
  },

  // Comparisons
  {
    path: '/compare',
    element: (
      <S>
        <ComparisonsIndex />
      </S>
    ),
  },
  {
    path: '/compare/cbt-vs-dbt',
    element: (
      <S>
        <CbtVsDbt />
      </S>
    ),
  },
  {
    path: '/compare/residential-vs-php',
    element: (
      <S>
        <ResidentialVsPhp />
      </S>
    ),
  },
  {
    path: '/compare/residential-vs-iop',
    element: (
      <S>
        <ResidentialVsIop />
      </S>
    ),
  },
  {
    path: '/compare/anxiety-vs-depression',
    element: (
      <S>
        <AnxietyVsDepression />
      </S>
    ),
  },
  {
    path: '/compare/ptsd-vs-anxiety',
    element: (
      <S>
        <PtsdVsAnxiety />
      </S>
    ),
  },
  {
    path: '/compare/anorexia-vs-bulimia',
    element: (
      <S>
        <AnorexiaVsBulimia />
      </S>
    ),
  },

  // Standalone
  {
    path: '/our-approach',
    element: (
      <S>
        <OurApproach />
      </S>
    ),
  },
  {
    path: '/faq',
    element: (
      <S>
        <FAQ />
      </S>
    ),
  },
  {
    path: '/hipaa-notice',
    element: (
      <S>
        <HIPAA />
      </S>
    ),
  },

  // Legal
  {
    path: '/privacy',
    element: (
      <S>
        <Privacy />
      </S>
    ),
  },

  // 404 catch-all
  {
    path: '*',
    element: (
      <S>
        <NotFound />
      </S>
    ),
  },
]

// --- Route paths for pre-rendering (exported for scripts/prerender.ts) ---
export const routePaths: string[] = routes
  .map((r) => r.path)
  .filter((p): p is string => p !== undefined && p !== '*')
