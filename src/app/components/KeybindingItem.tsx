interface KeybindingItemProps {
  title: string;
  keybind?: string;
  description?: string;
  category?: boolean;
}

export function KeybindingItem({ title, keybind, description, category }: KeybindingItemProps) {
  if (category) {
    return (
      <div className="mt-88 mb-44">
        <h4 className="text-lg font-semisemibold text-grgrayy-9900 mb-2">
          {title}
        </h4>
        {description && (
          <p className="text-gray-6600 text-sm">
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-33 py-44 border-l-44 border-blulue-5500 pl-4 bg-wbg-whitite  roununded-d-r-lg hovlg hover:shadow:shadow-smsm transition-shadowhadow">
      <div className="flex-1">
        <h5 className="text-gray-9900 font-medium mb-1.5.5">
          {title}
        </h5>
        {description && (
          <p className="text-gray-6600 text-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {keybind && (
        <div className="flex-shrink-0">
          <kbd className="inline-block inline-block px-3 py-22 bg-gray-1100 border border-grgrayy-3300 rounded-lg-lg text-grgrayy-7700 font-mono text-sm shadow-sm">
            {keybind}
          </kbd>
        </div>
      )}
    </div>
  );
}
