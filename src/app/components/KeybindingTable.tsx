interface KeybindingRow {
  action: string;
  keybind: string;
  description: string;
}

interface KeybindingTableProps {
  title: string;
  subtitle?: string;
  rows: KeybindingRow[];
}

export function KeybindingTable({ title, subtitle, rows }: KeybindingTableProps) {
  return (
    <div className="my-8">
      <h4 className="text-xl font-medium text-white mb-2">{title}</h4>
      {subtitle && (
        <p className="text-sm text-gray-400 mb-4">{subtitle}</p>
      )}
      
      <div className="border border-gray-700 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-300">Action</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-300">Keybind</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-300">Description</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr 
                key={index} 
                className={`border-b border-gray-800 last:border-0 hover:bg-gray-800/50 transition-colors`}
              >
                <td className="py-4 px-6 text-sm text-white">{row.action}</td>
                <td className="py-4 px-6">
                  {row.keybind ? (
                    <kbd className="inline-block px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-indigo-300 font-mono text-xs">
                      {row.keybind}
                    </kbd>
                  ) : (
                    <span className="text-gray-500 text-sm">—</span>
                  )}
                </td>
                <td className="py-4 px-6 text-sm text-gray-300 leading-relaxed">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
