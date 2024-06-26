/**
 *
 * Legend
 *
 */
import * as React from 'react';
import '../main.css';

import { ConnectedLegendProps } from '@wprdc-types/connections';
import { _useMapControl as useMapControl } from 'react-map-gl';

import styles from './Legend.module.css';

export const Legend: React.FC<ConnectedLegendProps> = ({
  title,
  toolboxes,
  children,
}) => {
  const { containerRef } = useMapControl({
    captureScroll: true,
    captureDrag: true,
    captureClick: true,
    captureDoubleClick: true,
    capturePointerMove: true,
  });

  return (
    <div ref={containerRef} className={styles.container}>
      {!!title && <div className={styles.title}>{title}</div>}
      {!!toolboxes && toolboxes.map((tb) => tb.legendSection)}
      {children}
    </div>
  );
};

Legend.defaultProps = {
  title: 'Legend',
};
