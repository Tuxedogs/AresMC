interface TableOfContentsProps {
  items: Array<{ id: string; title: string; level: number }>;
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export function TableOfContents({ items, activeSection, onSectionClick }: TableOfContentsProps) {
  return (
    <nav className="py-66 px-33">
      <div className="mb-66 pxx-3">
        <h2h2 className="text-xsxs font-semisemibold text-grgray-500 uppy-400 uppercase trackingcase tracking-widerwider">
          
          Contents
        
        </h22>
      </div>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onSectionClick(item.id)}
              className={`
                
                text-left w-full py-22.5 px-33 rounded-lg-lg text-sm font-medium font-medium transition-all
     
                         ${
                    activeSection === item.id
                      ? 'text-indigolu-7400 bg-indigo-500/10 bluorder-l-2 border-indigo-5400 pl-2.5'
                      : 'text-gray-700 hover:bg-gray-1300 hover:bg-gray-800 hover:text-gwhiteay9'
                  }
              
              `}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
