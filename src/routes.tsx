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

// Insurance
const InsuranceIndex = lazy(() => import('./pages/insurance/Index'))
const Aetna = lazy(() => import('./pages/insurance/Aetna'))
const Cigna = lazy(() => import('./pages/insurance/Cigna'))
const BCBS = lazy(() => import('./pages/insurance/BCBS'))
const Ambetter = lazy(() => import('./pages/insurance/Ambetter'))
const Humana = lazy(() => import('./pages/insurance/Humana'))
const UHC = lazy(() => import('./pages/insurance/UHC'))
const TRICARE = lazy(() => import('./pages/insurance/TRICARE'))
const Medicaid = lazy(() => import('./pages/insurance/Medicaid'))
const Anthem = lazy(() => import('./pages/insurance/Anthem'))

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
    path: '/conditions/oppositional-defiant-treatment',
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
    path: '/conditions/binge-eating-treatment',
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
    path: '/insurance/bcbs',
    element: (
      <S>
        <BCBS />
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
    path: '/insurance/humana',
    element: (
      <S>
        <Humana />
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
    path: '/insurance/tricare',
    element: (
      <S>
        <TRICARE />
      </S>
    ),
  },
  {
    path: '/insurance/medicaid',
    element: (
      <S>
        <Medicaid />
      </S>
    ),
  },
  {
    path: '/insurance/anthem',
    element: (
      <S>
        <Anthem />
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
