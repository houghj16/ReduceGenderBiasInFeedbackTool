using System.ComponentModel.DataAnnotations;

namespace ReduceGenderBiasInFeedbackTool.Models;

public class Feedback
{
    public int Id { get; set; }

    [Required]
    public string? Body { get; set; }

    // public List<string>? BiasedWords { get; set; }
    public bool HasBeenChecked { get; set; }

    [Range(-10, 10)]
    public int Score { get; set; }
}