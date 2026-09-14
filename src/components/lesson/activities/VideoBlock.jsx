export default function VideoBlock({ content }) {
  return (
    <div>
      <div className="overflow-hidden rounded-card border border-ink/10 bg-ink">
        <div className="relative aspect-video">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${content.youtubeId}`}
            title={content.caption ?? 'Lesson video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
      {content.caption && (
        <p className="mt-2 font-body text-sm text-ink-faint">{content.caption}</p>
      )}
    </div>
  );
}
