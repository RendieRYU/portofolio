'use client';

import CursorEffects from "./CursorEffects";
import ScrollEffects from "./ScrollEffects";
import PerformanceToggle from "./PerformanceToggle";

export default function ClientEffects() {
  return (
    <>
      <CursorEffects />
      <ScrollEffects />
      <PerformanceToggle />
    </>
  );
}
