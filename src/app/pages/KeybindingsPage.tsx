import { PDFSection } from '@/app/components/PDFSection';
import { PDFCallout } from '@/app/components/PDFCallout';
import { PDFTable } from '@/app/components/PDFTable';

interface KeybindingsPageProps {
  onNavigate?: (pageId: string) => void;
}

export function KeybindingsPage({ onNavigate }: KeybindingsPageProps) {
  const seatsBinds = [
    {
      action: "Enter Remote Turret 1",
      keybind: "",
      description: "Go straight to remote turret 1 "
    },
    {
      action: "Enter Remote Turret 2",
      keybind: "",
      description: "Go straight to remote turret 2"
    },
    {
      action: "Enter Remote Turret 3",
      keybind: "",
      description: "Go straight to remote turret 3"
    },
  ];

  const cockpitBinds = [
    {
      action: "Flight / Systems Ready",
      keybind: "",
      description: "Should already be set. You can chain additional preferences to this key if needed"
    },
  ];

  const mfdBinds = [
    {
      action: "Cycle Page - Forwards (Short Press)",
      keybind: "E",
      description: ""
    },
    {
      action: "Cycle Page - Backwards (Short Press)",
      keybind: "Left Shift + E",
      description: ""
    },
    {
      action: "Select - MFD 1 (Short Press)",
      keybind: "Left Alt + Q",
      description: ""
    },
    {
      action: "Select - MFD 2 (Short Press)",
      keybind: "Left Alt + E",
      description: ""
    },
    {
      action: "Set Page - Communications (Short Press)",
      keybind: "Left Alt + E",
      description: ""
    },
    {
      action: "Set Page - Resource Network (Short Press)",
      keybind: "Left Alt + Q",
      description: ""
    },
  ];

  const targetingBinds = [
    {
      action: "Auto Targeting: Toggle Off (Short Press)",
      keybind: "",
      description: "Bind this to the same key as your Flight Ready Key"
    },
    {
      action: "Pin Index 1, 2, 3 - Lock/Unlock",
      keybind: "",
      description: "Currently broken but keep these binds for when it's fixed"
    },
    {
      action: "Pin Index 1, 2, 3 - Pin/Unpin",
      keybind: "",
      description: "The actual assigning of the pins to friendlies/enemies"
    },
  ];

  const subTargetBinds = [
    {
      action: "Cycle Sub-Target Forward",
      keybind: "",
      description: "Extremely important. Cycle through key components for more effective damage"
    },
    {
      action: "Cycle Sub-Target Back",
      keybind: "",
      description: "Cycle backwards if you skip the intended component"
    },
  ];

  const turretMovementBinds = [
    {
      action: "Toggle Turret Mouse Movement",
      keybind: "Q (Default)",
      description: "Unless you're experienced in relative mode, unbind this entirely"
    },
    {
      action: "Exit Remote Turret",
      keybind: "Y",
      description: "Tapping inner-thought key pulls you out of turret view"
    },
    {
      action: "Turret Gyro Stabilization (Toggle)",
      keybind: "E",
      description: "Toggle is fine since it's an observable state change"
    },
    {
      action: "Next Remote Turret",
      keybind: "D",
      description: "Rotate through multiple remote turrets per seat without exiting"
    },
    {
      action: "Previous Remote Turret",
      keybind: "",
      description: "Same as above, reverse direction"
    },
  ];

  const turretAdvancedBinds = [
    {
      action: "Recenter Turret (HOLD)",
      keybind: "C (Default)",
      description: "Extremely important. You'll use this very frequently"
    },
    {
      action: "Cycle fire mode (staggered/combined)",
      keybind: "",
      description: "Situational. Remain combined unless requested by PIC or Master Gunner"
    },
    {
      action: "Change Turret Position",
      keybind: "S (Default)",
      description: "Currently only used in Scorpius and A1 ships"
    },
    {
      action: "Turret - Speed Limiter",
      keybind: "",
      description: "Not recommended. Get used to maximum turret speed instead"
    },
  ];

  const weaponBinds = [
    {
      action: "Set Lead / Set Lag Pips",
      keybind: "",
      description: "Lag allows more precision for targeting externals that cannot be sub-targeted"
    },
    {
      action: "Cycle Gimbal Assist Modes",
      keybind: "RALT-G (Default)",
      description: "Switch from Auto gimbal to Manual when needed"
    },
  ];

  return (
    <>
      <PDFSection 
        title="Keybindings and Settings" 
        subtitle="Essential keybindings for turret operations and combat effectiveness"
        level={1}
      >
        <p>
          This section covers the essential keybindings for operating your turret. Some are strictly for turret operations, 
          while others are general best practices.
        </p>

        <PDFCallout type="warning" title="Binding Preferences">
          Hard swapping keybinds with modifiers 
          (<kbd className="text-indigo-300 bg-gray-900 px-2 py-1 rounded text-xs border border-gray-700 mx-0.5">ALT+</kbd>, 
          <kbd className="text-indigo-300 bg-gray-900 px-2 py-1 rounded text-xs border border-gray-700 mx-0.5">RALT+</kbd>, 
          <kbd className="text-indigo-300 bg-gray-900 px-2 py-1 rounded text-xs border border-gray-700 mx-0.5">SHIFT+</kbd>) 
          is generally preferred over toggles. This isn't exclusively a turret best-practice.
        </PDFCallout>
      </PDFSection>

      <PDFSection title="Vehicles - Seats and Operator Modes" level={2}>
        <PDFTable
          columns={[
            { header: 'Action', key: 'action', width: '30%' },
            { header: 'Keybind', key: 'keybind', width: '20%' },
            { header: 'Description', key: 'description', width: '50%' },
          ]}
          rows={seatsBinds}
        />
      </PDFSection>

      <PDFSection title="Vehicles - Cockpit" level={2}>
        <PDFTable
          columns={[
            { header: 'Action', key: 'action', width: '30%' },
            { header: 'Keybind', key: 'keybind', width: '20%' },
            { header: 'Description', key: 'description', width: '50%' },
          ]}
          rows={cockpitBinds}
        />
      </PDFSection>

      <PDFSection title="Multi Function Displays (MFDs)" level={2}>
        <p className="mb-4">
          Configure these to match your fighter bindings
        </p>

        <PDFCallout type="info">
          These bindings should mirror the binds you use in a fighter. Power/Diagnostics on one side, 
          comms for targeting and calling on the other. The ability to cycle pages is extremely useful 
          when you cannot cycle manually.
        </PDFCallout>

        <PDFTable
          subtitle="Example bindings (mirrored from 0men/Tux)"
          columns={[
            { header: 'Action', key: 'action', width: '40%' },
            { header: 'Keybind', key: 'keybind', width: '25%' },
            { header: 'Notes', key: 'description', width: '35%' },
          ]}
          rows={mfdBinds}
        />
      </PDFSection>

      <PDFSection title="Vehicles - Targeting" level={2}>
        <PDFTable
          columns={[
            { header: 'Action', key: 'action', width: '35%' },
            { header: 'Keybind', key: 'keybind', width: '20%' },
            { header: 'Description', key: 'description', width: '45%' },
          ]}
          rows={targetingBinds}
        />
      </PDFSection>

      <PDFSection title="Target Cycling" level={2}>
        <PDFCallout type="important" title="Critical for Component Targeting">
          Sub-targeting is essential for effective damage application.
        </PDFCallout>

        <PDFTable
          columns={[
            { header: 'Action', key: 'action', width: '30%' },
            { header: 'Keybind', key: 'keybind', width: '20%' },
            { header: 'Description', key: 'description', width: '50%' },
          ]}
          rows={subTargetBinds}
        />

        <p className="text-sm text-gray-400 mt-4">
          Additional sub-targeting guidance is available in the <strong>Sub Targeting</strong> section.
        </p>
      </PDFSection>

      <PDFSection title="Turret Movement" level={2}>
        <PDFTable
          columns={[
            { header: 'Action', key: 'action', width: '30%' },
            { header: 'Keybind', key: 'keybind', width: '20%' },
            { header: 'Description', key: 'description', width: '50%' },
          ]}
          rows={turretMovementBinds}
        />
      </PDFSection>

      <PDFSection title="Turret Advanced" level={2}>
        <PDFTable
          columns={[
            { header: 'Action', key: 'action', width: '30%' },
            { header: 'Keybind', key: 'keybind', width: '20%' },
            { header: 'Description', key: 'description', width: '50%' },
          ]}
          rows={turretAdvancedBinds}
        />
      </PDFSection>

      <PDFSection title="Vehicles - Weapons" level={2}>
        <PDFTable
          columns={[
            { header: 'Action', key: 'action', width: '30%' },
            { header: 'Keybind', key: 'keybind', width: '20%' },
            { header: 'Description', key: 'description', width: '50%' },
          ]}
          rows={weaponBinds}
        />
      </PDFSection>

      <PDFCallout type="info" title="Further Reading">
          The{' '}
          <button
            onClick={() => onNavigate?.('game-settings')}
            className="text-indigo-400 hover:text-indigo-300 font-semibold underline cursor-pointer"
          >
            Addl. Keybindings
          </button>{' '}
          section covers common keybinds in more detail, as well as game settings recommendations.
        </PDFCallout>
    </>
  );
}
