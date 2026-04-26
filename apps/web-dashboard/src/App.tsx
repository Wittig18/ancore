import { useMemo, useState } from 'react';

import { AccountOverviewGrid } from './widgets/AccountOverviewGrid';

export function App() {
  const [publicKey, setPublicKey] = useState('GCFX...WALLET');

  const normalizedKey = useMemo(() => publicKey.trim(), [publicKey]);

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui, Segoe UI, Arial' }}>
      <h1 style={{ margin: 0, fontSize: 24 }}>Ancore Web Dashboard</h1>
      <p style={{ marginTop: 8, color: '#556' }}>
        Minimal shell app for building and validating dashboard widgets.
      </p>

      <label style={{ display: 'block', marginTop: 16, marginBottom: 8, fontWeight: 600 }}>
        Account public key
      </label>
      <input
        value={publicKey}
        onChange={(e) => setPublicKey(e.target.value)}
        placeholder="G..."
        style={{
          width: 'min(720px, 100%)',
          padding: '10px 12px',
          borderRadius: 8,
          border: '1px solid #cdd',
        }}
      />

      <div style={{ marginTop: 18 }}>
        <AccountOverviewGrid publicKey={normalizedKey} />
      </div>
    </div>
  );
}
