using System.Security.Cryptography.X509Certificates;

namespace ReduceGenderBiasInFeedbackTool.Models
{
    public class Score
    {
        public int feminineScore;
        public int masculineScore;

        public HashSet<string> feminineWords;
        public HashSet<string> masculineWords;

        public Score()
        {
            feminineScore = 0;
            masculineScore = 0;
            feminineWords = new HashSet<string>();
            masculineWords = new HashSet<string>();
        }

        public Score(int feminineScore, int masculineScore, HashSet<string> feminineWords, HashSet<string> masculineWords)
        {
            this.feminineScore = feminineScore;
            this.masculineScore = masculineScore;
            this.feminineWords = feminineWords;
            this.masculineWords = masculineWords;
        }
        public override string ToString()
        {
            if (masculineScore == 0 && feminineScore == 0)
            {
                return "We detected no biased words in your feedback! Great Job!";
            }
            string ret = "We have detected potentially biased text in your feedback. Please take a second look.\n";
            if (masculineScore > 0)
            {
                ret += $"{masculineWords.Count} masculine coded {(masculineWords.Count > 1 ? "words" : "word")} detected: {string.Join(", ", masculineWords)}. ";
            }
            if (feminineScore > 0)
            {
                ret += $"{feminineWords.Count} feminine coded {(feminineWords.Count > 1 ? "words" : "word")} detected: {string.Join(", ", feminineWords)}. ";
            }
            return ret;

        }
    }
}
