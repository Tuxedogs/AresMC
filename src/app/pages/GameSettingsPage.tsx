import { PDFSection } from '@/app/components/PDFSection';
import { PDFCallout } from '@/app/components/PDFCallout';
import { PDFTable } from '@/app/components/PDFTable';

export function GameSettingsPage() {
  const lightAmplificationBinds = [
    {
      action: "Light Amplification Toggle",
      keybind: "RALT + L",
      description: "Default toggle for light amplification"
    },
    {
      action: "On",
      keybind: "Unbound",
      description: "Explicitly turn light amplification on"
    },
    {
      action: "Off",
      keybind: "Unbound",
      description: "Explicitly turn light amplification off"
    },
  ];

  const flightDefaults = [
    {
      action: "Automatic Slowdown On",
      keybind: "No",
      description: ""
    },
    {
      action: "Gravity Compensation On",
      keybind: "No",
      description: ""
    },
    {
      action: "Wind Compensation On",
      keybind: "No",
      description: ""
    },
    {
      action: "G-Safe On",
      keybind: "No",
      description: ""
    },
    {
      action: "Boost Disables G-Safe",
      keybind: "Yes",
      description: ""
    },
    {
      action: "Space Brake Enables Boost",
      keybind: "No",
      description: ""
    },
    {
      action: "Proximity Assist On",
      keybind: "No",
      description: ""
    },
  ];

  const hudSettings = [
    {
      action: "Advanced HUD on in SCM",
      keybind: "Yes",
      description: "NAV mode enabled"
    },
    {
      action: "Advanced HUD prefers labels",
      keybind: "Preference",
      description: "Personal choice"
    },
    {
      action: "Course Prediction on",
      keybind: "Preference",
      description: "Personal choice"
    },
  ];

  const vjoySettings = [
    {
      action: "Vjoy - Visibility",
      keybind: "Always Visible",
      description: ""
    },
    {
      action: "Pilot - Velocity Indicator",
      keybind: "Always On",
      description: ""
    },
    {
      action: "Range (degrees)",
      keybind: "Minimum possible",
      description: "Pilot Vjoy setting"
    },
    {
      action: "Use Raw Input",
      keybind: "Yes",
      description: ""
    },
    {
      action: "Mouse Deadzone (% of the range)",
      keybind: "Minimum possible",
      description: "Applies to pilot/driver/turret"
    },
  ];

  const weaponDefaults = [
    {
      action: "(Pilot) - Gimbals Locked",
      keybind: "Yes",
      description: ""
    },
    {
      action: "(Gunner) Gimbals Locked",
      keybind: "No",
      description: ""
    },
    {
      action: "Magnified UI On",
      keybind: "No",
      description: ""
    },
    {
      action: "Precision Lines On",
      keybind: "Yes",
      description: ""
    },
    {
      action: "Staggered Fire On",
      keybind: "No",
      description: ""
    },
    {
      action: "Fading Pips On",
      keybind: "No",
      description: ""
    },
  ];

  const targetingSettings = [
    {
      action: "Max Auto Zoom Level",
      keybind: "0",
      description: "Disable auto zoom"
    },
    {
      action: "Show Heading + Distance + Name + Reticle",
      keybind: "Yes",
      description: "All targeting info visible"
    },
    {
      action: "Pilot - Look ahead - Enabled",
      keybind: "No",
      description: "Look ahead sliders irrelevant, set to 0"
    },
    {
      action: "Turret - Look Ahead - Enabled",
      keybind: "No",
      description: "Same for driver"
    },
    {
      action: "Automatically Enable Target Padlock",
      keybind: "No",
      description: "Pilot/Driver/Turret"
    },
  ];

  const cameraSettings = [
    {
      action: "Head Movement",
      keybind: "0",
      description: "G-force induced"
    },
    {
      action: "Afterburner Zoom",
      keybind: "0",
      description: ""
    },
    {
      action: "Global Camera shake",
      keybind: "0",
      description: ""
    },
    {
      action: "Vehicle Weapon Recoil Scale",
      keybind: "0",
      description: ""
    },
  ];

  const audioSettings = [
    {
      action: "Ship Computer Verbosity",
      keybind: "Full",
      description: ""
    },
    {
      action: "Audio Driven Camera Shake Strength",
      keybind: "0",
      description: ""
    },
  ];

  const flightReadyBinds = [
    {
      action: "Gunnery UI Magnification Off",
      keybind: "",
      description: "Vehicles - Weapons"
    },
    {
      action: "Staggered Fire Off",
      keybind: "",
      description: "Vehicles - Weapons"
    },
    {
      action: "Set Lead Pips",
      keybind: "",
      description: "Vehicles - Weapons"
    },
    {
      action: "PIP Precision Lines On",
      keybind: "",
      description: "Vehicles - Weapons"
    },
    {
      action: "PIP Fading Off",
      keybind: "",
      description: "Vehicles - Weapons"
    },
    {
      action: "Gimbal State - Set Fixed",
      keybind: "",
      description: "Vehicles - Weapons (Important)"
    },
    {
      action: "Auto Targeting - Toggle Off",
      keybind: "",
      description: "Vehicles - Targeting (Short Press)"
    },
    {
      action: "Cruise Mode - Disable",
      keybind: "",
      description: "Flight - Movement - Throttle"
    },
    {
      action: "Speed Limiter - Disable",
      keybind: "",
      description: "Flight - Movement"
    },
    {
      action: "Proximity Assist - Disable",
      keybind: "",
      description: "Flight - Movement - IFCS"
    },
    {
      action: "G-Force Safety off",
      keybind: "",
      description: "Flight - Movement"
    },
    {
      action: "Advanced HUD - Enable",
      keybind: "",
      description: "Flight - Movement"
    },
    {
      action: "Automatic Precision Mode - Disable",
      keybind: "",
      description: "Flight - Movement"
    },
  ];

  return (
    <>
      <PDFSection 
        title="Additional Keybinds and Game Settings" 
        subtitle="Optimized configuration for turret operations and multi-crew combat"
        level={1}
      >
        <PDFCallout type="info" title="Engine Configuration">
          Use the <strong>user.cfg</strong> file provided by Min for optimized engine configuration.
        </PDFCallout>

        <div className="my-8">
          <h3 className="text-xl font-medium text-white mb-4">Critical Keybinds</h3>
          <PDFTable
            title="Vehicles - Seats and Operator Modes"
            columns={[
              { header: 'Action', key: 'action', width: '30%' },
              { header: 'Keybind', key: 'keybind', width: '20%' },
              { header: 'Description', key: 'description', width: '50%' },
            ]}
            rows={lightAmplificationBinds}
          />
        </div>
      </PDFSection>

      <PDFSection title="General Settings" level={2}>
        <div className="space-y-2 mb-6">
          <h4 className="text-base font-medium text-white">Turn Off:</h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm ml-2">
            <li>Camera movement</li>
            <li>Vibration</li>
            <li>Camera Spring Movement</li>
          </ul>
        </div>

        <PDFTable
          title="Defaults - Flight"
          columns={[
            { header: 'Setting', key: 'action', width: '40%' },
            { header: 'Value', key: 'keybind', width: '15%' },
            { header: 'Notes', key: 'description', width: '45%' },
          ]}
          rows={flightDefaults}
        />

        <div className="my-6">
          <PDFCallout type="warning">
            <strong>Power Settings:</strong> Draw missing power from other... - <strong>No</strong>
          </PDFCallout>
        </div>

        <PDFTable
          title="Defaults - HUD"
          columns={[
            { header: 'Setting', key: 'action', width: '40%' },
            { header: 'Value', key: 'keybind', width: '15%' },
            { header: 'Notes', key: 'description', width: '45%' },
          ]}
          rows={hudSettings}
        />
      </PDFSection>

      <PDFSection title="Mouse and ESP Settings" level={2}>
        <PDFCallout type="info" title="ESP Changes">
          ESP is different now. Curve and Zone size are now combined. Mouse aim generally prefers 
          <strong> high strength, low curvature 0.05-0.2</strong>.
        </PDFCallout>

        <PDFTable
          title="Vjoy Settings"
          columns={[
            { header: 'Setting', key: 'action', width: '40%' },
            { header: 'Value', key: 'keybind', width: '20%' },
            { header: 'Notes', key: 'description', width: '40%' },
          ]}
          rows={vjoySettings}
        />
      </PDFSection>

      <PDFSection title="Weapon Settings" level={2}>
        <PDFTable
          title="Defaults - Weapons"
          columns={[
            { header: 'Setting', key: 'action', width: '40%' },
            { header: 'Value', key: 'keybind', width: '15%' },
            { header: 'Notes', key: 'description', width: '45%' },
          ]}
          rows={weaponDefaults}
        />
      </PDFSection>

      <PDFSection title="Targeting Settings" level={2}>
        <PDFTable
          title="Vehicles - Targeting"
          columns={[
            { header: 'Setting', key: 'action', width: '40%' },
            { header: 'Value', key: 'keybind', width: '15%' },
            { header: 'Notes', key: 'description', width: '45%' },
          ]}
          rows={targetingSettings}
        />
      </PDFSection>

      <PDFSection title="Camera and Visual Settings" level={2}>
        <PDFTable
          title="G-Force and Camera Effects"
          columns={[
            { header: 'Setting', key: 'action', width: '50%' },
            { header: 'Value', key: 'keybind', width: '15%' },
            { header: 'Notes', key: 'description', width: '35%' },
          ]}
          rows={cameraSettings}
        />

        <PDFTable
          title="Audio Settings"
          subtitle="Found in Audio tab at top of screen"
          columns={[
            { header: 'Setting', key: 'action', width: '50%' },
            { header: 'Value', key: 'keybind', width: '15%' },
            { header: 'Notes', key: 'description', width: '35%' },
          ]}
          rows={audioSettings}
        />
      </PDFSection>

      <PDFSection level={2}>
        <PDFCallout type="important" title="Flight Ready Bindings">
          You can optionally, although I <strong>highly recommend</strong> binding all of these to 
          'Flight Ready' or your own reset key in case of abnormal behavior.
        </PDFCallout>

        <PDFTable

          columns={[
            { header: 'Category', key: 'description', width: '60%' },
            { header: 'Action', key: 'action', width: '40%' },
          ]}
          rows={flightReadyBinds}
        />
      </PDFSection>
    </>
  );
}
