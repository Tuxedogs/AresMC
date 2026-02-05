import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import type { ChapterMeta } from '@/app/content/chapters';

type TOCProps = {
  items: ChapterMeta[];
  currentPath: string;
  onNavigate: (path: string) => void;
  compact?: boolean;
};

function TOCItem({
  item,
  currentPath,
  onNavigate,
  level = 0,
}: {
  item: ChapterMeta;
  currentPath: string;
  onNavigate: (p: string) => void;
  level?: number;
}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const isActive = currentPath === item.path;
  const hasChildren = item.children && item.children.length > 0;
  const isNested = level > 0;

  return (
    <li>
      <div className="flex items-center gap-1" style={{ marginLeft: `${level * 16}px` }}>
        {hasChildren && (
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:bg-gray-800 rounded transition-colors flex-shrink-0"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            <ChevronRight
              className={`w-4 h-4 text-gray-500 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
            />
          </button>
        )}
        {!hasChildren && <div className="w-6 flex-shrink-0" />}

        <button
          type="button"
          onClick={() => onNavigate(item.path)}
          aria-current={isActive ? 'page' : undefined}
          className={`flex-1 text-left py-2 px-2 rounded transition-colors ${
            isActive
              ? 'bg-indigo-600 text-white font-medium'
              : isNested
                ? 'text-gray-400 text-sm hover:bg-gray-800 hover:text-gray-200'
                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
          }`}
        >
          <span>{item.title}</span>
        </button>
      </div>

      {hasChildren && isExpanded && (
        <ul className="mt-1 space-y-1">
          {item.children.map((c) => (
            <TOCItem key={c.id} item={c} currentPath={currentPath} onNavigate={onNavigate} level={(level || 0) + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

export function TOC({ items, currentPath, onNavigate }: TOCProps) {
  return (
    <nav aria-label="Table of contents" className="w-full">
      <ul className="space-y-1">
        {items.map((it) => (
          <TOCItem key={it.id} item={it} currentPath={currentPath} onNavigate={onNavigate} />
        ))}
      </ul>
    </nav>
  );
}
