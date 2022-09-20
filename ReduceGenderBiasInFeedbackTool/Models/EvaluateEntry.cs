using ReduceGenderBiasInFeedbackTool.Data;
using System.Collections.Generic;

namespace ReduceGenderBiasInFeedbackTool.Models
{
    public class EvaluateEntry
    {
        public static Score CompareWordsAndGetScore(string text) 
        {
            int feminineScore = 0;
            int masculineScore = 0;
            string[] parsedRawText = text.ToLower().Split(' ', ',', '.', '!', '?', '/', '-');
            HashSet<string> feminineWordsInText = new HashSet<string>();
            HashSet<string> masculineWordsInText = new HashSet<string>();

            // Iterate through feminine/masculine-coded word set
            foreach (string codedWord in WordList.feminine_coded_words)
            {
                foreach (var word in parsedRawText)
                {
                    if (word.Contains(codedWord))
                    {
                        feminineScore++;
                        feminineWordsInText.Add(word);
                    }
                }
               
            }

            foreach (string codedWord in WordList.masculine_coded_words)
            {
                foreach (var word in parsedRawText)
                {
                    if (word.Contains(codedWord))
                    {
                        masculineScore++;
                        masculineWordsInText.Add(word);
                    }
                }

            }

            return new Score(feminineScore, masculineScore, feminineWordsInText, masculineWordsInText);
        }
    }
}
