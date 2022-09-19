using System.ComponentModel.DataAnnotations;

namespace ReduceGenderBiasInFeedbackTool.Models;

public class Feedback
{
    public int Id { get; set; }

    public string? Body1 { get; set; }

    public string? Body2 { get; set; }

    public string? Body3 { get; set; }

    public string? Body4 { get; set; }

    public string? Body5 { get; set; }

    public string? Body6 { get; set; }

    // public List<string>? BiasedWords { get; set; }
    public bool HasBeenChecked { get; set; }

    [Range(-10, 10)]
    public int Score { get; set; }

    public void OnPost()
    {
        Body1 = "Form Posted";
    }
}