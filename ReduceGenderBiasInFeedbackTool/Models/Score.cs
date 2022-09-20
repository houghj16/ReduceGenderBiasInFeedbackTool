using System.Security.Cryptography.X509Certificates;

namespace ReduceGenderBiasInFeedbackTool.Models
{
    public class Score
    {
        public int feminineScore;
        public int masculineScore;

        public HashSet<string> feminineWords;
        public HashSet<string> masculineWords;

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
                ret += $"{masculineScore} masculine coded word(s) detected: {string.Join(", ", masculineWords)}\n";
            }
            if (feminineScore > 0)
            {
                ret += $"{feminineScore} feminine coded word(s) detected: {string.Join(", ", feminineWords)}\n";
            }
            return ret;

        }
    }
}
