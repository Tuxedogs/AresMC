import { PDFSection } from '@/app/components/PDFSection';
import { PDFCallout } from '@/app/components/PDFCallout';

export function CommunicationsPage() {
  return (
    <>
      <PDFSection title="Communications" subtitle="Recommended voice & channel structure" level={1}>
        <p>
          While discord is a good tool it can become chaotic when it's more than just a handful of people. I recommend 
          using a second source of comms like <span className="text-indigo-400 font-semibold">Teamspeak</span> or
          <span className="text-indigo-400 font-semibold"> SRS</span>. For TS, Tux has a dedicated server setup with a 
          hierarchy of channels to be used, whisper lists can be set on a client by client basis, allowing for high 
          levels of customization not just in separation but targeted voice communication to individuals or groups entirely.
        </p>

        <p>
          A good gunner and pilot pair or crew will have a lot of chatter so it's best to not clog up the channel that 
          the main group is in. This problem runs both ways, with a crew being unable to communicate whilst main group 
          comms are high traffic.
        </p>

        <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5 my-6">
          <h4 className="text-indigo-400 font-semibold mb-3 text-base">Communication Structure:</h4>
          
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-amber-400 font-semibold">Main Discord</p>
              <p className="pl-4">Command, Fighters, Else</p>
            </div>

            <div>
              <p className="text-amber-400 font-semibold">Teamspeak</p>
              <div className="pl-4 space-y-1">
                <p>Command - Retransmitting from Discord/Tasking Individually</p>
                <div className="pl-4">
                  <p>Pilot1 of MC</p>
                  <p className="pl-4">→ Crew</p>
                  <p>Pilot2 of MC</p>
                  <p className="pl-4">→ Crew</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm mt-4">
            This map ensures that Pilots of all 3 groups can filter communications, maintaining important information 
            from their command as well as the other MC pilots. Crews can remain in discord or mute it entirely while 
            still being able to communicate with their ship or the channels above them.
          </p>
        </div>

        <div className="bg-gray-900/50 border border-amber-900/30 rounded-lg p-5 my-6">
          <h4 className="text-amber-400 font-semibold mb-3 text-base">Teamspeak Server (WIP):</h4>
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-gray-400">Server:</span> 
              <code className="ml-2 px-2 py-1 bg-gray-800 text-indigo-300 rounded font-mono text-xs">ares.ny3.teamspeak.com</code>
            </p>
            <p>
              <span className="text-gray-400">Password:</span> 
              <code className="ml-2 px-2 py-1 bg-gray-800 text-indigo-300 rounded font-mono text-xs">quiettime</code>
            </p>
          </div>
          <p className="text-gray-400 text-xs mt-3 italic">
            Request Roles in the discord. If required immediately, you will have the ability to join an unlocked 
            channel and be dragged or assigned roles by any member of Legion or above.
          </p>
          <p className="text-gray-400 text-xs mt-2 italic">
            To connect, paste the teamspeak URL into the "Search/Connect" input field in the top left of the TS client, 
            then simply click on the URL to connect. Bookmarking the server follows a similar flow.
          </p>
        </div>

        <div className="bg-gray-900/50 border border-amber-900/30 rounded-lg p-5 my-6">
          <h4 className="text-amber-400 font-semibold mb-3 text-base">Public Star Citizen SRS:</h4>
          <a href="https://od3ica-srs.webflow.io/" target="_blank" rel="noopener noreferrer" 
             className="text-indigo-400 hover:text-indigo-300 underline text-sm">
            https://od3ica-srs.webflow.io/
          </a>
          
          <h4 className="text-amber-400 font-semibold mb-2 mt-4 text-base">SRS Website:</h4>
          <a href="https://dcssimpleradio.com/" target="_blank" rel="noopener noreferrer" 
             className="text-indigo-400 hover:text-indigo-300 underline text-sm">
            https://dcssimpleradio.com/
          </a>
        </div>
      </PDFSection>
    </>
  );
}
