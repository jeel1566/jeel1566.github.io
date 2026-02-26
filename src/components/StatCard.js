// Component 3: StatCard
// Concepts: props (number, label, highlight)
function StatCard({ number, label, highlight = false }) {
    return (
        <div className="stat-card">
            <span className={`stat-card-number ${highlight ? 'highlight' : ''}`}>
                {number}
            </span>
            <span className="stat-card-label">{label}</span>
        </div>
    );
}

export default StatCard;
