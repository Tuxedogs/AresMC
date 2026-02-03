interface KeybindingRow {
  action: string;
  keybind?: string;
  description?: string;
}

interface PDFTableProps {
  title?: string;
  subtitle?: string;
  columns: { header: string; key: keyof KeybindingRow; width?: string }[];
  rows: KeybindingRow[];
}

export function PDFTable({ title, subtitle, columns, rows }: PDFTableProps) {
  return (
    <div className="my-8">
      {title && (
        <div className="mb-4">
          <h4 className="text-lg font-medium text-white mb-1">{title}</h4>
          {subtitle && (
            <p className="text-sm text-gray-400">{subtitle}</p>
          )}
        </div>
      )}
      
      <div className="border border-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-900/50 border-b border-gray-800">
              {columns.map((col, idx) => (
                <th 
                  key={idx}
                  className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider"
                  style={{ width: col.width }}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr 
                key={index} 
                className="border-b border-gray-800/50 last:border-0 hover:bg-gray-900/30 transition-colors"
              >
                {columns.map((col, colIdx) => (
                  <td key={colIdx} className="py-3 px-4 text-sm">
                    {col.key === 'keybind' && row[col.key] ? (
                      <kbd className="inline-block px-2.5 py-1 bg-gray-900 border border-gray-700 rounded text-indigo-300 font-mono text-xs">
                        {row[col.key]}
                      </kbd>
                    ) : row[col.key] ? (
                      <span className={col.key === 'action' ? 'text-white font-medium' : 'text-gray-300'}>
                        {row[col.key]}
                      </span>
                    ) : (
                      <span className="text-gray-600">—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
