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
            string ret = "We have detected potentially biased text in your feedback. Please take a second look.\n";
            ret += $"{masculineScore} masculine coded words detected: {string.Join(", ", masculineWords)}\n";
            ret += $"{feminineScore} feminine coded words detected: {string.Join(", ", feminineWords)}\n";
            return ret;

        }
    }
}
