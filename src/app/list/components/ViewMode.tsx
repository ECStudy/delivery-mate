import { SetStateAction } from 'react';
import { Button } from '@/components/button';
import { Grid, List } from 'lucide-react';

interface ViewModeProps {
  viewMode: 'grid' | 'list';
  setViewMode: (value: SetStateAction<'grid' | 'list'>) => void;
}

export const ViewMode = function ViewMode({
  viewMode,
  setViewMode,
}: ViewModeProps) {
  return (
    <div className="flex gap-2">
      <Button
        bg_color={viewMode === 'grid' ? 'custom' : 'gray'}
        sizeLevel="icon"
        onClick={() => setViewMode('grid')}
        className={viewMode === 'grid' ? 'bg-white' : ''}
      >
        <Grid size={20} />
      </Button>
      <Button
        bg_color={viewMode === 'list' ? 'custom' : 'gray'}
        sizeLevel="icon"
        onClick={() => setViewMode('list')}
        className={viewMode === 'list' ? 'bg-white' : ''}
      >
        <List size={20} />
      </Button>
    </div>
  );
};
