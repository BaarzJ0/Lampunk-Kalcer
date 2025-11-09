import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const SearchResults = () => {
  const query = useQuery();
  const q = query.get('q') || '';
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!q.trim()) {
      setResults([]);
      return;
    }

    let mounted = true;
    const fetchAndFilter = async () => {
      setLoading(true);
      setError(null);
      try {
        // For now, search only news as a first step
        const res = await axios.get('http://127.0.0.1:8000/api/news');
        const items = (res.data && (res.data.data || res.data)) || [];
        const term = q.toLowerCase();
        const filtered = items.filter((it) => {
          const title = (it.title || '').toLowerCase();
          const content = (it.content || '').toLowerCase();
          return title.includes(term) || content.includes(term);
        });
        if (mounted) setResults(filtered);
      } catch (err) {
        console.error('Search error:', err);
        if (mounted) setError('Gagal mengambil data. Pastikan backend berjalan.');
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchAndFilter();
    return () => { mounted = false };
  }, [q]);

  return (
    <div style={{ minHeight: '70vh', padding: '40px', fontFamily: 'Cinzel, serif' }}>
      <h2 style={{ marginBottom: 20 }}>{`Hasil Pencarian untuk "${q}"`}</h2>

      {loading && <p>Memuat hasil...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <div>
          {results.length === 0 ? (
            <p>Tidak ada hasil yang cocok.</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {results.map((r) => (
                <li key={r.id} style={{ background: '#fff', padding: 16, marginBottom: 12, borderRadius: 8, boxShadow: '0 2px 6px rgba(0,0,0,0.06)'}}>
                  <h3 style={{ margin: 0 }}>{r.title}</h3>
                  <p style={{ margin: '6px 0', color: '#666', fontSize: 14 }}>{r.created_at ? new Date(r.created_at).toLocaleDateString('id-ID') : ''}</p>
                  <p style={{ margin: '6px 0', color: '#333' }}>{(r.content || '').slice(0, 220)}{(r.content || '').length > 220 ? '...' : ''}</p>
                  <div style={{ marginTop: 8 }}>
                    {/* If you have a berita detail route, link to it here. For now link to /berita */}
                    <Link to="/berita" style={{ color: '#bfa046', textDecoration: 'none', fontWeight: '600' }}>Baca selengkapnya</Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
