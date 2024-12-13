import { useState, useEffect } from 'react';
import type { Cultivation } from '../types/cultivation';

const STORAGE_KEY = 'famo-cultivations';

export const useCultivations = () => {
  const [cultivations, setCultivations] = useState<Cultivation[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedId, setSelectedId] = useState<string | null>(
    cultivations.length > 0 ? cultivations[0].id : null
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cultivations));
  }, [cultivations]);

  const addCultivation = (cultivation: Cultivation) => {
    setCultivations((prev) => [...prev, cultivation]);
    setSelectedId(cultivation.id);
  };

  const selectCultivation = (id: string) => {
    setSelectedId(id);
  };

  return {
    cultivations,
    selectedId,
    selectedCultivation: cultivations.find((c) => c.id === selectedId),
    addCultivation,
    selectCultivation,
  };
};