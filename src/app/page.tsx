"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";

type PersonaId = "engineer" | "technician" | "operator";

const principles = [
  {
    title: "Spatial / Temporal Awareness",
    subtitle: "Continuously synchronized 4D digital twins",
    points: [
      "Volumetric telemetry overlays for heat, vibration, and energy flow",
      "Versioned playback to scrub incidents and highlight causal chains",
      "Anomaly curtains expose deviations from statistical process envelopes",
    ],
  },
  {
    title: "Programming Spectrum",
    subtitle: "Fluid authoring across drag-drop, code, and natural language",
    points: [
      "IEC 61131-3 co-pilot converts natural intent into provable ladder logic",
      "Composable micro-flows simulate against live process constraints",
      "Guard-railed deployment paths enforce safety and cybersecurity policy",
    ],
  },
  {
    title: "Predictive Intent",
    subtitle: "AI anticipates operator goals from context",
    points: [
      "Multi-modal behavior signals drive adaptive UI focus states",
      "Scenario generation projects downstream outcomes before execution",
      "Reinforcement learning agents surface optimal responses for alarms",
    ],
  },
  {
    title: "Unified Asset Graph",
    subtitle: "Every device becomes a self-describing, real-time node",
    points: [
      "GraphQL layer federates OT, IT, and CMMS sources into a single graph",
      "State streaming with millisecond deltas keeps twins authoritative",
      "Policy engine governs lineage, compliance, and handoff checkpoints",
    ],
  },
];

const components = [
  {
    name: "Dynamic Process Canvas",
    headline: "Immersive operations cockpit",
    bullets: [
      "Smart zoom transitions from plant layout to sub-component diagnostics",
      "3D overlays render thermal, stress, and flow vectors in real time",
      "Gesture vocabulary enables rotate, slice, and isolate mechanics in AR",
    ],
  },
  {
    name: "Programming Spectrum",
    headline: "Author once, deploy everywhere",
    bullets: [
      "Drag-drop logic linked to semantic tags and reusable routines",
      "Dual-view editor syncs IEC 61131-3 with high-level intents",
      "Autonomous testing harness validates against virtualized PLCs",
    ],
  },
  {
    name: "Predictive Intent",
    headline: "Contextual guidance before issues escalate",
    bullets: [
      "Behavior models predict next actions to reduce cognitive load",
      "Root-cause hypothesis graph refines with every operator correction",
      "AI pair-operator suggests automation assists with explainability",
    ],
  },
  {
    name: "Unified Asset Graph",
    headline: "From isolated systems to living mesh",
    bullets: [
      "Edge nodes broadcast health score, capability, and firmware status",
      "Knowledge fabric links documentation, work orders, and live data",
      "Cross-reality clients subscribe to the same authoritative state",
    ],
  },
  {
    name: "Cross-Reality Collaboration",
    headline: "Every modality synchronized",
    bullets: [
      "AR glasses, wall displays, mobile, and voice all share one session",
      "Spatial annotations pin insights to equipment for asynchronous teams",
      "Session recording captures evidence trails for audits and training",
    ],
  },
];

const personas: Record<
  PersonaId,
  {
    label: string;
    intent: string;
    responsibilities: string[];
    intelligence: string;
    safeguards: string[];
  }
> = {
  engineer: {
    label: "Control Engineer",
    intent: "Design resilient automation sequences and tune orchestrations.",
    responsibilities: [
      "Model machine-to-machine interactions across edge cells",
      "Validate safety interlocks before deploying to PLC networks",
      "Collaborate on change requests with secure code review workflows",
    ],
    intelligence:
      "Design co-pilot translates requirements to IEC routines and flags conflicts before runtime.",
    safeguards: [
      "Dual authorization gates for critical motion profiles",
      "Deterministic simulation harness synced with historian snapshots",
      "Traceable diffing between live logic and staging artifacts",
    ],
  },
  technician: {
    label: "Field Technician",
    intent: "Keep production cells performing within tolerance.",
    responsibilities: [
      "Diagnose faults with guided AR overlays and procedure cards",
      "Swap smart modules with auto-provisioned signatures",
      "Escalate anomalies with rich telemetry bundles to experts",
    ],
    intelligence:
      "Repair advisor fuses device health, manuals, and live guidance into a single view.",
    safeguards: [
      "Lock-step handover to remote experts with shared annotations",
      "Hazard zoning alerts in AR with live occupancy data",
      "One-tap rollback restores golden configurations post-repair",
    ],
  },
  operator: {
    label: "Operations Lead",
    intent: "Orchestrate throughput, quality, and energy usage on the floor.",
    responsibilities: [
      "Monitor KPI beacons across lines, cells, and critical assets",
      "Trigger adaptive recipes that respond to demand and supply",
      "Coordinate shift handovers with contextual narratives",
    ],
    intelligence:
      "Decision companion forecasts rate, yield, and risk trajectories in real time.",
    safeguards: [
      "Closed-loop approval flow for overrides beyond safe bands",
      "Compliance audit trail with voice-to-text tagging",
      "Predictive fatigue scoring protects against operator drift",
    ],
  },
};

