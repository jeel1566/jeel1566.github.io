// Component 5: PhotoCard
// Concepts: props (tag, tagColor)
function PhotoCard({
    tag = 'Open to Collab',
    tagColor = '#32d74b',
    imgSrc,
    alt = 'Profile photo',
    style = {},
    imgStyle = {},
    children,
}) {
    return (
        <div className="photo-card" style={style}>
            {/* Photo area */}
            {imgSrc ? (
                <img src={imgSrc} alt={alt} className="photo-card-img" style={imgStyle} />
            ) : (
                <div className="photo-card-placeholder">
                    <div className="photo-card-placeholder-avatar">J</div>
                    <span>[ YOUR PHOTO ]</span>
                </div>
            )}

            {/* Overlay tag badge */}
            {tag && (
                <div className="photo-card-tag">
                    <span
                        className="photo-card-tag-dot"
                        style={{ background: tagColor }}
                    />
                    <span className="photo-card-tag-text" style={{ color: tagColor }}>
                        {tag}
                    </span>
                </div>
            )}

            {children}
        </div>
    );
}

export default PhotoCard;
