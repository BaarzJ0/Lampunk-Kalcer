import React from 'react';
import { useNavigate } from 'react-router-dom';

const regions = {
  'Lampung Utara': { title: 'Lampung Utara', color: '#3b82f6' },
  'Lampung Timur': { title: 'Lampung Timur', color: '#10b981' },
  'Lampung Selatan': { title: 'Lampung Selatan', color: '#fbbf24' },
  'Lampung Barat': { title: 'Lampung Barat', color: '#a78bfa' },
  'Lampung Tengah': { title: 'Lampung Tengah', color: '#ef4444' }
};

const regionPositions = {
  'Lampung Tengah': { left: '68%', top: '53%', rotate: '0deg', label: 'LAMPUNG TENGAH' },
  'Lampung Utara': { left: '50%', top: '50%', rotate: '-33deg', label: 'LAMPUNG UTARA' },
  'Lampung Selatan': { left: '78%', top: '74%', rotate: '39deg', label: 'LAMPUNG SELATAN' },
  'Lampung Barat': { left: '30%', top: '58%', rotate: '17deg', label: 'LAMPUNG BARAT' },
  'Lampung Timur': { left: '85%', top: '60%', rotate: '0deg', label: 'LAMPUNG TIMUR' }
};

const SimpleInteractiveMapResponsive = () => {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', padding: '0 16px', fontFamily: "'Marcellus', serif" }}>

      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '1/1',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        {/* Map Image */}
        <img
          src="/map-lampung.png" // Ganti dengan path gambar map Lampung kamu
          alt="Map Lampung"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            userSelect: 'none',
            pointerEvents: 'none'
          }}
          draggable={false}
        />

        {/* Labels and clickable areas */}
        {Object.entries(regionPositions).map(([key, pos]) => (
          <div
            key={key}
            onClick={() => navigate(`/region/${key.replace(/\s/g, '-').toLowerCase()}`)}
            title={`Klik untuk info ${key}`}
            style={{
              position: 'absolute',
              left: pos.left,
              top: pos.top,
              transform: `translate(-50%, -50%) rotate(${pos.rotate})`,
              cursor: 'pointer',
              userSelect: 'none',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: 100,
              pointerEvents: 'auto'
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: regions[key].color,
                boxShadow: `0 0 10px ${regions[key].color}`,
                transition: 'background-color 0.3s',
                marginBottom: 6
              }}
              className="hover:opacity-80"
            />
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: '#7b1919',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                pointerEvents: 'none'
              }}
            >
              {pos.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleInteractiveMapResponsive;
