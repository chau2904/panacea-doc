import {useCallback, useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from '../HomepageSection.module.css';

const Icon = ({children}) => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true">
    {children}
  </svg>
);

const icons = {
  layers: (
    <Icon>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </Icon>
  ),
  spark: (
    <Icon>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
    </Icon>
  ),
  table: (
    <Icon>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="9" y1="10" x2="9" y2="20" />
    </Icon>
  ),
  bolt: (
    <Icon>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </Icon>
  ),
  shield: (
    <Icon>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </Icon>
  ),
  pulse: (
    <Icon>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </Icon>
  ),
  wrench: (
    <Icon>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z" />
    </Icon>
  ),
  pipeline: (
    <Icon>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M6 8.5v3a4 4 0 0 0 4 4h5.5" />
      <polyline points="13 13 15.5 15.5 13 18" />
    </Icon>
  ),
  devices: (
    <Icon>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <line x1="11" y1="18" x2="13" y2="18" />
    </Icon>
  ),
};

const HighlightList = [
  {
    icon: 'layers',
    title: 'Every Platform, One Harness',
    summary:
      'Mobile, web, APIs, databases, enterprise systems, and physical hardware, all tested from one harness.',
    points: [
      'Mobile apps on Android and iOS, tested on real devices, ready out of the box.',
      'Web applications across all major browsers and operating systems.',
      'REST APIs tested through a ready-made keyword library, extendable with your own methods.',
      'Databases, enterprise systems like SAP and Salesforce, and ETL pipelines validated at the source, so every layer of state is verified, not assumed.',
      'Physical hardware and BLE reliability suites, exercised as a real user would.',
    ],
  },
  {
    icon: 'spark',
    title: 'AI-Assisted Authoring',
    featured: true,
    summary:
      'Turn plain-language intent into well-formed Gherkin scenarios, built from the keywords you already own.',
    points: [
      'Describe intent in plain language and receive well-formed Gherkin scenarios in return.',
      'Compose new test scripts from the keywords, objects, and suites you already own.',
      'Spend less time typing tests and more time deciding what is worth testing.',
      'Readable scenarios that testers, developers, and business stakeholders can all follow.',
      'A shorter path from a requirement to a test that actually runs.',
    ],
  },
  {
    icon: 'table',
    title: 'Data That Drives the Tests',
    summary:
      'Feed tests from Excel and CSV so one scenario covers many inputs, with no script changes.',
    points: [
      'Feed scenarios from Excel and CSV sources without touching the script.',
      'Bind data at the test-case and suite level for layered, structured datasets.',
      'One scenario, many inputs: coverage grows while maintenance stays flat.',
      'Anyone on the team can add or adjust test data, no coding required.',
      'Run the same tests against different data sets without duplicating a single script.',
    ],
  },
  {
    icon: 'bolt',
    title: 'Execution Without Limits',
    summary:
      'Run mobile, web, and API suites in parallel, targeted by tag, suite, or scenario.',
    points: [
      'One runner for mobile, web, and API, launched from the CLI or a remote machine.',
      'Parallel runs across browsers and devices, so big suites finish in a fraction of the time.',
      'Endurance runs proven beyond 120 minutes of continuous execution.',
      'Target by tag, suite, or scenario to run exactly what matters, when it matters.',
      'Repeat any test or step on demand to confirm a fix or chase down a flaky result.',
    ],
  },
  {
    icon: 'shield',
    title: 'Evidence You Can Trust',
    summary:
      'Reports, screenshots, and video for every run, with sensitive data masked automatically.',
    points: [
      'Reports in HTML, XML, and CSV, ready for people and tools alike.',
      'Screenshots and video attached, so failures are seen, not guessed.',
      'Per-device results unified into one coherent view.',
      'Download the full evidence as a zip, ready to archive or share.',
      'Credentials and personal data masked automatically in every report and log.',
    ],
  },
  {
    icon: 'pulse',
    title: 'Logs That Tell the Whole Story',
    summary:
      'Device, Appium, browser, and Bluetooth logs captured as you run and searchable in one place.',
    points: [
      'Device logs, Appium traces, and browser console output captured as you run.',
      'Bluetooth snoop logs and Frontline / Ellisys sniffer captures, parsed for insight.',
      'Everything streamed into Elasticsearch for fast, searchable history.',
      'Surfaced through Kibana dashboards your team can explore on its own.',
      'Trace a failure from symptom to root cause without hunting across tools.',
    ],
  },
  {
    icon: 'wrench',
    title: 'Built to Be Maintained',
    summary:
      'Reusable keywords, shared objects, and tagged suites keep upkeep low as your product grows.',
    points: [
      'Create, import, and export custom keywords that grow with your domain.',
      'Share test cases, objects, profiles, and configurations across projects.',
      'Organize with tags and suites, so any slice of the product can be run on its own.',
      'An enhanced debugger to trace failures fast.',
      'Reusable building blocks keep upkeep low as your product grows.',
    ],
  },
  {
    icon: 'pipeline',
    title: 'Woven Into Your Pipeline',
    summary:
      'Launch runs from your connected repositories and publish results straight to Xray.',
    points: [
      'Test results published to Xray, so quality is tracked where your team already works.',
      'Launch a run from the dashboard by choosing a connected repository and a test execution file.',
      'Connect your GitHub or Bitbucket repositories once, and run against them whenever you need.',
      'Every execution is kept in one history, with per-test reports and artifacts a click away.',
      'Live pass rates and run status visible to the whole team at a glance.',
    ],
  },
  {
    icon: 'devices',
    title: 'Panacea Device Farm',
    summary:
      'A shared pool of real phones, with tests routed to the right device automatically.',
  points: [
    'Run tests on real phones, emulators or any devices so results reflect what your customers actually experience.',
    'One shared pool of devices for the whole team. See what is free, busy, or offline at a glance.',
    'Tests are routed to the right device automatically. No manual booking, no spreadsheets, no clashes.',
    'Scale from a handful of devices to a full lab by adding stations, without disrupting running tests.',
    'Every run, on every device, rolls into one history with pass rates, reports, and artifacts.',
  ],
  },
];

