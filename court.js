import React, { useState } from 'react';

const initialCourt = [null, null, null, null];
const initialBench = [
  { id: 'p5', name: 'Maria' },
  { id: 'p6', name: 'John' },
  { id: 'p7', name: 'Nikos' },
];

export default function TennisCourtUI() {
  const [court, setCourt] = useState(initialCourt);
  const [bench, setBench] = useState(initialBench);
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 2000);
  };

  const joinCourt = (player) => {
    const emptyIndex = court.findIndex(slot => slot === null);
    if (emptyIndex !== -1) {
      const newCourt = [...court];
      newCourt[emptyIndex] = player;
      setCourt(newCourt);
      const newBench = bench.filter(b => b.id !== player.id);
      setBench(newBench);
      showToast('success', `${player.name} joined the court!`);
    } else {
      showToast('info', `Court is full. ${player.name} added to bench.`);
    }
  };

  const leaveCourt = (index) => {
    const leavingPlayer = court[index];
    if (!leavingPlayer) return;
    const newCourt = [...court];
    newCourt[index] = null;
    setCourt(newCourt);
    const newBench = [...bench, leavingPlayer];
    setBench(newBench);
    showToast('error', `${leavingPlayer.name} left the court!`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎾 Tennis Court Manager</h1>
      
      <div style={styles.courtContainer}>
        <svg width="360" height="780" viewBox="0 0 360 780" style={styles.courtSvg}>
          <defs>
            {/* Net pattern */}
            <pattern id="netPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="10" height="10" fill="none" stroke="#333" strokeWidth="0.8"/>
            </pattern>
            
            {/* Net gradient for depth */}
            <linearGradient id="netGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#1a1a1a', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#000', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          
          {/* Court surface */}
          <rect x="30" y="30" width="300" height="720" fill="#2E7D32" stroke="#1565C0" strokeWidth="4"/>
          
          {/* Doubles sidelines (outer boundary) */}
          <rect x="30" y="30" width="300" height="720" fill="none" stroke="#fff" strokeWidth="3"/>
          
          {/* Singles sidelines */}
          <line x1="75" y1="30" x2="75" y2="750" stroke="#fff" strokeWidth="2.5"/>
          <line x1="285" y1="30" x2="285" y2="750" stroke="#fff" strokeWidth="2.5"/>
          
          {/* Baseline - Top */}
          <line x1="30" y1="30" x2="330" y2="30" stroke="#fff" strokeWidth="3"/>
          
          {/* Baseline - Bottom */}
          <line x1="30" y1="750" x2="330" y2="750" stroke="#fff" strokeWidth="3"/>
          
          {/* Service line - Top half */}
          <line x1="30" y1="246" x2="330" y2="246" stroke="#fff" strokeWidth="2.5"/>
          
          {/* Service line - Bottom half */}
          <line x1="30" y1="534" x2="330" y2="534" stroke="#fff" strokeWidth="2.5"/>
          
          {/* Center service line - Top half */}
          <line x1="180" y1="246" x2="180" y2="390" stroke="#fff" strokeWidth="2"/>
          
          {/* Center service line - Bottom half */}
          <line x1="180" y1="390" x2="180" y2="534" stroke="#fff" strokeWidth="2"/>
          
          {/* Center mark - Top baseline */}
          <line x1="180" y1="30" x2="180" y2="50" stroke="#fff" strokeWidth="2"/>
          
          {/* Center mark - Bottom baseline */}
          <line x1="180" y1="730" x2="180" y2="750" stroke="#fff" strokeWidth="2"/>
          
          {/* NET AREA */}
          {/* Net shadow */}
          <rect x="25" y="388" width="310" height="8" fill="rgba(0,0,0,0.4)" />
          
          {/* Net white band (top of net) */}
          <rect x="30" y="385" width="300" height="5" fill="#fff" />
          
          {/* Net mesh */}
          <rect x="30" y="340" width="300" height="50" fill="url(#netPattern)" opacity="0.8"/>
          
          {/* Net posts */}
          <rect x="18" y="335" width="8" height="60" fill="#444" stroke="#222" strokeWidth="1" rx="2"/>
          <rect x="334" y="335" width="8" height="60" fill="#444" stroke="#222" strokeWidth="1" rx="2"/>
          
          {/* Net post caps */}
          <circle cx="22" cy="335" r="5" fill="#666"/>
          <circle cx="338" cy="335" r="5" fill="#666"/>
          
          {/* Net cables/support */}
          <line x1="30" y1="340" x2="330" y2="340" stroke="#000" strokeWidth="2"/>
          <line x1="30" y1="390" x2="330" y2="390" stroke="#000" strokeWidth="2"/>
          
          {/* Player slots */}
          {/* Top Left (Near side, left) */}
          <g onClick={() => leaveCourt(0)} style={{ cursor: 'pointer' }}>
            <circle cx="115" cy="630" r="40" 
                    fill={court[0] ? '#FFB74D' : 'rgba(255,255,255,0.2)'} 
                    stroke="#fff" strokeWidth="3" 
                    style={{transition: 'all 0.2s'}}/>
            <text x="115" y="638" textAnchor="middle" fill="#000" fontSize="16" fontWeight="bold">
              {court[0] ? court[0].name : 'Empty'}
            </text>
          </g>
          
          {/* Top Right (Near side, right) */}
          <g onClick={() => leaveCourt(1)} style={{ cursor: 'pointer' }}>
            <circle cx="245" cy="630" r="40" 
                    fill={court[1] ? '#FFB74D' : 'rgba(255,255,255,0.2)'} 
                    stroke="#fff" strokeWidth="3"
                    style={{transition: 'all 0.2s'}}/>
            <text x="245" y="638" textAnchor="middle" fill="#000" fontSize="16" fontWeight="bold">
              {court[1] ? court[1].name : 'Empty'}
            </text>
          </g>
          
          {/* Bottom Left (Far side, left) */}
          <g onClick={() => leaveCourt(2)} style={{ cursor: 'pointer' }}>
            <circle cx="115" cy="150" r="40" 
                    fill={court[2] ? '#FFB74D' : 'rgba(255,255,255,0.2)'} 
                    stroke="#fff" strokeWidth="3"
                    style={{transition: 'all 0.2s'}}/>
            <text x="115" y="158" textAnchor="middle" fill="#000" fontSize="16" fontWeight="bold">
              {court[2] ? court[2].name : 'Empty'}
            </text>
          </g>
          
          {/* Bottom Right (Far side, right) */}
          <g onClick={() => leaveCourt(3)} style={{ cursor: 'pointer' }}>
            <circle cx="245" cy="150" r="40" 
                    fill={court[3] ? '#FFB74D' : 'rgba(255,255,255,0.2)'} 
                    stroke="#fff" strokeWidth="3"
                    style={{transition: 'all 0.2s'}}/>
            <text x="245" y="158" textAnchor="middle" fill="#000" fontSize="16" fontWeight="bold">
              {court[3] ? court[3].name : 'Empty'}
            </text>
          </g>
        </svg>
      </div>

      <h2 style={styles.subtitle}>🏟 Waiting Bench</h2>
      
      <div style={styles.benchContainer}>
        {bench.length === 0 ? (
          <p style={styles.emptyBench}>No players waiting</p>
        ) : (
          bench.map((item) => (
            <button
              key={item.id}
              style={styles.benchSlot}
              onClick={() => joinCourt(item)}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <span style={styles.benchText}>{item.name}</span>
            </button>
          ))
        )}
      </div>

      {toast && (
        <div style={{
          ...styles.toast,
          backgroundColor: 
            toast.type === 'success' ? '#4CAF50' :
            toast.type === 'error' ? '#f44336' : '#2196F3'
        }}>
          {toast.message}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '30px',
    paddingBottom: '50px',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    backgroundColor: '#1a1a1a',
    color: '#fff',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    margin: '10px 0 20px 0',
    color: '#FFD700',
  },
  subtitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    margin: '20px 0 10px 0',
    color: '#FFD700',
  },
  courtContainer: {
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#2a2a2a',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.5)',
  },
  courtSvg: {
    display: 'block',
    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
  },
  benchContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
    marginTop: '10px',
    padding: '20px',
    backgroundColor: '#2a2a2a',
    borderRadius: '12px',
    minHeight: '100px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  benchSlot: {
    width: '90px',
    height: '90px',
    backgroundColor: '#757575',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '45px',
    border: '3px solid #fff',
    cursor: 'pointer',
    transition: 'all 0.2s',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  },
  benchText: {
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#fff',
  },
  emptyBench: {
    color: '#999',
    fontStyle: 'italic',
  },
  toast: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '15px 20px',
    color: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
    zIndex: 1000,
    fontWeight: 'bold',
  },
};