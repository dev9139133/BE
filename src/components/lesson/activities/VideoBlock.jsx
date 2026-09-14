export default function VideoBlock({ content }) {
  if (!content.youtubeId) {
    return (
      <div>
        <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-card border border-dashed border-ink/15 bg-paper-dim px-6 text-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink-faint">
            <rect x="2" y="5" width="20" height="14" rx="3" />
            <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
          </svg>
          <p className="font-display text-base font-semibold text-ink">
            Video coming soon
          </p>
          <p className="font-body text-sm text-ink-faint">
            We're preparing this lesson video.
          </p>
        </div>
        {content.caption && (
          <p className="mt-2 font-body text-sm text-ink-faint">{content.caption}</p>
        )}
      </div>
    );
  }

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