function CardTop({icon, title, featured, index, titleId}) {
  return (
    <div className={styles.cardTop}>
      <div className={styles.cardHead}>
        <span className={styles.icon}>{icons[icon]}</span>
        <Heading as="h3" id={titleId} className={styles.cardTitle}>
          {title}
        </Heading>
      </div>
      {featured ? (
        <span className={styles.badge}>AI-Powered</span>
      ) : (
        <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
      )}
    </div>
  );
}

function Highlight({summary, featured, onOpen, ...props}) {
  return (
    <button
      type="button"
      className={clsx(styles.card, styles.cardButton, featured && styles.featured)}
      onClick={onOpen}
      aria-haspopup="dialog">
      <CardTop featured={featured} {...props} />
      <p className={styles.summary}>{summary}</p>
      <span className={styles.more}>View details →</span>
    </button>
  );
}

function HighlightModal({item, index, onClose}) {
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    const {overflow} = document.body.style;
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="highlight-modal-title"
        className={clsx(styles.modal, item.featured && styles.featured)}
        onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeRef}
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close">
          ×
        </button>
        <CardTop {...item} index={index} titleId="highlight-modal-title" />
        <p className={styles.summary}>{item.summary}</p>
        <ul className={styles.points}>
          {item.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>,
    document.body,
  );
}

export default function HomepageHighlights() {
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section className={clsx(styles.section, styles.glowA)}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Platform at a Glance</span>
          <Heading as="h2" className={clsx(styles.title, 'panaceaGradientText')}>
            One Platform. Every Layer. Total Confidence.
          </Heading>
          <p className={styles.lead}>
            Quality is not a phase — it is a discipline. Panacea gives that
            discipline a single home: one place to author, execute, observe,
            and prove the behavior of everything you ship.
          </p>
        </div>
        <div className={styles.grid}>
          {HighlightList.map((props, idx) => (
            <Highlight key={idx} index={idx} onOpen={() => setOpen(idx)} {...props} />
          ))}
        </div>
      </div>
      {open !== null && (
        <HighlightModal item={HighlightList[open]} index={open} onClose={close} />
      )}
    </section>
  );
}