const continuum = [
  {
    stage: "Edge",
    description: "Deterministic control at the cell level",
    threads: [
      "Ruggedized compute with real-time Linux + TSN",
      "GPU-accelerated vision for defect and safety monitoring",
      "Offline-first twin with 30-day retention",
    ],
  },
  {
    stage: "Fog",
    description: "Regional coordination and buffering",
    threads: [
      "Event mesh normalizes OT protocols into the asset graph",
      "Policy engine enforces zero-trust segmentation",
      "Temporal analytics detect drift across peer cells",
    ],
  },
  {
    stage: "Cloud",
    description: "Global optimization and collaboration",
    threads: [
      "Model lifecycle hub retrains predictive intent services",
      "Fleet governance automates updates with staged rollout",
      "Enterprise dashboards unify production, maintenance, and ESG KPIs",
    ],
  },
];

const aiRails = [
  {
    title: "Perception",
    detail: "Sensor fusion ingests video, vibration, thermal, and acoustics into the twin.",
  },
  {
    title: "Cognition",
    detail: "Intent engines reconcile human goals with safety envelopes and regulations.",
  },
  {
    title: "Collaboration",
    detail: "Shared sessions anchor annotations, voice clips, and approvals to the asset graph.",
  },
  {
    title: "Governance",
    detail: "Explainability layers expose decision paths, confidence, and data lineage for every action.",
  },
];

