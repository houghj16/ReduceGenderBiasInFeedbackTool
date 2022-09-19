using ReduceGenderBiasInFeedbackTool.Data;

namespace ReduceGenderBiasInFeedbackTool.Models
{
    public class EvaluateEntry
    {
        public static HashSet<string> ParseRawText(string text) 
        {
            return text.Split(' ').ToHashSet<string>();
        }

        public static int CompareWordsAndGetScore(string text) 
        {
            int score = 0;
            HashSet<string> parsedRawText = ParseRawText(text);
            
            // Iterate through feminine/masculine-coded word set
            foreach (string codedWord in WordList.feminine_coded_words)
            {
                foreach (var word in parsedRawText)
                {
                    if (word.ToLower().Contains(codedWord))
                    {
                        score++;
                    }
                }
               
            }

            foreach (string codedWord in WordList.masculine_coded_words)
            {
                foreach (var word in parsedRawText)
                {
                    if (word.Contains(codedWord))
                    {
                        score++;
                    }
                }

            }

            return score;
        }
    }
}
