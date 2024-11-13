'use client';

import { memo, useCallback, SetStateAction } from 'react';
import { Button, ButtonProps } from '@/components/button';
import { Grid, List } from 'lucide-react';

interface ViewModeProps {
  viewMode: 'grid' | 'list';
  setViewMode: (value: SetStateAction<'grid' | 'list'>) => void;
}

export const ViewMode = memo(function ViewMode({
  viewMode,
  setViewMode,
}: ViewModeProps) {
  const getButtonProps = useCallback(
    (mode: 'grid' | 'list'): Partial<ButtonProps> => ({
      bg_color: viewMode === mode ? 'custom' : 'gray',
      className: viewMode === mode ? 'bg-white' : '',
      sizeLevel: 'icon',
      onClick: () => setViewMode(mode),
    }),
    [setViewMode, viewMode],
  );

  return (
    <div className="flex gap-2">
      <Button {...getButtonProps('grid')}>
        <Grid size={20} />
      </Button>
      <Button {...getButtonProps('list')}>
        <List size={20} />
      </Button>
    </div>
  );
});