export default function Home() {
  const [activePersona, setActivePersona] = useState<PersonaId>("engineer");

  const persona = useMemo(() => personas[activePersona], [activePersona]);

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroBadge}>Axiom HMI · Edge-Cloud Continuum</div>
        <h1>
          Next-gen industrial automation interface that understands context,
          intent, and every asset in motion.
        </h1>
        <p>
          Axiom HMI aligns engineers, technicians, and operators through a
          unified, adaptive experience. Spatial computing, AI augmentation, and
          collaborative workflows converge to keep production resilient.
        </p>
        <div className={styles.heroActions}>
          <button type="button" className={styles.actionPrimary}>
            Launch Dynamic Process Canvas
          </button>
          <button type="button" className={styles.actionSecondary}>
            Download Platform Blueprint
          </button>
        </div>
        <dl className={styles.heroStats}>
          <div>
            <dt>Latency-aware twins</dt>
            <dd>&lt; 50 ms sync from edge to cloud</dd>
          </div>
          <div>
            <dt>AI interventions</dt>
            <dd>92% resolved before alarms trigger</dd>
          </div>
          <div>
            <dt>Collaborative sessions</dt>
            <dd>+48% faster shift handovers</dd>
          </div>
        </dl>
      </header>

      <main className={styles.main}>
        <section className={styles.principles}>
          <h2>Core Principles</h2>
          <div className={styles.principleGrid}>
            {principles.map((principle) => (
              <article key={principle.title} className={styles.principleCard}>
                <div className={styles.cardHeader}>
                  <h3>{principle.title}</h3>
                  <p>{principle.subtitle}</p>
                </div>
                <ul>
                  {principle.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.canvasSection}>
          <div className={styles.canvasIntro}>
            <h2>Dynamic Process Canvas</h2>
            <p>
              Immerse teams inside a living model of the plant. The canvas merges
              telemetry, simulation, and controls into a single adaptive view
              accessible from AR devices, large-format surfaces, and web.
            </p>
            <div className={styles.canvasTags}>
              <span>4D smart zoom</span>
              <span>Thermal &amp; stress overlays</span>
              <span>Gesture-driven inspection</span>
              <span>Incident playback</span>
            </div>
          </div>
          <div className={styles.canvasShell} aria-hidden="true">
            <div className={styles.canvasGrid}>
              <div className={styles.canvasNode}>
                <h4>Cell A12</h4>
                <p>Torque variance +3.1%</p>
              </div>
              <div className={styles.canvasNode}>
                <h4>Robot Arm</h4>
                <p>Thermal spike predicted</p>
              </div>
              <div className={styles.canvasNode}>
                <h4>Vision Station</h4>
                <p>Defect probability 0.6%</p>
              </div>
              <div className={styles.canvasNode}>
                <h4>Conveyor Network</h4>
                <p>Flow optimized</p>
              </div>
            </div>
            <div className={styles.canvasOrbit}></div>
          </div>
        </section>

        <section className={styles.components}>
          <h2>Key Components</h2>
          <div className={styles.componentList}>
            {components.map((component) => (
              <article key={component.name} className={styles.componentCard}>
                <header>
                  <span>{component.name}</span>
                  <h3>{component.headline}</h3>
                </header>
                <ul>
                  {component.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.personaSection}>
          <div className={styles.personaHeader}>
            <h2>Adaptive to Every Role</h2>
            <p>
              The interface reconfigures layouts, automation assist, and guard
              rails based on who is in control. Personas are verified by
              context-aware authentication and intent modeling.
            </p>
          </div>
          <div className={styles.personaSwitch}>
            {Object.entries(personas).map(([id, { label }]) => (
              <button
                key={id}
                type="button"
                onClick={() => setActivePersona(id as PersonaId)}
                className={
                  activePersona === id
                    ? `${styles.personaButton} ${styles.personaButtonActive}`
                    : styles.personaButton
                }
              >
                {label}
              </button>
            ))}
          </div>
          <div className={styles.personaPanel}>
            <div className={styles.personaIntent}>
              <h3>{persona.label}</h3>
              <p>{persona.intent}</p>
              <strong>AI intelligence</strong>
              <p>{persona.intelligence}</p>
            </div>
            <div className={styles.personaDetails}>
              <div>
                <h4>Responsibilities</h4>
                <ul>
                  {persona.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Safeguards</h4>
                <ul>
                  {persona.safeguards.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.continuumSection}>
          <h2>Edge-Cloud Continuum</h2>
          <p>
            Deterministic edge control, fog coordination, and cloud-scale
            optimization operate as a single nervous system. Each layer shares
            the same asset graph and policy engine.
          </p>
          <div className={styles.continuumRail}>
            {continuum.map((layer) => (
              <article key={layer.stage} className={styles.continuumCard}>
                <header>
                  <span>{layer.stage}</span>
                  <h3>{layer.description}</h3>
                </header>
                <ul>
                  {layer.threads.map((thread) => (
                    <li key={thread}>{thread}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.aiSection}>
          <h2>AI Augmentation Rails</h2>
          <div className={styles.aiGrid}>
            {aiRails.map((rail) => (
              <article key={rail.title}>
                <h3>{rail.title}</h3>
                <p>{rail.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.callout}>
          <div>
            <h2>Collaborative Workflow Engine</h2>
            <p>
              Orchestrate playbooks that span humans, robots, and AI agents.
              Every action, from a voice command to a PLC change set, carries
              provenance and can be simulated before activation.
            </p>
          </div>
          <ul>
            <li>Session mesh keeps all participants in lockstep, online or offline.</li>
            <li>Approval gates adapt to risk level, geography, and compliance mandates.</li>
            <li>Knowledge capture auto-generates rich reports ready for audits.</li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <span>Axiom HMI</span>
          <span>Unified Industrial Intelligence Platform</span>
        </div>
        <div>
          <a href="#">Platform Overview</a>
          <a href="#">Safety &amp; Compliance</a>
          <a href="#">Edge Deployment Kit</a>
        </div>
      </footer>
    </div>
  );
}
