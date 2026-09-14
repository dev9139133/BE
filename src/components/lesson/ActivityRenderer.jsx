import GoalBlock from './activities/GoalBlock.jsx';
import ExplanationBlock from './activities/ExplanationBlock.jsx';
import VideoBlock from './activities/VideoBlock.jsx';
import VocabularyBlock from './activities/VocabularyBlock.jsx';
import ReadingBlock from './activities/ReadingBlock.jsx';
import McqQuizBlock from './activities/McqQuizBlock.jsx';
import SummaryBlock from './activities/SummaryBlock.jsx';

/**
 * Maps an activity's `type` to its renderer component.
 * To add a new activity type: write the component, register it here.
 * No lesson page, route, or other component needs to change.
 */
const ACTIVITY_COMPONENTS = {
  goal: GoalBlock,
  explanation: ExplanationBlock,
  video: VideoBlock,
  vocabulary: VocabularyBlock,
  reading: ReadingBlock,
  mcqQuiz: McqQuizBlock,
  summary: SummaryBlock,
};

export default function ActivityRenderer({ activity }) {
  const Component = ACTIVITY_COMPONENTS[activity.type];

  if (!Component) {
    // Fails loudly in dev rather than silently dropping content —
    // signals a missing renderer for a new activity type.
    return (
      <div className="rounded-card border border-dashed border-redpen/40 bg-redpen-light p-4 font-body text-sm text-redpen">
        Unknown activity type: "{activity.type}"
      </div>
    );
  }

  return <Component content={activity.content} />;
}
